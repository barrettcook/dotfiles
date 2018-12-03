Vim�UnDo� 
XȒ|�����O&�j�2憲_.fS���d�   �                 
       
   
   
    UAZ�    _�                     '   J    ����                                                                                                                                                                                                                                                                                                                                                             U@ w    �   &   (   �      M            it('should ignore the result if the email changes', function () {5�_�                    '       ����                                                                                                                                                                                                                                                                                                                                                             U@ �    �   &   (   �      Q            it('should ignore the result if the email changes', function (done) {5�_�                    7       ����                                                                                                                                                                                                                                                                                                                                                             U@ �     �   6   8   �      X            it('should set exists state to true from successful response', function () {5�_�                    D       ����                                                                                                                                                                                                                                                                                                                                                             U@ �    �   C   E   �      R            it('should set exists to false from not found response', function () {5�_�                    �       ����                                                                                                                                                                                                                                                                                                                                                             U@ �    �   �   �   �      N            it('should not have a user object when unsuccessful', function() {5�_�                   p       ����                                                                                                                                                                                                                                                                                                                                                             U@ �    �   o   q   �      H            it('should have a user object when successful', function() {5�_�      	              �       ����                                                                                                                                                                                                                                                                                                                                                             U@ �    �   �   �   �      V            it('should clear any previous user object when unsuccessful', function() {5�_�      
           	           ����                                                                                                                                                                                                                                                                                                                                                             U@)�     �               �   /* global waitsFor */   define(function (require) {       'use strict';       .    var fakeServer = require('./fake_server'),   ,        AuthModel = require('./auth_model');       (    describe('Auth Model', function () {       4        describe('Checking Existence', function () {       $            beforeEach(function () {   8                this.server = sinon.fakeServer.create();   ,                this.model = new AuthModel({   2                    'email': 'will@eventbrite.com'                   });               });       #            afterEach(function () {   &                this.server.restore();               });       O            it('should make a request with the appropriate data', function () {       8                var xhr = sinon.useFakeXMLHttpRequest();   "                var requests = [];   .                xhr.onCreate = function(xhr) {   '                    requests.push(xhr);                   };       #                this.model.fetch();   0                expect(requests.length).toBe(1);   b                expect(requests[0].url).toBe('/api/v3/users/lookup/?email=will%40eventbrite.com');   7                expect(requests[0].method).toBe('GET');                       xhr.restore();               });       R            xit('should ignore the result if the email changes', function (done) {       1                var promise = this.model.fetch();   B                this.model.set('email', 'willina@eventbrite.com');       9                fakeServer.respondWithJSON(this.server, {   &                    'user_id': '1234',   %                    'can_login': true                   });       %                waitsFor(function() {   9                    return promise.state() !== 'pending';   3                }, 'The promise to complete', 100);   <                expect(this.model.get('exists')).toBeNull();               });       Y            xit('should set exists state to true from successful response', function () {   1                var promise = this.model.fetch();   9                fakeServer.respondWithJSON(this.server, {   &                    'user_id': '1234',   %                    'can_login': true                   });       %                waitsFor(function() {   9                    return promise.state() !== 'pending';   3                }, 'The promise to complete', 100);   <                expect(this.model.get('exists')).toBe(true);               });       S            xit('should set exists to false from not found response', function () {   1                var promise = this.model.fetch();   >                fakeServer.respondWithError(this.server, 404);       %                waitsFor(function() {   9                    return promise.state() !== 'pending';   3                }, 'The promise to complete', 100);   =                expect(this.model.get('exists')).toBe(false);               });           });       /        describe('Authenticating', function() {   $            beforeEach(function () {   8                this.server = sinon.fakeServer.create();   ,                this.model = new AuthModel({   3                    'email': 'will@eventbrite.com',   *                    'password': 'password'                   });               });       #            afterEach(function () {   &                this.server.restore();               });       O            it('should make a request with the appropriate data', function () {       8                var xhr = sinon.useFakeXMLHttpRequest();   "                var requests = [];   .                xhr.onCreate = function(xhr) {   '                    requests.push(xhr);                   };       "                this.model.save();   0                expect(requests.length).toBe(1);   D                expect(requests[0].url).toBe('/api/v3/auth/login/');   8                expect(requests[0].method).toBe('POST');   E                expect(JSON.parse(requests[0].requestBody)).toEqual({   ;                    'email_address': 'will@eventbrite.com',   *                    'password': 'password'                   });                       xhr.restore();               });       I            xit('should have a user object when successful', function() {   0                var promise = this.model.save();       9                fakeServer.respondWithJSON(this.server, {                       'emails': [                           {   9                            email: 'will@eventbrite.com',   .                            'verified': false,   +                            'primary': true                           }                       ],   !                    'id': '1234',   ,                    'name': 'Will Gaggioli',   )                    'first_name': 'Will',   ,                    'last_name': 'Gaggioli',   9                    'oauth_token': 'ABCDEFGHIJKLMNOPQRST'                   });       %                waitsFor(function() {   9                    return promise.state() !== 'pending';   3                }, 'The promise to complete', 100);   =                expect(this.model.get('user')).toBeDefined();                   });       O            xit('should not have a user object when unsuccessful', function() {   0                var promise = this.model.save();       >                fakeServer.respondWithError(this.server, 401);       %                waitsFor(function() {   9                    return promise.state() !== 'pending';   3                }, 'The promise to complete', 100);   ?                expect(this.model.get('user')).toBeUndefined();                   });       W            xit('should clear any previous user object when unsuccessful', function() {   +                this.model.set('user', {});   0                var promise = this.model.save();       >                fakeServer.respondWithError(this.server, 401);       %                waitsFor(function() {   9                    return promise.state() !== 'pending';   3                }, 'The promise to complete', 100);   ;                expect(this.model.get('user')).toBeFalsy();                   });           });       });   });5�_�   	               
           ����                                                                                                                                                                                                                                                                                                                                                             UAZ�     �               �   /* global waitsFor */   define(function (require) {       'use strict';       .    var fakeServer = require('./fake_server'),   ,        AuthModel = require('./auth_model');       (    describe('Auth Model', function () {       4        describe('Checking Existence', function () {       $            beforeEach(function () {   8                this.server = sinon.fakeServer.create();   ,                this.model = new AuthModel({   2                    'email': 'will@eventbrite.com'                   });               });       #            afterEach(function () {   &                this.server.restore();               });       O            it('should make a request with the appropriate data', function () {       8                var xhr = sinon.useFakeXMLHttpRequest();   "                var requests = [];   .                xhr.onCreate = function(xhr) {   '                    requests.push(xhr);                   };       #                this.model.fetch();   0                expect(requests.length).toBe(1);   b                expect(requests[0].url).toBe('/api/v3/users/lookup/?email=will%40eventbrite.com');   7                expect(requests[0].method).toBe('GET');                       xhr.restore();               });       R            xit('should ignore the result if the email changes', function (done) {       1                var promise = this.model.fetch();   B                this.model.set('email', 'willina@eventbrite.com');       9                fakeServer.respondWithJSON(this.server, {   &                    'user_id': '1234',   %                    'can_login': true                   });       %                waitsFor(function() {   9                    return promise.state() !== 'pending';   3                }, 'The promise to complete', 100);   <                expect(this.model.get('exists')).toBeNull();               });       Y            xit('should set exists state to true from successful response', function () {   1                var promise = this.model.fetch();   9                fakeServer.respondWithJSON(this.server, {   &                    'user_id': '1234',   %                    'can_login': true                   });       %                waitsFor(function() {   9                    return promise.state() !== 'pending';   3                }, 'The promise to complete', 100);   <                expect(this.model.get('exists')).toBe(true);               });       S            xit('should set exists to false from not found response', function () {   1                var promise = this.model.fetch();   >                fakeServer.respondWithError(this.server, 404);       %                waitsFor(function() {   9                    return promise.state() !== 'pending';   3                }, 'The promise to complete', 100);   =                expect(this.model.get('exists')).toBe(false);               });           });       /        describe('Authenticating', function() {   $            beforeEach(function () {   8                this.server = sinon.fakeServer.create();   ,                this.model = new AuthModel({   3                    'email': 'will@eventbrite.com',   *                    'password': 'password'                   });               });       #            afterEach(function () {   &                this.server.restore();               });       O            it('should make a request with the appropriate data', function () {       8                var xhr = sinon.useFakeXMLHttpRequest();   "                var requests = [];   .                xhr.onCreate = function(xhr) {   '                    requests.push(xhr);                   };       "                this.model.save();   0                expect(requests.length).toBe(1);   D                expect(requests[0].url).toBe('/api/v3/auth/login/');   8                expect(requests[0].method).toBe('POST');   E                expect(JSON.parse(requests[0].requestBody)).toEqual({   ;                    'email_address': 'will@eventbrite.com',   *                    'password': 'password'                   });                       xhr.restore();               });       I            xit('should have a user object when successful', function() {   0                var promise = this.model.save();       9                fakeServer.respondWithJSON(this.server, {                       'emails': [                           {   9                            email: 'will@eventbrite.com',   .                            'verified': false,   +                            'primary': true                           }                       ],   !                    'id': '1234',   ,                    'name': 'Will Gaggioli',   )                    'first_name': 'Will',   ,                    'last_name': 'Gaggioli',   9                    'oauth_token': 'ABCDEFGHIJKLMNOPQRST'                   });       %                waitsFor(function() {   9                    return promise.state() !== 'pending';   3                }, 'The promise to complete', 100);   =                expect(this.model.get('user')).toBeDefined();                   });       O            xit('should not have a user object when unsuccessful', function() {   0                var promise = this.model.save();       >                fakeServer.respondWithError(this.server, 401);       %                waitsFor(function() {   9                    return promise.state() !== 'pending';   3                }, 'The promise to complete', 100);   ?                expect(this.model.get('user')).toBeUndefined();                   });       W            xit('should clear any previous user object when unsuccessful', function() {   +                this.model.set('user', {});   0                var promise = this.model.save();       >                fakeServer.respondWithError(this.server, 401);       %                waitsFor(function() {   9                    return promise.state() !== 'pending';   3                }, 'The promise to complete', 100);   ;                expect(this.model.get('user')).toBeFalsy();                   });           });       });   });5�_�                    O       ����                                                                                                                                                                                                                                                                                                                                                             U@ �     �   N   P   �      0        xdescribe('Authenticating', function() {5��