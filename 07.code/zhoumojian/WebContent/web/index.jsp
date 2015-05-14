<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <title>周末见-首页</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css" >
    <link rel="stylesheet" type="text/css" href="css/function.css" >
    <link rel="stylesheet" type="text/css" href="css/style.css" >
</head>
<body>
<%@ include file="common/head.jsp" %>
<div class="container">
	<div class="row">
    	<div class="col-xs-3 sidebar">
        	<aside>
            <dl class="sidebar-list">
             <dt><i class="function-ico"></i>功能</dt>
             <dd><a href="#" target="_self">短信群发</a></dd>
             <dd><a href="#" target="_self">自动回复</a></dd>
             <dd><a href="#" target="_self">购买保险</a></dd>
             <dd><a href="#" target="_self">添加插件</a></dd>             
            </dl>
            <dl class="sidebar-list">
             <dt><i class="admin-ico"></i>管理</dt>
             <dd><a href="活动列表.html" target="_self">活动管理</a></dd>
             <dd><a href="报名模板.html" target="_self">报名模板</a></dd>
             <dd><a href="会员管理.html" target="_self">会员管理</a></dd>             
            </dl>
            <dl class="sidebar-list">
             <dt><i class="share-ico"></i>推广</dt>
             <dd><a href="#" target="_self">社会化分享</a></dd>
             <dd><a href="#" target="_self">社交媒体</a></dd>
             <dd><a href="#" target="_self">推广合作</a></dd>
             <dd><a href="#" target="_self">邮件邀请</a></dd>             
            </dl>
            <dl class="sidebar-list">
             <dt><i class="tj-ico"></i>统计</dt>
             <dd><a href="报名统计.html" target="_self">报名统计</a></dd>
             <dd><a href="活动统计.html" target="_self">活动统计</a></dd>             
            </dl>
            <dl class="sidebar-list">
             <dt><i class="set-ico"></i>设置</dt>
             <dd><a href="#" target="_self">个人资料</a></dd>
             <dd><a href="#" target="_self">头像设置</a></dd>
             <dd><a href="#" target="_self">密码重置</a></dd>         
            </dl>
            </aside>
        </div>
        <div class="col-xs-9 grid-r">
            	<section class="row menu-bar">
                 	<div class="col-xs-4 item">
                    	<a class="release" href="发布活动.html"><i class="glyphicon glyphicon-plus"></i> 发布活动</a>
                    </div>
                    <div class="col-xs-4 item">
                    	<div class="activity">
                        	<h1>9</h1>
                            <p>活动总数（次）</p>
                        </div>
                    </div>
                    <div class="col-xs-4 item">
                    	<div class="members">
                        	<h1>85</h1>
                            <p>会员总数（人）</p>
                        </div>
                    </div>
                </section>
                
                <section class="row">
                	<div class="ht"><h3>消息通知</h3></div>
                    <ul class="ul-list mt10">
                    	<li><a href="内容页.html" target="_blank">微信认证命名规则调整</a><span class="pull-right">2015-01-05</span></li>	
                        <li><a href="内容页.html" target="_blank">公众平台增加违规处理申诉功能</a><span class="pull-right">2015-01-05</span></li> 
                        <li><a href="内容页.html" target="_blank">多客服新增自定义客服头像和接口功能</a><span class="pull-right">2015-01-05</span></li>
                        <li><a href="内容页.html" target="_blank">卡券商户后台最新发布五项优化</a><span class="pull-right">2015-01-05</span></li>
                        <li><a href="内容页.html" target="_blank">公众平台安全中心新增运营者微信号</a><span class="pull-right">2015-01-05</span></li>
                        <li><a href="内容页.html" target="_blank">域名在朋友圈内分享需要ICP备案</a><span class="pull-right">2015-01-05</span></li>
                    </ul>
                    <div class="text-center">
                      <ul class="pagination">
                        <li><a href="#">&laquo;</a></li>
                        <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#">&raquo;</a></li>
                      </ul>
                    </div>
                </section>
        </div>
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
      seajs.use("./js/plugins/common/bootstrap");
  </script>
</body>
</html>
