angular.module('myStarWarsApp')
  .controller('jediController',
    function ($scope, swapiService, planetImgSrvcs, $stateParams) {
      $scope.planetImages = planetImgSrvcs.getImages();
      $scope.planetDetail = {};
      $scope.getData = function () {
        swapiService.getPlanets()
          .then(function (response) {
            $scope.data = response.data.results;
            $scope.getSinglePlanet();
            console.log($scope.data);
          });
      }

      $scope.getData();

      $scope.getSinglePlanet = function() {
        var name = $stateParams.name;
        for (var i = 0; i < $scope.data.length; i++) {
          if ($scope.data[i].name === name) {
            $scope.planetDetail = $scope.data[i];
            for (var j = 0; j < $scope.planetImages.length; j++) {
              if($scope.planetImages[j].name == name){
                $scope.planetDetail.images = $scope.planetImages[j];
                console.log('hi');
              }            
          }
            console.log($scope.planetDetail);
        }
      }

    }
    })