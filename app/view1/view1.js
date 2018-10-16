'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http', function($scope, $http){

    $scope.onSubmitClicked = function(){
        //alert("Inside controller: value of myval is ");
        if($scope.login==='abc' && $scope.pass==='def') {
            $scope.clicked = true;
            $http.get('https://istheapplestoredown.com/api/v1/status/worldwide').success(function (data) {
                $scope.countries = data;
                console.log(data);
            });
        }
    }

}]);