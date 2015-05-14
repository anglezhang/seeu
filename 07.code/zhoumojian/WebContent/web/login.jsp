<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<title>周末见-登录</title>
<link rel="stylesheet" type="text/css" href="css/bootstrap.css" >
<link rel="stylesheet" type="text/css" href="css/bootstrap-theme.css" >
<link rel="stylesheet" type="text/css" href="css/function.css" >
<link rel="stylesheet" type="text/css" href="css/login.css" >
</head>
<body>
<nav class="navbar navbar-inverse" role="navigation">
<div class="container">   
  <div class="navbar-header">    
    <a href="#" class="navbar-brand" target="_self">周末见</a>
  </div>   
</div>
</nav>

<div class="container">
  
  <div class="login-form">  
      <form id="loginForm">
        <div class="form-header"><h1>用户登录</h1></div>
        <div class="form-body">
            <div class="form-group">
              <label for="inputUser">用户名</label>
              <input type="text" class="form-control" id="inputUser" name="inputUser" placeholder="请输入用户名/电话">
            </div>
            <div class="form-group">
              <label for="inputPwd">密码</label>
              <input type="password" class="form-control" id="inputPwd" name="inputPwd" placeholder="请输入密码">
            </div>       
            <div class="checkbox">
              <label>
                <input type="checkbox">下次自动登录
              </label>
              <span class="pull-right"><a href="reg.jsp" class="btn-link">免费注册</a></span>
            </div>
            <button type="submit" id="loginSubmit" class="btn btn-default">登录</button>
        </div>
	</form>
  </div>
</div>
<%@ include file="common/foot.jsp"%>
  <script src="lib/sea/sea.js"></script>
  <script type="text/javascript">
       seajs.config({
          base: './lib/'
          , alias: {
              'jquery': 'jquery/jquery/1.11.1/jquery'
          }
      });
      seajs.use(["./js/plugins/common/bootstrap","./js/plugins/login"]);
  </script>
</body>
</html>
