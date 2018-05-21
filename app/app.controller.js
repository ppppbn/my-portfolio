angular.module('app')
  .controller('appController', appController);

appController.$inject = ['$scope', '$rootScope', '$timeout'];
function appController($scope, $rootScope, $timeout) {
  particlesJS.load('particles', './configs/particles.json', function() {
    // console.log('callback - particles.js config loaded');
  });  
  $scope.screenState = 'home';
  $scope.changeState = function(state, brand){
    if(state !== $scope.screenState){
      $("#particles").fadeOut(500);
      if(!brand) {
        if($('.navbar-toggle').css('display') !='none'){
          $('.navbar-toggle').click();
        }
      }
      $scope.screenState = "";
      $timeout(function(){
        $scope.screenState = state;
        $("#particles").fadeIn(500);
      }, 550);
    }
  }
}
