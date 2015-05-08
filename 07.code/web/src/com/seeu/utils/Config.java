package com.seeu.utils;

import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Properties;

/**
 *  读取资源文件
 * */
public class Config {
	
	private String fileName = null;
	private Properties prop = null;
	/**
	 * 读取资源文件
	 * @param fileName 文件名称
	 * */

	public Config() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Config(String fileName) {
		super();
		this.fileName = fileName;
	}
	/**
	 * 获取配置文件的值
	 * */
	public String getValue(String key){
		if(this.prop==null){
			this.prop = new Properties();
			try{
				InputStream in = this.getClass().getResourceAsStream("/" + this.fileName);  
				this.prop.load(in);
			}catch(Exception e){
				e.printStackTrace();
			}
			
		}
		return this.prop.getProperty(key);
	}
}
