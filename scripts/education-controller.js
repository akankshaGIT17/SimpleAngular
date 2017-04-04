
myApp.controller("eduController",function($scope,$location){


 $scope.$watch('institute',function(sf){
     if(sf ==undefined){
         $scope.message="All fields are required"
     }
     else{
         $scope.message=""
     }
     
     console.log(sf);},true);
    $scope.$watch('qualification',function(sf){
     if(sf ==undefined){
         $scope.message="All fields are required"
     }
     else{
         $scope.message=""
     }
     
     console.log(sf);},true);
    $scope.$watch('course',function(sf){
     if(sf ==undefined){
         $scope.message="All fields are required"
     }
     else{
         $scope.message=""
     }
     
     console.log(sf);},true);
    $scope.$watch('batch',function(sf){
     if(sf ==undefined){
         $scope.message="All fields are required"
     }
     else{
         $scope.message=""
     }
     
     console.log(sf);},true);
    

    $scope.login = function() {
    $location.path('/achievements');
  };

    $scope.choiceSet = {choices: []};
    $scope.quest = {};

    $scope.choiceSet.choices = [];
    $scope.addNewChoice = function () {
        $scope.choiceSet.choices.push('');
    };

    $scope.removeChoice = function (z) {
        //var lastItem = $scope.choiceSet.choices.length - 1;
        $scope.choiceSet.choices.splice(z,1);
}
})