package com.seeu.controller;

import com.jfinal.core.Controller;

/**
 * 首页控制器
 * */
public class BaseController extends Controller{
	
	/**
	 * 首页
	 * */
	public void index(){
		render("index.jsp");
	}

}
