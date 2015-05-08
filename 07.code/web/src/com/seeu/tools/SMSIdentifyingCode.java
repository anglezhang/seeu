package com.seeu.tools;

import com.seeu.tools.sendMsg.ISendSmsMessage;
import com.seeu.tools.sendMsg.ISmsResultManager;
import com.seeu.tools.sendMsg.SendSmsOfUMSFacTory;
import com.seeu.tools.sendMsg.SmsResultManagerFacTory;
import com.seeu.utils.RandomUtil;

public class SMSIdentifyingCode {
private ISendSmsMessage ssm=null;
	
	public ISmsResultManager srm=null;
	
	//发送信息的类名，不同类对应不同短信平台。
	public SMSIdentifyingCode(String className)
	{
		//通过工厂类加载合适的短信发送类
		ssm = SendSmsOfUMSFacTory.getInstance();
		
	}
	
	public String getCode(String content,String phone)
	{
		String sNumber=RandomUtil.generateNumber(6);
		
		//获得6位的随机字符串，字符和数字
		String sendContent=content.replace("[CODE]", sNumber);
		
		String Message=ssm.send(sendContent,phone);
		
		srm = SmsResultManagerFacTory.getInstance();
		//初始化
		srm.init(Message);
		System.out.print("Message=" + Message);
		
		return sNumber;
	}
}
