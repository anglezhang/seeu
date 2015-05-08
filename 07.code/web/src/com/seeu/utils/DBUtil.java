package com.seeu.utils;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class DBUtil {
	
	/**
	 * ResultSet转换正JSON格式
	 * @param rst
	 * @return
	 * @throws SQLException
	 * @throws JSONException
	 */
	public static JSONArray resultSetToJSON(ResultSet rst) throws SQLException,JSONException{
		//JSONObject result=new JSONObject();
		JSONArray data=new JSONArray();
		ResultSetMetaData rsmd = rst.getMetaData();
		int columns=rsmd.getColumnCount();
		while(rst.next()){
			JSONObject row=new JSONObject();
			for(int i=1;i<=columns;i++){
				row.put(rsmd.getColumnLabel(i).toUpperCase(),rst.getObject(i)==null?"":rst.getObject(i));
			}
			data.put(row);
		}
		
		return data;
	}

}
