Vim�UnDo� �P�ު�n�~���N�sP��������Õر*�   �                                   Ug�     _�                              ����                                                                                                                                                                                                                                                                                                                                                             Ug�     �               m   """   2Throw a few server urls into our template context.       """    from django.conf import settings   %import django.core.context_processors       import globals as core_globals   'from ebapps.i18n import locale_defaults       ?from ebapps.search.models.search_location import SearchLocation   @from ebapps.search.models.utils import get_location_from_cookies       WELCOME_CHAR_LIMIT = 17           def media(request):   :    """Set MEDIA_URL to be 'https://...' for secure pages.   1       Note: We're using this function instead of   -       django.core.context_procesors.media().       """       if request.is_secure():           return {   0            'MEDIA_URL': settings.MEDIA_URL_SSL,   	        }   	    else:           return {   ,            'MEDIA_URL': settings.MEDIA_URL,   	        }            def whitelist_settings(request):       _settings = {}       _server_settings = (           'EBDOMAIN',           'EBSERVER',           'EB_WWW_SERVER',           'EB_ADMIN_SERVER',   #        'EB_WAITLIST_QUEUE_SERVER',   #        'EB_REGISTER_QUEUE_SERVER',           'EVENTIOZ_SERVER',           'IS_QA',           'SSL_CDN_URL',   $        'ENABLE_LANGUAGE_SELECTION',       )           for s in _server_settings:   /        _settings[s] = getattr(settings, s, '')       :    # Default the SSL server to EBSERVER if it's not there   (    _settings['SSL_EBSERVER'] = getattr(           settings,           'SSL_EBSERVER',           _settings['EBSERVER'],       )   /    _settings['IS_PROD'] = core_globals.gIsProd       "    for s in settings.SWITCH_KEYS:   /        _settings[s] = getattr(settings, s, '')       return _settings           !def welcome_user_string(request):           welcome_string = ''   J    if getattr(request, 'user', None) and request.user.is_authenticated():   "        limit = WELCOME_CHAR_LIMIT   "        email = request.user.email               if len(email) > limit:   3            welcome_string += email[:limit] + "..."           else:   #            welcome_string += email       return {   .        'welcome_user_string': welcome_string,       }       def user_location(request):   E    """Return the user's location for use in the global header search       C    If the user has changed their location, get it from the cookie,   !    otherwise, get it from the IP       @    If there still isn't a location string, default to Worldwide       """       "    location_obj = SearchLocation(           request=request,       )       -    location_str = location_obj.location_text       J    # If we are serving this request to Varnish, we don't want to location       # to be specific.   A    if not location_str or getattr(request, 'is_varnish', False):           location_str = ''           return {   &        'user_location': location_str,       }       def i18n(request):   ;    """Return i18n related context data for the request."""       ?    context_data = django.core.context_processors.i18n(request)       context_data['LOCALE'] = \   >        getattr(request, 'locale', locale_defaults.USLocale())           return context_data5��