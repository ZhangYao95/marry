/**
 * Created by zhang on 2017/3/29.
 */
// QQ侧边栏
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
// 左侧导航栏

$(function () {
    $(".level1>a").click(function () {
        $(this).addClass("curren").next().show(500)
            .parent().siblings().children("a").removeClass("curren").next().hide(500);
        return false;
    })
});
