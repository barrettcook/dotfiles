Vim�UnDo� L���2B��j��ԓZ�ΰ��>��;�����%	                                     U��<    _�                             ����                                                                                                                                                                                                                                                                                                                                                          U��T     �         &          $var React = require('react/addons');   'var TestUtils = React.addons.TestUtils;   .var CategoryCard = require('../CategoryCard');�          &      !jest.dontMock('../CategoryCard');5�_�                            ����                                                                                                                                                                                                                                                                                                                                                          U��V     �         &      //5�_�                            ����                                                                                                                                                                                                                                                                                                                                                          U��W    �         &      %describe('CategoryCard', function() {5�_�                            ����                                                                                                                                                                                                                                                                                                                                                          U��?     �          &      #//jest.dontMock('../CategoryCard');5�_�                            ����                                                                                                                                                                                                                                                                                                                                                          U��?     �          &      "/jest.dontMock('../CategoryCard');5�_�                            ����                                                                                                                                                                                                                                                                                                                                                          U��?     �         &      &//var React = require('react/addons');5�_�                            ����                                                                                                                                                                                                                                                                                                                                                          U��@     �         &      %/var React = require('react/addons');5�_�      	                      ����                                                                                                                                                                                                                                                                                                                                                          U��@     �         &      )//var TestUtils = React.addons.TestUtils;5�_�      
           	           ����                                                                                                                                                                                                                                                                                                                                                          U��@     �         &      (/var TestUtils = React.addons.TestUtils;5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                                                          U��A     �         &      0//var CategoryCard = require('../CategoryCard');5�_�   
                         ����                                                                                                                                                                                                                                                                                                                                                          U��A    �         &      //var CategoryCard = require('../CategoryCard');5�_�                            ����                                                                                                                                                                                                                                                                                                                                                          U��I    �         &      &xdescribe('CategoryCard', function() {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                         U���     �          &      !jest.dontMock('../CategoryCard');5�_�                            ����                                                                                                                                                                                                                                                                                                                                                         U���     �         &      'var TestUtils = React.addons.TestUtils;5�_�                           ����                                                                                                                                                                                                                                                                                                                                       &                   U���   	 �              "   .var CategoryCard = require('../CategoryCard');       %describe('CategoryCard', function() {   /    it('should be a ReactElement', function() {   -        var is_element = TestUtils.isElement(   %          <CategoryCard title="foo"/>   
        );   &        expect(is_element).toBe(true);       });       9    it('should generate a background color', function() {   9        var category_card = TestUtils.renderIntoDocument(   %          <CategoryCard title="foo"/>   
        );   :        expect(category_card.state.bgColor).toBeDefined();       });       7    it('should render the category title', function() {   9        var category_card = TestUtils.renderIntoDocument(   %          <CategoryCard title="foo"/>   
        );   F        expect(category_card.getDOMNode().textContent).toEqual('foo');       });       *    it('should be clickable', function() {   )        var spy = jest.genMockFunction();   9        var category_card = TestUtils.renderIntoDocument(   4          <CategoryCard title="foo" onPress={spy} />   
        );   i        var touchable = TestUtils.findRenderedDOMComponentWithClass(category_card, 'TouchableHighlight');   ,        TestUtils.Simulate.click(touchable);   .        expect(spy.mock.calls.length).toBe(1);       });   });�         &      'var TestUtils = React.addons.TestUtils;5�_�                            ����                                                                                                                                                                                                                                                                                                                                       &                   U�˃     �          &      #//jest.dontMock('../CategoryCard');5�_�                            ����                                                                                                                                                                                                                                                                                                                                       &                   U�˄     �          &      "/jest.dontMock('../CategoryCard');5�_�                            ����                                                                                                                                                                                                                                                                                                                                       &                 U�ˆ   
 �              #   )//var TestUtils = React.addons.TestUtils;   0//var CategoryCard = require('../CategoryCard');   //   '//describe('CategoryCard', function() {   1//    it('should be a ReactElement', function() {   ///        var is_element = TestUtils.isElement(   '//          <CategoryCard title="foo"/>   //        );   (//        expect(is_element).toBe(true);   	//    });   //   ;//    it('should generate a background color', function() {   ;//        var category_card = TestUtils.renderIntoDocument(   '//          <CategoryCard title="foo"/>   //        );   <//        expect(category_card.state.bgColor).toBeDefined();   	//    });   //   9//    it('should render the category title', function() {   ;//        var category_card = TestUtils.renderIntoDocument(   '//          <CategoryCard title="foo"/>   //        );   H//        expect(category_card.getDOMNode().textContent).toEqual('foo');   	//    });   //   ,//    it('should be clickable', function() {   +//        var spy = jest.genMockFunction();   ;//        var category_card = TestUtils.renderIntoDocument(   6//          <CategoryCard title="foo" onPress={spy} />   //        );   k//        var touchable = TestUtils.findRenderedDOMComponentWithClass(category_card, 'TouchableHighlight');   .//        TestUtils.Simulate.click(touchable);   0//        expect(spy.mock.calls.length).toBe(1);   	//    });   //});5�_�                       !    ����                                                                                                                                                                                                                                                                                                                                       &                 U��J    �         '      jest.dontMock('�         '    �          &      !jest.dontMock('../CategoryCard');5�_�                            ����                                                                                                                                                                                                                                                                                                                                       '                 U���    �                jest.dontMock('FontAwesome');5�_�                            ����                                                                                                                                                                                                                                                                                                                                                 V        U��;    �                    9    it('should generate a background color', function() {   9        var category_card = TestUtils.renderIntoDocument(   %          <CategoryCard title="foo"/>   
        );   :        expect(category_card.state.bgColor).toBeDefined();       });5�_�                       )    ����                                                                                                                                                                                                                                                                                                                                                  V        U��+     �         &    �         &      jest.dontMock('FontAwesome');5�_�                            ����                                                                                                                                                                                                                                                                                                                                       &                   U���     �         &      *// var TestUtils = React.addons.TestUtils;�      '       "   1// var CategoryCard = require('../CategoryCard');   //    (// describe('CategoryCard', function() {   2//     it('should be a ReactElement', function() {   0//         var is_element = TestUtils.isElement(   (//           <CategoryCard title="foo"/>   //         );   )//         expect(is_element).toBe(true);   
//     });   //    <//     it('should generate a background color', function() {   <//         var category_card = TestUtils.renderIntoDocument(   (//           <CategoryCard title="foo"/>   //         );   =//         expect(category_card.state.bgColor).toBeDefined();   
//     });   //    ://     it('should render the category title', function() {   <//         var category_card = TestUtils.renderIntoDocument(   (//           <CategoryCard title="foo"/>   //         );   I//         expect(category_card.getDOMNode().textContent).toEqual('foo');   
//     });   //    -//     it('should be clickable', function() {   ,//         var spy = jest.genMockFunction();   <//         var category_card = TestUtils.renderIntoDocument(   7//           <CategoryCard title="foo" onPress={spy} />   //         );   l//         var touchable = TestUtils.findRenderedDOMComponentWithClass(category_card, 'TouchableHighlight');   ///         TestUtils.Simulate.click(touchable);   1//         expect(spy.mock.calls.length).toBe(1);   
//     });   // });5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        U��l    �              5�_�                           ����                                                                                                                                                                                                                                                                                                                                      %           V        U��e    �              5�_�                            ����                                                                                                                                                                                                                                                                                                                                                 V        U��[    �      '        5��