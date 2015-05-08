define(function(require, exports, module)
{
	var $ = require("jquery");//引入jquery
	var t = require("../sdk/fram/common/Tools");//引入日志工具类
	var ajax = require("../sdk/ajax/AjaxManager");//引入ajax请求
	var action = require("../sdk/ActionManager");//引入action管理类
	require("../../lib/md5")($);
	$(function()
		{
			$(document).on("click","#login_btn",function(e)
				{
					var userName = $("#username").val();
					var pwd = $("#passwd").val();
					var code = "12345";
					t.debug("username=" + userName + "| pwd = " + $.md5(pwd));
					ajax.actionJSON($,action.login(userName,$.md5(pwd),code),function (data)
						{
							//对返回数据做非空判断
							if(!t.isEmpty(data))
							{
								//var state = data.stateCode;
								$("#log_result").val(t.jsonToStr(data));
							}
						});
				});
			$(document).on('click', '#register', function(event) 
			{
					var userName = $("#username").val();
					var pwd = $("#passwd").val();
					var code = "12345";
					t.debug("username=" + userName + "| pwd = " + $.md5(pwd));
					ajax.actionJSON($,action.register(userName,$.md5(pwd),$.md5(pwd),
						code,"测试站点","Token"),function (data)
						{
							//对返回数据做非空判断
							if(!t.isEmpty(data))
							{
								//var state = data.stateCode;
								$("#reg_result").val(t.jsonToStr(data));
							}
						});
				});
			
		});
})