define(function (require, exports, module)
{
	var $ = require("jquery");
	var t = require("../sdk/fram/common/Tools");
	var ajax = require("../sdk/ajax/AjaxManager");
	var aobj = null;
	
	var showAObjFun = function()
	{
		
	};
	$(function()
	{
		var imageItem = [{Longitude:108.970573,Latitude:34.270651,title:'东新街',info:"食上东新街美食城1层 "}
						,{Longitude:108.969801,Latitude:34.270539,title:'新世界',info:"新世界百货美食城"}
						,{Longitude:108.953196,Latitude:34.229055,title:'小寨',info:"小寨赛格美食城"}
						,{Longitude:108.950217,Latitude:34.267909,title:'回民街',info:"回民街大娘麦饭"}
						,{Longitude:108.950212,Latitude:34.266731,title:'唐人街',info:"唐人街美食城"}];
		// for(item in imageItem)
		// {
		// 	t.debug("Longitude=" + imageItem[item].Longitude
		// 			+ "|Latitude=" + imageItem[item].Latitude
		// 			+ "|title=" + imageItem[item].title
		// 			+ "|info=" + imageItem[item].info);
		// 	// t.debug(item);
		// }
		var tData = {q:"电影院",region:"西安",action:"search"};
		ajax.baiduPlaceAction($,tData,function(data)
		{
			var list = data.results;
			for(var i in list)
			{
				t.debug(t.jsonToStr(list[i]));
			}
		});
		// var httpRequest = false;
		// if (window.XMLHttpRequest)
		// { 
		//     httpRequest = new XMLHttpRequest();
		//     if (httpRequest.overrideMimeType) {
		//        httpRequest.overrideMimeType('text/xml');
		//     }
		// } else if (window.ActiveXObject) 
		// { 
		//     try 
		//     {
		//       httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
		//     } catch (e) {
		//       try 
		//       {
		//         httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
		//       } catch (e) {}
		//     }
		// }
	});
});