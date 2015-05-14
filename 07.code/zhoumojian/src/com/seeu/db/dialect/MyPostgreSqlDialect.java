/**
 * Copyright (c) 2011-2015, anglezhang 张振兴 (anglezhang_116@126.com).
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.seeu.db.dialect;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import com.jfinal.plugin.activerecord.dialect.PostgreSqlDialect;

/**
 * MyPostgreSqlDialect.
 * */
public class MyPostgreSqlDialect extends PostgreSqlDialect{
	@Override
	public void fillStatement(PreparedStatement pst, List<Object> paras) throws SQLException {
		for (int i=0, size=paras.size(); i<size; i++) {
			pst.setObject(i + 1, paras.get(i));
		}
	}
	@Override
	public void fillStatement(PreparedStatement pst, Object... paras) throws SQLException {
		for (int i=0; i<paras.length; i++) {
			pst.setObject(i + 1, paras[i]);
		}
	}

}
