package com.nirvasoft.web.pos.util;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;

import com.nirvasoft.web.pos.model.UserData;

import password.DESedeEncryption;

public class ServerUtil {
	public static String SERVER_PATH = "";
	private static boolean IS_LIVE = false;
	public static final int BUFFER_SIZE =8192;
	private static Map<String, Boolean> LOCATIONS_CONFIG = new HashMap<String, Boolean>();
/*	private static Map<String, String> DOMAINS = new HashMap<String, String>();*/

	public static enum SaleAction {
		PAYMENT, VOID, RETURN
	};

	public static void main(String[] args) throws JsonGenerationException, JsonMappingException, IOException {
		System.out.println(new ObjectMapper().writeValueAsString(new UserData()));
	}

	public static String encryptPIN(String p) {
		String ret = "";
		try {
			DESedeEncryption myEncryptor = new DESedeEncryption();
			ret = myEncryptor.encrypt(p);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ret;
	}

	public static String decryptPIN(String p) {
		String ret = "";
		try {
			DESedeEncryption myEncryptor = new DESedeEncryption();
			ret = myEncryptor.decrypt(p);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ret;
	}
	
/*	public static void setDomains(Map<String, String> domains) {
		DOMAINS = domains;
	}*/
	
	public static String getConnectionKey(String domain) {
/*		if(DOMAINS.containsKey(domain))
			return DOMAINS.get(domain);
		else
			return "";*/
		return "001";
	}

	public static UserData getLoginUser(HttpServletRequest request, String type) {
		HttpSession session = request.getSession(false);

		if (session != null && session.getAttribute("cuser") != null) {
			return (UserData) session.getAttribute("cuser");
		} else if (IS_LIVE == false) {
			UserData user = new UserData();
			user.setSyskey("200605010640272518");
			user.setUserId("admin");
			user.setUserName("Demo User");
			if ("co".equals(type)){
				user.setOrgId(EncryptionUtil.decrypt(request.getHeader("Content-Over")));
			} else if ("rp".equals(type)){
				user.setOrgId(EncryptionUtil.decrypt(request.getParameter("oid")));
			}
			
			return user;
		}
		return null;
	}

	public static String getCurrentDate() {
		return new SimpleDateFormat("yyyyMMdd").format(new Date());
	}

	public static String getCurrentTime() {
		return new SimpleDateFormat("HHmmss").format(new Date());
	}

	public static String changeStringtoDateFormat(String aDate) {
		String l_Date = "";
		if (!aDate.equals("") && aDate != null)
			l_Date = aDate.substring(6) + "/" + aDate.substring(4, 6) + "/" + aDate.substring(0, 4);

		return l_Date;
	}

	public static String changeStringtoTime(String timeArg) {
		if (timeArg != null) {
			int hour = Integer.parseInt(timeArg.substring(0, 2));
			String minutes = timeArg.substring(2, 4);
			String period = "AM";
			if (hour >= 12) {
				hour = hour - 12;
				period = "PM";
			} else if (hour == 0) {
				hour = 1;
			}
			String time = hour + ":" + minutes + " " + period;
			return time;
		} else {
			return "";
		}
	}

	public static String getFilter(String data, String dataType, String columnName) {
		String whereClause = "";
		if (!data.equals("") && !(data == null)) {
			if (dataType.equals("eq")) {
				whereClause += " AND " + columnName + " LIKE '" + data + "'";
			} else if (dataType.equals("c")) {
				whereClause += " AND " + columnName + " LIKE '%" + data + "%'";
			} else if (dataType.equals("bw")) {
				whereClause += " AND " + columnName + " LIKE '" + data + "%'";
			} else if (dataType.equals("ew")) {
				whereClause += " AND " + columnName + " LIKE '%" + data + "'";
			}
		}
		return whereClause;
	}

	public static String getDateFilter(String fromDate, String toDate, String dateType, String columnName) {
		String whereClause = "";
		if (!fromDate.equals("") && !(fromDate == null)) {
			if (dateType.equals("eq")) {
				whereClause += " AND " + columnName + " LIKE '" + fromDate + "'";
			} else if (dateType.equals("gt")) {
				whereClause += " AND " + columnName + " > '" + fromDate + "'";
			} else if (dateType.equals("lt")) {
				whereClause += " AND " + columnName + " < '" + fromDate + "'";
			} else if (dateType.equals("geq")) {
				whereClause += " AND " + columnName + " >= '" + fromDate + "'";
			} else if (dateType.equals("leq")) {
				whereClause += " AND " + columnName + " <= '" + fromDate + "'";
			}
		}
		if (!toDate.equals("") && !(toDate == null)) {
			if (dateType.equals("bt")) {
				whereClause += " AND " + columnName + " BETWEEN '" + fromDate + "' AND '" + toDate + "'";
			}
		}
		return whereClause;
	}
	public static boolean isShowAllLocation(String orgId) {
		if (LOCATIONS_CONFIG.containsKey(orgId))
			return LOCATIONS_CONFIG.get(orgId);
		else
			return false;
	}
	public static String nextID(String str) {
		String prefix = "";
		String postfix = "";
		String body = "";
		char curChar;
		String nextBody = "";
		String substringresult = "";

		Boolean scanPrefix, scanPostfix, scanBody;

		Integer startPos = 0;

		str = str.trim();

		scanPrefix = true;
		scanBody = false;
		scanPostfix = false;

		try {
			startPos = str.indexOf("-");

			if (startPos > 0) {
				prefix = str.substring(0, startPos + 1);
				scanPrefix = false;
				scanBody = true;
				scanPostfix = false;
				startPos = startPos + 1;
			} else {
				startPos = 0;
			}

			for (int i = startPos; i < str.length(); i++) {
				Boolean ispreflag = false;
				Boolean isbodyflag = false;
				substringresult = str.substring(i, i + 1);
				curChar = substringresult.charAt(0);

				if (scanPrefix) {
					if (Character.isDigit(curChar)) {
						body = String.valueOf(curChar);
						scanPrefix = false;
						scanBody = true;
						scanPostfix = false;
					} else {
						prefix = prefix + curChar;
					}
					// z
					ispreflag = true;
				}
				if (!ispreflag) {
					if (scanBody) {
						if (curChar == ' ') {
							curChar = 0;
						}
						if (Character.isDigit(curChar)) {
							body = body + curChar;
						} else {
							postfix = curChar + "";
							scanPrefix = false;
							scanBody = false;
							scanPostfix = true;
						}
						// y
						isbodyflag = true;
					}
				}

				if (!ispreflag && !isbodyflag) {
					if (scanPostfix) {
						postfix = postfix + curChar;
					}
				}
			}

			if (body.equals("")) {
				nextBody = "1";
			} else {
				nextBody = "" + (Long.parseLong(body) + 1);
				// nextBody = "" + (Integer.parseInt(body) + 1);
			}

			for (int c = nextBody.length(); c < body.length(); c++) {
				nextBody = "0" + nextBody;
			}

			if (postfix != null && postfix.length() > 0 && postfix.substring(0, 1).equals("/")) {
				return prefix + nextBody + postfix;
			} else {
				return prefix + nextBody;
			}

		} catch (Exception ex) {
			throw ex;
		}
	}
}
