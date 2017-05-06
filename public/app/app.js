angular.module('myStarWarsApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/app/routes/home/homeTemplate.html'
    })
    .state('planetDetails', {
      url: '/planetDetails/:name',
      templateUrl: '/app/routes/planetDetails/planetDetails.html',
      controller: 'jediController'
    })
    
    $urlRouterProvider.otherwise('/')
})