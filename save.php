
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>搜索-黑暗之魂图书馆</title>
	<link rel="stylesheet" type="text/css" href="css/normalize.css">
	<link rel="stylesheet" type="text/css" href="css/self.css">
</head>
<body>
	<div id="menu" class="header">
		<ul>
			<li><a href="/">首页</a></li>
			<li><a href="/list.html">目录</a></li>
			<li><a href="/form.html">表单</a></li>	
		</ul>
		<div style="text-align: center;line-height: 60px;position: absolute;right: 30px ">黑暗之魂图书馆</div><!--图片预备-->	
	</div>
	
	<div class="main"></div>
	<div class="totop">Top</div>
		<a href="/list.html" style="text-decoration: none;opacity: 0.1;background-color: gray" class="totop">Top</a>
		<div class="bodies" style="overflow: visible;">
	</div>
	<div class="bodies">
		<h2><?php echo $_POST["title"];?></h2>
		<p><?php echo $_POST["text"];?></p>
		<p>项目已提交，请等待处理</p>
	</div>
</body>
</html>