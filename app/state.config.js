(function(){
    'use strict';
    
    angular.module('TabsApp').config(stateConfig);
    
    function stateConfig($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
        
        var homeState = {
            name : 'home',
            url : '/home',
            templateUrl : 'app/home/home.html',
            controller : 'HomeController',
            controllerAs : 'homeCtrl'
        }
        
        $stateProvider.state(homeState);
    }
})();