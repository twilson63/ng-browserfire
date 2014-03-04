var fs = require('fs');

module.exports = angular.module('feature', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('feature', {
        url: '/feature',
        abstract: true,
        template: '<div ui-view></div>'
      })
      .state('feature.list', {
        url: '/',
        controller: require('./controllers/list'),
        template: fs.readFileSync(__dirname + '/templates/list.html', 'utf8')
      })
      .state('feature.new', {
        url: '/new',
        controller: require('./controllers/new'),
        template: fs.readFileSync(__dirname + '/templates/form.html', 'utf8')
      });
  });