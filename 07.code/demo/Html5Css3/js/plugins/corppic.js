define(function (require, exports, module)
{
	var $ = require("jquery");
  var Croppic = require('../sdk/fram/common/CroppicImageFile'); 
  $(function()
  	{
  		 var cro=new Croppic({id:"uploadDiv"
           ,tagName:"croppic_file"
           ,outputUrlId:"myOutputId"
           ,onAfterImgCrop:function()
           {
               alert($("#myOutputId").val());
           }
       });

       var croppic=new Croppic({id:"cropContainerEyecandy"
           ,tagName:"croppic_file"
           ,outputUrlId:"myOutputId"
           ,onAfterImgCrop:function()
           {
               alert($("#myOutputId").val());
           }
       });
  	});
})