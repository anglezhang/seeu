define(function(require, exports, module)
{
    var $ = require("jquery");
    var t = require("../sdk/fram/common/Tools");//引入日志工具类
    require("../../lib/validate/jquery.validate")($);
    require("../../lib/md5")($);
    var ajax = require("../sdk/ajax/AjaxManager");//引入ajax请求
    var action = require("../sdk/ActionManager");//引入action管理类
    /**
    * 登录方法
    */
    var login = function()
    {
        $(document).on("click","#loginSubmit",function()
            {
                var isValid = $("#loginForm").valid();
                t.debug(isValid)
                if(isValid)
                {
                    var userName = $("#inputUser").val();
                    var pwd = $.md5($("#inputPwd").val());
                    ajax.actionJSON($,action.login(userName,pwd),function(data)
                        {
                            t.debug("login data=" + t.jsonToStr(data));
                        });
                }
            });
    };
    $(function()
        {
            validator = $("#loginForm").validate(
                {
                    rules:
                    {
                        inputUser:{required:true}
                        ,inputPwd:{required:true}
                    }
                    ,messages:
                    {
                        inputUser:{required:"请您输入用户名"}
                        ,inputPwd:{required:"请您输入密码"}
                    }
                    ,submitHandler: function(form) {
                        //提交数据
                    } 
                });  
            login();
        });
});