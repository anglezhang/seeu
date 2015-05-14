package com.seeu.Model;

import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.Page;

public class SiteOrg extends Model<SiteOrg>{
	public static final SiteOrg siteOrg = new SiteOrg();
	public Page<SiteOrg> paginate(int pageNumber, int pageSize) {
		return paginate(pageNumber, pageSize, "select *", "from zmj_org order by id asc");
	}

}
