Vim�UnDo� Тyw6����9W���I.vU���1(��A�   "   4//import { fetchSubcategory } from './subcategories'            Q       Q   Q   Q    WGh6    _�                             ����                                                                                                                                                                                                                                                                                                                                                             WF/�     �                   �               5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             WF/�     �               %import reducer from './subcategories'5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             WF/�     �               $import action from './subcategories'5�_�                       	    ����                                                                                                                                                                                                                                                                                                                                                             WF/�     �                import {  from './subcategories'5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             WF/�     �               )import * as types from '../actions/types'5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             WF/�     �               'import * as types from '.actions/types'5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             WF/�     �               )describe('subcategories reducer', () => {5�_�      	                      ����                                                                                                                                                                                                                                                                                                                                                             WF/�    �   	                })    �   
                   �                  5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                             WF4�     �               /  it('should return the initial state', () => {5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                                                             WF4�     �               '  it('should return the state', () => {5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                             WF4�     �               "  it('should return the ', () => {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             WF4�     �      	               reducer(undefined, {})5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             WF4�     �      	               5�_�                          ����                                                                                                                                                                                                                                                                                                                                                             WF4�     �      	               fetch5�_�                      (    ����                                                                                                                                                                                                                                                                                                                                                             WF6     �               (describe('subcategories action', () => {5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             WF6     �      	          �             5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             WF6     �               afterEach(() => {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             WF6	     �      
           })5�_�                   
       ����                                                                                                                                                                                                                                                                                                                                                             WF6     �   	              it('should return ', () => {5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             WF6     �   
             �             5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             WF6     �   
            nock('http://example.com/')5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             WF6     �   
                nock('http://example.com/')5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             WF6     �   
                nock('http://.com/')5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             WF6     �   
                nock('https://.com/')5�_�                          ����                                                                                                                                                                                                                                                                                                                                                             WF6&     �                     .get('/todos')5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             WF68     �               7      .reply(200, { body: { todos: ['do something'] }})5�_�      !                  2    ����                                                                                                                                                                                                                                                                                                                                                             WF6^     �               2      .reply(200, { body: { : ['do something'] }})5�_�       "           !           ����                                                                                                                                                                                                                                                                                                                                                 V       WF6�     �                       expect(         fetchSubcategory(1234)       ).to.eql({});5�_�   !   #           "           ����                                                                                                                                                                                                                                                                                                                                                 V       WF6�     �                 5�_�   "   $           #          ����                                                                                                                                                                                                                                                                                                                                                 V       WF6�     �                       expect(              fetchSubcategory(1234)5�_�   #   %           $          ����                                                                                                                                                                                                                                                                                                                                                 V       WF6�     �               &        expect( fetchSubcategory(1234)5�_�   $   &           %           ����                                                                                                                                                                                                                                                                                                                               	          	       V   	    WF6�    �               :        expect(store.getActions()).to.eql(expectedActions)    �                          fetchSubcategory(1234)�                        ).to.eql({});5�_�   %   '           &           ����                                                                                                                                                                                                                                                                                                                               C          	       V   	    WF6�     �                5�_�   &   (           '          ����                                                                                                                                                                                                                                                                                                                               C          	       V   	    WF6�     �                   expectedActions5�_�   '   )           (          ����                                                                                                                                                                                                                                                                                                                               C          	       V   	    WF6�     �                   let expectedActions5�_�   (   *           )          ����                                                                                                                                                                                                                                                                                                                               C          	       V   	    WF6�     �                   const expectedActions5�_�   )   +           *      !    ����                                                                                                                                                                                                                                                                                                                               C          	       V   	    WF6�     �               !  { type: 'RECEIVE_SUBCATEGORY', 5�_�   *   ,           +          ����                                                                                                                                                                                                                                                                                                                               C          	       V   	    WF6�     �                #  { type: 'RECEIVE_SUBCATEGORY', },5�_�   +   -           ,          ����                                                                                                                                                                                                                                                                                                                               C          	       V   	    WF6�     �             �             5�_�   ,   .           -          ����                                                                                                                                                                                                                                                                                                                               C          	       V   	    WF6�     �                #  { type: 'RECEIVE_SUBCATEGORY', },5�_�   -   /           .          ����                                                                                                                                                                                                                                                                                                                               C          	       V   	    WF6�     �             �             5�_�   .   0           /          ����                                                                                                                                                                                                                                                                                                                               C          	       V   	    WF6�     �               #  { type: 'RECEIVE_SUBCATEGORY', },5�_�   /   1           0      '    ����                                                                                                                                                                                                                                                                                                                               C          	       V   	    WF6�     �               '      { type: 'RECEIVE_SUBCATEGORY', },5�_�   0   2           1          ����                                                                                                                                                                                                                                                                                                                               C          	       V   	    WF6�     �                     {5�_�   1   3           2           ����                                                                                                                                                                                                                                                                                                                               C          	       V   	    WF6�     �                5�_�   2   4           3          ����                                                                                                                                                                                                                                                                                                                               C          	       V   	    WF6�     �                   subcategory: 9000;5�_�   3   5           4          ����                                                                                                                                                                                                                                                                                                                               C          	       V   	    WF6�     �                   subcategory  9000;5�_�   4   6           5          ����                                                                                                                                                                                                                                                                                                                               C          	       V   	    WF6�     �                   subcategory = 9000;5�_�   5   7           6           ����                                                                                                                                                                                                                                                                                                                               C          	       V   	    WF6�     �                 5�_�   6   9           7      +    ����                                                                                                                                                                                                                                                                                                                               C          	       V   	    WF6�     �               1    return store.dispatch(fetchSubcategory(9000))5�_�   7   :   8       9           ����                                                                                                                                                                                                                                                                                                                               C          	       V   	    WF7     �                �             5�_�   9   ;           :      1    ����                                                                                                                                                                                                                                                                                                                               C          	       V   	    WF7     �               1const mockStore = configureMockStore(middlewares)5�_�   :   <           ;          ����                                                                                                                                                                                                                                                                                                                               C          	       V   	    WF7	     �               import * as types from '.types'5�_�   ;   =           <           ����                                                                                                                                                                                                                                                                                                                               C          	       V   	    WF7     �      
          �             5�_�   <   >           =           ����                                                                                                                                                                                                                                                                                                                               C       !   	       V   	    WF7     �                0import * as actions from '../../actions/counter'5�_�   =   ?           >           ����                                                                                                                                                                                                                                                                                                                                                  V        WF7     �                 import { expect } from 'chai';   2import { fetchSubcategory } from './subcategories'   import * as types from '.types'5�_�   >   @           ?           ����                                                                                                                                                                                                                                                                                                                                                  V        WF7!     �             �             5�_�   ?   A           @           ����                                                                                                                                                                                                                                                                                                                                                  V        WF7#     �                4import * as types from '../../constants/ActionTypes'5�_�   @   B           A           ����                                                                                                                                                                                                                                                                                                                                                  V        WF7$     �                >import expect from 'expect' // You can use any testing library5�_�   A   C           B          ����                                                                                                                                                                                                                                                                                                                                                  V        WF7%    �               import nock from 'nock'5�_�   B   D           C          ����                                                                                                                                                                                                                                                                                                                                                  V        WF7<     �                3      .reply(200, { body: { : ['do something'] }});5�_�   C   E           D          ����                                                                                                                                                                                                                                                                                                                                                  V        WF7B     �                4      .reply(200, { body: {  : ['do something'] }});5�_�   D   F           E          ����                                                                                                                                                                                                                                                                                                                                                  V        WF7E     �                A      .reply(200, { body: { subcategoryId : ['do something'] }});5�_�   E   G           F          ����                                                                                                                                                                                                                                                                                                                                                  V        WF7F     �                @      .reply(200, { body: {subcategoryId : ['do something'] }});5�_�   F   H           G          ����                                                                                                                                                                                                                                                                                                                                                  V        WF7H     �         !      /          subcategoryId : ['do something'] }});5�_�   G   I           H          ����                                                                                                                                                                                                                                                                                                                                                  V        WF7I     �         !      .          subcategoryId: ['do something'] }});5�_�   H   J           I          ����                                                                                                                                                                                                                                                                                                                                                  V        WF7U     �         #            ['do something'] }});5�_�   I   K           J          ����                                                                                                                                                                                                                                                                                                                                                  V        WF7W     �         #             }});5�_�   J   L           K          ����                                                                                                                                                                                                                                                                                                                                                  V        WF7[     �         #      
      }});5�_�   K   M           L          ����                                                                                                                                                                                                                                                                                                                                                  V        WF7b     �                    const subcategory = 9000;5�_�   L   N           M          ����                                                                                                                                                                                                                                                                                                                                                  V        WF7c    �         "    �         "    5�_�   M   O           N          ����                                                                                                                                                                                                                                                                                                                                                             WGg�    �         #        it('should return ', () => {5�_�   N   P           O           ����                                                                                                                                                                                                                                                                                                                                                             WGh    �         #      2import { fetchSubcategory } from './subcategories'5�_�   O   Q           P           ����                                                                                                                                                                                                                                                                                                                                                             WGh(    �                import * as types from '.types'5�_�   P               Q          ����                                                                                                                                                                                                                                                                                                                                                             WGh5    �         "      4//import { fetchSubcategory } from './subcategories'5�_�   7           9   8           ����                                                                                                                                                                                                                                                                                                                               C          	       V   	    WF7     �             �               iconst middlewares = [ thunk ]   Oconst mockStore = configureMockStore(middlewares)mport * as types from '.types'5�_�                       '    ����                                                                                                                                                                                                                                                                                                                                                             WF6     �   
            )    nock('https://www.eventbriteapi.com')5�_�                    
        ����                                                                                                                                                                                                                                                                                                                                                             WF6     �   
          �   	             nock('http://example.com/')         .get('/todos')   T      .reply(200, { body: { todos: ['do something'] }}) it('should return ', () => {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             WF6     �             �               -describe('subcategories actiafterEach(() => {       nock.cleanAll()     })on', () => {5�_�                          ����                                                                                                                                                                                                                                                                                                                                                             WF4�     �      	        5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             WF4�     �      	        5��