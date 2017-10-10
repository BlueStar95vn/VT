﻿angular.
    module('employeeEdit').
    component('employeeEdit', {
        templateUrl: '/app/employees/employee-edit/employee-edit.html',
        controller: function ($scope) {
            $scope.data = {
                model: null,
                availableOptions:
                [
                    { id: "1", firstName: "ABC", lastName: "BCD", gender: "Male", phoneNumber: "0122121212", position: "DEF", dob: "1/1/1990", email: "123@gmail.com", dayoff: "12" },
                    { id: "2", firstName: "OKA", lastName: "UHS", gender: "Female", phoneNumber: "65765765", position: "BOO", dob: "1/2/1990", email: "343@gmail.com", dayoff: "12" },
                    { id: "3", firstName: "AKO", lastName: "HSU", gender: "Male", phoneNumber: "0324234212", position: "DEF", dob: "1/3/1990", email: "153@gmail.com", dayoff: "12" },
                    { id: "4", firstName: "OAK", lastName: "SHU", gender: "Female", phoneNumber: "014543543", position: "DEF", dob: "1/4/1990", email: "2343@gmail.com", dayoff: "12" }
                ]
            }
            $scope.selectedOption = $scope.data.availableOptions[0];

        }
    });
