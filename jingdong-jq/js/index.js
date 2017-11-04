/**
 * Created by zhang on 2017/9/12.
 */
$(
    function () {
    $(".choose-address").hide();
    $(".address").hover(
        function () {
           $(this).find(".choose-address").show();
    },
        function () {
            $(this).find (".choose-address").hide();
    })
    });
    $(function () {
    $(".nav-content").hide();
    $(".nav-li").hover(function () {
            $(this).find (".nav-content").show();
        },
        function () {
            $(this).find (".nav-content").hide();
        })
});
    //index大轮播
$(function () {
    var duration=2000;
    var playTime=1000;
    banner(duration,playTime);
    $(".arr_left,.arr_right").hide();
    $(".scrollBanner").hover(function () {
        $(".arr_left,.arr_right").show();
    },function () {
        $(".arr_left,.arr_right").hide();
    })
});
function banner(duration,playTime) {
    var $newli=$(".scrollBanner .bannerBox li").eq(0).clone();
    $(".bannerBox").append($newli);
    var $oUL=$(".bannerBox");
    var $oLIs=$oUL.children();
    var $oNavlist=$(".scroll_num").children();
    var $arrLeft=$(".arr_left");
    var $arrRight=$(".arr_right");
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

    var timer=setInterval(function () {
        $arrRight.click();
    },duration);

    clearTimer($oUL);
    clearTimer($arrRight);
    clearTimer($arrLeft);
    clearTimer($oNavlist);

    function clearTimer($ele) {
        $ele.hover(function () {
            clearInterval(timer);
        },function () {
            timer=setInterval(function () {
                $arrRight.click();
            },duration);
        })
    };

    $oNavlist.each(function () {
        var _index=$(this).index();
        $(this).click(function () {
            if(_index>imgLength){
                _index=1;
            }
            move(_index);
        })
    });

    function move(index) {
        $oUL.stop().animate({
            left:index*(-$oLIs.eq(0).width())+"px"
        },playTime);
        $oNavlist.removeClass("current");
        $oNavlist.eq(index>=imgLength?0:index).addClass("current");
    }
}




//index.html 选项卡
$(function () {
    var $a=$(" .title>a");
    $a.hover(function () {
        $(this).addClass("selected")
            .siblings().removeClass("selected");
        var index=$a.index(this);
        $("div.sq-content>div").eq(index).show().siblings().hide();
    })
});

//jingdongmiaosha.html
$(function () {
    msBanner2();
    $(".ms-attrleft,.ms-attrright").hide();
    $(".ms-content").hover(function () {
        $(".ms-attrleft,.ms-attrright").show();
    },function () {
        $(".ms-attrleft,.ms-attrright").hide();
    })
});
function msBanner2() {
    var $msnewli1=$(".msct-li1").eq(0).clone();
    $(".msct-ul1").append($msnewli1);
    var $msoUL1=$(".msct-ul1");
    var $msoLIs1=$(".msct-li1");
    var $msarrLeft1=$(".ms-attrleft");
    var $msarrRight1=$(".ms-attrright");
    var msindex1=0;
    var msimgLength1=$msoLIs1.length-1;
    //点击左右两边的箭头
    $msarrRight1.click(function () {
        msindex1++;
        if(msindex1>msimgLength1){
            msindex1=1;
            $msoUL1.css({
                "left":0+"px"
            })
        }
        move(msindex1);
    });
    $msarrLeft1.click(function () {
        msindex1--;
        if(msindex1<0){
            msindex1=msimgLength-1;
            $msoUL1.css({
                "left":-(msimgLength1)*$msoLIs1.eq(0).width()+"px"
            })
        }
        move(msindex1);
    });

    function move(msindex1) {
        $msoUL1.animate({
            left:msindex1*(-$msoLIs1.eq(0).width())+"px"
        });
    }
}

//jingdongmiaosha.html
$(function () {
    var duration=2000;
    var playTime=1000;
    smbanner3(duration,playTime);

});

function smbanner3(duration,playTime) {
    var $smnewli=$(".ms-right-ul li").eq(0).clone();
    $(".ms-right-ul").append($smnewli);
    var $smoUL=$(".ms-right-ul");
    var $smoLIs=$smoUL.children();
    var $smoNavlist=$(".ms-dot").children();
    var smindex=0;
    var smimgLength=$smoLIs.length-1;

    var timer=setInterval(function () {
        smindex++;
        if(smindex>smimgLength){
            smindex=1;
            $smoUL.css({
                "left":0+"px"
            })
        }
        move(smindex);
    },duration);

    clearTimer($smoUL);
    clearTimer($smoNavlist);

    function clearTimer($ele) {
        $ele.hover(function () {
            clearInterval(timer);
        },function () {
            timer=setInterval(function () {
                smindex++;
                if(smindex>smimgLength){
                    smindex=1;
                    $smoUL.css({
                        "left":0+"px"
                    })
                }
                move(smindex);
            },duration);
        })
    }

    $smoNavlist.each(function () {
        var _index=$(this).index();
        $(this).click(function () {
            if(_index>smimgLength){
                _index=1;
            }
            move(_index);
        })
    });

    function move(index) {
        $smoUL.stop().animate({
            left:index*(-$smoLIs.eq(0).width())+"px"
        },playTime);
        $smoNavlist.removeClass("ms-current");
        $smoNavlist.eq(index>=smimgLength?0:index).addClass("ms-current");
    }
}

