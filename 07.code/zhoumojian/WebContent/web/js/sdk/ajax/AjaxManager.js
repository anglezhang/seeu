define(function (require, exports, module) {
    var t = require("../fram/common/Tools");
    var config = require("../SysConfig");
    var cAjax = function (config, $) {
        this.url = config.url || "";
        this.async = config.async || true;
        this.cache = config.cache || false;
        this.complete = config.complete;
        this.data = config.data;
        this.dataType = config.dataType || "json";
        this.error = config.error;
        this.type = config.type || "post";
        this.success = config.success;
        this.contentType = config.contentType
				|| "application/x-www-form-urlencoded; charset=utf-8";

        if (typeof cAjax._initialized === "undefined") {

            cAjax.prototype.doAction = function () {
                this.init();
            };

            cAjax.prototype.doStatusCode =
			{
			    404: function () {
			        alert(404);
			    },
			    403: function () {
			        alert(403);
			    },
			    500: function () {
			        alert(500);
			    },
			    387: function () {
			        alert(387);
			    }
			};
            cAjax.prototype.doBeforeSend = function () {
                // Console.debug("进行ajax请求");
            };
            cAjax.prototype.doComplete = function (XMLHttpRequest, textStatus) {
                // Console.debug("ajax请求完成");
            };
            cAjax.prototype.init = function () {
                $.ajax({
                    type: this.type,
                    url: this.url,
                    async: this.async,
                    cache: this.cache,
                    //complete : this.complete,
                    data: this.data,
                    dataType: this.dataType,
                    beforeSend: this.beforeSend || this.doBeforeSend(),
                    error: this.error,
                    statusCode: this.statusCode || this.doStatusCode,
                    success: this.success,
                    complete: this.complete || this.doComplete(),
                    contentType: this.contentType,
                    timeout: 100000000 //超时时间设置
                });
            };

            cAjax._initialized = true;
        }

    };

    //异步Ajax方法调用
    var createAction = function (url, success, data, error) {
        var config = {
            url: url,
            success: success,
            data: {
                dataJson: data
            },
            error: error
			, complete: 1000000
        };
        var c = new cAjax(config);
        c.doAction();
    };

    //同步Ajax方法调用，返回值智能判断
    //同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。
    var createSynchronousAction = function (url, success, data, error) {
        var config = {
            url: url,
            async: false,
            data: {
                dataJson: data
            },
            success: success,
            error: error
			, complete: 1000000
        };
        var c = new cAjax(config);
        c.doAction();
    };

    //同步Ajax调用,返回JSON数据
    //同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。
    var createSynAction = function ($, url, success) {
        var result;
        $.ajax({
            dataType: 'json',
            url: url,
            async: false,
            type: 'post',
            success: function (data) {
                result = data;
            }
		, complete: 1000000
        });
        return result;
    };
    /**
    * @param $ jquery 
    * @param tData 提交的数据
    * @param success 成功回调函数
    */
    module.exports.baiduPlaceAction = function($,tData,success)
    {
        var baiduHost = "http://api.map.baidu.com/place/v2/";
        var tHost = baiduHost + tData.action;
        tData.ak = "n9INEz3snkZ6CzcW00qdoEbx";
        delete tData.action;
        
        $.support.cors = true;
        $.ajax({
            dataType: 'json'
            , url: tHost
            //, async: true
            , type: 'POST'
            , data: tData
           , success: success
            , timeout: 10000     //超时时间设置
            , error: function (jqXHR, textStatus, errorThrown) {

                t.error("AjaxManger.onError()\n"
                            + "     textStatus=" + textStatus + "\n"
                            + "     errorThrown=" + errorThrown);
                t.error("\n     tHost=" + tHost + "\n    tData=" + t.jsonToStr(tData));
            }
            , beforeSend: function () {

            }
        });

    };
    //异步调用Ajax方法
    module.exports.actionJSON = function ($, tData, success, root) {
        var tHost = config.WebAPI_Host + tData.action;
        //alert(tHost);
        if (root !== undefined)
            tHost = root + tData.action;

        t.debug("\n         tData=" + tHost);
        var thatDate = tData;
        delete thatDate.action;
        jQuery.support.cors = true;
        $.ajax({
            dataType: 'json'
            , url: tHost
            //, async: true
            , type: 'POST'
            , data: thatDate
           , success: success
            , timeout: 10000     //超时时间设置
            , error: function (jqXHR, textStatus, errorThrown) {

                t.error("AjaxManger.onError()\n"
                            + "     textStatus=" + textStatus + "\n"
                            + "     errorThrown=" + errorThrown);
                t.error("\n     tHost=" + tHost + "\n    tData=" + t.jsonToStr(tData));
            }
            , beforeSend: function () {

            }
        });

    };

});