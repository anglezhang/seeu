require.config({
    //配置angular的路径
    paths:{
        "angular":"../lib/angular/angular", 
        "angular-route":"../lib/angular/angular-route.min",
        "app":"./app"
    },
    //这个配置是你在引入依赖的时候的包名
    shim:{
        "angular":{
            exports:"angular"
        },
        "angular-route":{
            exports:"angular-route"
        }
    }   
});
requirejs(['jquery', 'canvas', 'app/sub'],
function   ($,        canvas,   sub) {
    angular.module('ngApp', []).controller('MyController',
        function ($scope,$timeout) 
        {
            var updateClock = function()
                {
                $scope.clock = new Date();
                $timeout(function()
                {
                    updateClock();
                }, 1000);
            };
            updateClock();
        }
    );
});