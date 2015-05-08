define(function(require, exports, module)
{
    var t = require('../common/Tools');
    /**界面管理工具类*/
    module.exports={
        /**
         * 
         * @param {string} cookieName 保存的cookie对象名称
         * @return {string} cookieVal 返回cookie对象的值
         */
        getCookieVal:function(cookieName)
        {
            //判断是否存在本地缓存
            if(window.localStorage)
            {
                return window.localStorage.getItem(cookieName);
            }
            var cookieStart = -1;//cookie对象保存字符开始位置
            var cookieEnd = 0;//cookie对象字符串结束位置
            if(document.cookie.length>0)
            {
                cookieStart = document.cookie.indexOf(cookieName + "=");
                if(cookieStart > -1)
                {
                    cookieStart += (cookieStart + cookieName.length + 1);
                    cookieEnd = document.cookie.indexOf(";",cookieStart);
                    if(cookieEnd == -1)
                    {
                        cookieEnd = document.cookie.length;
                    }
                    return unescape(document.cookie.substring(cookieStart,cookieEnd));
                }
                return "";
            }
        }
        /**
        * @param {string} cookieName 保存的cookie名称
        * @paran {string} cookieVal 保存的cookie对象值
        * @param {integer} expiredays 过期天数
        */
        ,setCookieVal:function(cookieName,cookieVal,expiredays)
        {
            //判断是否支持本地缓存，若支持，优先本地缓存
            if(window.localStorage)
            {
                window.localStorage.setItem(cookieName,cookieVal);
            }
            var exdate = new Date();//如果过期时间为null 则将今天转化为1000*60*60*24*365格式
            exdate.setDate(exdate.getDate()+expiredays);
            document.cookie = cookieName 
                            + "=" + escape(cookieVal) 
                            + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
        }
    };
});
