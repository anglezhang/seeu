define(function(require, exports, module)
{
        
    /**
    * 登录接口
    * @param username{string} 用户名
    * @param passwd{string} 密码 md5加密过的密码
    * @param veriCode{string} 验证码
    */    
    module.exports.login = function(username,passwd,veriCode,token)
    {
        var tData = {
            action:"ajax/user!login_nnl.action"
            ,userName:username
            ,passWord:passwd
            ,veriCode:veriCode
        }
        return tData;
    };
    /**
    * 登录接口
    * @param userName{string} 用户名
    * @param passWord{string} 密码 md5加密过的密码
    * @param repassWord{string} 重复密码 md5加密过的密码
    * @param veriCode{string} 验证码
    * @param siteName{string} 站点名称
    */  
    module.exports.register = function(userName,passWord,repassWord,veriCode,siteName)
    {
        var tData = {
            action:"com.seeu.seeuaction.UserRegestAction.do"
            ,userName:userName
            ,password:passWord
            ,rePassword:repassWord
            ,verifCode:veriCode
            ,siteName:siteName
        }
        return tData;
    };
    /**
    * @param phone 手机号码
    */
    module.exports.verifCode = function(phone)
    {
        var tData = {
            action:"com.seeu.seeuaction.VerifCodeAction.do"
            ,phone:phone
            
        }
        return tData;
    };
    /**
    * 密码重置接口
    * @param username{string} 用户名
    * @param passwd{string} 密码 md5加密过的密码
    * @param veriCode{string} 验证码
    */  
    module.exports.resetPassword = function(userName,passWord,veriCode)
    {
        var tData = {
            action:"resetPassword"
            ,userName:userName
            ,passWord:passWord
            ,veriCode:veriCode
        }
        return tData;
    };
});