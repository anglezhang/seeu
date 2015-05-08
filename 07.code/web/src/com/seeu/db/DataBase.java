package com.seeu.db;

import java.sql.ResultSet;

/**
 * <code>DataBase</code>操作数据库
 * */
public interface DataBase {
	/**
	 * @param sql 执行的更新语句
	 * @Return 执行成功条数
	 * */
	public int executeUpdate(String sql);
	/**
	 * @param sqls 执行的更新语句
	 * @Return 执行成功条数
	 * */
	public int[] executeUpdate(String[] sqls);
	/**
	 * @param sql 执行的更新语句(含?)
	 * @param values ?的值
	 * @Return 执行成功条数
	 * */	
	public int executeUpdate(String sql,String[] values);
	/**
	 * @param sql 执行的查询的sql
	 * @Return 查询结果集
	 * */
	public ResultSet query(String querySql);
	
	/**
	 * @param sql 执行的查询的sql(含?)  
	 * @param values ?的值
	 * */
	public ResultSet query(String sql, String[] values);
	
	/**
	 * 关闭连接
	 * */
	public void closeDB();
}
