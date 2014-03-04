require('firebase/firebase');
require('simple-login/firebase-simple-login');
require('angular/angular');
require('router/release/angular-ui-router');
require('angularfire/angularfire');

angular.module('app', [
  'ui.router', 
  'firebase',
  require('./feature').name
]).config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/feature/');
});
