Vim�UnDo� �vm+���?���sM��q�&�7"�]iӌo�6�                                     Y�    _�                            ����                                                                                                                                                                                                                                                                                                                                                             Y�Z     �                   def get(self, request):5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Y�_     �               '                react_app='playground',5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Y�_    �                               react_app=,5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Y��     �                               react_app=app,5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Y��    �               -    def get(self, request, app='playground'):5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             Y��     �                   from django.conf import settings   from django.http import Http404   *from django.views.generic.base import View        from common import feature_flags   3from common.views.react import WebpackReactResponse            class ReactPlaygroundView(View):       """   J    Test view for playing around with React because it has no dependencies       """       2    def get(self, request, app_name='playground'):   >        if feature_flags.is_active(settings.REACT_PLAYGROUND):   (            return WebpackReactResponse(                    request=request,   #                react_app=app_name,   !                react_context={},   -                template='react/webpack.html'               )           else:               raise Http4045�_�                             ����                                                                                                                                                                                                                                                                                                                                                             Y�     �                   from django.conf import settings   from django.http import Http404   *from django.views.generic.base import View        from common import feature_flags   3from common.views.react import WebpackReactResponse            class ReactPlaygroundView(View):       """   J    Test view for playing around with React because it has no dependencies       """       2    def get(self, request, app_name='playground'):   >        if feature_flags.is_active(settings.REACT_PLAYGROUND):   (            return WebpackReactResponse(                    request=request,   #                react_app=app_name,   !                react_context={},   -                template='react/webpack.html'               )           else:               raise Http4045��