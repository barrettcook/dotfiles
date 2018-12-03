Vim�UnDo� *��� �cZ%S|��+�����4�-���:   �       �       	               
    Y���    _�       
          	   �       ����                                                                                                                                                                                                                                                                                                                                                             Y�Ћ    �   �   �          2                additionalMenus={ADDITIONAL_MENUS}5�_�   	              
   �        ����                                                                                                                                                                                                                                                                                                                                                             Y�V�    �               �   6import React, {PureComponent, PropTypes} from 'react';   import _ from 'underscore';   Iimport {withRouter, routerShape as ROUTER_PROP_TYPE} from 'react-router';   7import {containsInsensitive} from '../../utils/string';       Mimport {NAV_MAP, titleCaseToHyphenCase, examplePageNameToLabel} from './nav';   dimport {MAX_SEARCH_SUGGESTIONS, BASE_SEARCH_INFO, QUICK_LINKS, ADDITIONAL_MENUS} from './constants';   =import Structure from '../../foundation/structure/Structure';   import {       OVERLAY_OPTIONS_PROP_TYPES,   $    FOCUS_DRAWER_OPTIONS_PROP_TYPES,   !    BOTTOM_BAR_OPTIONS_PROP_TYPE,   .} from '../../foundation/structure/constants';   Wimport {NOTIFICATION_OPTIONS_PROP_TYPES} from '../../molecules/notification/constants';   Simport addOverlayControls from '../../foundation/structure/hoc/addOverlayControls';   [import addFocusDrawerControls from '../../foundation/structure/hoc/addFocusDrawerControls';   Mimport addMainControls from '../../foundation/structure/hoc/addMainControls';   Eimport GlobalHeader from '../../organisms/globalHeader/GlobalHeader';   Eimport GlobalFooter from '../../organisms/globalFooter/GlobalFooter';       Kimport {ROUTER_LINK, EXPAND_LINK} from '../../atoms/navListItem/constants';   Fimport {BrandExample} from '../../organisms/globalFooter/docs/helper';       .import {version} from '../../../package.json';       const INITIAL_STATE = {       searchSuggestions: [],       searchQuery: ''   };       (const COMPONENT_NAMES = _.chain(NAV_MAP)   A    // convert nested nav structure into array of component names       .map(({children}) => (   F        children.map((component) => examplePageNameToLabel(component))       ))       .    // flatten 2-D array for one list of names       .flatten()           // sort the names       .sort()       1    // filter out any duplicates from sorted list   D    // (in case we want to put a component under more than one menu)       .uniq(true)           .value();       /const _getBaseUrl = (routes) => routes[0].path;       3const _getInfo = (currentPath, basePath = '/') => {       let pageTitle;   7    let navItems = NAV_MAP.map(({title, children}) => {   $        let itemsChildren = children   !            .map((component) => {   >                let label = examplePageNameToLabel(component);   6                let id = titleCaseToHyphenCase(label);   .                let path = `${basePath}${id}`;   2                let active = path === currentPath;       R                // NOTE: This is a side-effect w/in the nested map in order to set   P                // pageTitle based on the currentPath. Otherwise we'd have to do   O                // this double loop again just to re-find the current component   $                // to get its label.                   if (active) {   &                    pageTitle = label;                   }                       return {                       id,                       path,                       active,   &                    type: ROUTER_LINK,   "                    content: label                   };               })   Z            .sort(({content: titleA}, {content: titleB}) => titleA.localeCompare(titleB));               return {               type: EXPAND_LINK,               content: title,                items: itemsChildren   
        };       });           return {           navItems,           pageTitle       };   };       5const _getSearchSuggestions = (searchQuery = '') => (       _.chain(COMPONENT_NAMES)   S        // keep only the components that contain the searchQuery (case-insensitive)   A        .filter((name) => containsInsensitive(name, searchQuery))       )        // trim the number of suggestions   %        .take(MAX_SEARCH_SUGGESTIONS)       C        // convert the component names to the format of suggestions   6        .map((name) => ({value: name, content: name}))               .value()   );       %const SideDrawerDescription = () => (   	    <div>   _        <h3 className="eds-text-hs--fixed eds-text-weight--light">Eventbrite Design System</h3>   >        <h4 className="eds-text-weight--light">v{version}</h4>   
    </div>   );       !class App extends PureComponent {       static propTypes = {   ,        children: PropTypes.node.isRequired,   ,        router: ROUTER_PROP_TYPE.isRequired,   3        overlayOptions: OVERLAY_OPTIONS_PROP_TYPES,   <        focusDrawerOptions: FOCUS_DRAWER_OPTIONS_PROP_TYPES,   =        notificationOptions: NOTIFICATION_OPTIONS_PROP_TYPES,   ;        mainBottomBarOptions: BOTTOM_BAR_OPTIONS_PROP_TYPE,       }           state = INITIAL_STATE       0    _handleSearchSelect(selectedComponentName) {   *        let {router, routes} = this.props;   +        let basePath = _getBaseUrl(routes);   G        let componentId = titleCaseToHyphenCase(selectedComponentName);   8        let componentPath = `${basePath}${componentId}`;       #        // Clear out current search   %        this.setState(INITIAL_STATE);       .        // Navigate to selected component page   #        router.push(componentPath);       }       &    _handleSearchChange(searchQuery) {           this.setState({               searchQuery,   A            searchSuggestions: _getSearchSuggestions(searchQuery)           });       }           render() {           let {               children,   !            location: {pathname},               routes,               overlayOptions,               focusDrawerOptions,                notificationOptions,   !            mainBottomBarOptions,           } = this.props;   :        let {searchQuery, searchSuggestions} = this.state;           let searchInfo = {                ...BASE_SEARCH_INFO,               query: searchQuery,   +            suggestions: searchSuggestions,   
        };   +        let basePath = _getBaseUrl(routes);           let header = (               <GlobalHeader                   logoInfo={{   "                    url: basePath,   /                    backgroundColor: 'grey-100'                   }}   '                searchInfo={searchInfo}   (                quickLinks={QUICK_LINKS}   &                isLimitedSearch={true}   D                onSearchSelect={this._handleSearchSelect.bind(this)}   D                onSearchChange={this._handleSearchChange.bind(this)}               />   
        );   @        let sideDrawerDescription = (<SideDrawerDescription />);   '        let brand = (<BrandExample />);   =        let footer = (<GlobalFooter brandSection={brand} />);   A        let {navItems, pageTitle} = _getInfo(pathname, basePath);               return (               <Structure                   header={header}                   footer={footer}   #                navItems={navItems}   =                sideDrawerDescription={sideDrawerDescription}   %                pageTitle={pageTitle}   ,                useSideDrawerAltTheme={true}   .                hasIndependentScrolling={true}   7                focusDrawerOptions={focusDrawerOptions}   /                overlayOptions={overlayOptions}   9                notificationOptions={notificationOptions}   ;                mainBottomBarOptions={mainBottomBarOptions}               >                   {children}               </Structure>   
        );       }   }       const enhanceApp = _.compose(       addFocusDrawerControls,       addOverlayControls,       addMainControls,       withRouter   );       export default enhanceApp(App);5�_�   
                  '        ����                                                                                                                                                                                                                                                                                                                            '   
       '           V        Y���    �   &   *        5�_�             	         I    ����                                                                                                                                                                                                                                                                                                                                                             Y��2     �         �      Iimport {withRouter, routerShape as ROUTER_PROP_TYPE} from 'react-router';    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             Y��2    �         �    �         �      /import {scanForProblems} from 'accessibilityjs'5�_�                    �        ����                                                                                                                                                                                                                                                                                                                                                             Y��:     �   �   �   �              componentDidMount() {           }    5�_�                     �        ����                                                                                                                                                                                                                                                                                                                                                             Y��C     �   �   �   �              setTimeout(5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             Y��1     �         �    �         �      xiimport {scanForProblems} from 'accessibilityjs'mport {withRouter, routerShape as ROUTER_PROP_TYPE} from 'react-router';5�_�                    �       ����                                                                                                                                                                                                                                                                                                                                                             Y�ȣ     �   �   �   �          }           gg5�_�                    l       ����                                                                                                                                                                                                                                                                                                                                                             Y�ŉ    �   k   m        5�_�                     l   /    ����                                                                                                                                                                                                                                                                                                                                                             Y�ŵ    �   k   m   �      K        <h4 className="eds-text-weight--light">EDS version: v{version}</h4>5��