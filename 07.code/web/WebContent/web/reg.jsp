<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<title>周末见-注册</title>
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
      <form id="regform">
        <div class="form-header"><h1>用户注册</h1></div>
        <div class="form-body">
            <div class="form-group">
              <label for="inputUser">手机号</label>
              <input type="text" class="form-control" id="inputUser" name="inputUser" placeholder="请输入电话">
            </div>
            <div class="form-group"><input type="button" id="verifcodeBtn" class="btn btn-default" value="获取验证码"></div>
            <div class="form-group">
              <label for="inputCode">验证码</label>
              <input type="text" class="form-control" id="inputCode" name="inputCode" placeholder="请输入短信验证码">
            </div>
            
            <div class="form-group">
              <label for="inputPwd">密码</label>
              <input type="password" class="form-control" id="inputPwd" name="inputPwd" placeholder="请输入密码">
            </div>   
            
            <div class="form-group">
              <label for="inputRePwd">重复密码</label>
              <input type="password" class="form-control" id="inputRePwd" name="inputRePwd" placeholder="请重复密码">
            </div>

             <div class="form-group">
              <label for="inputName">活动组织（俱乐部）</label>
              <input type="text" class="form-control" id="inputName" placeholder="请输入用户名/电话">
            </div>                
            <div class="form-group"><button type="submit" id="regSubmit" class="btn btn-default btn-block">免费注册</button></div>
            
            <div class="form-group text-right">
            	已有账号，请<a href="login.jsp" class="btn-link">登录</a >
            </div>
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
      seajs.use(["./js/plugins/common/bootstrap","./js/plugins/reg"]);
  </script>
</body>
</html>
