//tab切换公用方法
function tabChange(clicks) { //参数为tab点击的a标签，注意布局
    clicks.on("click", function() {
        var cl = $(this).attr("class");
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
        $("." + cl + "-div").siblings().hide();
        $("." + cl + "-div").fadeIn();
    })
}
	function prin(i){
		return eval("_"+i);
	}
