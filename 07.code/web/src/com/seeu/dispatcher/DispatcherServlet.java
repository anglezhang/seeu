package com.seeu.dispatcher;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.seeu.service.DataService;

/**
 * 处理请求类
 * */
public class DispatcherServlet extends HttpServlet{
	private static final long serialVersionUID = 6235727531254721638L;
	private static final String DATASERVER="ZMJ_DATASERVER";
	private static Logger logger = Logger.getLogger(DispatcherServlet.class);
	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		//解决跨域问题
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.addHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");

		String action=getAction(request.getRequestURI());
		response.setHeader("Content-Type","text/html;charset=GB2312" );//Ajax 返回汉字
		request.setCharacterEncoding("utf-8");//接受中文乱码问题
		logger.info("访问action[" + action + "]");
		PrintWriter out=new PrintWriter(response.getOutputStream());
		DataService dataServer=(DataService)request.getSession().getAttribute(DATASERVER) ;
		
		if(dataServer==null){
			dataServer=new DataService();
			request.getSession().setAttribute(DATASERVER, dataServer);
		}
		try {
			logger.info("执行 | " + action + " | 开始");
			String result=dataServer.service(action, request, response);
			logger.info("执行 | " + action + " | 完成");
			
			out.print(result);
			out.flush();
			out.close();
		} 
		catch (Exception e) 
		{
			logger.error(e.getMessage(), e);
		}
	}
	/**
	 * 获取action名称
	 * */
	private String getAction(String uri){
		String action=null;
		
		if(uri==null)
			return uri;
		
		if(!uri.contains(".do"))
			return uri;
		
		uri=uri.split("/")[uri.split("/").length-1];
		action=uri.substring(0, uri.length()-3);
		
		return action;
	}
}
