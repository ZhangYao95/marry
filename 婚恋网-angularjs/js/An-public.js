/**
 * Created by zhang on 2017/6/2.
 */
var zy=angular.module("app",[]);
zy.directive('zynav',function () {
    return {
        restrict:'AE',
        templateUrl:'zynav.html',
        scope:{}
    }
});
zy.directive('zyheader',function () {
    return {
        restrict:'AE',
        templateUrl:'zyheader.html',
        scope:{}
    }
});
zy.directive('zyfooter',function () {
    return {
        restrict:'AE',
        templateUrl:'zyfooter.html',
        scope:{}
    }
});
zy.directive('zyqq',function () {
    return {
        restrict:'AE',
        templateUrl:'zyqq.html',
        scope:{}
    }
});
zy.directive('zyside',function () {
    return {
        restrict:'AE',
        templateUrl:'zyside.html',
        scope:{}
    }
});
zy.controller('ctrl',['$scope',function ($scope) {
    $scope.name="123";
}]);

$(function () {
    $(".level1>a").click(function () {
        $(this).addClass("curren").next().show(500)
            .parent().siblings().children("a").removeClass("curren").next().hide(500);
        return false;
    })
});


$(function(){
    $("#aFloatTools_Show").click(function(){
        $('#divFloatToolsView').animate({width:'show',opacity:'show'},100,function(){$('#divFloatToolsView').show();});
        $('#aFloatTools_Show').hide();
        $('#aFloatTools_Hide').show();
    });
    $("#aFloatTools_Hide").click(function(){
        $('#divFloatToolsView').animate({width:'hide', opacity:'hide'},100,function(){$('#divFloatToolsView').hide();});
        $('#aFloatTools_Show').show();
        $('#aFloatTools_Hide').hide();
    });
});