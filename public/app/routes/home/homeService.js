angular.module('myStarWarsApp').service('swapiService', function ($http) {
    this.getPlanets = function() {
        return $http({
            method: 'GET',
            url: 'http://swapi.co/api/planets?page=1'
        })
    }
})