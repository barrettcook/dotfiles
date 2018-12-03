Vim�UnDo� ̿ݩ�6&�t*����l�`J�\F� "��N   (                                   Y��%     _�                              ����                                                                                                                                                                                                                                                                                                                                                             Y��$     �               (   import React from 'react';   $import classNames from 'classnames';   Bimport {COLORS_PROP_TYPE} from '../../foundation/color/constants';   9import {DIVIDER_DIRECTIONS_PROP_TYPE} from './constants';       import './divider.scss';       :export default class Divider extends React.PureComponent {       static propTypes = {           /**            * Color of divider   
        */            color: COLORS_PROP_TYPE,           /**   6         * Direction of divider (horizontal, vertical)   
        */   /        direction: DIVIDER_DIRECTIONS_PROP_TYPE       }           static defaultProps = {           color: 'grey-200',            direction: 'horizontal',       }           render() {   ,        let {color, direction} = this.props;       #        let className = classNames(               'eds-divider__hr',               {   2                [`eds-bg-color--${color}`]: color,   9                [`eds-divider--${direction}`]: direction,               }   
        );               return (   R            <hr className={className} data-spec="divider-hr" aria-hidden="true" />   
        );       }   }5��