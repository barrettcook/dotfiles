Vim�UnDo� ��^Z��L� ��H$�Tp5�r2��S	3+   1   3          selected={this.selectedTab === 'profile'}   &         ;       ;   ;   ;    U�$�    _�                            ����                                                                                                                                                                                                                                                                                                                                                             U���     �         =      !var FeedApp = React.createClass({5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             U���     �         =       var eedApp = React.createClass({5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             U���     �         =      var edApp = React.createClass({5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             U���     �         =      var dApp = React.createClass({5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             U���     �         =      var App = React.createClass({5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       U���     �                4var FavoritesScreen = require('../FavoritesScreen');   2var CalendarScreen = require('../CalendarScreen');   0var ProfileScreen = require('../ProfileScreen');5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       U���     �   
      :      *var FeedScreen = require('../FeedScreen');5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                V       U���     �   
      :      *var ChatScreen = require('../FeedScreen');5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                            *                    V       U���     �                        <TabBarItem             title="Upcoming"             iconName="calendar"   %          selectedIconName="calendar"   :          selected={this.props.selectedTab === 'calendar'}   ;          onPress={() => this.props.changeTab('calendar')}>             <CalendarScreen />           </TabBarItem>           <TabBarItem             title="Favorites"             iconName="heart-o"   "          selectedIconName="heart"   U          badge={this.props.favoriteCount > 0 ? this.props.favoriteCount : undefined}   ;          selected={this.props.selectedTab === 'favorites'}   <          onPress={() => this.props.changeTab('favorites')}>             <FavoritesScreen />           </TabBarItem>5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                                                V       U���     �         )                title="Feed"5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                V       U���     �         )                 iconName="certificate"5�_�                       0    ����                                                                                                                                                                                                                                                                                                                                                V       U���     �         )      6          selected={this.props.selectedTab === 'feed'}5�_�                       /    ����                                                                                                                                                                                                                                                                                                                                                V       U���    �         )      7          onPress={() => this.props.changeTab('feed')}>5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       U���    �         )                iconName="users"5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                                V       U���     �   
      )    �   
      )    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        U���     �                4var FavoritesScreen = require('../FavoritesScreen');   2var CalendarScreen = require('../CalendarScreen');5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        U���    �         +      *var ChatScreen = require('../ChatScreen');5�_�                    +       ����                                                                                                                                                                                                                                                                                                                                                  V        U��"    �   *              module.exports = FeedApp;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        U��)    �         +                iconName="user"5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        U��.     �         +                <FeedScreen />5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        U��3     �         +      ,//var ChatScreen = require('../ChatScreen');5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        U��5    �   
             *var FeedScreen = require('../FeedScreen');5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        U��B    �         *      *var ChatScreen = require('../ChatScreen');5�_�                    !       ����                                                                                                                                                                                                                                                                                                                                       *           V        U�     �       "   *      0            appVersions={this.props.appVersions}5�_�                    !       ����                                                                                                                                                                                                                                                                                                                                       *           V        U�     �       "   *      (            app={this.props.appVersions}5�_�                    !        ����                                                                                                                                                                                                                                                                                                                                       *           V        U�     �       "   *      )            apps={this.props.appVersions}5�_�                    !        ����                                                                                                                                                                                                                                                                                                                                       *           V        U�    �       "   *      !            apps={this.props.app}5�_�                    "        ����                                                                                                                                                                                                                                                                                                                                                  V        U�^   	 �   !   #          :            selectAppVersion={this.props.selectAppVersion}5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        U��     �         *    �         *    5�_�                     	       ����                                                                                                                                                                                                                                                                                                                                                  V        U��   
 �   	      +    �   	   
   +    5�_�      !                      ����                                                                                                                                                                                                                                                                                                                                                  V        U��     �         ,      7          onPress={() => this.props.changeTab('chat')}>5�_�       "           !          ����                                                                                                                                                                                                                                                                                                                                                  V        U��     �         ,      2          onPress={() => this..changeTab('chat')}>5�_�   !   #           "          ����                                                                                                                                                                                                                                                                                                                                                  V        U��     �         ,      6          selected={this.props.selectedTab === 'chat'}5�_�   "   $           #          ����                                                                                                                                                                                                                                                                                                                                                  V        U��     �         ,      1          selected={this..selectedTab === 'chat'}5�_�   #   %           $           ����                                                                                                                                                                                                                                                                                                                                                  V        U��     �      !   ,      9          selected={this.props.selectedTab === 'profile'}5�_�   $   &           %           ����                                                                                                                                                                                                                                                                                                                                                  V        U��     �      !   ,      4          selected={this..selectedTab === 'profile'}5�_�   %   '           &   !       ����                                                                                                                                                                                                                                                                                                                                                  V        U��     �       "   ,      :          onPress={() => this.props.changeTab('profile')}>5�_�   &   (           '   !       ����                                                                                                                                                                                                                                                                                                                                                  V        U��     �       "   ,      5          onPress={() => this..changeTab('profile')}>5�_�   '   )           (   #       ����                                                                                                                                                                                                                                                                                                                                                  V        U��     �   "   $   ,      "            apps={this.props.apps}5�_�   (   *           )   #       ����                                                                                                                                                                                                                                                                                                                                                  V        U��     �   "   $   ,      !            apps={this.propsapps}5�_�   )   +           *   $       ����                                                                                                                                                                                                                                                                                                                                                  V        U��     �   #   %   ,      ,            selectApp={this.props.selectApp}5�_�   *   ,           +   $       ����                                                                                                                                                                                                                                                                                                                                                  V        U��    �   #   %   ,      '            selectApp={this..selectApp}5�_�   +   -           ,          ����                                                                                                                                                                                                                                                                                                                                                  V        U��     �         ,    �         ,    5�_�   ,   /           -          ����                                                                                                                                                                                                                                                                                                                                                  V        U��     �         3        mixins: [TabPicker],5�_�   -   0   .       /           ����                                                                                                                                                                                                                                                                                                                                                  V        U��     �                 5�_�   /   1           0          ����                                                                                                                                                                                                                                                                                                                                                  V        U��     �         3            selectedTab: 'home',5�_�   0   2           1          ����                                                                                                                                                                                                                                                                                                                                                  V        U��    �                )      categories: CategoryStore.getAll(),5�_�   1   3           2   )       ����                                                                                                                                                                                                                                                                                                                                                  V        U�#     �   (   *   2                  apps={this.apps}5�_�   2   4           3   *       ����                                                                                                                                                                                                                                                                                                                                                  V        U�%    �   )   +   2      &            selectApp={this.selectApp}5�_�   3   5           4   (       ����                                                                                                                                                                                                                                                                                                                                                  V        U�)     �   '   *   2                <ProfileScreen5�_�   4   6           5   *        ����                                                                                                                                                                                                                                                                                                                            *          +          V       U�-    �   )   *          "            apps={this.props.apps}   ,            selectApp={this.props.selectApp}5�_�   5   7           6   )       ����                                                                                                                                                                                                                                                                                                                            *          *          V       U�b    �   (   *   1                  {..this.props}5�_�   6   8           7          ����                                                                                                                                                                                                                                                                                                                            *          *          V       U�$-    �         1            selectedTab: 'users',5�_�   7   9           8           ����                                                                                                                                                                                                                                                                                                                            *          *          V       U�$�     �                0var ProfileScreen = require('../ProfileScreen');5�_�   8   :           9           ����                                                                                                                                                                                                                                                                                                                            )          )          V       U�$�    �         0    �         0    5�_�   9   ;           :          ����                                                                                                                                                                                                                                                                                                                            *          *          V       U�$�     �          1      0          selected={this.selectedTab === 'chat'}5�_�   :               ;   &       ����                                                                                                                                                                                                                                                                                                                            *          *          V       U�$�    �   %   '   1      3          selected={this.selectedTab === 'profile'}5�_�   -           /   .           ����                                                                                                                                                                                                                                                                                                                                                  V        U��     �              5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        U��2     �         +      +//var CatScreen = require('../ChatScreen');5��