Vim�UnDo� �(]�D�2�g��\9X�ZHoҫ1����ϑ�l݄   �                                  UAZ�   
 _�                     W       ����                                                                                                                                                                                                                                                                                                                            \          \          V       U@"�     �   V   X   �      2            it('should save on blur', function() {5�_�                    V        ����                                                                                                                                                                                                                                                                                                                            \          \          V       U@"�    �   U   X   �       5�_�                    z   ?    ����                                                                                                                                                                                                                                                                                                                            {          {          V       U@#2    �   y   |   �      ?                    expect(this.processSpy).toHaveBeenCalled();5�_�                    {       ����                                                                                                                                                                                                                                                                                                                            |          |          V       U@#H    �   z   {                              debugger;5�_�                    p   B    ����                                                                                                                                                                                                                                                                                                                            {          {          V       U@#�     �   o   q   �      E                it('should process form without errors', function() {5�_�                    z   ?    ����                                                                                                                                                                                                                                                                                                                            {          {          V       U@#�     �   y   }   �      ?                    expect(this.processSpy).toHaveBeenCalled();5�_�                    |        ����                                                                                                                                                                                                                                                                                                                            }          }          V       U@#�     �   {   |           5�_�      	              |       ����                                                                                                                                                                                                                                                                                                                            |          |          V       U@#�     �   {   }   �      C                    expect(_.isEmpty(this.view.errors)).toBe(true);5�_�      
           	   |   G    ����                                                                                                                                                                                                                                                                                                                            |          |          V       U@#�     �   {   ~   �      G                        expect(_.isEmpty(this.view.errors)).toBe(true);5�_�   	              
   |   G    ����                                                                                                                                                                                                                                                                                                                            |          |          V       U@#�     �   {   ~   �      G                        expect(_.isEmpty(this.view.errors)).toBe(true);5�_�   
                 }       ����                                                                                                                                                                                                                                                                                                                            |          |          V       U@#�    �   |   ~   �                              done()5�_�                    ~       ����                                                                                                                                                                                                                                                                                                                            |          |          V       U@#�    �   }      �                          }, 0);5�_�                    }       ����                                                                                                                                                                                                                                                                                                                            ~          }          V       U@#�     �   |   }                                  done();                       }, 1);5�_�                    |       ����                                                                                                                                                                                                                                                                                                                            }          }          V       U@#�     �   {   }   �      G                        expect(_.isEmpty(this.view.errors)).toBe(true);5�_�                    {       ����                                                                                                                                                                                                                                                                                                                            }          }          V       U@#�    �   z   {          +                    setTimeout(function() {5�_�                    p       ����                                                                                                                                                                                                                                                                                                                            |          |          V       U@#�    �   o   q   �      I                it('should process form without errors', function(done) {5�_�                    �       ����                                                                                                                                                                                                                                                                                                                            �          �          V       U@$;     �      �   �      ]                it('should show captcha when message contains url like content', function() {5�_�                       C    ����                                                                                                                                                                                                                                                                                                                            �          �          V       U@$<   	 �   ~   �   �      C            describe('with info that needs a captcha', function() {5�_�                    �       ����                                                                                                                                                                                                                                                                                                                            �          �          V       U@%`   
 �   �   �   �      N                it('should process form, fill errors and render', function() {5�_�                            ����                                                                                                                                                                                                                                                                                                                            �          �          V       U@)�     �               �   /* global expect */   define(function(require) {       'use strict';           var $ = require('jquery'),   "        _ = require('underscore'),   #        EB = require('eventbrite'),       C        ContactOrganizerView = require('./contact_organizer_view'),   E        ContactOrganizerModel = require('./organizer_message_model'),   G        fixture = require('hb!./contact_organizer_fixture.handlebars');       1    describe('ContactOrganizerView', function() {               beforeEach(function() {   -            EB.jasmine.setFixture(fixture());   7            this.server = EB.sinon.fakeServer.create();       j            this.contactSuccessSpy = EB.sinon.spy(ContactOrganizerView.prototype, 'handleContactSuccess');   P            this.saveSpy = EB.sinon.spy(ContactOrganizerView.prototype, 'save');   T            this.renderSpy = EB.sinon.spy(ContactOrganizerView.prototype, 'render');   Z            this.processSpy = EB.sinon.spy(ContactOrganizerView.prototype, 'processForm');       8            this.formModel = new ContactOrganizerModel({   #                eventPublicId: 123,   &                organizerPublicId: 456               });   2            this.view = new ContactOrganizerView({   1                el: '.js-contact-organizer-form',   &                model: this.formModel,   *                termsOfServiceURL: 'test',   F                captchaKey: '6LfbZr8SAAAAAKlolhfFS6RTWGhnjaGawWtkZkhP'               });           });               afterEach(function() {   "            this.server.restore();   #            this.saveSpy.restore();   %            this.renderSpy.restore();   &            this.processSpy.restore();   -            this.contactSuccessSpy.restore();           });       .        describe('Instantiation', function() {       L            it('should have a class of contact-organizer-form', function() {   Q                expect($(this.view.el)).toHaveClass('js-contact-organizer-form');               });       D            it('should have the terms of service info', function() {   B                expect(this.view.termsOfServiceURL).toBeDefined();               });               });       *        describe('Rendering', function() {       #            beforeEach(function() {   #                this.view.render();               });       :            it('appends the view to the DOM', function() {   E                expect($(this.view.el).children().length).toEqual(2);               });       6            it('returns the view object', function() {   >                expect(this.view.render()).toEqual(this.view);               });       5            it('renders the right info', function() {                   // Form Action   A                expect(this.view.$el.find('form').attr('action'))   D                    .toContain(this.formModel.get('eventPublicId'));   A                expect(this.view.$el.find('form').attr('action'))   H                    .toContain(this.formModel.get('organizerPublicId'));               });               });       2        describe('Information input', function() {       #            beforeEach(function() {   #                this.view.render();   >                $('.contact_organizer_link').trigger('click');               });       '            // FIXME: blur doesn't work   3            xit('should save on blur', function() {   2                $(this.view.ui.nameField).focus();   6                $(this.view.ui.nameField).val('test');   3                $(this.view.ui.emailField).focus();       8                expect(this.saveSpy).toHaveBeenCalled();   I                expect(this.view.model.get('from_name')).toEqual('test');               });               });       -        describe('Form sending', function() {       "            beforeEach(function(){   #                this.view.render();   C                this.responseBody = '{"errors":[],"success":true}';   (                this.server.respondWith(                       'POST',   7                    '/ajax/contact-organizer/123/456/',   T                    [ 200, {'Content-Type': 'application/json'}, this.responseBody ]                   );               });       5            describe('with proper info', function() {   J                xit('should process form without errors', function(done) {   6                    $(this.view.ui.nameField).focus();   :                    $(this.view.ui.nameField).val('test');   7                    $(this.view.ui.emailField).focus();   D                    $(this.view.ui.emailField).val('test@test.com');   9                    $(this.view.ui.messageField).focus();   B                    $(this.view.ui.messageField).val('test test');   4                    $(this.view.ui.sendBtn).focus();   =                    $(this.view.ui.sendBtn).trigger('click');       ?                    expect(this.processSpy).toHaveBeenCalled();   C                    expect(_.isEmpty(this.view.errors)).toBe(true);                   });               });       C            describe('with info that needs a captcha', function() {   6                // FIXME: can't get blur tests to work   ^                xit('should show captcha when message contains url like content', function() {   9                    $(this.view.ui.messageField).focus();   F                    $(this.view.ui.messageField).val('http://as.as.');   6                    $(this.view.ui.nameField).focus();       >                    expect(this.renderSpy).toHaveBeenCalled();   J                    expect($('#container_captcha_privacy')).toBeVisible();                   });               });       4            describe('with wrong info', function() {   O                xit('should process form, fill errors and render', function() {   6                    $(this.view.ui.nameField).focus();   :                    $(this.view.ui.nameField).val('test');   7                    $(this.view.ui.emailField).focus();   ;                    $(this.view.ui.emailField).val('test');   9                    $(this.view.ui.messageField).focus();   B                    $(this.view.ui.messageField).val('test test');   4                    $(this.view.ui.sendBtn).focus();   =                    $(this.view.ui.sendBtn).trigger('click');       ?                    expect(this.processSpy).toHaveBeenCalled();   >                    expect(this.renderSpy).toHaveBeenCalled();   =                    expect(_.size(this.view.errors)).toBe(1);                   });               });               });           });       });        5�_�                             ����                                                                                                                                                                                                                                                                                                                            �          �          V       UAZ�     �               �   /* global expect */   define(function(require) {       'use strict';           var $ = require('jquery'),   "        _ = require('underscore'),   #        EB = require('eventbrite'),       C        ContactOrganizerView = require('./contact_organizer_view'),   E        ContactOrganizerModel = require('./organizer_message_model'),   G        fixture = require('hb!./contact_organizer_fixture.handlebars');       1    describe('ContactOrganizerView', function() {               beforeEach(function() {   -            EB.jasmine.setFixture(fixture());   7            this.server = EB.sinon.fakeServer.create();       j            this.contactSuccessSpy = EB.sinon.spy(ContactOrganizerView.prototype, 'handleContactSuccess');   P            this.saveSpy = EB.sinon.spy(ContactOrganizerView.prototype, 'save');   T            this.renderSpy = EB.sinon.spy(ContactOrganizerView.prototype, 'render');   Z            this.processSpy = EB.sinon.spy(ContactOrganizerView.prototype, 'processForm');       8            this.formModel = new ContactOrganizerModel({   #                eventPublicId: 123,   &                organizerPublicId: 456               });   2            this.view = new ContactOrganizerView({   1                el: '.js-contact-organizer-form',   &                model: this.formModel,   *                termsOfServiceURL: 'test',   F                captchaKey: '6LfbZr8SAAAAAKlolhfFS6RTWGhnjaGawWtkZkhP'               });           });               afterEach(function() {   "            this.server.restore();   #            this.saveSpy.restore();   %            this.renderSpy.restore();   &            this.processSpy.restore();   -            this.contactSuccessSpy.restore();           });       .        describe('Instantiation', function() {       L            it('should have a class of contact-organizer-form', function() {   Q                expect($(this.view.el)).toHaveClass('js-contact-organizer-form');               });       D            it('should have the terms of service info', function() {   B                expect(this.view.termsOfServiceURL).toBeDefined();               });               });       *        describe('Rendering', function() {       #            beforeEach(function() {   #                this.view.render();               });       :            it('appends the view to the DOM', function() {   E                expect($(this.view.el).children().length).toEqual(2);               });       6            it('returns the view object', function() {   >                expect(this.view.render()).toEqual(this.view);               });       5            it('renders the right info', function() {                   // Form Action   A                expect(this.view.$el.find('form').attr('action'))   D                    .toContain(this.formModel.get('eventPublicId'));   A                expect(this.view.$el.find('form').attr('action'))   H                    .toContain(this.formModel.get('organizerPublicId'));               });               });       2        describe('Information input', function() {       #            beforeEach(function() {   #                this.view.render();   >                $('.contact_organizer_link').trigger('click');               });       '            // FIXME: blur doesn't work   3            xit('should save on blur', function() {   2                $(this.view.ui.nameField).focus();   6                $(this.view.ui.nameField).val('test');   3                $(this.view.ui.emailField).focus();       8                expect(this.saveSpy).toHaveBeenCalled();   I                expect(this.view.model.get('from_name')).toEqual('test');               });               });       -        describe('Form sending', function() {       "            beforeEach(function(){   #                this.view.render();   C                this.responseBody = '{"errors":[],"success":true}';   (                this.server.respondWith(                       'POST',   7                    '/ajax/contact-organizer/123/456/',   T                    [ 200, {'Content-Type': 'application/json'}, this.responseBody ]                   );               });       5            describe('with proper info', function() {   J                xit('should process form without errors', function(done) {   6                    $(this.view.ui.nameField).focus();   :                    $(this.view.ui.nameField).val('test');   7                    $(this.view.ui.emailField).focus();   D                    $(this.view.ui.emailField).val('test@test.com');   9                    $(this.view.ui.messageField).focus();   B                    $(this.view.ui.messageField).val('test test');   4                    $(this.view.ui.sendBtn).focus();   =                    $(this.view.ui.sendBtn).trigger('click');       ?                    expect(this.processSpy).toHaveBeenCalled();   C                    expect(_.isEmpty(this.view.errors)).toBe(true);                   });               });       C            describe('with info that needs a captcha', function() {   6                // FIXME: can't get blur tests to work   ^                xit('should show captcha when message contains url like content', function() {   9                    $(this.view.ui.messageField).focus();   F                    $(this.view.ui.messageField).val('http://as.as.');   6                    $(this.view.ui.nameField).focus();       >                    expect(this.renderSpy).toHaveBeenCalled();   J                    expect($('#container_captcha_privacy')).toBeVisible();                   });               });       4            describe('with wrong info', function() {   O                xit('should process form, fill errors and render', function() {   6                    $(this.view.ui.nameField).focus();   :                    $(this.view.ui.nameField).val('test');   7                    $(this.view.ui.emailField).focus();   ;                    $(this.view.ui.emailField).val('test');   9                    $(this.view.ui.messageField).focus();   B                    $(this.view.ui.messageField).val('test test');   4                    $(this.view.ui.sendBtn).focus();   =                    $(this.view.ui.sendBtn).trigger('click');       ?                    expect(this.processSpy).toHaveBeenCalled();   >                    expect(this.renderSpy).toHaveBeenCalled();   =                    expect(_.size(this.view.errors)).toBe(1);                   });               });               });           });       });        5��