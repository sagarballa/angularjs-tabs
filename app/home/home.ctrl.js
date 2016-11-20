(function(){
    'use strict';
    
    angular.module('TabsApp').controller('HomeController', homeController);
    
    function homeController(){
        var vm = this;
        vm.tabs = [];
        
        vm.addTab = addTab;
        vm.removeTab = removeTab;
        
        var tabCounter = 0;
        function addTab() {
            tabCounter++;
            var tab = {
                view : "test",
                counter : tabCounter
            }
            vm.tabs.push(tab);
        }
        
        function removeTab(index) {
            vm.tabs.splice(index,1);
        }
        
        function init(){
            addTab();
        }
        
        init();
    }
})();