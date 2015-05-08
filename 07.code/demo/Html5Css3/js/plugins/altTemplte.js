define(function (require, exports, module)
{
	var $ = require("jquery");
	var template = require("template");
	var t = require("../sdk/fram/common/Tools");
	var list = [{TITLE:"测试数据1",INF:"这就是测试数据，怎么着吧1"}
				,{TITLE:"测试数据2",INF:"这就是测试数据，怎么着吧2"}
				,{TITLE:"测试数据3",INF:"这就是测试数据，怎么着吧3"}];
	var source = "{{each list as value i}}"
			   + "	<p>第{{i+1}}行 {{value.TITLE}}</p>"
			   + "	<h1>{{value.INF}}</h1>"
			   + "{{/each}}";
	$(function()
	{
		var data = {list:list};
		var temHtml = template('templete',data);
		t.debug("temHtml = " + template.version);
		$("#templete").html(temHtml);
		var render = template.compile(source);

		var sourceHtml = render(data);
		for(var i=0;i<3;i++)
		{
			$("#temSource").append(sourceHtml);	
		}
		
	});

})