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
	function login(){
		alert("已登录\n欢迎,"+getcookie("account"));
		$("#account").val("");
		$("#code").val("");
		window.location.href="javascript:history.go(-1)";
	}
	function getcookie(account){
		var name = account + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
    }
    return "";
	}
