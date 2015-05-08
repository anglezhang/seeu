define(function(require, exports, module)
{
	var $ = require("jquery");
	var t = require("../sdk/fram/common/Tools");
	require("../../lib/validate/jquery.validate")($);
	var validator;
	$(function()
		{
			validator = $("#myform").validate(
				{
					rules:
					{
						reg_name:{required:true,maxlength:20}
						,reg_password:{required:true}
					}
					,messages:
					{
						reg_name:{required:"瓜娃你没有输",maxlength:"长度太长了"}
						,reg_password:"请输入密码"
					}
					,submitHandler: function(form) {
           //提交数据
          } 
				});
		});
	$(document).on("click","#submit",function(e)
		{
			var isValid = $("#myform").valid();
			t.debug("验证结果 isValid = " + isValid );
		});
})