angular.module('app')
  .controller('appController', appController);

appController.$inject = ['$scope', '$rootScope', '$timeout'];
function appController($scope, $rootScope, $timeout) {
  particlesJS.load('particles', './configs/particles.json', function() {
    // console.log('callback - particles.js config loaded');
  });  
  $scope.screenState = 'home';
  $scope.changeState = function(state){
    if(state !== $scope.screenState){
      $scope.screenState = "";
      $timeout(function(){
        $scope.screenState = state;
      }, 550);
    }
  }
}
