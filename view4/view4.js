'use strict';

angular.module('myApp.view4', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view4', {
      templateUrl: 'view4/view4.html',
      controller: 'View4Ctrl'
    });
  }])

  .controller('View4Ctrl', [function () {


  }])
  .controller('Moving',function($scope,$timeout){
    $scope.numpos={"top":100,"left":100}
    
    $scope.getStyle=function(){return {"top":$scope.numpos["top"]+"px","left":$scope.numpos["left"]+"px"};}
    $scope.letssee="";
    $scope.log="ok";  
    $scope.counter=0;
    var v=50;
    $scope.getMoving=function(){
      var delay=5000;
      if($scope.log!="ok")return;
      $scope.log="first";
      $scope.letssee="start";
      for(var i=0;i<5;i++)
      {
      $timeout(function(){
      $scope.numpos["top"]+=20;
      $scope.numpos["left"]+=20;
        },delay);
      delay+=5000;

      }
    
    }
    ;
    



 })