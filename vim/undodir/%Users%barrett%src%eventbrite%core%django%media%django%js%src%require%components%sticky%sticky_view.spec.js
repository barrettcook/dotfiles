Vim�UnDo�  D�7p��BK*9'�ȫn"aJ�����n�;H�X�   t                                  U�    _�                     [   9    ����                                                                                                                                                                                                                                                                                                                            [          [          V       U��    �   Z   \   t      G                spyOn(StickyView.prototype, 'update').andCallThrough();5�_�                    a       ����                                                                                                                                                                                                                                                                                                                            a          a          V       U�+     �   `   b   t      (                jasmine.Clock.useMock();5�_�                    a       ����                                                                                                                                                                                                                                                                                                                            a          a          V       U�,     �   `   b   t      '                jasmine.lock.useMock();5�_�                    a       ����                                                                                                                                                                                                                                                                                                                            a          a          V       U�-     �   `   b   t      (                jasmine.clock.useMock();5�_�                    a        ����                                                                                                                                                                                                                                                                                                                            a          a          V       U�.    �   `   b   t      *                jasmine.clock().useMock();5�_�                    e   &    ����                                                                                                                                                                                                                                                                                                                            a          a          V       U�2    �   e   g   u                      �   f   g   u    �   d   g   t      &                this.sticky.destroy();5�_�                    n       ����                                                                                                                                                                                                                                                                                                                            a          a          V       U�<     �   m   o   u      (                jasmine.Clock.tick(500);5�_�                    n       ����                                                                                                                                                                                                                                                                                                                            a          a          V       U�>    �   m   o   u      (                jasmine.clock.tick(500);5�_�          	          [        ����                                                                                                                                                                                                                                                                                                                            o          o          V       U�     �               u   C/*global spyOn:false, runs: false, waitsFor:false, console:false */   define(function(require) {       'use strict';           var $ = require('jquery'),   "        _ = require('underscore'),   #        EB = require('eventbrite'),   .        StickyView = require('./sticky_view'),   C        fixture = require('hb!./sticky_header_fixture.handlebars'),           options,           $stickyElement,           $wrapperElement;       "    function setStandardOptions(){           options = {   )            className: '.header-wrapper',   '            stickyEl: '.sticky-header',   %            offset: '.dummy-element',               classes: {   #                stickyEl: 'sticky',   "                stick: 'is-stuck',   %                unstick: 'is-unstick'               }   
        };       }           // Simulating Scrolling   5    // Reference: http://stackoverflow.com/a/22120982   3    function dispatchScroll(target, newScrollTop) {   (        target.scrollTop = newScrollTop;   1        var e = document.createEvent('UIEvents');   A        // creates a scroll event that bubbles, can be cancelled,   M        // and with its view and detail property initialized to window and 1,           // respectively   7        e.initUIEvent('scroll', true, true, window, 1);            target.dispatchEvent(e);       }       -    describe('Sticky Component', function() {       6        describe('Sticky initialization', function() {       "            beforeEach(function(){   1                EB.jasmine.setFixture(fixture());   %                setStandardOptions();       *                // Initialise with options   ?                this.sticky = new StickyView(options).render();               });       !            afterEach(function(){   &                this.sticky.destroy();               });       ;            it('should create a sticky object', function(){   2                expect(this.sticky).toBeDefined();               });       H            it('should set the initial visibility to false', function(){   :                expect(this.sticky.isVisible).toBe(false);               });       <            it('should setup an element object', function(){   6                expect(this.sticky.$el).toBeDefined();   :                expect(this.sticky.$el.length).toEqual(1);   V                expect(this.sticky.$el.hasClass(options.classes.stickyEl)).toBe(true);               });       B            it('should setup a sticky element object', function(){   <                expect(this.sticky.$stickyEl).toBeDefined();   @                expect(this.sticky.$stickyEl.length).toEqual(1);               });       <            it('should setup an options object', function(){   :                expect(this.sticky.options).toBeDefined();               });       :            it('should setup an offset value', function(){   ?                expect(this.sticky.scrollOffset).toBeDefined();   G                expect(typeof this.sticky.scrollOffset).toBe('number');               });           });       /        describe('Sticky behavior', function(){       "            beforeEach(function(){   1                EB.jasmine.setFixture(fixture());   %                setStandardOptions();       *                // Initialise with options   H                spyOn(StickyView.prototype, 'update').and.callThrough();   ?                this.sticky = new StickyView(options).render();       7                $wrapperElement = $('.header-wrapper');   5                $stickyElement = $('.sticky-header');       *                jasmine.clock().install();               });       !            afterEach(function(){   &                this.sticky.destroy();   ,                jasmine.clock().uninstall();               });       6            it('should trigger an update', function(){   !                var done = false;   D                expect(this.sticky.update.callCount).not.toEqual(1);       ,                dispatchScroll(window, 200);   *                jasmine.clock().tick(500);   @                expect(this.sticky.update.callCount).toEqual(1);               });           });           });       });5�_�      
          	   W       ����                                                                                                                                                                                                                                                                                                                            o          o          V       U��     �   V   X   u      /                .jasmine.setFixture(fixture());5�_�   	              
   W       ����                                                                                                                                                                                                                                                                                                                            o          o          V       U��     �   V   X   u      .                jasmine.setFixture(fixture());5�_�   
                 W       ����                                                                                                                                                                                                                                                                                                                            o          o          V       U��     �   V   X   u      '                .setFixture(fixture());5�_�                    W       ����                                                                                                                                                                                                                                                                                                                            o          o          V       U��     �   V   X   u      &                setFixture(fixture());5�_�                    W       ����                                                                                                                                                                                                                                                                                                                            o          o          V       U��    �   V   X   u      '                setFixtures(fixture());5�_�                    ,       ����                                                                                                                                                                                                                                                                                                                            o          o          V       U��     �   +   -   u      /                .jasmine.setFixture(fixture());5�_�                    ,       ����                                                                                                                                                                                                                                                                                                                            o          o          V       U��     �   +   -   u      .                jasmine.setFixture(fixture());5�_�                    ,       ����                                                                                                                                                                                                                                                                                                                            o          o          V       U��     �   +   -   u      '                .setFixture(fixture());5�_�                    ,       ����                                                                                                                                                                                                                                                                                                                            o          o          V       U��     �   +   -   u      &                setFixture(fixture());5�_�                     ,       ����                                                                                                                                                                                                                                                                                                                            o          o          V       U��    �   +   -   u      '                setFixtures(fixture());5��