package com.seeu.controller;

import java.sql.Timestamp;
import java.util.UUID;
import org.apache.log4j.Logger;
import com.jfinal.aop.Before;
import com.jfinal.core.Controller;
import com.seeu.Model.SiteOrg;
import com.seeu.Model.User;
import com.seeu.utils.RandomUtil;
import com.seeu.validator.user.UserValidate;

/**
 * 基础控制器
 * */
public class SeeuBaseController extends Controller{
	
	private static Logger logger = Logger.getLogger(SeeuBaseController.class);
	/**
	 * 登录
	 * */
	public void login(){
		String userName = getPara("userName");
		String password = getPara("password");
		if(User.login(userName, password) != null)
			renderJson("{\"status\":1}");
		else
			renderJson("{\"status\":0,\"errorMsg\":\"用户名或密码输入错误\"}");
		//User user = User.user.find("", paras);
	}
	
	/**
	 * 保存用户
	 * */
	@Before(UserValidate.class)
	public void register(){
		User user = getModel(User.class);
		SiteOrg site = getModel(SiteOrg.class);
		Timestamp timeStamp = new Timestamp(System.currentTimeMillis());
		//设置用户主键 及各个参数
		String orgid = UUID.randomUUID().toString();
		user.set("id", UUID.randomUUID().toString());
		user.set("loginaccount", getPara("userName"));
		user.set("loginpassword", getPara("password"));
		user.set("orgid", orgid);
		user.set("create_time", timeStamp);
		user.set("modify_time", timeStamp);
		//设置站点各个值
		site.set("id", orgid);
		site.set("org_name", getPara("siteName"));
		site.set("create_time", timeStamp);
		site.set("modify_time", timeStamp);
		//保存
		user.save();
		site.save();
		//返回
		renderJson("{\"status\":1}");
	}
	
	public void verifCode(){
		String verifCode = RandomUtil.generateNumber(6);
		String phone = getPara("phone");
		//发送手机短信
		renderJson("{\"status\":1,\"verifCode\":" + phone + "}");
	}
	
	
}
