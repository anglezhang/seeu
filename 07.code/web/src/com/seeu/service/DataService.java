package com.seeu.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.log4j.Logger;
import com.seeu.serverlet.IWebApiService;

/**
 * 数据服务
 * */
public class DataService {
	private HttpServletRequest request;
	private HttpServletResponse response;
	private static Logger logger = Logger.getLogger(DataService.class);
	/**
	 * 请求处理方法
	 * */
	public  String service(String action, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		String result = "";
		//验证码
//		if("SMSCode".equals(action)){
//			
//		}
		IWebApiService ias=classNameToObject(action);
		if(ias!=null)
		{
			result=ias.execute(request, response);
		}
		else
		{
			result="{errorMsg:'接口调用失败:" + action + "不存在'}";
			
		}
		return result;
	}
	//依据类名反射出对象
	private IWebApiService classNameToObject(String className){
		IWebApiService result=null;

		try 
		{
			result=(IWebApiService)Class.forName(className).newInstance();
		} 
		catch (Exception e)
		{
			e.printStackTrace();
			logger.error(e.getMessage(), e);
			return null;
		}
		
		return result;
	}
}
