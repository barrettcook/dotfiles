Vim�UnDo� q���.����O4]M�!������w�h3�Y�   0           5                       U�]�    _�                           ����                                                                                                                                                                                                                                                                                                                            *                     V        U�!"     �         ^              ref="nav"5�_�      	                     ����                                                                                                                                                                                                                                                                                                                            *                     V        U�!&    �         ^          this.refs.nav.push({5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                            *                     V        U�!:     �         ^              ref="browseNav"5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                            *                     V        U�!:    �         ^              ref='browseNav"5�_�   
                         ����                                                                                                                                                                                                                                                                                                                            *                     V        U�K�     �               ^   $var React = require('react-native');   var {     StyleSheet,     NavigatorIOS,     ActivityIndicatorIOS,     TextInput,     View,   
} = React;       5var CategoriesScreen = require('./CategoriesScreen');   &var BrowseScreen = React.createClass({         onSearchChange: function() {         },         showSearch: function() {       this.refs.browseNav.push({         title: 'Search',         component: SearchBar,   6      passProps: {onSearchChange: this.onSearchChange}       });     },         render: function() {       return (         <NavigatorIOS           ref='browseNav'           style={styles.wrapper}           initialRoute={{             title: 'Categories',   &          component: CategoriesScreen,             passProps: {   .            categories: this.props.categories,   $            items: this.props.items,             },   %          rightButtonTitle: 'Search',   -          onRightButtonPress: this.showSearch   
        }}         />       );     }   });       // TODO: Move to a new file   #var SearchBar = React.createClass({     getInitialState: function() {       return {         isLoading: false,       };     },         render: function() {       return (   %      <View style={styles.searchBar}>           <TextInput             autoCapitalize="none"             autoCorrect={false}   .          onChange={this.props.onSearchChange}   ,          placeholder="Search for events..."   &          onFocus={this.props.onFocus}   '          style={styles.searchBarInput}   
        />           <ActivityIndicatorIOS   *          animating={this.props.isLoading}              style={styles.spinner}   
        />         </View>       );     }   });        var styles = StyleSheet.create({     wrapper: {       flex: 1     },     searchBar: {       marginTop: 35,       padding: 3,       paddingLeft: 8,       flexDirection: 'row',       alignItems: 'center',     },     searchBarInput: {       fontSize: 15,       flex: 1,       height: 30,     },     separator: {       height: 1,       backgroundColor: '#eeeeee',     },   });   module.exports = BrowseScreen;5�_�                    Y        ����                                                                                                                                                                                                                                                                                                                            Y          \          V       U�6d    �   X   Y            separator: {       height: 1,       backgroundColor: '#eeeeee',     },5�_�                    -        ����                                                                                                                                                                                                                                                                                                                            -          H           V        U���     �   ,   -          // TODO: Move to a new file   #var SearchBar = React.createClass({     getInitialState: function() {       return {         isLoading: false,       };     },         render: function() {       return (   %      <View style={styles.searchBar}>           <TextInput             autoCapitalize="none"             autoCorrect={false}   .          onChange={this.props.onSearchChange}   ,          placeholder="Search for events..."   &          onFocus={this.props.onFocus}   '          style={styles.searchBarInput}   
        />           <ActivityIndicatorIOS   *          animating={this.props.isLoading}              style={styles.spinner}   
        />         </View>       );     }   });    5�_�                    1        ����                                                                                                                                                                                                                                                                                                                            1           <          V       U���     �   0   1            searchBar: {       marginTop: 35,       padding: 3,       paddingLeft: 8,       flexDirection: 'row',       alignItems: 'center',     },     searchBarInput: {       fontSize: 15,       flex: 1,       height: 30,     },5�_�                    
   5    ����                                                                                                                                                                                                                                                                                                                            1           1          V       U���   	 �   	      2      5var CategoriesScreen = require('./CategoriesScreen');5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        U��	   
 �                  ActivityIndicatorIOS,     TextInput,5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        U��    �                  View,5�_�                             ����                                                                                                                                                                                                                                                                                                                                                  V        U�]�     �               0   $var React = require('react-native');   var {     StyleSheet,     NavigatorIOS,   
} = React;       5var CategoriesScreen = require('./CategoriesScreen');   'var SearchBar = require('./SearchBar');   &var BrowseScreen = React.createClass({         onSearchChange: function() {         },         showSearch: function() {       this.refs.nav.push({         title: 'Search',         component: SearchBar,   6      passProps: {onSearchChange: this.onSearchChange}       });     },         render: function() {       return (         <NavigatorIOS           ref="nav"           style={styles.wrapper}           initialRoute={{             title: 'Categories',   &          component: CategoriesScreen,             passProps: {   .            categories: this.props.categories,   $            items: this.props.items,             },   %          rightButtonTitle: 'Search',   -          onRightButtonPress: this.showSearch   
        }}         />       );     }   });        var styles = StyleSheet.create({     wrapper: {       flex: 1     },   });   module.exports = BrowseScreen;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             U�Z    �         ^              ref="browseNav"5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             U�d    �         ^          this.refs.browseNav.push({5�_�                            ����                                                                                                                                                                                                                                                                                                                                                 V        U�L    �      +        5�_�                            ����                                                                                                                                                                                                                                                                                                                                                 V        U��     �   
           5�_�                    
        ����                                                                                                                                                                                                                                                                                                                            
          
           V        U��     �   	           5�_�                     
        ����                                                                                                                                                                                                                                                                                                                            )          &          V       U��    �   	           5��