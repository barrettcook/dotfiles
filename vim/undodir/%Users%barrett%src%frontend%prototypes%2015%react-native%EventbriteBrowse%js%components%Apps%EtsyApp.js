Vim�UnDo� w� ��$QT��Pc�U�؅r���˶�$�7�   ?         selectedTab: 'home',                             U�'%    _�                     2       ����                                                                                                                                                                                                                                                                                                                                                             U�"     �   2   R   5    �   2   3   5    5�_�                    2       ����                                                                                                                                                                                                                                                                                                                                                             U�#     �   1   4   T        },5�_�                            ����                                                                                                                                                                                                                                                                                                                            2                     V        U�)     �                  render: function() {       return (         <TabBarIOS           tintColor="#ff8000">           <TabBarItem             title="Calendar"             iconName="calendar"   %          selectedIconName="calendar"   :          selected={this.state.selectedTab === 'calendar'}   5          onPress={() => this.changeTab('calendar')}>             <CalendarScreen />           </TabBarItem>           <TabBarItem             title="Profile"             iconName="user"   9          selected={this.state.selectedTab === 'profile'}   4          onPress={() => this.changeTab('profile')}>             <ProfileScreen   "            apps={this.state.apps}   4            selectAppVersion={this.selectAppVersion}             />           </TabBarItem>         </TabBarIOS>       );     },5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 V        U�+     �         <            selectedTab: 'calendar',5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 V        U�1     �         <      %var CalendarApp = React.createClass({5�_�                    <       ����                                                                                                                                                                                                                                                                                                                                                 V        U�4     �   ;              module.exports = CalendarApp;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 V        U�W     �         <    �         <    5�_�      	              5       ����                                                                                                                                                                                                                                                                                                                                                 V        U�a    �   4   6   =      "            apps={this.state.apps}5�_�      
           	           ����                                                                                                                                                                                                                                                                                                                                                 V        U�r     �         =    �         =    5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                            "          "           V        U�w     �                2var CalendarScreen = require('../CalendarScreen');5�_�   
                         ����                                                                                                                                                                                                                                                                                                                            !          !           V        U�w     �                1var CalendarScreen = require('./CalendarScreen');5�_�                            ����                                                                                                                                                                                                                                                                                                                                                   V        U�~     �                3var FavoritesScreen = require('./FavoritesScreen');5�_�                            ����                                                                                                                                                                                                                                                                                                                                                 V        U��     �                +var InboxScreen = require('./InboxScreen');5�_�                            ����                                                                                                                                                                                                                                                                                                                                                 V        U��     �                0var ProfileScreen = require('../ProfileScreen');5�_�                            ����                                                                                                                                                                                                                                                                                                                                                 V        U��    �                 5�_�                    ;       ����                                                                                                                                                                                                                                                                                                                                                 V        U��    �   :   =   >          );5�_�                            ����                                                                                                                                                                                                                                                                                                                                                 V        U�t    �         ?    �         ?    5�_�                    8        ����                                                                                                                                                                                                                                                                                                                                                 V        U�U    �   7   9          4            selectAppVersion={this.selectAppVersion}5�_�                            ����                                                                                                                                                                                                                                                                                                                                                 V        U�^    �         @      7var CategoryStore = require('../stores/CategoryStore');5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 V        U�g     �         @      /var ProfileScreen = require('./ProfileScreen');5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 V        U�h     �         @      -var BrowseScreen = require('./BrowseScreen');5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 V        U�j    �         @      )var HomeScreen = require('./HomeScreen');5�_�                    8       ����                                                                                                                                                                                                                                                                                                                                                 V        U�<     �   8   :   @    �   8   9   @    5�_�                   7        ����                                                                                                                                                                                                                                                                                                                            7          8          V       U�>   	 �   6   7          "            apps={this.props.apps}   &            selectApp={this.selectApp}5�_�                    7       ����                                                                                                                                                                                                                                                                                                                            7          7          V       U�{   
 �   6   8   ?                  {..this.props}5�_�                            ����                                                                                                                                                                                                                                                                                                                            7          7          V       U�'$    �         ?            selectedTab: 'home',5�_�                    7       ����                                                                                                                                                                                                                                                                                                                            7          7          V       U�=    �   6   9        5��