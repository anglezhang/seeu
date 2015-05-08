package com.seeu.tools.sendMsg;

import com.seeu.utils.Config;

/**
 * 发生短信工厂类
 * */
public class SendSmsOfUMSFacTory {
	/**
	 * 根据后台系统管理-->变量设置-->短信发送接口(ISendSmsMessage)的配置
	 * 来实例化短信发送类
	 * */
	public static ISendSmsMessage getInstance(){
		//取设置变量中的变量
		Config config = new Config("");
		String className = config.getValue("ISendSmsMessage");
		if(className.equals("")){
			className = "com.p2p.tools.sms.SendSmsOfUMS";
		}
		try {
			return (ISendSmsMessage) Class.forName(className).newInstance();
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
