angular.
    module('vacationApp').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix("");
            $routeProvider.
                when('/employees', {
                    template: '<employee-list></employee-list>'
                }).
                when('/teams', {
                    template: '<team-management></team-management>'
                }).
                when('/vacation', {
                    template: '<vacation></vacation>'
                }).
                when('/report', {
                    template: '<report></report>'
                }).
                when('/employees/detail', {
                    template:'<employee-detail></employee-detail>'
                }).
                when('/employees/edit', {
                    template:'<employee-edit></employee-edit>'
                }).
                when('/employees/new', {
                    template:'<employee-new></employee-new>'
                }).
                otherwise('/null');
        }
    ]);