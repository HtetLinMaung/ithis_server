package com.nirvasoft.web.pos.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.util.HashMap;
import java.util.Map;

public class ConnectionUtil {
	private static Map<String, String> connectionMap = new HashMap<>();
	private static String driver = "net.sourceforge.jtds.jdbc.Driver";

	public static Connection getConnection(String orgId) {
		if (connectionMap.containsKey(orgId)) {
			return getConnectionByProperties(connectionMap.get(orgId).split(","));
		}
		return null;
	}
	
	public static Connection getUserConnection(String orgId) {
		if (connectionMap.containsKey(orgId)) {
			String[] props = connectionMap.get(orgId).split(",");
			if(props.length > 6){
				return getConnection(props[6]);
			}
		}
		return null;
	}

	private static Connection getConnectionByProperties(String... properties) {
		String url = "jdbc:jtds:sqlserver://" + properties[0] + ":" + properties[1] + "/" + properties[3] + ";Instance="
				+ properties[2] + ";";
		String userId = properties[4];
		String password = ServerUtil.decryptPIN(properties[5]);

		try {
			Class.forName(driver).newInstance();
			return DriverManager.getConnection(url, userId, password);
		} catch (Exception ex) {
			ex.printStackTrace();
		}

		return null;
	}

	public static void setConnectionProperties(Map<String, String> props) {
		connectionMap = props;
	}
}
