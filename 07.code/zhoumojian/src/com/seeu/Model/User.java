package com.seeu.Model;


import java.util.List;

import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.Page;

@SuppressWarnings("serial")
public class User extends Model<User>{
	public static final User user = new User();
	public static final int LOGIN_SIZE = 1;//登录返回数据大小
	public Page<User> paginate (int pageNumber, int pageSize) {
		return paginate(pageNumber, pageSize, "select *", "from zmj_user order by id asc");
	}
	/**
	 * 登录校验
	 * @param String userName 用户名
	 * @param String passwr md5加密后的密码    
	 * */
	public static User login(String userName,String passwr){
		String sql = "SELECT count(*) FROM zmj_user "
				+ "WHERE loginaccount=? AND loginpassword=?";
		String[] paras = new String[]{userName,passwr};
		List<User> list = user.find(sql, paras);
		if(list.size() == LOGIN_SIZE){
			return list.get(0);
		}
		return null;
		
	}
}
