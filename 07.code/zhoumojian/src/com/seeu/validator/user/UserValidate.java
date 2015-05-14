package com.seeu.validator.user;

import com.jfinal.core.Controller;
import com.jfinal.validate.Validator;
import com.seeu.Model.User;

public class UserValidate extends Validator{

	@Override
	protected void validate(Controller controller) {
		String password = controller.getPara("password");
		String rePassword = controller.getPara("rePassword");
		String verifCode = controller.getPara("verifCode");
		validateRequiredString("userName", "errorMsg", "请输入用户名");
		validateRequiredString("password", "errorMsg", "请输入密码");
		validateRequiredString("siteName", "errorMsg", "俱乐部不能为空");
		if(!password.equals(rePassword)){
			addError("errorMsg", "两次输入密码不一致");
		}
		String code = controller.getSessionAttr("verifCode");
		if(!verifCode.equalsIgnoreCase(code)){
			addError("errorMsg", "验证码输入不正确");
		}
		//用户名唯一性验证
		User user = User.user.findById(controller.getPara("userName"), "loginaccount");
		if(user != null){
			addError("errorMsg", "该手机号已被注册");
		}
		
	}

	@Override
	protected void handleError(Controller controller) {
		String errorMsg = controller.getAttrForStr("errorMsg");
		controller.renderJson("{\"status\":2,\"errorMsg\":" + errorMsg + "}");
	}

}
