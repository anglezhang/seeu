package com.seeu.db;
import com.seeu.db.dbimpl.DataBaseImpl;


/**
 * @author ZhangZhenXing
 * @Date 2015-05-06
 * 该<code>DBFactory</code>是数据库操作工厂类
 * */
public class DBFactory {
	
	
	/**
	 * 返回默认连接数据库
	 * */
	public static DataBase createDB(){
		DataBase db = new DataBaseImpl();
		return db;
	}
}
