package com.seeu.seeuaction;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.seeu.serverlet.IWebApiService;
import com.seeu.utils.RandomUtil;

/**
 * 生成6位验证码
 * */
public class VerifCodeAction implements IWebApiService{

	@Override
	public String execute(HttpServletRequest request,
			HttpServletResponse response) {
		String result = "";
		//暂时没有发送验证码平台
		String sPhone = request.getParameter("phone");
//		SMSIdentifyingCode sic = new SMSIdentifyingCode("");
//		result = sic.getCode("您的短信验证码[code]", sPhone);
		String verifcode = RandomUtil.generateNumber(6);
		//验证码保存在session中
		request.getSession().setAttribute("CERTPIRCSTR", verifcode);
		return "{\"phone\":\"" + sPhone + "\",\"verifcode\":\"" + verifcode + "\"}";
	}

}
