angular.module('app')
  .controller('appController', appController);

appController.$inject = ['$scope', '$rootScope', '$timeout'];
function appController($scope, $rootScope, $timeout) {
  window.onload = function(){
    $timeout(function(){
      $(".cover-bg").fadeOut(1500, function(){
        $timeout(function(){
          $("#particles").show(transitionTime * 2);
        }, transitionTime * 1.5);
      });      
    },800);    
  }

  if(window.location.hash){
    $scope.screenState = window.location.hash.substr(1);  
  }
  else {
    window.location.hash = "home";
    $scope.screenState = 'home';
  }

  if($scope.screenState === 'contact'){
    $timeout(function(){
      $('.contact-container').fadeIn(500);
    },1000);
  }

  //load particles in background
  // particlesJS.load('particles', './configs/particles.json', function() {
  //   //TODO : Load successfully
  // });      
  $scope.changeState = function(state, brand){    
    if(state !== $scope.screenState){
      window.location.hash = state;
      $("#particles").fadeOut(transitionTime);
      if(!brand) {
        if($('.navbar-toggle').css('display') !='none'){
          $('.navbar-toggle').click();
        }
      }
      $scope.screenState = "";
      $timeout(function(){
        $scope.screenState = state;          
        $timeout(function(){
          $("#particles").fadeIn(transitionTime);            
        }, transitionTime / 2)
      }, transitionTime);
    }
    else return;
  }
}
