Vim�UnDo� �p��*҉%��-Բ_�--�M��a�]D�s�  ,                                   [��{     _�                             ����                                                                                                                                                                                                                                                                                                                                                             [��     �                 from copy import deepcopy        from django.conf import settings   ,from django.utils.encoding import smart_text        from common import feature_flags   ,from common.soa.client import get_soa_client   0from common.views.react import ReactTemplateView   !from common.utils.schema import (       get_articles_schema,   "    get_destination_events_schema,       get_data_for_jsonld,   )   6from ebapps.i18n.translation import ugettext_lazy as _   (from ebapps.search.models.utils import (       get_browse_canonical_url,       location_relevance_to_tld,       get_canonical_search_url,   )   from ebapps.trending import (       WEEKLY,       TIMEFRAMES,   )   #from ebapps.trending.utils import (       get_trending_searches,       get_trending_search_path,   )   8from ebapps.trending.views import trending_search_cities   ?from ebapi.views.service_passthru import DestinationServiceView           def should_show_city_browse():   ?    return feature_flags.is_active(settings.ENABLE_CITY_BROWSE)           (class CityBrowseView(ReactTemplateView):   3    template_name = 'destination/search/index.html'       react_app = 'search'       ,    def get(self, request, *args, **kwargs):   5        # ANTIPATTERN Needed for indexing logic below   ;        # once dispatch_v2 is refactored, these should come           # in the kwargs   &        self.city = kwargs.get('city')   *        self.region = kwargs.get('region')   ,        self.country = kwargs.get('country')       H        return super(CityBrowseView, self).get(request, *args, **kwargs)       )    def get_context_data(self, **kwargs):   )        place_id = kwargs.get('place_id')       6        suggested_metros = self.get_suggested_metros()   ,        content = self.get_content(place_id)       !        city = kwargs.get('city')   %        region = kwargs.get('region')   (        buckets = content.get('buckets')   3        location_slug = kwargs.get('location_slug')   /        enrollments = kwargs.get('enrollments')   G        if (self.request.tld, location_slug) in trending_search_cities:   .            timeframe = TIMEFRAMES.get(WEEKLY)   \            trending_searches = get_trending_searches(location_slug, timeframe, page_size=4)       !            if trending_searches:   B                for index, search in enumerate(trending_searches):   "                    search.update(                           {   (                            'id': index,   h                            'search_path': get_trending_search_path(location_slug, search['formatted']),                           }                       )       ,                trending_searches_bucket = {   '                    'type': 'trending',   /                    'key': 'trending_searches',   3                    'name': _('Trending searches'),   4                    'template': 'trending_searches',   2                    'trending': trending_searches,                   }       6                trending_searches_index = len(buckets)   8                for index, bucket in enumerate(buckets):   =                    if bucket.get('key') == u'nearby_cities':   7                        trending_searches_index = index                           break       Q                buckets.insert(trending_searches_index, trending_searches_bucket)       ,        # avoid mutation of the content dict   o        meta_description, page_title, events_jsonld, articles = self.get_meta_data(deepcopy(content), **kwargs)       (        # Get experiment enrollment data   9        event_card_variant = category_page_variant = None   B        web_perf_improvements_variant = aggregation_variant = None           if enrollments:   X            event_card_variant = enrollments.get(settings.EXP_EB_87661_EVENT_CARDS_FREE)   Y            category_page_variant = enrollments.get(settings.EXP_EB_84401_CATEGORY_PAGES)   g            web_perf_improvements_variant = enrollments.get(settings.EXP_EB_88493_CB_PERF_IMPROVEMENTS)   W            aggregation_variant = enrollments.get(settings.EXP_EB_84220_LA_AGGREGATION)               context = {   )            # Params needed for ReactPage   *            'current_page': 'city_browse',               'city': city,               'region': region,   +            'location_slug': location_slug,               'buckets': buckets,   6            'description': content.get('description'),   0            'branding': content.get('branding'),   2            'search_id': content.get('search_id'),   *            'locations': suggested_metros,                'facebookOptions': {   2                'appId': settings.FACEBOOK_APP_ID,   "                'version': 'v2.8',                   'xfbml': True,               },       -            # Params needed for HTML template   F            'robots_index': self.should_index(content.get('buckets')),   6            'canonical_url': get_browse_canonical_url(                   city=self.city,   #                region=self.region,               ),   1            'meta_description': meta_description,                'title': page_title,               'jsonld': [   =                get_destination_events_schema(events_jsonld),   $                get_articles_schema(                       articles,   =                    content.get('place', {}).get('name', ''),   A                    content.get('place', {}).get('subtitle', ''),                   ),               ],   F            'http_referer': self.request.META.get('HTTP_REFERER', ''),               'experiments': {   2                'event_cards': event_card_variant,   O                'web_perf_improvements_variant': web_perf_improvements_variant,   E                'exp_eb_84401_category_pages': category_page_variant,   C                'exp_eb_81052_la_aggregation': aggregation_variant,               },               'guest_id': '',   	        }       1        if hasattr(self.request, 'guest_cookie'):   F            context['guest_id'] = self.request.guest_cookie.identifier       Q        if feature_flags.is_active(settings.ADD_ALL_EVENTS_TO_DIRECTORY_RESULTS):   w            context['all_events_url'] = self.get_all_events_url(self.request.locale.ssl_server, city, region, place_id)               return context       $    def get_content(self, place_id):   ,        endpoint = 'destination.city_browse'   O        data = DestinationServiceView.call_and_expand(self.request, endpoint, {   !            'place_id': place_id,   )            'expand.destination_event': [                    'primary_venue',   $                'primary_organizer',                   'image',   &                'ticket_availability',                   'saves',                   'series',               ],   &            'expand.branding_image': [                   'image',               ],   ,            'expand.branding_attribution': [                   'image',               ],               'expand.article': [                   'image',               ]   
        })               return data       #    def get_suggested_metros(self):   "        action_name = 'top_cities'   ;        client = get_soa_client('destination', caller=None)            application_context = {}       &        response = client.call_action(               action_name,               data={},   4            application_context=application_context,   B            switches=tuple(getattr(self.request, 'switches', ())),           ).to_dict()               return response       /    def get_meta_data(self, content, **kwargs):   d        meta_description = self.get_meta_description(kwargs.get('city'), content.get('description'))   U        page_title = _('%(city)s, %(region)s Events & Things To Do | Eventbrite') % {   '            'city': kwargs.get('city'),   *            'region': kwargs.get('region')   	        }   J        events_jsonld = self.get_schema_for_events(content.get('buckets'))   <        articles = self.get_articles(content.get('buckets'))       D        return meta_description, page_title, events_jsonld, articles       -    def get_schema_for_events(self, buckets):           events = []           for bucket in buckets:   -            if bucket.get('type') == 'event':   3                events.extend(bucket.get('events'))       =        return get_data_for_jsonld(self.request.user, events)       $    def get_articles(self, buckets):           articles = []           for bucket in buckets:   /            if bucket.get('type') == 'article':   7                articles.extend(bucket.get('articles'))               return articles       6    def get_meta_description(self, city, description):            return description or _(   ?            'Looking for something to do in %(city)s? Whether '   D            'you\'re a local, new in town or just cruising through '   A            'we\'ve got loads of great tips and events. You can '   C            'explore by location, what\'s popular, our top picks, '   0            'free stuff... you got this. Ready?'           ) % dict(city=city)       $    def should_index(self, buckets):   (        if self.request.GET.get('view'):               return False       )        if not location_relevance_to_tld(                self.request.locale,   &            getattr(self, 'city', ''),   )            getattr(self, 'country', ''),               {}   
        ):               return False               if len(buckets) < 2:               return False       6        # Below should only be uncommented and replace   ;        # above bucket count logic when EB-66502 is closed.       +        # If we have 5 or less events total   ,        # on the page do not index the page.           # event_count = 0            # for bucket in buckets:   /        #     if bucket.get('type') == 'event':   >        #         event_count += len(bucket.get('events', []))               # if event_count <= 2:           #     return False               return True       A    def get_all_events_url(self, domain, city, region, place_id):   (        path = get_canonical_search_url(   n            loc=u'{city}, {region}'.format(city=smart_text(city), region=smart_text(region)), cat='all-events'   	        )       h        return u'{domain}{path}?place_id={place_id}'.format(domain=domain, path=path, place_id=place_id)5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             [��z     �                 from copy import deepcopy        from django.conf import settings   ,from django.utils.encoding import smart_text        from common import feature_flags   ,from common.soa.client import get_soa_client   0from common.views.react import ReactTemplateView   !from common.utils.schema import (       get_articles_schema,   "    get_destination_events_schema,       get_data_for_jsonld,   )   6from ebapps.i18n.translation import ugettext_lazy as _   Dfrom ebapps.janus.helpers import ExperimentDjangoProxy as Experiment   (from ebapps.search.models.utils import (       get_browse_canonical_url,       location_relevance_to_tld,       get_canonical_search_url,   )   from ebapps.trending import (       WEEKLY,       TIMEFRAMES,   )   #from ebapps.trending.utils import (       get_trending_searches,       get_trending_search_path,   )   8from ebapps.trending.views import trending_search_cities   ?from ebapi.views.service_passthru import DestinationServiceView           def should_show_city_browse():   ?    return feature_flags.is_active(settings.ENABLE_CITY_BROWSE)           (class CityBrowseView(ReactTemplateView):   3    template_name = 'destination/search/index.html'       react_app = 'search'       ,    def get(self, request, *args, **kwargs):   5        # ANTIPATTERN Needed for indexing logic below   ;        # once dispatch_v2 is refactored, these should come           # in the kwargs   &        self.city = kwargs.get('city')   *        self.region = kwargs.get('region')   ,        self.country = kwargs.get('country')       H        return super(CityBrowseView, self).get(request, *args, **kwargs)       )    def get_context_data(self, **kwargs):   )        place_id = kwargs.get('place_id')       6        suggested_metros = self.get_suggested_metros()   ,        content = self.get_content(place_id)       "        city = content.get('city')   %        region = kwargs.get('region')   (        buckets = content.get('buckets')   3        location_slug = kwargs.get('location_slug')   /        enrollments = kwargs.get('enrollments')   G        if (self.request.tld, location_slug) in trending_search_cities:   .            timeframe = TIMEFRAMES.get(WEEKLY)   \            trending_searches = get_trending_searches(location_slug, timeframe, page_size=4)       !            if trending_searches:   B                for index, search in enumerate(trending_searches):   "                    search.update(                           {   (                            'id': index,   g                            'search_path': get_trending_search_path(location_slug, search['formatted'])                            }                       )       ,                trending_searches_bucket = {   '                    'type': 'trending',   /                    'key': 'trending_searches',   3                    'name': _('Trending searches'),   4                    'template': 'trending_searches',   2                    'trending': trending_searches,                   }       6                trending_searches_index = len(buckets)   8                for index, bucket in enumerate(buckets):   =                    if bucket.get('key') == u'nearby_cities':   7                        trending_searches_index = index                           break       Q                buckets.insert(trending_searches_index, trending_searches_bucket)       ,        # avoid mutation of the content dict   o        meta_description, page_title, events_jsonld, articles = self.get_meta_data(deepcopy(content), **kwargs)       (        # Get experiment enrollment data   P        event_card_variant = auto_tagging_variant = category_page_variant = None           if enrollments:   \            event_card_variant = enrollments.get(settings.EXP_EB_87661_EVENT_CARDS_FREE_TAG)   `            auto_tagging_variant = enrollments.get(settings.EXP_EB_85363_AUTO_GENERATED_TAGGING)   Y            category_page_variant = enrollments.get(settings.EXP_EB_84401_CATEGORY_PAGES)               context = {   )            # Params needed for ReactPage   *            'current_page': 'city_browse',               'city': city,               'region': region,   +            'location_slug': location_slug,               'buckets': buckets,   6            'description': content.get('description'),   0            'branding': content.get('branding'),   2            'search_id': content.get('search_id'),   *            'locations': suggested_metros,                'facebookOptions': {   2                'appId': settings.FACEBOOK_APP_ID,   "                'version': 'v2.8',                   'xfbml': True,               },               'featureFlags': {   r                'enableDestinationAutoTagging': feature_flags.is_active(settings.ENABLE_DESTINATION_AUTO_TAGGING),               },       -            # Params needed for HTML template   F            'robots_index': self.should_index(content.get('buckets')),   6            'canonical_url': get_browse_canonical_url(                   city=self.city,   #                region=self.region,               ),   1            'meta_description': meta_description,                'title': page_title,               'jsonld': [   =                get_destination_events_schema(events_jsonld),   $                get_articles_schema(                       articles,   =                    content.get('place', {}).get('name', ''),   A                    content.get('place', {}).get('subtitle', ''),                   ),               ],   F            'http_referer': self.request.META.get('HTTP_REFERER', ''),   A            'should_log_google_analytics_pageview_action': False,               'experiments': {   2                'event_cards': event_card_variant,   L                'exp_eb_85363_auto_generated_tagging': auto_tagging_variant,   E                'exp_eb_84401_category_pages': category_page_variant,               },   	        }       Q        if feature_flags.is_active(settings.ADD_ALL_EVENTS_TO_DIRECTORY_RESULTS):   w            context['all_events_url'] = self.get_all_events_url(self.request.locale.ssl_server, city, region, place_id)               return context       $    def get_content(self, place_id):   ,        endpoint = 'destination.city_browse'   3        if place_id == '85922583':  # san francisco   a            if Experiment(settings.EXP_EB_84953_CURATED_VS_ALGO_CITY_BROWSE).entity.is_enabled():   ]                # if the experiment is on then no matter the variant point to city_browse_exp   t                # NOTE: I'm cheating by directly accessing the entity's is_enabled method but it's justified in that   w                # it's temporary, no other code will be "infected" by this decision, and it greatly simplifies the code   .                # required for this experiment   8                endpoint = 'destination.city_browse_exp'   O        data = DestinationServiceView.call_and_expand(self.request, endpoint, {   !            'place_id': place_id,   )            'expand.destination_event': [                    'primary_venue',   $                'primary_organizer',                   'image',   &                'ticket_availability',                   'saves',                   'series',               ],   &            'expand.branding_image': [                   'image',               ],   ,            'expand.branding_attribution': [                   'image',               ],               'expand.article': [                   'image',               ]   
        })               return data       #    def get_suggested_metros(self):   "        action_name = 'top_cities'   ;        client = get_soa_client('destination', caller=None)            application_context = {}       &        response = client.call_action(               action_name,               data={},   4            application_context=application_context,   B            switches=tuple(getattr(self.request, 'switches', ())),           ).to_dict()               return response       /    def get_meta_data(self, content, **kwargs):   e        meta_description = self.get_meta_description(content.get('city'), content.get('description'))   U        page_title = _('%(city)s, %(region)s Events & Things To Do | Eventbrite') % {   (            'city': content.get('city'),   *            'region': kwargs.get('region')   	        }   J        events_jsonld = self.get_schema_for_events(content.get('buckets'))   <        articles = self.get_articles(content.get('buckets'))       D        return meta_description, page_title, events_jsonld, articles       -    def get_schema_for_events(self, buckets):           events = []           for bucket in buckets:   -            if bucket.get('type') == 'event':   3                events.extend(bucket.get('events'))       =        return get_data_for_jsonld(self.request.user, events)       $    def get_articles(self, buckets):           articles = []           for bucket in buckets:   /            if bucket.get('type') == 'article':   7                articles.extend(bucket.get('articles'))               return articles       6    def get_meta_description(self, city, description):            return description or _(   ?            'Looking for something to do in %(city)s? Whether '   D            'you\'re a local, new in town or just cruising through '   A            'we\'ve got loads of great tips and events. You can '   C            'explore by location, what\'s popular, our top picks, '   0            'free stuff... you got this. Ready?'           ) % dict(city=city)       $    def should_index(self, buckets):   (        if self.request.GET.get('view'):               return False       )        if not location_relevance_to_tld(                self.request.locale,   &            getattr(self, 'city', ''),   )            getattr(self, 'country', ''),               {}   
        ):               return False               if len(buckets) < 2:               return False       6        # Below should only be uncommented and replace   ;        # above bucket count logic when EB-66502 is closed.       +        # If we have 5 or less events total   ,        # on the page do not index the page.           # event_count = 0            # for bucket in buckets:   /        #     if bucket.get('type') == 'event':   >        #         event_count += len(bucket.get('events', []))               # if event_count <= 2:           #     return False               return True       A    def get_all_events_url(self, domain, city, region, place_id):   (        path = get_canonical_search_url(   n            loc=u'{city}, {region}'.format(city=smart_text(city), region=smart_text(region)), cat='all-events'   	        )       h        return u'{domain}{path}?place_id={place_id}'.format(domain=domain, path=path, place_id=place_id)5��