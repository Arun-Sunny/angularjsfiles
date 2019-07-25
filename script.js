var app = angular.module('mainApp', []);

app.controller('mainCtrl', function($scope){
    $scope.student={
        fName: "",
        lName: "",
        address: "",
        schoolName: "",
        cgpa: "",
        achievements: " "
        };
        $scope.Submit = function() {
        //var a1 =$scope.student.fName;
        var a1 ="arun";
        $scope.student.lName=a1;
        }
});