package com.seeu.db;

import java.sql.Connection;
import java.sql.SQLException;
import org.apache.log4j.Logger;
import com.seeu.config.BaseConfig;


public class DBManager {
	private static Logger logger = Logger.getLogger(DBManager.class);
	/**
	 * 获取数据库连接
	 * */
	public static Connection getConnection(){
		Connection con = null;
		try{
			con = BaseConfig.getC3plugin().getDataSource().getConnection();
		}catch(SQLException e){
			logger.error(e.getMessage(), e);
			return null;
		}
		return con;
	}
	/**
	 * 获取数据库连接
	 * */
	public static void closeConnection(Connection con){
		if(con != null)
			try {
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				logger.error(e.getMessage(), e);
			}
	}
}
