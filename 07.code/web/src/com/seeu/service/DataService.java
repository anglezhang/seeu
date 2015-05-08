package com.seeu.service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONObject;

import com.seeu.db.DBFactory;
import com.seeu.db.DBManager;
import com.seeu.db.DataBase;
import com.seeu.serverlet.IWebApiService;
import com.seeu.utils.DBUtil;

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
		//登录
		if("login".equals(action)){
			result = loginAction(request, response);
		}else if("register".equals(action)){
			result = registerAction(request, response);
		}else{
			IWebApiService ias=classNameToObject(action);
			if(ias!=null){
				result=ias.execute(request, response);
			}
			else{
				result="{errorMsg:'接口调用失败:" + action + "不存在'}";
				
			}
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
	
	private String registerAction(HttpServletRequest request,
			HttpServletResponse response) {
		String verifCode  = request.getParameter("verifCode");
		String sessionVCode = (String) request
				.getSession().getAttribute("CERTPIRCSTR");
		JSONObject result = null;
		//判断验证码是否正确
		if(verifCode == null ||
				!verifCode.equalsIgnoreCase(sessionVCode)){
			return "{\"status\":\"0\",\"msg\":\"验证码输入错误\"}";
		}
		DataBase db = DBFactory.createDB();
		try{
			//检查用户名是否重复
			String chkName = checkName(request, db);
			if(chkName != null){
				return chkName;
			}
			String password = request.getParameter("password");
			String rePassword = request.getParameter("rePassword");
			String siteName = request.getParameter("siteName");
			if(!password.equals(rePassword)){
				result.put("status", "0");
				result.put("msg", "两次密码输入不一致");
				return result.toString();
			}
			String orgid = UUID.randomUUID().toString();
			String newUser = "INSERT INTO zmj_user(id,loginaccount,loginpassword,orgid,"
					+ "create_time,modify_time) VALUES("
					+ "'" + UUID.randomUUID().toString() + "','"
					+ request.getParameter("userName") + "','"
					+ password + "','" + orgid + "',now(),now());";
			logger.info("newUsersql=[" + newUser + "]");
			String newSite = "INSERT INTO zmj_org(id,org_name,create_time,modify_time)  VALUES("
					+ "'" + orgid + "','" 
					+ siteName + "',now(),now());";
			logger.info("newUsersql=[" + newSite + "]");
			String[] sqls = new String[]{newUser,newSite};
			db.executeUpdate(sqls);
			db.closeDB();
		}catch(Exception e){
			logger.error(e.getMessage(), e);
		}
		
		
		return "{\"status\":1}";
	}
	
	/**
	 * 登录方法
	 * */
	private String loginAction (HttpServletRequest request,
			HttpServletResponse response){
		String verifCode  = request.getParameter("verifCode");
		String password = request.getParameter("password");
		String userName = request.getParameter("userName");
		try{
			Connection con = DBManager.getConnection();
			String loginSQL = "SELECT u.id,u.loginaccount,u.nikename," 
					+ "u.pc_image,real_name,org.org_name AS orgname FROM " 
					+ "zmj_user AS u LEFT JOIN zmj_org org on u.orgid=org.id"
					+ " where u.loginaccount=? AND loginpassword=?";
			PreparedStatement pst = con.prepareStatement(loginSQL);
			pst.setString(1, userName);
			pst.setString(2, password);
			ResultSet rest = pst.executeQuery();
			JSONArray result = DBUtil.resultSetToJSON(rest);
			if(result.length() == 1){
				return "{\"status\":1,\"DATA\":" + result.toString() + "}";
			}
			
		}catch(Exception e){
			return "{\"status\":0,\"msg\":\"登录失败\"}";
		}
		return "{\"status\":0,\"msg\":\"登录失败\"}";
	}
	/**
	 * 校验用户名是否重复
	 * */
	private String checkName(HttpServletRequest request,
			DataBase db){
		String userName = request.getParameter("userName");
		//检查用户名是否重复
		String querySql = "SELECT count(*) AS count FROM zmj_user WHERE loginaccount=?";
		try{
			ResultSet rs = db.query(querySql, new String[] {userName});
			if(rs.next()&&(rs.getInt("COUNT")>=1)){
				return "{\"status\":0,\"msg\":\"用户名重复\"}";
			}
		}catch(Exception e){
			logger.error(e.getMessage(), e);
			return "error";		
		}
		return null;		
	}
}
