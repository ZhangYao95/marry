/**
 * Created by zhang on 2017/9/13.
 */
var zy=angular.module("app",[]);
zy.directive('zynav1',function () {
    return {
        restrict:'AE',
        templateUrl:'daohanglan.html',
        scope:{}
    }
});
zy.directive('zylunbo',function () {
    return {
        restrict:'AE',
        templateUrl:'图片轮播-self.html',
        scope:{}
    }
});
zy.directive('zyms',function () {
    return {
        restrict:'AE',
        templateUrl:'jingdongmiaosha.html',
        scope:{}
    }
});
zy.directive('zyhh',function () {
    return {
        restrict:'AE',
        templateUrl:'faxianhaohuo.html',
        scope:{}
    }
});
zy.directive('zylq',function () {
    return {
        restrict:'AE',
        templateUrl:'lingquanzhongxin.html',
        scope:{}
    }
});

