define(function(require, exports, module)
{
        var LogLevel = 5; //5=全部显示，4,=显示debug、info、error，3=显示info及error，2=只显示error，1=全部关闭
        var dateTool = require("./DateTool");
        module.exports.debug = function(content)
        {
                if(LogLevel>=4)
                        consolePrint("[D]",content);
        };

        //控制台输出信息
        module.exports.print = function(content)
        {
                if(LogLevel>=3)
                        consolePrint("[I]",content);
        };

        module.exports.error = function(content)
        {
                if(LogLevel>=2)
                        consolePrint("[E]",content);
        };

        module.exports.dir=function(obj)
        {
                console.dir(obj);
        };

        var consolePrint = function (tag, msg)
        {
                /*
                 //Use different logging level
                console.log("Log level");
                console.debug("Debug level");
                console.info("Info level");
                console.warn("Warn level");
                console.error("Error level");
                 */
                if(!window.console)
                {
                        return;
                }
                var tMsg = "" + tag + " " + new dateTool(new Date()).format("yyyy-MM-DD HH:mm:ss") + " >" + msg;
                switch(tag)
                {
                    case "[D]":
                        if(console.debug)
                        {
                            console.debug(tMsg);
                        }else{
                            console.info(tMsg);
                        }
                        break;
                    case "[I]":
                        console.info(tMsg);
                        break;
                    case "[E]":
                        console.error(tMsg);
                        break;
                    default:
                    console.log(tMsg);
                }
        };

        //将Json对象转换为字符串
        module.exports.jsonToStr=function(jsonObj)
        {
                return JSON.stringify(jsonObj);
        };

        //将字符串转换为Json对象
        module.exports.strToJson=function(str)
        {
                return JSON.parse(str);
        };

        //将字符串中的 src="/files/ 替换为 src="http://serverIP/files/
        module.exports.ReplaceImgPath = function (str)
        {
                //consolePrint("ReplaceImgPath", " str=" + str);
                var tRegExp = new RegExp('src="/', "g");
        }; 

        //替换字符串
        //将 str1中的str2均替换为str3
        module.exports.ReplaceAll=function(str1,str2,str3)
        {
    //        console.log(str1+"|"+str2+"|"+str3);
                var tRegExp=new RegExp(str2,"g");
                return str1.replace(tRegExp,str3);
        };
        /**
         * 取界面传参
         * */
        module.exports.getRequest=function(argname)
        {
            var url = window.location.href;
            var arrStr = url.substring(url.indexOf("?")+1).split("&");
            for(var i =0;i<arrStr.length;i++)
            {
                var loc    = arrStr[i].indexOf(argname+"=");

                if(loc!=-1)
                {
                    return arrStr[i].replace(argname+"=","").replace("?","");
                    break;
                }

            }
            return "";
        }
        //返回行/列 div class ui-block-a ui-grid-c
        module.exports.getLayoutClass = function(index,type)
        {
                var rowList=["","","ui-grid-a","ui-grid-b","ui-grid-c","ui-grid-d"];

                var colList=["","ui-block-a","ui-block-b","ui-block-c","ui-block-d","ui-block-e"];

                var rValue="";
                if(type==="r")
                        rValue=rowList[index];
                else
                        rValue=colList[index];

                return rValue;
        };



        /*
        * Generate a random uuid.
        *
        * USAGE: Math.uuid(length, radix)
        *   length - the desired number of characters
        *   radix  - the number of allowable values for each character.
        *
        * EXAMPLES:
        *   // No arguments  - returns RFC4122, version 4 ID
        *   >>> Math.uuid()
        *   "92329D39-6F5C-4520-ABFC-AAB64544E172"
        *
        *   // One argument - returns ID of the specified length
        *   >>> Math.uuid(15)     // 15 character ID (default base=62)
        *   "VcydxgltxrVZSTV"
        *
        *   // Two arguments - returns ID of the specified length, and radix. (Radix must be <= 62)
        *   >>> Math.uuid(8, 2)  // 8 character ID (base=2)
        *   "01001010"
        *   >>> Math.uuid(8, 10) // 8 character ID (base=10)
        *   "47473046"
        *   >>> Math.uuid(8, 16) // 8 character ID (base=16)
        *   "098F4D35"
        */

         // Private array of chars to use
         var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

         module.exports.uuid = function (len, radix) {
           var chars = CHARS, uuid = [], i;
           radix = radix || chars.length;

           if (len) {
                 // Compact form
                 for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
           } else {
                 // rfc4122, version 4 form
                 var r;

                 // rfc4122 requires these characters
                 uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
                 uuid[14] = '4';

                 // Fill in random data.  At i==19 set the high bits of clock sequence as
                 // per rfc4122, sec. 4.1.5
                 for (i = 0; i < 36; i++) {
                   if (!uuid[i]) {
                         r = 0 | Math.random()*16;
                         uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                   }
                 }
           }

           return uuid.join('');
         };

         // A more performant, but slightly bulkier, RFC4122v4 solution.  We boost performance
         // by minimizing calls to random()
         module.exports.uuidFast = function() {
           var chars = CHARS, uuid = new Array(36), rnd=0, r;
           for (var i = 0; i < 36; i++) {
                 if (i==8 || i==13 ||  i==18 || i==23) {
                   uuid[i] = '-';
                 } else if (i==14) {
                   uuid[i] = '4';
                 } else {
                   if (rnd <= 0x02) rnd = 0x2000000 + (Math.random()*0x1000000)|0;
                   r = rnd & 0xf;
                   rnd = rnd >> 4;
                   uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                 }
           }
           return uuid.join('');
         };

         // A more compact, but less performant, RFC4122v4 solution:
         module.exports.uuidCompact = function() {
           return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                 var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                 return v.toString(16);
           });
         };

     //检查是否为空 空包括 null ，undefined，“”，length=0
    module.exports.isEmpty=function(obj){
        if(obj===null)return true;
        if(obj==="")return true;
        if(obj==="undefined")return true;
        if(obj===undefined)return true;
        if(obj==="null")return true;
        if(obj.toString().trim()===null)return true;
        if(obj.toString().trim().length===0)return true;
        return false;
    };
    /**
    * 将界面定位到顶部
    */
    module.exports.windowTop=function()
    {
        window.scrollTo(0,0);
    };
    /**
    * 将界面定位到底部
    */
    module.exports.windowBottom=function()
    {
        var height = window.screen.availHeight;
        var width = window.screen.availWidth; 
        // consolePrint("[D]","宽度 width=" + width + " height=" + height);
        window.scrollTo(0,height + 200);
    }
});