// faxianhaohuo.html
$(function () {
    var duration=2000;
    var playTime=1000;
    hhbanner4(duration,playTime);
});
function hhbanner4(duration,playTime) {
    var $hhnewli=$(".hh-center-ul li").eq(0).clone();
    $(".hh-center-ul").append($hhnewli);
    var $hhoUL=$(".hh-center-ul");
    var $hhoLIs=$hhoUL.children();
    var $hhoNavlist=$(".hh-num").children();
    var hhindex=0;
    var hhimgLength=$hhoLIs.length-1;

    var timer=setInterval(function () {
        hhindex++;
        if(hhindex>hhimgLength){
            hhindex=1;
            $hhoUL.css({
                "left":0+"px"
            })
        }
        move(hhindex);
    },duration);

    clearTimer($hhoUL);
    function clearTimer($ele) {
        $ele.hover(function () {
            clearInterval(timer);
        },function () {
            timer=setInterval(function () {
                hhindex++;
                if(hhindex>hhimgLength){
                    hhindex=1;
                    $hhoUL.css({
                        "left":0+"px"
                    })
                }
                move(hhindex);
            },duration);
        })
    }

    $oNavlist.each(function () {
        var _index=$(this).index();
        $(this).click(function () {
            if(_index>hhimgLength){
                _index=1;
            }
            move(_index);
        })
    });

    function move(index) {
        $hhoUL.stop().animate({
            left:index*(-$hhoLIs.eq(0).width())+"px"
        },playTime);
        $hhoNavlist.removeClass("hh-current");
        $hhoNavlist.eq(index>=hhimgLength?0:index).addClass("hh-current");
    }
}

//faxianhaohuo.html 选项卡
$(function () {
    var $li=$(" .hh-rightcontent-top ul li");
    $li.hover(function () {
        $(this).addClass("hh-selected")
            .siblings().removeClass("hh-selected");
        var index=$li.index(this);
        $(".hh-right-shuqian").eq(index).show().siblings().hide();
    })
});

//lingquanzhongxin.html

$(function () {
    var duration=2000;
    var playTime=1000;
    lqbanner5(duration,playTime);
    $(".lq-attrleft,.lq-attrright").hide();
    $(".lq-right-content").hover(function () {
        $(".lq-attrleft,.lq-attrright").show();
    },function () {
        $(".lq-attrleft,.lq-attrright").hide();
    })
});
function lqbanner5(duration,playTime) {
    var $lqnewli=$(".lq-right-ul li").eq(0).clone();
    $(".lq-right-ul").append($lqnewli);
    var $lqoUL=$(".lq-right-ul");
    var $lqoLIs=$lqoUL.children();
    var $lqoNavlist=$(".lq-dot").children();
    var $lqarrLeft=$(".lq-attrleft");
    var $lqarrRight=$(".lq-attrright");
    var lqindex=0;
    var lqimgLength=$lqoLIs.length-1;
    //点击左右两边的箭头
    $lqarrRight.click(function () {
        lqindex++;
        if(lqindex>lqimgLength){
            lqindex=1;
            $lqoUL.css({
                "left":0+"px"
            })
        }
        move(lqindex);
    });
    $lqarrLeft.click(function () {
        lqindex--;
        if(lqindex<0){
            lqindex=lqimgLength-1;
            $lqoUL.css({
                "left":-(lqimgLength)*$lqoLIs.eq(0).width()+"px"
            })
        }
        move(lqindex);
    });

    var timer=setInterval(function () {
        $lqarrRight.click();
    },duration);

    clearTimer($lqoUL);
    clearTimer($lqarrRight);
    clearTimer($lqarrLeft);
    clearTimer($lqoNavlist);

    function clearTimer($ele) {
        $ele.hover(function () {
            clearInterval(timer);
        },function () {
            timer=setInterval(function () {
                $lqarrRight.click();
            },duration);
        })
    };

    $lqoNavlist.each(function () {
        var _index=$(this).index();
        $(this).click(function () {
            if(_index>lqimgLength){
                _index=1;
            }
            move(_index);
        })
    });

    function move(index) {
        $lqoUL.stop().animate({
            left:index*(-$lqoLIs.eq(0).width())+"px"
        },playTime);
        $lqoNavlist.removeClass("lq-current");
        $lqoNavlist.eq(index>=lqimgLength?0:index).addClass("lq-current");
    }
}

$(function () {
    var $totop=$(".idx-side-li").eq(6);
    $totop.click(function () {
        $("body,html").animate({scrollTop:0},800);
        return flase;
    })
})

