Vim�UnDo� 㽷Y�*��ȁ��&��.�/�n��B<ǇgS�  �                                   Y��    _�                             ����                                                                                                                                                                                                                                                                                                                                                          Y��     �              �   import React from 'react';   import _ from 'underscore';   'import gettext from 'js-utils/gettext';   $import classNames from 'classnames';       )import * as constants from './constants';   *import {getNarrowMenuInfo} from './utils';   Kimport {TYPE_PROP_TYPE, COLOR_PROP_TYPE} from '../../atoms/icon/constants';   Himport {TEXT_ITEMS_PROP_TYPE} from '../../molecules/textList/constants';   Vimport {TYPE_SEARCH as TEXT_INPUT_TYPE_SEARCH} from '../../atoms/textInput/constants';   Wimport {ALIGN_FULL, ALIGN_RIGHT} from '../../foundation/containers/dropdown/constants';       )import Icon from '../../atoms/icon/Icon';   /import Button from '../../atoms/button/Button';   Timport AutocompleteField from '../../molecules/autocompleteField/AutocompleteField';   <import FormField from '../../molecules/formField/FormField';   Eimport Dropdown from '../../foundation/containers/dropdown/Dropdown';   Eimport DropdownMenu from '../../molecules/dropdownMenu/DropdownMenu';       import './globalHeader.scss';       &const GlobalHeaderLogo = ({info}) => {   	    let {           url,   /        iconType = constants.DEFAULT_LOGO_TYPE,   1        iconColor = constants.DEFAULT_LOGO_COLOR,   1        iconTitle = constants.DEFAULT_LOGO_TITLE,   6        iconWidth = constants.DEFAULT_LOGO_SIZE.width,   8        iconHeight = constants.DEFAULT_LOGO_SIZE.height,   :        backgroundColor = constants.DEFAULT_LOGO_BG_COLOR,           ...linkProps       } = info;           let className = classNames(   '        'eds-global-header__logo-link',   *        `eds-bg-color--${backgroundColor}`       );           return (   
        <a               href={url}   !            className={className}   /            data-spec="global-header-logo-link"               {...linkProps}   	        >               <Icon                   type={iconType}   !                color={iconColor}   !                title={iconTitle}   #                isBlockLevel={true}   #                height={iconHeight}   !                width={iconWidth}   .                data-spec="global-header-logo"               />           </a>       );   };       zconst GlobalHeaderSearchForm = ({searchInfo, id, className, hideIcon, onSelect, onSubmit, onChange, onBlur, onFocus}) => {   	    let {           formAction,           label,   8        fieldName = constants.DEFAULT_SEARCH_FIELD_NAME,           query = '',           suggestions = [],   5        formMethod = constants.DEFAULT_SEARCH_METHOD,       } = searchInfo;   .    let autocompleteId = `${id}-autocomplete`;       let autocompleteIcon;           if (!hideIcon) {   c        autocompleteIcon = (<Icon type="magnifying-glass-chunky" size="small" color="grey-500" />);       }       let form = (           <FormField               label={label}   $            htmlFor={autocompleteId}               hideLabel={true}               bottomSpacing={0}   	        >               <AutocompleteField   #                id={autocompleteId}   -                type={TEXT_INPUT_TYPE_SEARCH}                    name={fieldName}                   value={query}   )                suggestions={suggestions}   #                placeholder={label}   .                data-automation="search-input"   #                onSelect={onSelect}   #                onChange={onChange}                   onBlur={onBlur}   !                onFocus={onFocus}   '                hideOutline={!hideIcon}               >   "                {autocompleteIcon}                </AutocompleteField>           </FormField>       );       !    if (formAction || onSubmit) {   '        let handleFormSubmit = (e) => {   T            // NOTE: If `onSubmit` is defined, we want to handle the form submission   R            // in JavaScript, so we should prevent the default browser submission.   R            // However, if `onSubmit` is not defined, we want to allow the default   ,            // broswer submission to happen.               if (onSubmit) {   #                e.preventDefault();                    onSubmit(query);               }   
        };               form = (               <form   5                data-spec="global-header-search-form"   #                action={formAction}   #                method={formMethod}                   id={id}   +                onSubmit={handleFormSubmit}               >                   {form}   B                <input type="hidden" name="mode" value="search" />               </form>   
        );       }           return (   #        <div className={className}>               {form}           </div>       );   };       wconst GlobalHeaderSearchDropdown = ({show, searchInfo, id, onHide, onSelect, onSubmit, onChange, onBlur, onFocus}) => {       if (!show || !searchInfo) {           return null;       }           return (   =        <Dropdown align={ALIGN_FULL} onClickOutside={onHide}>   #            <GlobalHeaderSearchForm   '                searchInfo={searchInfo}                   id={id}                   hideIcon={true}   #                onSelect={onSelect}   #                onSubmit={onSubmit}   #                onChange={onChange}                   onBlur={onBlur}   !                onFocus={onFocus}               />           </Dropdown>       );   };       sconst GlobalHeaderSearch = ({searchInfo, id, onSelect, onSubmit, onChange, onBlur, onFocus, onToggleDropdown}) => {       if (!searchInfo) {           return null;       }       ^    // NOTE: the narrow search button below toggles the display of the narrow search dropdown.   ^    // That dropdown can also be hidden by "clicking away." However, clicking this button when   ]    // it's display should be considered a "click away" otherwise we'll have a case where the   [    // dropdown will be hidden by "clicking away" and then show because we just clicked the   [    // button to toggle it back on. So the "ignore-react-onclickoutside" class is a special   C    // class that causes it not to be classified as a "click away".           return (   d        <div className="eds-global-header__search eds-text--right" data-spec="global-header-search">   �            <span className="eds-global-header__narrow-search-button-wrapper eds-show-down-mn eds-l-pad-right-2 ignore-react-onclickoutside">   o                <Button style="none" onClick={onToggleDropdown} data-spec="global-search-narrow-search-button">   Y                    <Icon type="magnifying-glass-chunky" size="small" color="grey-700" />                   </Button>               </span>       #            <GlobalHeaderSearchForm   '                searchInfo={searchInfo}                   id={id}   Q                className="eds-global-header__search-autocomplete eds-show-up-md"   #                onSelect={onSelect}   #                onSubmit={onSubmit}   #                onChange={onChange}                   onBlur={onBlur}   !                onFocus={onFocus}               />           </div>       );   };       Fconst GlobalHeaderMenuIcon = ({iconType, iconColor = 'grey-700'}) => (   	    <Icon           type={iconType}           size="small"           color={iconColor}   +        data-spec="global-header-menu-icon"       />   );       -const GlobalHeaderQuickLinks = ({links}) => {       if (!links) {           return null;       }       V    let linkComponents = links.map(({url, content, narrowIconType, ...linkProps}) => {           let narrowIcon;   #        let className = classNames(   ,            'eds-global-header__quick-link',               {   G                'eds-global-header__quick-link--narrow': narrowIconType               }   
        );               if (narrowIconType) {               narrowIcon = (   B                <GlobalHeaderMenuIcon iconType={narrowIconType} />               );   	        }               return (               <a                   {...linkProps}                   key={url}                   href={url}   %                className={className}   4                data-spec="global-header-quick-link"               >   F                <span className="eds-show-down-mn">{narrowIcon}</span>   A                <span className="eds-show-up-md">{content}</span>               </a>   
        );       });           return (   ^        <div className="eds-global-header__quick-links" data-spec="global-header-quick-links">               {linkComponents}           </div>       );   };       2const GlobalHeaderCallToAction = ({linkInfo}) => {       let component = null;           if (linkInfo) {   4        let {url, content, ...linkProps} = linkInfo;               component = (   O            <span className="eds-global-header__call-to-action eds-show-up-md">                   <a   "                    {...linkProps}                       href={url}   <                    data-spec="global-header-call-to-action"   G                    className="eds-global-header__call-to-action__link"                   >                       {content}                   </a>               </span>   
        );       }           return component;   };       7const GlobalHeaderDropdownMenuImage = ({imageUrl}) => (   G    <span className="eds-global-header__menu-profile-image--container">           <img   =            className="eds-global-header__menu-profile-image"               src={imageUrl}   *            alt={gettext('Profile Image')}   8            data-spec="global-header-menu-profile-image"   
        />   I        <div className="eds-global-header__menu-profile-image--border" />       </span>   );       Qconst GlobalHeaderDropdownMenuIcon = ({iconType, narrowIconType, iconColor}) => {       let className = classNames(   '        'eds-global-header__menu-icon',   	        {   ,            'eds-show-up-md': narrowIconType   	        }       );       let icon = null;           if (narrowIconType) {           icon = (   L            <span className="eds-global-header__menu-icon eds-show-down-mn">   B                <GlobalHeaderMenuIcon iconType={narrowIconType} />               </span>   
        );       }           return (           <span>   (            <span className={className}>   R                <GlobalHeaderMenuIcon iconType={iconType} iconColor={iconColor} />               </span>               {icon}           </span>       );   };       .const GlobalHeaderUserAvatar = (menuInfo) => {   (    let {imageUrl, iconType} = menuInfo;           let component = null;           let helperTypes = {   M        image: {'test': () => imageUrl, 'fn': GlobalHeaderDropdownMenuImage},   J        icon: {'test': () => iconType, 'fn': GlobalHeaderDropdownMenuIcon}       };           let _getType = (types) => {   =        let type = _.findKey(types, (value) => value.test());               let Klass = null;               if (type) {   )            Klass = helperTypes[type].fn;   	        }           return Klass;       };       4    let UserAvatarComponent = _getType(helperTypes);           if (UserAvatarComponent) {           component = (   1            <UserAvatarComponent {...menuInfo} />   
        );       }           return component;   };       econst DropdownComponentByType = ({menuInfo, onAdditionalMenuTextItemSelect, ...additionalProps}) => {   	    let {           label,           fallbackUrl,           navItems,           textItems,           className,           preventMouseOver,       } = menuInfo;       ,    let menuContainerClassName = classNames(           className,   !        'eds-global-header__menu'       );           return (   0        <div className={menuContainerClassName}>               <DropdownMenu   $                {...additionalProps}   )                fallbackUrl={fallbackUrl}   #                navItems={navItems}   %                textItems={textItems}   +                dropdownAlign={ALIGN_RIGHT}   3                preventMouseOver={preventMouseOver}   A                onTextItemSelect={onAdditionalMenuTextItemSelect}               >   8                <GlobalHeaderUserAvatar {...menuInfo} />   N                <span className="eds-global-header__menu-label">{label}</span>               </DropdownMenu>           </div>       );   };       Sconst DropdownButton = ({items, iconType, narrowIconType, iconColor, onClick}) => {       let component = null;   !    let {value, content} = items;       let icon = null;       let narrowIcon = null;           if (narrowIconType) {           narrowIcon = (   K            <div className="eds-global-header__menu-icon eds-show-down-mn">   B                <GlobalHeaderMenuIcon iconType={narrowIconType} />               </div>   
        );       }           if (iconType) {           icon = (   J            <span className="eds-global-header__menu-icon eds-show-up-md">   R                <GlobalHeaderMenuIcon iconType={iconType} iconColor={iconColor} />               </span>   
        );       }           component = (   8        <div className="eds-global-header__menu-button">               <Button                   style="none"   6                onClick={onClick.bind(null, value, 0)}   9                data-spec="global-header-dropdown-button"               >                   {icon}                   {narrowIcon}   P                <span className="eds-global-header__menu-label">{content}</span>               </Button>           </div>       );           return component;       };       ^const GlobalHeaderMenu = ({menuInfo, onAdditionalMenuTextItemSelect, ...additionalProps}) => {       let component = null;           if (menuInfo) {           let {               textItems = [],               iconType,               iconColor,               narrowIconType,           } = menuInfo;   4        let hasOnlyOneItem = textItems.length === 1;               if (hasOnlyOneItem) {   %            let items = textItems[0];                   component = (                   <DropdownButton   !                    items={items}   '                    iconType={iconType}   )                    iconColor={iconColor}   3                    narrowIconType={narrowIconType}   <                    onClick={onAdditionalMenuTextItemSelect}                   />               );           } else {               component = (   (                <DropdownComponentByType   (                    {...additionalProps}   '                    menuInfo={menuInfo}   S                    onAdditionalMenuTextItemSelect={onAdditionalMenuTextItemSelect}                   />               );   	        }       }           return component;   };       `const GlobalHeaderMenus = ({userMenuInfo, additionalMenus, onAdditionalMenuTextItemSelect}) => {       let menus = [];       let component = null;       &    if (!_.isEmpty(additionalMenus)) {   3        menus = additionalMenus.map((menuInfo) => (   �            <GlobalHeaderMenu key={menuInfo.label} menuInfo={menuInfo} onAdditionalMenuTextItemSelect={onAdditionalMenuTextItemSelect} />           ));       }       if (userMenuInfo) {   $        let userMenuInfoWithIcon = {   $            iconType: 'user-chunky',   6            className: 'eds-global-header__user-menu',               ...userMenuInfo   
        };               menus = [               ...menus,               <GlobalHeaderMenu                   key="userMenu"   /                menuInfo={userMenuInfoWithIcon}   3                data-spec="global-header-user-menu"               />   
        ];       }           if (!_.isEmpty(menus)) {           component = (   e            <div className="eds-global-header__menus eds-show-up-md" data-spec="global-header-menus">                   {menus}               </div>   
        );       }           return component;   };        const NarrowAdditionalMenus = ({       additionalMenus,   "    onAdditionalMenuTextItemSelect   }) => {   %    let narrowAdditionalMenus = null;       &    if (!_.isEmpty(additionalMenus)) {   7        let menus = additionalMenus.map((menuInfo) => {   *            if (menuInfo.narrowIconType) {                   return (   %                    <GlobalHeaderMenu   ,                        key={menuInfo.label}   +                        menuInfo={menuInfo}   W                        onAdditionalMenuTextItemSelect={onAdditionalMenuTextItemSelect}                       />                   );               }                   return null;           });       !        narrowAdditionalMenus = (   N            <span className="eds-global-header__narrow-menu eds-show-down-mn">                   {menus}               </span>   
        );       }       !    return narrowAdditionalMenus;   };           #const GlobalHeaderMajorSection = ({       id,       logoInfo,       searchInfo,       quickLinks,       onSearchSelect,       onSearchSubmit,       onSearchChange,       onSearchBlur,       onSearchFocus,       onToggleDropdown,   }) => (   .    <div className="eds-global-header__major">   ,        <GlobalHeaderLogo info={logoInfo} />           <GlobalHeaderSearch               id={`${id}-search`}   #            searchInfo={searchInfo}   %            onSelect={onSearchSelect}   %            onSubmit={onSearchSubmit}   %            onChange={onSearchChange}   !            onBlur={onSearchBlur}   #            onFocus={onSearchFocus}   /            onToggleDropdown={onToggleDropdown}   
        />   5        <GlobalHeaderQuickLinks links={quickLinks} />   
    </div>   );       #const GlobalHeaderMinorSection = ({       userMenuInfo,       additionalMenus,       nonUserQuickLinks,       callToActionInfo,       narrowMenuInfo,   #    onAdditionalMenuTextItemSelect,   }) => {       let narrowMenu;           if (narrowMenuInfo) {           narrowMenu = (   N            <span className="eds-global-header__narrow-menu eds-show-down-mn">   d                <GlobalHeaderMenu menuInfo={narrowMenuInfo} data-spec="global-header-narrow-menu" />               </span>   
        );       }           return (   2        <div className="eds-global-header__minor">   D            <GlobalHeaderCallToAction linkInfo={callToActionInfo} />               <GlobalHeaderMenus   q                additionalMenus={additionalMenus} onAdditionalMenuTextItemSelect={onAdditionalMenuTextItemSelect}               />   @            <GlobalHeaderQuickLinks links={nonUserQuickLinks} />   =            <GlobalHeaderMenus userMenuInfo={userMenuInfo} />   "            <NarrowAdditionalMenus   q                additionalMenus={additionalMenus} onAdditionalMenuTextItemSelect={onAdditionalMenuTextItemSelect}               />               {narrowMenu}           </div>       );   };       ?export default class GlobalHeader extends React.PureComponent {       static propTypes = {           /**   K         * Configuration for the global header logo, including the URL that   %         * the logo link navigates to            */   )        logoInfo: React.PropTypes.shape({   3            url: React.PropTypes.string.isRequired,   %            iconType: TYPE_PROP_TYPE,   '            iconColor: COLOR_PROP_TYPE,   -            backgroundColor: COLOR_PROP_TYPE,           }).isRequired,               /**   "         * ID of the global header            */   #        id: React.PropTypes.string,           /**   J         * Configuration for the search field. If omitted, no search field   H         * is shown. If suggestions are omitted, a regular text input is            * displayed.            */   +        searchInfo: React.PropTypes.shape({   5            label: React.PropTypes.string.isRequired,   /            formAction: React.PropTypes.string,   .            fieldName: React.PropTypes.string,   *            query: React.PropTypes.string,   .            suggestions: TEXT_ITEMS_PROP_TYPE,   /            formMethod: React.PropTypes.string,           }),           /**   I         * Configuration for 1 or more "quick links" in the global header   =         * that show before the menus (i.e. "Browse events").   /         * If omitted or 0, they will not show.            */   .        quickLinks: constants.LINKS_PROP_TYPE,           /**   M         * Configuration for the user dropdown nav menu in the global header.            */   3        userMenuInfo: constants.DROPDOWN_PROP_TYPE,           /**   _         * Configuration for 1 or more additional dropdown nav/text menus in the global header.   S         * If omitted or 0, they will not show. On a narrow screen, the menu labels   T         * and fallbackUrls will be included in the userMenu if it exists, otherwise   D         * in a special default menu. These show before the userMenu            */   O        additionalMenus: React.PropTypes.arrayOf(constants.DROPDOWN_PROP_TYPE),           /**   Y         * Configuration for 1 or more "quick links" in the global header that show after   T         * the menus, but only show when the userMenu is undefined (i.e. "Sign Up").   /         * If omitted or 0, they will not show.            */   5        nonUserQuickLinks: constants.LINKS_PROP_TYPE,           /**   6         * Configuration for the main "call to action"   ?         * (i.e. "Create event"). If omitted, it will not show.            */   3        callToActionInfo: constants.LINK_PROP_TYPE,           /**   P         * Callback function invoked when the value of the search input changes.            * (searchQuery) => { }            */   -        onSearchChange: React.PropTypes.func,           /**   F         * Callback function invoked when the search input is blurred.            * (searchQuery) => { }            */   +        onSearchBlur: React.PropTypes.func,           /**   F         * Callback function invoked when the search input is focused.            * (searchQuery) => { }            */   ,        onSearchFocus: React.PropTypes.func,           /**   J         * Callback function invoked when a search suggestion is selected.            * (searchQuery) => { }            */   -        onSearchSelect: React.PropTypes.func,           /**   ]         * Callback function invoked when a search form is submitted (i.e. ENTER is pressed).   6         * Default browser for submission is disabled.            * (searchQuery) => { }            */   -        onSearchSubmit: React.PropTypes.func,           /**   B         * Callback function invoked when a menu item is selected.             * (value, index) => { }            */   =        onAdditionalMenuTextItemSelect: React.PropTypes.func,       }           static defaultProps = {   !        id: constants.DEFAULT_ID,   #        isUserAuthenticated: false,       }           state = {   M        // the search dropdown is shown by clicking a search button that only   K        // shows on a narrow screen. The main search autocomplete is hidden   7        // when that narrow search button is displayed.   !        showSearchDropdown: false       }       #    _handleToggleSearchDropdown() {           this.setState({   >            showSearchDropdown: !this.state.showSearchDropdown           });       }       !    _handleHideSearchDropdown() {   3        this.setState({showSearchDropdown: false});       }       9    _handleOnAdditionalMenuTextItemSelect(value, index) {   8        if (this.props.onAdditionalMenuTextItemSelect) {   D            this.props.onAdditionalMenuTextItemSelect(value, index);   	        }       }           render() {           let {               id,               logoInfo,               searchInfo,               quickLinks,               userMenuInfo,               additionalMenus,               nonUserQuickLinks,               callToActionInfo,               onSearchSelect,               onSearchChange,               onSearchBlur,               onSearchFocus,               onSearchSubmit,           } = this.props;   .        let {showSearchDropdown} = this.state;   s        let narrowMenuInfo = getNarrowMenuInfo(userMenuInfo, additionalMenus, nonUserQuickLinks, callToActionInfo);               return (   :            <header id={id} className="eds-global-header">   ]                <a className="eds-is-hidden-accessible js-d-skip-links" href="#skip-heading">   5                    {gettext('Skip Main Navigation')}                   </a>                       <div   7                    className="eds-global-header__main"   &                    data-role="header"                   >   -                    <GlobalHeaderMajorSection                           id={id}   +                        logoInfo={logoInfo}   /                        searchInfo={searchInfo}   /                        quickLinks={quickLinks}   7                        onSearchSelect={onSearchSelect}   7                        onSearchSubmit={onSearchSubmit}   7                        onSearchChange={onSearchChange}   3                        onSearchBlur={onSearchBlur}   5                        onSearchFocus={onSearchFocus}   V                        onToggleDropdown={this._handleToggleSearchDropdown.bind(this)}                       />   -                    <GlobalHeaderMinorSection   3                        userMenuInfo={userMenuInfo}   9                        additionalMenus={additionalMenus}   n                        onAdditionalMenuTextItemSelect={this._handleOnAdditionalMenuTextItemSelect.bind(this)}   =                        nonUserQuickLinks={nonUserQuickLinks}   ;                        callToActionInfo={callToActionInfo}   7                        narrowMenuInfo={narrowMenuInfo}                       />   /                    <GlobalHeaderSearchDropdown   1                        show={showSearchDropdown}   4                        id={`${id}-search-dropdown`}   /                        searchInfo={searchInfo}   J                        onHide={this._handleHideSearchDropdown.bind(this)}   1                        onSelect={onSearchSelect}   1                        onSubmit={onSearchSubmit}   1                        onChange={onSearchChange}   -                        onBlur={onSearchBlur}   /                        onFocus={onSearchFocus}                       />                   </div>       X                <a id="skip-heading" tabIndex="-1" className="eds-is-hidden-accessible">   -                    {gettext('Page Content')}                   </a>               </header>   
        );       }   }5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             Y��T     �        �      ,///import * as constants from './constants';5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Y��T    �        �      +//import * as constants from './constants';5�_�                            ����                                                                                                                                                                                                                                                                                                                                                          Y��]    �        �      ,//import {getNarrowMenuInfo} from './utils';�        �      M//import {TYPE_PROP_TYPE, COLOR_PROP_TYPE} from '../../atoms/icon/constants';   J//import {TEXT_ITEMS_PROP_TYPE} from '../../molecules/textList/constants';   X//import {TYPE_SEARCH as TEXT_INPUT_TYPE_SEARCH} from '../../atoms/textInput/constants';   Y//import {ALIGN_FULL, ALIGN_RIGHT} from '../../foundation/containers/dropdown/constants';   //   +//import Icon from '../../atoms/icon/Icon';   1//import Button from '../../atoms/button/Button';   V//import AutocompleteField from '../../molecules/autocompleteField/AutocompleteField';   >//import FormField from '../../molecules/formField/FormField';   G//import Dropdown from '../../foundation/containers/dropdown/Dropdown';   G//import DropdownMenu from '../../molecules/dropdownMenu/DropdownMenu';   //   //import './globalHeader.scss';5�_�                            ����                                                                                                                                                                                                                                                                                                                                                          Y��d    �        �      //import _ from 'underscore';�        �      )//import gettext from 'js-utils/gettext';   &//import classNames from 'classnames';5�_�                             ����                                                                                                                                                                                                                                                                                                                                                          Y��n    �         �      //import React from 'react';5��