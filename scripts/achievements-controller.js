myApp.controller("achieveController",function($scope,$http){
         
 $scope.$watch('achievements',function(sf){
     if(sf ==undefined){
         $scope.message="All fields are required"
     }
     else{
         $scope.message=""
     }
     
     console.log(sf);},true);  
    $scope.$watch('skills',function(sf){
     if(sf ==undefined){
         $scope.message="All fields are required"
     }
     else{
         $scope.message=""
     }
     
     console.log(sf);},true);  
    
     $scope.choiceSet = {choices: []};
    $scope.quest = {};

    $scope.choiceSet.choices = [];
    $scope.addNewChoice = function () {
        $scope.choiceSet.choices.push('');
    };

    $scope.removeChoice = function (z) {
        //var lastItem = $scope.choiceSet.choices.length - 1;
        $scope.choiceSet.choices.splice(z,1);
    };            
                 })