angular.module('app')
  .controller('appController', appController);

appController.$inject = ['$scope', '$rootScope', '$timeout'];
function appController($scope, $rootScope, $timeout) {
  window.onload = function(){    
    $(".js-preload-bg").imagesLoaded({
      background : true
    }, function(){
      $timeout(function(){
        $(".loader").fadeOut(500)
        $(".cover-bg").fadeOut(500, function(){
          $(".container-fluid").removeClass("custom-overflow-y-hidden");
          $timeout(function(){
            $("#particles").fadeIn(transitionTime * 3);
          }, transitionTime );
        });          
      }, 1000)
    })
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
        $('#content-container').animate({ scrollTop: (0) }, 'fast');
        $timeout(function(){
          $("#particles").fadeIn(transitionTime);            
        }, transitionTime / 2)
      }, transitionTime);
    }
    else return;
  }
}
