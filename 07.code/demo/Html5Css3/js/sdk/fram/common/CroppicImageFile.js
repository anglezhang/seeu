define(function(require, exports, module)
{
    /* 
     * @create ZhangZhenXing
     * @Date  2014-10-29
     * 说明：
     * 截取图片JavaScript
     */
    var Croppic=require('../../../../lib/croppic/croppic.min');
    /**
     * 截取图片JavaScript 
     * @param {Object} options 参数对象
     * @returns 
     * options参数对象包含数据：
     * tagName {String} 保存字段名称
     * outputUrlId {String} 上次文件成功后相对路径输出input控件的ID。如<input type="hidden" />
     * onBeforeImgUpload {function}: 图片上传前回调函数 
	 *	onAfterImgUpload {function}: 图片上传后回调函数
	 *	onImgDrag  {function}: 图片拖拽是的回调函数
	 *	onImgZoom  {function}:图片放大是的回到函数
	 *	onBeforeImgCrop  {function}:图片截取前的回调函数
	 *	onAfterImgCrop {function}:图片截取成功后的的回调函数
     */
    
    module.exports=function(options){
        
        var that=this;
        var date = new Date();
        that.options=options;
        var url="http://127.0.0.1:8080";
        
        var tag_name=options.tagName;
        var outputUrlId=options.outputUrlId;
        var croppicId=options.id;
        
		var cropContainerEyecandy ;
        
		var croppicContainerEyecandyOptions = {
            uploadUrl:url+"/croppic?step=upload",
            cropUrl:url+"/croppic?step=cropImg"
            ,sorceUrl:url
            ,uploadData: {
            'year':date.getFullYear(),
            'month':(date.getMonth()+1),
            'day':date.getDate(),
            'tag_name' :tag_name,
            },
            outputUrlId:outputUrlId,
            imgEyecandy:false,
            imgEyecandyOpacity:0.2,
            loaderHtml:'<div class="loader bubblingG"><span id="bubblingG_1"></span><span id="bubblingG_2"></span><span id="bubblingG_3"></span></div> '
            ,onAfterImgCrop:function(){ 
                cropContainerEyecandy.destroy();
                cropContainerEyecandy.init();
                if (that.options.onAfterImgCrop) that.options.onAfterImgCrop.call(that);
            },
            onBeforeImgUpload: 	function(){ 
                if (that.options.onBeforeImgUpload) {
                    that.options.onBeforeImgUpload.call(that);
                } 
            },
            onAfterImgUpload: 	function(){ if (that.options.onAfterImgUpload) that.options.onAfterImgUpload.call(that);},
            onImgDrag:		function(){ if (that.options.onImgDrag) that.options.onImgDrag.call(that); },
            onImgZoom:		function(){ if (that.options.onImgZoom) that.options.onImgZoom.call(that); },
            onBeforeImgCrop: 	function(){ if (that.options.onBeforeImgCrop) that.options.onBeforeImgCrop.call(that); }
            
		}
        
		cropContainerEyecandy = new Croppic(croppicId, croppicContainerEyecandyOptions);
    }
    
});