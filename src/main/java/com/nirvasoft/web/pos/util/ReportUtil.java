package com.nirvasoft.web.pos.util;

import java.io.InputStream;
import java.util.HashMap;

import net.sf.jasperreports.engine.JREmptyDataSource;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanArrayDataSource;

public class ReportUtil {
	public static JasperPrint printReport() {
		JasperPrint l_jPrint = new JasperPrint();
		JasperReport l_jsRpt = null;
		String l_rptFile = "E:\\workForOtherTeam\\workspace\\Angular2\\src\\main\\java\\com\\nirvasoft\\web\\pos\\util\\nurseactivity.jrxml";
		HashMap<String, Object> params = new HashMap<String, Object>();
		try {
			l_jsRpt = JasperCompileManager.compileReport(l_rptFile);
			l_jPrint = JasperFillManager.fillReport(l_jsRpt, params);
			
		} catch (JRException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return l_jPrint;
//		l_jPrint = JasperFillManager.fillReport(l_jsRpt, params, l_dataSource);
	}
}