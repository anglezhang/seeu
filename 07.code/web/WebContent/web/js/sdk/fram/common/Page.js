define (function(require, exports, module)
{
	/**
	* 分页工具类
	* pageConfig 分页数据配置
	* eg: {pageSize:1 //页面大小
	*	  ,index:1 当前页页码
	*	  ,pageCount:0 总页数
	*	  ,pageLast:0 最后页页码
	*	  ,gruopSize:5 页面组 即页码的起止间隔大小}
	*/
	function Page(pageConfig)
	{
		this.pageConfig = pageConfig;
		
		this.getPageCount = function(count)
		{
			if(count<pageConfig.pageSize)
	        {
	            pageConfig.pageCount = 1;
	            pageConfig.pageSize = count;
	         }else if(count%pageConfig.pageSize==0)
	        {
	            pageConfig.pageCount = count/pageConfig.pageSize;
	        }else if(count%pageConfig.pageSize!=0)
	        {
	            pageConfig.pageCount = Math.floor(count/pageConfig.pageSize) + 1;
	            pageConfig.pageLast = count%pageConfig.pageSize;//最后一页大小
	        }
			var liDiv = $("#prepage");
			var width = 150/pageConfig.pageCount ;
	        var liHtml = "";
	        $("li[name='footli']").remove();
	        t.debug("count/pageConfig.pageSize = " + Math.ceil((Number(count)/pageConfig.pageSize)));
	        var endSize = 0 ;
	        if(Math.ceil((Number(count)/pageConfig.pageSize)) > pageConfig.gruopSize)
	        {
	            endSize = pageConfig.gruopSize;
	        }
	        else endSize = Math.ceil((Number(count)/pageConfig.pageSize));
			for(var i=1;i<=endSize;i++)
			{
				liHtml += "<li name=\"footli\" >" + i + "</li>";
			}
	        liDiv.after(liHtml);
	        $("li[name='footli']").first().addClass("xuan");
	        carFenyMarg();
		}
	}
});