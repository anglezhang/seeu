package com.seeu.db.dbimpl;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.apache.log4j.Logger;

import com.seeu.db.DBManager;
import com.seeu.db.DataBase;


public class DataBaseImpl implements DataBase{
	
	private Connection con;//数据库连接
	private static Logger logger = Logger.getLogger(DataBaseImpl.class);
	/**
	 * 初始化方法
	 * */
	private void init(){
		con = DBManager.getConnection();
	}
	
	public DataBaseImpl() {
		super();
		init();
	}
	
	@Override
	public int executeUpdate(String sql) {
		try{
			if(con==null) con = DBManager.getConnection();
			PreparedStatement prep = con.prepareStatement(sql);
			return prep.executeUpdate();
		}catch(SQLException e){
			e.printStackTrace();
		}
		return 0;
	}

	@Override
	public int[] executeUpdate(String[] sqls) {
		Statement prep = null;
		try{
			if(con==null) con = DBManager.getConnection();
			con.setAutoCommit(false);
			prep = con.createStatement();
			for(int i=0;i<sqls.length;i++){
				prep.addBatch(sqls[i]);
			}
			int[] result = prep.executeBatch();
			con.commit();
			return result;
		}catch(SQLException e){
			logger.error(e.getMessage(), e);
		}
		
		return null;
	}

	@Override
	public int executeUpdate(String sql, String[] values) {
		PreparedStatement prep = null;
		try{
			prep = con.prepareStatement(sql);
			for(int i=0;i<values.length;i++){
				prep.setString(i, values[i]);
			}
			return prep.executeUpdate();
		}catch(SQLException e){
			logger.error(e.getMessage(), e);
		}
		
		return 0;
	}

	@Override
	public ResultSet query(String querySql) {
		try {
			if(con==null) con = DBManager.getConnection();
			PreparedStatement prep = con.prepareStatement(querySql);
			ResultSet rs = prep.executeQuery();
			return rs;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			logger.error(e.getMessage(), e);
		}
		return null;
	}

	@Override
	public ResultSet query(String sql, String[] values) {
		try {
			if(con==null) con = DBManager.getConnection();
			PreparedStatement prep = con.prepareStatement(sql);
			for(int i=0;i<values.length;i++){
				prep.setString(i + 1, values[i]);
			}
			ResultSet rs = prep.executeQuery();
			return rs;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			logger.error(e.getMessage(), e);
		}
		return null;
	}

	@Override
	public void closeDB() {		
		if(con != null){
			DBManager.closeConnection(con);
		}
	}
	
}
