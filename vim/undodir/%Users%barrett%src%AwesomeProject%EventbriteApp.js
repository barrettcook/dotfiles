Vim�UnDo� ]!�cƜSA�E��-q/�#p���Y>c�9��   #                                  Uu��    _�                             ����                                                                                                                                                                                                                                                                                                                                                             U�!     �                   �               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        U�%     �                 /**   G * The examples provided by Facebook are for non-commercial testing and    * evaluation purposes only.    *   6 * Facebook reserves all rights not expressly granted.    *   J * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS   N * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,   K * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL   K * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN   G * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN   M * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.    *    * @providesModule MoviesApp    * @flow    */5�_�                          ����                                                                                                                                                                                                                                                                                                                                                  V        U�0    �         #                title: 'Movies',5�_�      	              !       ����                                                                                                                                                                                                                                                                                                                                                  V        U�<     �       "   #      <AppRegistry.registerComponent('MoviesApp', () => MoviesApp);5�_�      
           	   !   6    ����                                                                                                                                                                                                                                                                                                                                                  V        U�@     �       "   #      AAppRegistry.registerComponent('AwesomeProject', () => MoviesApp);5�_�   	              
   !   6    ����                                                                                                                                                                                                                                                                                                                                                  V        U�@     �       "   #      @AppRegistry.registerComponent('AwesomeProject', () => oviesApp);5�_�   
                 !   6    ����                                                                                                                                                                                                                                                                                                                                                  V        U�A     �       "   #      ?AppRegistry.registerComponent('AwesomeProject', () => viesApp);5�_�                    !   6    ����                                                                                                                                                                                                                                                                                                                                                  V        U�A     �       "   #      >AppRegistry.registerComponent('AwesomeProject', () => iesApp);5�_�                    !   6    ����                                                                                                                                                                                                                                                                                                                                                  V        U�A     �       "   #      =AppRegistry.registerComponent('AwesomeProject', () => esApp);5�_�                    !   6    ����                                                                                                                                                                                                                                                                                                                                                  V        U�A     �       "   #      <AppRegistry.registerComponent('AwesomeProject', () => sApp);5�_�                    !   6    ����                                                                                                                                                                                                                                                                                                                                                  V        U�B     �       "   #      ;AppRegistry.registerComponent('AwesomeProject', () => App);5�_�                    #       ����                                                                                                                                                                                                                                                                                                                            #          #          v       U�F     �   "              module.exports = MoviesApp;�   #            5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       U�G    �         #      #var MoviesApp = React.createClass({�         #    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       U�    �         #                title: 'Eventbrite',5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       U�    �         #                title: 'Search',5�_�                   
       ����                                                                                                                                                                                                                                                                                                                                                             Uy�    �   	      #      -var SearchScreen = require('./SearchScreen');5�_�                     
        ����                                                                                                                                                                                                                                                                                                                                                             Uu��     �               #   'use strict';       $var React = require('react-native');   var {     AppRegistry,     NavigatorIOS,     StyleSheet,   
} = React;       0var SearchScreen = require('./js/SearchScreen');       'var EventbriteApp = React.createClass({     render: function() {       return (         <NavigatorIOS            style={styles.container}           initialRoute={{             title: 'Discover',   "          component: SearchScreen,   
        }}         />       );     }   });        var styles = StyleSheet.create({     container: {       flex: 1,       backgroundColor: 'white',     },   });       EAppRegistry.registerComponent('AwesomeProject', () => EventbriteApp);       module.exports = EventbriteApp;5�_�                          ����                                                                                                                                                                                                                                                                                                                                                v       Uo     �         #    �         #            <TabBarIOS   -        selectedTab={this.state.selectedTab}>           <TabBarItemIOS             name="discover"   2          icon={{uri:'favorites', isStatic: true}}   '          accessibilityLabel="Discover"   :          selected={this.state.selectedTab === 'discover'}             onPress={() => {               this.setState({   &              selectedTab: 'discover',               });             }}>5�_�                            ����                                                                                                                                                                                                                                                                                                                                                v       Uo     �         /            >5�_�                   
       ����                                                                                                                                                                                                                                                                                                                                                  V        U�*     �   	      #      ,var earchScreen = require('./SearchScreen');5�_�                    
       ����                                                                                                                                                                                                                                                                                                                                                  V        U�*     �   	      #      +var archScreen = require('./SearchScreen');5�_�                    
       ����                                                                                                                                                                                                                                                                                                                                                  V        U�*     �   	      #      *var rchScreen = require('./SearchScreen');5�_�                     
       ����                                                                                                                                                                                                                                                                                                                                                  V        U�*     �   	      #      )var chScreen = require('./SearchScreen');5��