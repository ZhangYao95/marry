/**
 * Created by zhang on 2017/9/14.
 */
$(function () {
    banner2();
    $(".ms-attrleft,.ms-attrright").hide();
    $(".ms-content").hover(function () {
        $(".ms-attrleft,.ms-attrright").show();
    },function () {
        $(".ms-attrleft,.ms-attrright").hide();
    })
});
function banner2() {
    var $newli=$(".msct-li1").eq(0).clone();
    $(".msct-ul1").append($newli);
    var $oUL=$(".msct-ul1");
    var $oLIs=$(".msct-li1");
    var $arrLeft=$(".ms-attrleft");
    var $arrRight=$(".ms-attrright");
    var index=0;
    var imgLength=$oLIs.length-1;
    //点击左右两边的箭头
    $arrRight.click(function () {
        index++;
        if(index>imgLength){
            index=1;
            $oUL.css({
                "left":0+"px"
            })
        }
        move(index);
    });
    $arrLeft.click(function () {
        index--;
        if(index<0){
            index=imgLength-1;
            $oUL.css({
                "left":-(imgLength)*$oLIs.eq(0).width()+"px"
            })
        }
        move(index);
    });

    function move(index) {
        $oUL.animate({
            left:index*(-$oLIs.eq(0).width())+"px"
        });
    }
}