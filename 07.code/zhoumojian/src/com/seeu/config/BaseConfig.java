package com.seeu.config;

import javax.sql.DataSource;

import com.jfinal.config.Constants;
import com.jfinal.config.Handlers;
import com.jfinal.config.Interceptors;
import com.jfinal.config.JFinalConfig;
import com.jfinal.config.Plugins;
import com.jfinal.config.Routes;
import com.jfinal.plugin.activerecord.ActiveRecordPlugin;
import com.jfinal.plugin.activerecord.dialect.PostgreSqlDialect;
import com.jfinal.plugin.c3p0.C3p0Plugin;
import com.jfinal.render.ViewType;
import com.seeu.Model.SiteOrg;
import com.seeu.Model.User;
import com.seeu.controller.BaseController;
import com.seeu.controller.SeeuBaseController;

/**
 * 基本配置累
 * */
public class BaseConfig extends JFinalConfig{
	
	
private static C3p0Plugin c3p;//cp3
	
	/**
	 * 常量配置
	 * */
	@Override
	public void configConstant(Constants me) {
		loadPropertyFile("db.properties");	//加载属性
		me.setDevMode(getPropertyToBoolean("devMode",false));
		me.setViewType(ViewType.JSP);
	}

	@Override
	public void configRoute(Routes me) {
		me.add("/",BaseController.class,"/");
		me.add("/seeu",SeeuBaseController.class);
	}

	/**
	 * 配置插件
	 * */
	@Override
	public void configPlugin(Plugins me) {
		String jdbcUrl = getProperty("jdbcUrl");
		String user = getProperty("user");
		String password = getProperty("password");
		String driverClass = getProperty("driverClass");
		String poolSize = getProperty("poolSize");
		C3p0Plugin c3p = new C3p0Plugin(jdbcUrl, user, password, driverClass);
		c3p.setMaxPoolSize(Integer.parseInt(poolSize));
		me.add(c3p);
		DataSource dataSource = c3p.getDataSource();
		
		// 配置ActiveRecord插件
		ActiveRecordPlugin arp = new ActiveRecordPlugin(c3p);
		
		arp.setDialect(new PostgreSqlDialect());
		arp.addMapping("zmj_user", User.class);	// 映射blog 表到 zmj_user模型
		arp.addMapping("zmj_org", SiteOrg.class);// 映射blog 表到 zmj_org模型
		arp.setShowSql(true);
		me.add(arp);
	}

	@Override
	public void configInterceptor(Interceptors me) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void configHandler(Handlers me) {
		// TODO Auto-generated method stub
		
	}
	/**
	 * 获取C3p
	 * <code>获取C3p以操作数据库</code>
	 * */
	public static C3p0Plugin getC3plugin(){
		return c3p;
		
	}
}
