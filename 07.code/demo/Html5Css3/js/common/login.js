define(function(require, exports, module)
{
    var c1=false;
    var c2=true;
    var checkbox_src1="image/check-1-x.png";
    var checkbox_src2="image/check-1.png";
    var checkbox_src3="image/check-2-x.png";
    var checkbox_src4="image/check-2.png";
    //经纬度信息
    var latLongInf = {LATITUDE:108.938891,LONGITUDE:34.241005,ALTITUDE:18};
    /**
     * 创建新地图
     * */
    var creatNewMap = function(x,y,z)
    {
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(x,y); //x,y为地图中心点坐标
        map.centerAndZoom(point,z);            //z为缩放等级1~18
        map.addControl(new BMap.ZoomControl());    
		map.enableScrollWheelZoom(true);//鼠标滑动轮子可以滚动    
        var local = new BMap.LocalSearch(map, {
            renderOptions:{map: map}
        });
        return map  
    };
    var addMarker = function(map,x,y,t,i)
    {
        //x:x坐标
        //y:y坐标
        //t:标题
        //i:表述信息
        var markerPoint = new BMap.Point(x,y);
        var marker = new BMap.Marker(markerPoint);  //创建标注
        map.addOverlay(marker);    // 将标注添加到地图中
        var opts = {
            width : 200,    // 信息窗口宽度
            height: 60,     // 信息窗口高度
			
            title : t, // 信息窗口标题
            enableAutoPan : true //自动平移
        }
        var infoWindow = new BMap.InfoWindow(i, opts);  // 创建信息窗口对象
        marker.addEventListener("click", function(){          
            map.openInfoWindow(infoWindow,markerPoint); //开启信息窗口
        });
    };
    /**
     * 登录
     * $ jquery对象
     * a
     * */
    module.exports.loginFadeIn=function($,a)
    {
        var winWidth=$(window).width();
        var winHeight=$(window).height();
        var cunWidth=(winWidth-735)/2;
        var cunWidth1=(winWidth-585)/2;
        var cunWidth2=(winWidth-800)/2;
        var cunHeight2=(winHeight-600)/2;


        $(".opacity-bg,.add_box,.car_inf-"+a).fadeIn();	
        $(".car_inf-2").css("margin-left",cunWidth);//弹出层margin-left边距
        $(".car_inf-4").css("margin-left",cunWidth1);//弹出层margin-left边距
        $(".car_inf-3").css("margin-left",cunWidth2).css("margin-top",cunHeight2);//弹出层margin-left边距
        $(".car_inf-6").css("margin-left",cunWidth2).css("margin-top",cunHeight2);//弹出层margin-left边距
        var map = creatNewMap(latLongInf.LATITUDE,latLongInf.LONGITUDE,latLongInf.ALTITUDE); 
        addMarker(map,latLongInf.LATITUDE,latLongInf.LONGITUDE
        ,"<h1 style='font-size:14px;margin-bottom:10px;'>默克(中国)</h1>","<p style='font-size:14px;'>含光北路35号新兴际华大厦13F</P>");
    };
    /**
     * 退出
     * $ juqery对象
     * */
    module.exports.loginFadeOut=function($,a,b,c)
    {
        if(c==1)
        {   

            $(".opacity-bg,.add_box,.login-cel").fadeOut();	

        }
        else
        {
            var winWidth=$(window).width();
            var cunWidth=(winWidth-735)/2;
            var cunWidth1=(winWidth-585)/2;
            $(".car_inf-2").css("margin-left",cunWidth);//弹出层margin-left边距
            $(".car_inf-4").css("margin-left",cunWidth1);//弹出层margin-left边距
            $(".car_inf-"+b).fadeOut(0);
            $(".car_inf-"+a).fadeIn(0);		
        }
        if(a==2||a==6)
        {
            loginFadeOutAuto(a);
        }
        $(".checkbox-1").click(function()
        {
            if(!$(this).find("input").attr("checked"))
            {
                    $(this).find("input").attr("checked",c2);
                    $(this).css("background","url("+checkbox_src2+") 15px 50% no-repeat");

                    $(this).parents("tr").find(".checkbox-2").click(function(){
                    if(!$(this).find("input").attr("checked"))
                    {
                            $(this).find("input").attr("checked",c2);
                            $(this).css("background","url("+checkbox_src4+") left 50% no-repeat");
                    }
                    else
                    {
                            $(this).find("input").attr("checked",c1);
                            $(this).css("background","url("+checkbox_src3+") left 50% no-repeat");
                    }
            });

            }
            else
            {
                $(this).find("input").attr("checked",c1);
                $(this).css("background","url("+checkbox_src1+") 15px 50% no-repeat");

                $(this).parents("tr").find(".checkbox-2").unbind("click");
                $(this).parents("tr").find(".checkbox-2").css("background","url("+checkbox_src3+") left 50% no-repeat");
                $(this).parents("tr").find(".checkbox-2 input").removeAttr("checked");
            }
	});	
        $(".checkbox-1-1").click(function(){
            if($(this).find("input").attr("checked"))
            {
                    $(this).find("input").attr("checked",c1);
                    $(this).css("background","url("+checkbox_src1+") 15px 50% no-repeat");
                    $(this).parents("tr").find(".checkbox-2-2").unbind("click");
                    $(this).parents("tr").find(".checkbox-2-2").css("background","url("+checkbox_src3+") left 50% no-repeat");
                    $(this).parents("tr").find(".checkbox-2-2 input").removeAttr("checked");
            }
            else
            {
                    $(this).find("input").attr("checked",c2);
                    $(this).css("background","url("+checkbox_src2+") 15px 50% no-repeat");

                    $(this).parents("tr").find(".checkbox-2-2").click(function(){
                    if($(this).find("input").attr("checked"))
                    {
                        $(this).find("input").attr("checked",c1);
                        $(this).css("background","url("+checkbox_src3+") left 50% no-repeat");
                    }
                    else
                    {
                        $(this).find("input").attr("checked",c2);
                        $(this).css("background","url("+checkbox_src4+") left 50% no-repeat");
                    }
                });
            }
	});
        $(".select").click(function(){
		$(this).find(".x-ul").fadeToggle(150);
	})
	$(".select").mouseleave(function(){
		$(this).find(".x-ul").fadeOut();
	})
        $("body").on("click",".x-ul .x-ul-con p",function(){
            click_selectli($(this));
        });
	
	function click_selectli(thisobj)
	{
		
            thisobj.parents(".select").find("select option").attr("selected",false);
            var index=thisobj.index();
            thisobj.parents(".select").find("select option:eq("+index+")").attr("selected",true);
            thisobj.parents(".select").find("span").html(thisobj.html())
            thisobj.parents(".select").find("select").change();


            ///////////地址选择////////////
            var bao_val=thisobj.parents(".select").find(".down-payment-1").val();
            if(bao_val==1){
                $(".address-2").css("display","block");
                    $(".address-1").css("display","none");
            }
            else if(bao_val==2){
                $(".address-1").css("display","block");
                    $(".address-2").css("display","none");
            }
            else if(bao_val==0){
                $(".address-2").css("display","none");
                    $(".address-1").css("display","none");
            }	
            ///////////////到店位置////////////////////// 
           $(".r-weizhi").click(function(){

           })}

    };
});