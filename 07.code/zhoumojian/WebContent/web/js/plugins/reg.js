define(function(require, exports, module)
{
	var $ = require("jquery");
	var t = require("../sdk/fram/common/Tools");//引入日志工具类
	require("../../lib/validate/jquery.validate")($);
	require("../../lib/md5")($);
	var ajax = require("../sdk/ajax/AjaxManager");//引入ajax请求
	var action = require("../sdk/ActionManager");//引入action管理类
	/**
	* 获取验证码并且倒计时
	*/
	var verifcode = function()
	{
		$(document).on("click","#verifcodeBtn",function(event)
			{
				var phone = $("#inputUser").val();
				/*valid = $("#regform").validate(
					{
						rules:
							{
								inputUser:{require:true,maxlength:50}
							}
						,messages:
						{
							inputUser:{required:"请您输入用户名",maxlength:"用户名不能超过长度50个字符"}
						}
					});
				t.debug("verifcode valid=" +　valid);
				if(!valid) return;*/
				ajax.actionJSON($,action.verifCode(phone),function (data)
				{
					if(!t.isEmpty(data))
					{
						var codeClt = $("#verifcodeBtn");
						var time = 120;//倒计时120s
						//验证码重新获得计数器
						setInterval(function()
							{
								if(time<=0)
								{
									clearInterval(this);
									codeClt.val("获取验证码");
									codeClt.attr("disabled",false);
								}else
								{
									t.debug("verifcode = " + t.jsonToStr(data));
									codeClt.val("(" + time + ")");
								}
								time--;
							},1000);
					}
				});
			});
	};
	/**
	* 提交注册
	*/
	var regestBtn = function()
	{
		$(document).on('click', '#regSubmit', function(event) {
			var isValid = $("#regform").valid();
			if(isValid)
			{
				var phone = $("#inputUser").val();
				var verifcode = $("#inputCode").val();
				var passWord = $("#inputPwd").val();
				var rePassWord = $("#inputRePwd").val();
				var siteName = $("#inputName").val();
				ajax.actionJSON($,action.register(phone,$.md5(passWord),$.md5(rePassWord),verifcode,siteName),
					function(data)
					{
						t.debug("regestBtn data=" + t.jsonToStr(data));
					});
			}
		});
	};
	$(function()
		{
			verifcode();
			validator = $("#regform").validate(
				{
					rules:
					{
						inputUser:{required:true,maxlength:50}
						,inputCode:{required:true,}
						,inputPwd:{required:true,minlength:6,maxlength:50}
						,inputRePwd:{required:true,minlength:6,maxlength:50}
						,inputName:{required:true,maxlength:200}
					}
					,messages:
					{
						inputUser:{required:"请您输入用户名",maxlength:"用户名不能超过长度50个字符"}
						,inputCode:{required:"请您验证码"}
						,inputPwd:{required:"请输入密码",minlength:"密码至少6位",maxlength:"密码不能超过长度50个字符"}
						,inputRePwd:{required:"请重复密码",minlength:"密码至少6位",maxlength:"密码不能超过长度50个字符"}
						,inputName:{required:"请输入活动组织（俱乐部）",maxlength:"活动组织（俱乐部）不能超过200"}
					}
					,submitHandler: function(form) {
           //提交数据
          } 
				});
			regestBtn();
		});
})