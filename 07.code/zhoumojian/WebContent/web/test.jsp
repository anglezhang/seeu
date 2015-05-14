<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" href="css/bootstrap.css" >
    <link rel="stylesheet" type="text/css" href="css/function.css" >
    <link rel="stylesheet" type="text/css" href="css/style.css" >
		<title>测试</title>
	</head>
	<body>
	<%@ include file="common/head.jsp" %>
		<div style="line-height:30px">
			<lable>用户名：</lable><input type="text" id="username"><br>
			<lable>密码：</lable><input type="password" id="passwd"><br>
			<lable>重复密码：</lable><input type="password" id="repassword"><br>
			<input id="login_btn" type="button" value="登录测试">	<input type="button" value="注册测试" id="register">	
		</div>
		<p>登录返回结果</p>
		<textarea id="log_result" style="width:600px;height:100px"></textarea><br>
		<p>注册返回结果</p>
		<textarea id="reg_result" style="width:600px;height:100px"></textarea><br>
		<script src="lib/sea/sea.js"></script>
		  <script type="text/javascript">
			   seajs.config({
				  base: './lib/'
				  , alias: {
					  'jquery': 'jquery/jquery/1.11.1/jquery'
				  }
			  });
			  seajs.use("./js/plugins/test");
		  </script>
	</body>
</html>