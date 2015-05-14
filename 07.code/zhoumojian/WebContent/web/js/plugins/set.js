define(function(require, exports, module)
{
	var $ = require("jquery");
	var location = require("location");
	//界面初始加载
	$(function()
		{
			var lca = new location($);
			lca.showLocation();
		});
})