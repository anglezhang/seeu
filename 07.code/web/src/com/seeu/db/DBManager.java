package com.seeu.db;

import java.beans.PropertyVetoException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.mchange.v2.c3p0.ComboPooledDataSource;
import com.seeu.utils.Config;

/**
 * 连接管理类
 * */
public class DBManager {
	
	/**
	 * 各个配置项
	 * */
	private static String userName;
	private static String passWord;
	private static String driver;
	private static String url;
	private static int maxStam;
	private static int poolSize;
	//数据库连接池操作类ComboPooledDataSource
	private static ComboPooledDataSource cpds;
	//加载配置项
	static{
		Config config = new Config("db.properties");
		userName = config.getValue("user");
		passWord = config.getValue("password");
		driver = config.getValue("driverClass");
		url = config.getValue("jdbcUrl");
		maxStam = Integer.parseInt(config.getValue("maxStatement"));
		poolSize = Integer.parseInt(config.getValue("poolSize"));
		cpds = new ComboPooledDataSource();
		cpds.setUser(userName);
		cpds.setPassword(passWord);
		cpds.setJdbcUrl(url);
		try {
			cpds.setDriverClass(driver);
			cpds.setMaxPoolSize(poolSize);
			cpds.setMaxStatements(maxStam);
		} catch (PropertyVetoException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	/**
	 * 获得数据库连接
	 * */
	public static Connection getConnection(){
		Connection con = null;
		try {
			con = cpds.getConnection();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return con;
	}
	/**
	 * 关闭数据库
	 * */
	public static void closeConnection(Connection con){
		if(con==null){
			return;
		}else{
			try {
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
}
