package com.nirvasoft.web.pos.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import com.nirvasoft.web.pos.util.ConnectionUtil;
import com.nirvasoft.web.pos.util.ServerUtil;

public class PosStartupServlet implements ServletContextListener {

	@Override
	public void contextDestroyed(ServletContextEvent arg0) {
	}

	@Override
	public void contextInitialized(ServletContextEvent arg0) {
		Properties props = new Properties();
		ServerUtil.SERVER_PATH = arg0.getServletContext().getRealPath("/");
		try (InputStream stream = new FileInputStream(new File(ServerUtil.SERVER_PATH + "WEB-INF/data/databases.properties"))) {
			props.load(stream);
			Map<String, String> connMap = new HashMap<String, String>();
			
			for(Object obj : props.keySet()){
				String key = (String) obj;
				connMap.put(key, props.getProperty(key));
			}
			
			ConnectionUtil.setConnectionProperties(connMap);
			
			//get domains
			String domains = arg0.getServletContext().getInitParameter("domains");
			Map<String, String> domainMap = new HashMap<>();
			String[] domainList = domains.split("\\|\\|");
			for(String domain : domainList){
				String[] temp = domain.split("\\^");
				domainMap.put(temp[1], temp[0]);
			}
			
			/*ServerUtil.setDomains(domainMap);*/
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}