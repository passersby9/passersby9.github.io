//tab�л����÷���
function tabChange(clicks) { //����Ϊtab�����a��ǩ��ע�Ⲽ��
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
