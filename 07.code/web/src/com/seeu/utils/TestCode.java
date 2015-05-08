package com.seeu.utils;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.log4j.Logger;
import org.junit.Test;

import com.mchange.v2.c3p0.ComboPooledDataSource;
import com.seeu.db.DBFactory;
import com.seeu.db.DataBase;



public class TestCode {
	private static Logger logger = Logger.getLogger(TestCode.class);
	
	public void test(){
		Config config = new Config("db.properties");
		logger.info("测试");
		logger.error("测试");
		System.out.println(config.getValue("driverClass"));
	}
	@Test
	public void testDB(){
		DataBase db = DBFactory.createDB();
		ResultSet rs = db.query("SELECT count(*) AS count FROM zmj_user ");
		try {
			while(rs.next()){
				System.out.println(rs.getInt("count"));
			}
		} catch (SQLException e) {
			
			e.printStackTrace();
		}
//		try{
//			ComboPooledDataSource cmp = new ComboPooledDataSource();
//			Config config = new Config("db.properties");
//			String userName = config.getValue("user");
//			String passWd = config.getValue("password");
//			String driver = config.getValue("driverClass");
//			int maxpool = Integer.parseInt(config.getValue("poolSize"));
//			int minSta = Integer.parseInt(config.getValue("maxStatement"));
//			String url = config.getValue("jdbcUrl");
//			cmp.setUser(userName);
//			cmp.setPassword(passWd);
//			cmp.setJdbcUrl(url);
//			cmp.setDriverClass(driver);
//			//cmp.setMinPoolSize(1);
//			cmp.setMaxPoolSize(maxpool);
//			cmp.setMaxStatements(minSta);
//			ResultSet rs2 = cmp.getConnection()
//					.prepareStatement("SELECT count(*) AS count FROM zmj_user ")
//						.executeQuery();
//			while(rs2.next()){
//				System.out.println(rs2.getInt("count"));
//			}
//		}catch(Exception e){
//			
//		}
		
	}
}
