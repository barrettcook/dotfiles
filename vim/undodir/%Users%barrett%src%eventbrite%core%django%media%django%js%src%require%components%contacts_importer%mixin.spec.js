Vim�UnDo� �M�D��NyX�-c�ɸ �ȋyG�-�}�n'�   �           $                       UAZ�    _�       	             $   $    ����                                                                                                                                                                                                                                                                                                                            $          $          V       U@"�     �   #   %   �      I                        expect(this.callback).not.toHaveBeenCalledOnce();5�_�      
           	   '   $    ����                                                                                                                                                                                                                                                                                                                            $          $          V       U@"�     �   &   (   �      E                        expect(this.callback).toHaveBeenCalledOnce();5�_�   	              
   -   $    ����                                                                                                                                                                                                                                                                                                                            $          $          V       U@"�    �   ,   .   �      I                        expect(this.callback).not.toHaveBeenCalledOnce();5�_�   
                         ����                                                                                                                                                                                                                                                                                                                            $          $          V       U@)�     �               �   define(function(require) {       'use strict';           var $ = require('jquery'),   '        Backbone = require('backbone'),       F        mixin = require('require/components/contacts_importer/mixin'),   #        dorsal = require('dorsal');           1        describe('contactsImporter', function() {   +            describe('mixins', function() {   1                describe('stepItem', function() {   +                    beforeEach(function() {   a                        var View = Backbone.Marionette.ItemView.extend({}).mixin(mixin.stepItem),   %                            $promise;       0                        this.done = sinon.spy();   0                        this.fail = sinon.spy();   /                        this.view = new View();   M                        $promise = this.view.stepController.getStepPromise();                                $promise   ,                            .done(this.done)   -                            .fail(this.fail);                       });       G                    it('should have the needed functions', function() {   G                        expect(this.view.stepController).toBeDefined();   V                        expect(this.view.stepController.getStepPromise).toBeDefined();   W                        expect(this.view.stepController.resolveStepWith).toBeDefined();                       });           N                    it('should call a function on resolved Step', function() {   E                        expect(this.done).not.toHaveBeenCalledOnce();   E                        this.view.stepController.resolveStepWith({});   E                        expect(this.fail).not.toHaveBeenCalledOnce();   A                        expect(this.done).toHaveBeenCalledOnce();                       });       L                    it('should call a function on reject Step', function() {   E                        expect(this.fail).not.toHaveBeenCalledOnce();   D                        this.view.stepController.rejectStepWith({});   E                        expect(this.done).not.toHaveBeenCalledOnce();   A                        expect(this.fail).toHaveBeenCalledOnce();                       });                   });       >                describe('triggerLoaderOnRender', function() {   +                    beforeEach(function() {   V                        var channel = Backbone.Wreqr.radio.channel('contactImporter'),   H                            View = Backbone.Marionette.ItemView.extend({   6                                template: function() {   8                                    return $('<div />');                               }   B                            }).mixin(mixin.triggerLoaderOnRender);       4                        this.callback = sinon.spy();   /                        this.view = new View();       F                        channel.vent.on('show:loader', this.callback);                       });       H                    it('should call show:loader on render', function() {   I                        expect(this.callback).not.toHaveBeenCalledOnce();   +                        this.view.render();   E                        expect(this.callback).toHaveBeenCalledOnce();                       });                       });       5                describe('loaderHelper', function() {   +                    beforeEach(function() {   V                        var channel = Backbone.Wreqr.radio.channel('contactImporter'),   H                            View = Backbone.Marionette.ItemView.extend({   2                            template: function() {   4                                return $('<div />');                               }   5                        }).mixin(mixin.loaderHelper);       4                        this.callback = sinon.spy();   /                        this.view = new View();       F                        channel.vent.on('show:loader', this.callback);                           });       M                    it('should have startLoader and stopLoader', function() {   D                        expect(this.view.startLoader).toBeDefined();   C                        expect(this.view.stopLoader).toBeDefined();                           });   R                    it('should call show:loader on startLoader call', function() {   I                        expect(this.callback).not.toHaveBeenCalledOnce();   +                        this.view.render();   I                        expect(this.callback).not.toHaveBeenCalledOnce();   0                        this.view.startLoader();   E                        expect(this.callback).toHaveBeenCalledOnce();                       });                       });       5                describe('wireOnRender', function() {   +                    beforeEach(function() {   H                        var View = Backbone.Marionette.ItemView.extend({   2                            template: function() {   ;                                var wrapper = $('<div />');       P                                wrapper.append('<div class="js-d-test"></div>');   /                                return wrapper;                               }   5                        }).mixin(mixin.wireOnRender);       /                        this.el = $('<div />');   4                        this.callback = sinon.spy();       ;                        this.clock = sinon.useFakeTimers();       E                        dorsal.registerPlugin('test', this.callback);       <                        this.view = new View({el: this.el});                       });       A                    it('should call wire on render', function() {   I                        expect(this.callback).not.toHaveBeenCalledOnce();   +                        this.view.render();   ,                        this.clock.tick(10);   E                        expect(this.callback).toHaveBeenCalledOnce();                       });                       });       3                describe('useChannel', function() {   +                    beforeEach(function() {   c                        var View = Backbone.Marionette.ItemView.extend({}).mixin(mixin.useChannel);       /                        this.view = new View();                       });       S                    it('should have channel instance on this.channel', function() {   @                        expect(this.view.channel).toBeDefined();                       });       `                    it('should be this.channel instance on Backbone.Wreqr.Channel', function() {   a                        expect(this.view.channel instanceof Backbone.Wreqr.Channel).toBeTruthy();                       });                   });                   });           });   });5�_�                             ����                                                                                                                                                                                                                                                                                                                            $          $          V       UAZ�     �               �   define(function(require) {       'use strict';           var $ = require('jquery'),   '        Backbone = require('backbone'),       F        mixin = require('require/components/contacts_importer/mixin'),   #        dorsal = require('dorsal');           1        describe('contactsImporter', function() {   +            describe('mixins', function() {   1                describe('stepItem', function() {   +                    beforeEach(function() {   a                        var View = Backbone.Marionette.ItemView.extend({}).mixin(mixin.stepItem),   %                            $promise;       0                        this.done = sinon.spy();   0                        this.fail = sinon.spy();   /                        this.view = new View();   M                        $promise = this.view.stepController.getStepPromise();                                $promise   ,                            .done(this.done)   -                            .fail(this.fail);                       });       G                    it('should have the needed functions', function() {   G                        expect(this.view.stepController).toBeDefined();   V                        expect(this.view.stepController.getStepPromise).toBeDefined();   W                        expect(this.view.stepController.resolveStepWith).toBeDefined();                       });           N                    it('should call a function on resolved Step', function() {   E                        expect(this.done).not.toHaveBeenCalledOnce();   E                        this.view.stepController.resolveStepWith({});   E                        expect(this.fail).not.toHaveBeenCalledOnce();   A                        expect(this.done).toHaveBeenCalledOnce();                       });       L                    it('should call a function on reject Step', function() {   E                        expect(this.fail).not.toHaveBeenCalledOnce();   D                        this.view.stepController.rejectStepWith({});   E                        expect(this.done).not.toHaveBeenCalledOnce();   A                        expect(this.fail).toHaveBeenCalledOnce();                       });                   });       >                describe('triggerLoaderOnRender', function() {   +                    beforeEach(function() {   V                        var channel = Backbone.Wreqr.radio.channel('contactImporter'),   H                            View = Backbone.Marionette.ItemView.extend({   6                                template: function() {   8                                    return $('<div />');                               }   B                            }).mixin(mixin.triggerLoaderOnRender);       4                        this.callback = sinon.spy();   /                        this.view = new View();       F                        channel.vent.on('show:loader', this.callback);                       });       H                    it('should call show:loader on render', function() {   I                        expect(this.callback).not.toHaveBeenCalledOnce();   +                        this.view.render();   E                        expect(this.callback).toHaveBeenCalledOnce();                       });                       });       5                describe('loaderHelper', function() {   +                    beforeEach(function() {   V                        var channel = Backbone.Wreqr.radio.channel('contactImporter'),   H                            View = Backbone.Marionette.ItemView.extend({   2                            template: function() {   4                                return $('<div />');                               }   5                        }).mixin(mixin.loaderHelper);       4                        this.callback = sinon.spy();   /                        this.view = new View();       F                        channel.vent.on('show:loader', this.callback);                           });       M                    it('should have startLoader and stopLoader', function() {   D                        expect(this.view.startLoader).toBeDefined();   C                        expect(this.view.stopLoader).toBeDefined();                           });   R                    it('should call show:loader on startLoader call', function() {   I                        expect(this.callback).not.toHaveBeenCalledOnce();   +                        this.view.render();   I                        expect(this.callback).not.toHaveBeenCalledOnce();   0                        this.view.startLoader();   E                        expect(this.callback).toHaveBeenCalledOnce();                       });                       });       5                describe('wireOnRender', function() {   +                    beforeEach(function() {   H                        var View = Backbone.Marionette.ItemView.extend({   2                            template: function() {   ;                                var wrapper = $('<div />');       P                                wrapper.append('<div class="js-d-test"></div>');   /                                return wrapper;                               }   5                        }).mixin(mixin.wireOnRender);       /                        this.el = $('<div />');   4                        this.callback = sinon.spy();       ;                        this.clock = sinon.useFakeTimers();       E                        dorsal.registerPlugin('test', this.callback);       <                        this.view = new View({el: this.el});                       });       A                    it('should call wire on render', function() {   I                        expect(this.callback).not.toHaveBeenCalledOnce();   +                        this.view.render();   ,                        this.clock.tick(10);   E                        expect(this.callback).toHaveBeenCalledOnce();                       });                       });       3                describe('useChannel', function() {   +                    beforeEach(function() {   c                        var View = Backbone.Marionette.ItemView.extend({}).mixin(mixin.useChannel);       /                        this.view = new View();                       });       S                    it('should have channel instance on this.channel', function() {   @                        expect(this.view.channel).toBeDefined();                       });       `                    it('should be this.channel instance on Backbone.Wreqr.Channel', function() {   a                        expect(this.view.channel instanceof Backbone.Wreqr.Channel).toBeTruthy();                       });                   });                   });           });   });5�_�                    #   N    ����                                                                                                                                                                                                                                                                                                                            %          %          V       U@"6    �   "   $   �      N                    it('should call a function on resolved Step', function() {   !                        debugger;5�_�                    <       ����                                                                                                                                                                                                                                                                                                                            %          %          V       U@"M     �   ;   =        5�_�                       +    ����                                                                                                                                                                                                                                                                                                                            '          '          V       U@"R     �         �      +            describe('mixins', function() {   '                beforeEach(function() {    5�_�                            ����                                                                                                                                                                                                                                                                                                                            (          (          V       U@"V     �         �    �         �      4                        this.callback = sinon.spy();5�_�                            ����                                                                                                                                                                                                                                                                                                                            '          '          V       U@"W     �              5�_�                           ����                                                                                                                                                                                                                                                                                                                            '          '          V       U@"W     �         �      0                    this.callback = sinon.spy();5�_�                        0    ����                                                                                                                                                                                                                                                                                                                            )          )          V       U@"X    �         �      0                    this.callback = sinon.spy();                   });    5��