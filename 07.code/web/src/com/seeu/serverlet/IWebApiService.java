package com.seeu.serverlet;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * <code>IWebApiService</code>web请求接口
 * */
public interface IWebApiService {
	/**
	 * 处理请求
	 * @param request 请求
	 * @param response 响应
	 * */
	public String execute(HttpServletRequest request,HttpServletResponse response);

}
