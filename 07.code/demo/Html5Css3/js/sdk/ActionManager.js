define(function(require, exports, module)
{
        
    module.exports={
        /**
         * 获取资讯列表
         * @param pageSize 页面大小
         * @param index 页码
         * */
        getZixunList:function(pageSize,index)
        {
            var rData={
                action: "public_Ajax.ashx?Method=GetNewsList"
                        ,pageSize : pageSize
                        ,index : index
		};
            return rData;
        },
        testAction:function(sql)
        {
            var rData = {action : "query.do"
				,clienttype : "mobile.user.client"
				,source : "1"
				,TimeStamp : new Date().getTime()
				,content : encodeURI(sql)
                            };
            return rData;
        }
        ,/**
         * 获得数据条数
         * */
        getListCount:function()
        {
            var tData = { action:"public_Ajax.ashx?Method=NewCount"
                           };
              return tData;
        }
    };
});