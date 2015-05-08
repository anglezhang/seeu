define(function (require, exports, module)
{
    require("angular");
    var $ = require("jquery");
    var t = require("../sdk/fram/common/Tools");
    var DataT = require("../sdk/fram/common/DateTool");
    var app =  angular.module('ngApp', []);
    var myApp = angular.module('myApp', ['ui.bootstrap']);
    var setAngular = function($scope,$timeout)
    {
        var updateClock = function()
                {
                $scope.clock = (new DataT(new Date()).format("YYYY-MM-DD HH:mm:ss"));
                $timeout(function()
                {
                    updateClock();
                }, 1000);
            };
        updateClock();
    };


    app.controller('MyController',
        function ($scope,$timeout) 
        {
            setAngular($scope,$timeout) ;
        }
    );
    myApp.filter('greet', function() 
    {
        return function(name) 
        {
            return 'Hello, ' + name + '!';
        };
    });
    $(function()
    {
        t.debug("init .... now is " + (new DataT(new Date()).format("YYYY-MM-DD HH:mm:ss")));
    });
})