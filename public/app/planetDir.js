angular.module('myStarWarsApp')
    .directive('planetDir', function(){
        return {
            restrict: 'E',
            templateUrl: './app/routes/home/planetDirTmpl.html',
            controller: 'jediController'
           
        }
    })