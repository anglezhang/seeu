package com.seeu.tools.sendMsg;

import com.seeu.utils.Config;

/**
 * 获取短信返回结果处理类
 * */
public class SmsResultManagerFacTory {
	
	/**
	 * 返回结果处理类实例
	 * */
	public static ISmsResultManager getInstance(){
		//取设置变量中的变量
		Config config = new Config("");
		String className = config.getValue("");
		if(className.equals("")){
			className = "com.p2p.tools.sms.SmsResultManager";
		}
		try {
			return (ISmsResultManager) Class.forName(className).newInstance();
		} catch (InstantiationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
}
