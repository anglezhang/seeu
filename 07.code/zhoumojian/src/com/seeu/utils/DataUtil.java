package com.seeu.utils;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DataUtil {	
	
	/**
	 * 获取格式为 yyyy-MM-DD hh:mm:ss格式的当前时间
	 * */
	public static String getNow(){
		Date date = new Date();
		DateFormat dft = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
		return dft.format(date);
	}
	
}
