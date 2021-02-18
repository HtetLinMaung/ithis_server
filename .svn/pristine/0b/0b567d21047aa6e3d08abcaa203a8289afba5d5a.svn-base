package com.nirvasoft.web.pos.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.nirvasoft.web.pos.model.ButtonCarryData;
import com.nirvasoft.web.pos.model.ButtonData;
import com.nirvasoft.web.pos.model.RoleData;
import com.nirvasoft.web.pos.model.RoleMenuData;
import com.nirvasoft.web.pos.util.ServerUtil;
import com.nirvasoft.web.pos.util.SyskeyUtil;

@Repository
public class RoleDao {

	public static ArrayList<RoleMenuData> getAllRole(Connection conn) {
		ArrayList<RoleMenuData> ret = new ArrayList<RoleMenuData>();
		RoleMenuData data = new RoleMenuData();
		try {
			String sql = "SELECT syskey,t2,n2 FROM UVM022 WHERE n2=0";
			PreparedStatement stat = conn.prepareStatement(sql);
			ResultSet result = stat.executeQuery();

			while (result.next()) {
				data = new RoleMenuData();
				data.setSyskey(result.getString("syskey"));
				data.setT2(result.getString("t2"));
				data.setN2(result.getString("n2"));
				data.setChildmenus(getChildMenuData(result.getLong("syskey"), conn));
				ret.add(data);
			}

		} catch (SQLException sqle) {
			sqle.printStackTrace();
		}
		return ret;
	}

	public static ArrayList<RoleMenuData> getChildMenuData(long skey, Connection conn) throws SQLException {

		ArrayList<RoleMenuData> ret = new ArrayList<RoleMenuData>();
		RoleMenuData data = null;
		try {
			String sql = "SELECT DISTINCT t2, t3, MIN(syskey) AS syskey, MIN(n2) AS n2 FROM UVM022 WHERE n2=? GROUP BY t2, t3 ORDER BY syskey";
			PreparedStatement stat = conn.prepareStatement(sql);
			stat.setLong(1, skey);
			ResultSet result = stat.executeQuery();

			while (result.next()) {
				data = new RoleMenuData();
				data.setSyskey(result.getString("syskey"));
				data.setT2(result.getString("t2"));
				String t3 = result.getString("t3");
				data.setT3(t3);
				data.setN2(result.getString("n2"));

				ArrayList<ButtonData> btnlist = new ArrayList<ButtonData>();
				String[] strs = t3.split(",");

				for (int i = 0; i < strs.length; i++) {
					ButtonData btn = getButtonListByKey(conn, strs[i]);
					btnlist.add(btn);
				}

				data.setBtns(btnlist);
				ret.add(data);
			}

		} catch (SQLException sqle) {
			sqle.printStackTrace();
		}
		return ret;
	}

	public static ButtonData getButtonListByKey(Connection conn, String key) throws SQLException {

		ButtonData ret = new ButtonData();
		String sql = "SELECT SYSKEY,T1,T2 FROM BUT001 WHERE RECORDSTATUS<>4 AND SYSKEY=?";
		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setLong(1, Long.parseLong(key));
		ResultSet rs = stat.executeQuery();

		if (rs.next()) {
			ret.setSyskey(rs.getString("SYSKEY"));
			ret.setT1(rs.getString("T1"));
			ret.setT2(rs.getString("T2"));
		}
		return ret;
	}

	public int updateRoleHeader(RoleData data, Connection conn) throws SQLException {
		int effectedRow = 0;
		String sql = "Update UVM009 set MODIFIEDDATE=?,USERID=?,USERNAME=?,T1=?,T2=?,USERSYSKEY=? Where SYSKEY=?";
		PreparedStatement stat = conn.prepareStatement(sql);
		int i = 1;
		stat.setString(i++, ServerUtil.getCurrentDate());
		stat.setString(i++, data.getUserId());
		stat.setString(i++, data.getUserName());
		stat.setString(i++, data.getT1());
		stat.setString(i++, data.getT2());
		stat.setLong(i++, Long.parseLong(data.getUsersyskey()));
		stat.setLong(i++, Long.parseLong(data.getSyskey()));
		effectedRow = stat.executeUpdate();

		return effectedRow;
	}

	public int saveRoleHeader(RoleData data, Connection conn) throws SQLException {
		int effectRow = 0;

		String sql = "Insert Into UVM009(SYSKEY,CREATEDDATE,MODIFIEDDATE,USERID,USERNAME,RECORDSTATUS,SYNCSTATUS,SYNCBATCH,T1,T2,N1,N2,N3,USERSYSKEY) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		PreparedStatement stat = conn.prepareStatement(sql);
		int i = 1;
		stat.setLong(i++, Long.parseLong(data.getSyskey()));
		stat.setString(i++, ServerUtil.getCurrentDate());
		stat.setString(i++, ServerUtil.getCurrentDate());
		stat.setString(i++, data.getUserId());
		stat.setString(i++, data.getUserName());
		stat.setInt(i++, 1); // RecordStatus
		stat.setInt(i++, 1); // SyncStatus
		stat.setLong(i++, 0);
		stat.setString(i++, data.getT1());
		stat.setString(i++, data.getT2());
		stat.setInt(i++, data.getN1());
		stat.setInt(i++, data.getN2());
		stat.setLong(i++, Long.parseLong(data.getN3()));
		stat.setLong(i++, Long.parseLong(data.getUsersyskey()));

		effectRow = stat.executeUpdate();

		return effectRow;

	}

	public boolean isCodeExist(RoleData obj, Connection conn) throws SQLException {
		int effectRow = 0;
		String sql = "SELECT Count(Syskey) AS COUNT FROM UVM009 WHERE RECORDSTATUS<>4 AND SYSKEY <> ?  AND  t1=? ";
		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setString(1, (obj.getSyskey()));
		stat.setString(2, (obj.getT1()));
		ResultSet rs = stat.executeQuery();

		if (rs.next()) {
			effectRow = rs.getInt("COUNT");
		}

		if (effectRow > 0) {
			return true;
		} else {
			return false;
		}
	}

	public int saveRoleMenu(RoleMenuData data, String roleSyskey, String userId, String userName, String userSyskey,
			ArrayList<ButtonCarryData> btnlist, Connection conn) throws SQLException {
		int effectedRow = 0;

		String sql = "Insert Into UVM023(SYSKEY,CREATEDDATE,MODIFIEDDATE,USERID,USERNAME,RECORDSTATUS,SYNCSTATUS,SYNCBATCH,T1,T2,T3,N1,N2,N3,N4,N5,N6,USERSYSKEY) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		PreparedStatement stat = conn.prepareStatement(sql);

		stat.setLong(1, SyskeyUtil.getSyskey());
		stat.setString(2, ServerUtil.getCurrentDate());
		stat.setString(3, ServerUtil.getCurrentDate());
		stat.setString(4, userId);
		stat.setString(5, userName);
		stat.setInt(6, 1); // RecordStatus
		stat.setInt(7, 0); // SyncStatus
		stat.setLong(8, 0);
		for (int num = 0; num < btnlist.size(); num++) {
			stat.setString(9, "");
			if (data.getSyskey().equals(btnlist.get(num).getSyskey() + "")) {
				stat.setString(9, btnlist.get(num).getDesc()); // T1
				break;
			}
		}
		stat.setString(10, ""); // T2
		stat.setString(11, ""); // T3
		stat.setLong(12, Long.parseLong(roleSyskey)); // N1
		stat.setLong(13, Long.parseLong(data.getSyskey())); // N2
		stat.setLong(14, 0); // N3
		stat.setLong(15, 0); // N4
		stat.setLong(16, 0); // N5
		stat.setLong(17, 0); // N6
		stat.setLong(18, Long.parseLong(userSyskey));
		effectedRow = stat.executeUpdate();
		if (effectedRow > 0) {
			for (int j = 0; j < data.getChildmenus().size(); j++) {
				if (data.getChildmenus().get(j).isResult()) {
					effectedRow = saveRoleChildMenu(data.getChildmenus().get(j), roleSyskey, userId, userName,
							userSyskey, btnlist, conn);
				}
			}
		}

		return effectedRow;
	}

	private int saveRoleChildMenu(RoleMenuData data, String roleSyskey, String userId, String userName,
			String userSyskey, ArrayList<ButtonCarryData> btnlist, Connection conn) throws SQLException {
		int effectedRow = 0;
		String sql = "Insert Into UVM023(SYSKEY,CREATEDDATE,MODIFIEDDATE,USERID,USERNAME,RECORDSTATUS,SYNCSTATUS,SYNCBATCH,T1,T2,T3,N1,N2,N3,N4,N5,N6,USERSYSKEY) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setLong(1, SyskeyUtil.getSyskey());
		stat.setString(2, ServerUtil.getCurrentDate());
		stat.setString(3, ServerUtil.getCurrentDate());
		stat.setString(4, userId);
		stat.setString(5, userName);
		stat.setInt(6, 1); // RecordStatus
		stat.setInt(7, 0); // SyncStatus
		stat.setLong(8, 0);
		for (int num = 0; num < btnlist.size(); num++) {
			stat.setString(9, "");
			if (data.getSyskey().equals(btnlist.get(num).getSyskey() + "")) {
				stat.setString(9, btnlist.get(num).getDesc()); // T1
				break;
			}
		}
		stat.setString(10, ""); // T2
		stat.setString(11, ""); // T3
		stat.setLong(12, Long.parseLong(roleSyskey)); // N1
		stat.setLong(13, Long.parseLong(data.getSyskey())); // N2
		stat.setLong(14, 0); // N3
		stat.setLong(15, 0); // N4
		stat.setLong(16, 0); // N5
		stat.setLong(17, 0); // N6
		stat.setLong(18, Long.parseLong(userSyskey));
		effectedRow = stat.executeUpdate();
		return effectedRow;

	}

	public Map<String, Object> searchRoleList(HashMap<String, Object> data, Connection conn) throws SQLException {
		Map<String, Object> result = new HashMap<>();
		List<RoleData> roleList = new ArrayList<RoleData>();
		RoleData roleData = null;
		int totalCount = 0;

		String sql = "SELECT SYSKEY,T1,T2 FROM UVM009";
		String whereClause = " WHERE RECORDSTATUS<>4 AND SYSKEY<>0";

		whereClause += ServerUtil.getFilter((String) data.get("code"), (String) data.get("codeType"), "T1");
		whereClause += ServerUtil.getFilter((String) data.get("description"), (String) data.get("descriptionType"),
				"T2");

		sql += whereClause;
		int currentPage = (int) data.get("currentPage");
		int pageSize = (int) data.get("pageSize");
		int start = (currentPage - 1) * pageSize;

		sql += " ORDER BY T1 DESC OFFSET " + start + " ROWS FETCH NEXT " + pageSize + " ROWS ONLY ";

		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();

		while (rs.next()) {
			roleData = new RoleData();
			roleData.setSyskey(rs.getString("SYSKEY"));
			roleData.setT1(rs.getString("T1"));
			roleData.setT2(rs.getString("T2"));
			roleList.add(roleData);
		}

		stmt = conn.prepareStatement("SELECT COUNT(SYSKEY) AS totalCount FROM UVM009 " + whereClause);
		rs = stmt.executeQuery();
		if (rs.next())
			totalCount = rs.getInt("totalCount");

		result.put("rolelistdata", roleList);
		result.put("totalCount", totalCount);

		return result;
	}

	public static RoleData readRole(String roleSyskey, Connection conn) throws SQLException {
		RoleData result = new RoleData();
		String sql = "SELECT SYSKEY,T1,T2 FROM UVM009 WHERE SYSKEY=? AND RECORDSTATUS<>4";
		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setLong(1, Long.parseLong(roleSyskey));
		ResultSet rs = stat.executeQuery();
		if (rs.next()) {
			result.setSyskey(rs.getString("SYSKEY"));
			result.setT1(rs.getString("T1"));
			result.setT2(rs.getString("T2"));
			result.setMenu(getRoleMenuList(Long.parseLong(result.getSyskey()), conn));
		}

		return result;
	}

	public static ArrayList<RoleMenuData> getRoleMenuList(long pkey, Connection conn) {
		ArrayList<RoleMenuData> resultList = new ArrayList<RoleMenuData>();
		RoleMenuData data = null;
		try {
			String sql = "SELECT syskey,t2,t3,n2 FROM UVM022 WHERE n2=0 and RecordStatus<>4";

			PreparedStatement stat = conn.prepareStatement(sql);
			ResultSet rs = stat.executeQuery();
			ArrayList<String> getRightMenu = getMenuResult(pkey, conn);
			while (rs.next()) {
				data = new RoleMenuData();
				data.setSyskey(rs.getString("syskey"));
				data.setT2(rs.getString("t2"));
				data.setT3(rs.getString("t3"));
				data.setN2(rs.getString("n2"));
				for (int i = 0; i < getRightMenu.size(); i++) {
					if (getRightMenu.get(i).equals(rs.getString("syskey"))) {
						data.setResult(true);
					}
				}
				data.setChildmenus(getChildMenuRightData(pkey, rs.getLong("syskey"), conn));

				resultList.add(data);
			}

		} catch (SQLException sqle) {
			sqle.printStackTrace();
		}
		return resultList;
	}

	public static ArrayList<String> getMenuResult(long skey, Connection conn) throws SQLException {

		ArrayList<String> datalist = new ArrayList<String>();

		String sql = "Select syskey from UVM022 Where syskey IN (Select n2 from UVM023 Where n1=? ) AND n2=0";

		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setLong(1, skey);
		ResultSet res = stat.executeQuery();

		while (res.next()) {
			datalist.add(res.getString("syskey"));
		}

		return datalist;
	}

	public static String getRightMenuBtn(long syskey, long childsyskey, Connection conn) throws SQLException {
		String t1 = "";
		PreparedStatement stat = conn.prepareStatement(
				"SELECT t1 FROM UVM023 WHERE n1 = " + syskey + " AND n2 = " + childsyskey + " AND RecordStatus <> 4");
		ResultSet result = stat.executeQuery();
		while (result.next()) {
			t1 = result.getString("t1");
		}
		return t1;
	}

	public static ArrayList<RoleMenuData> getChildMenuRightData(long pkey, long mainMenuSyskye, Connection conn)
			throws SQLException {

		ArrayList<RoleMenuData> resultList = new ArrayList<RoleMenuData>();
		RoleMenuData data = new RoleMenuData();
		try {

			String sql = "SELECT DISTINCT t2, t3, MIN(syskey) AS syskey  ,"
					+ " MIN(n2) AS n2 FROM UVM022 WHERE n2=? GROUP BY t2, t3 ORDER BY syskey";

			PreparedStatement stat = conn.prepareStatement(sql);
			stat.setLong(1, mainMenuSyskye);
			ResultSet rs = stat.executeQuery();

			while (rs.next()) {
				data = new RoleMenuData();
				data.setSyskey(rs.getString("syskey"));
				data.setT2(rs.getString("t2"));
				String t3 = rs.getString("t3");
				data.setT3(t3);
				data.setN2(rs.getString("n2"));
				String[] strs = t3.split(",");
				ArrayList<ButtonData> btnlist = new ArrayList<ButtonData>();
				for (int i = 0; i < strs.length; i++) {
					ButtonData btn = getButtonListByKey(conn, strs[i]);
					String temp = getRightMenuBtn(pkey, rs.getLong("syskey"), conn);
					String[] temps = temp.split(",");
					for (int j = 0; j < temps.length; j++) {
						if (temps[j].equals(String.valueOf(btn.getSyskey()))) {
							btn.setFlag(true);
						}
					}
					btnlist.add(btn);
				}
				data.setBtns(btnlist);
				long s[] = getChildResult(pkey, conn);
				for (int i = 0; i < s.length; i++) {
					if (s[i] == (rs.getLong("syskey")))
						data.setResult(true);
				}
				resultList.add(data);
			}

		} catch (SQLException sqle) {
			sqle.printStackTrace();
		}

		return resultList;
	}

	public static long[] getChildResult(long skey, Connection conn) throws SQLException {

		ArrayList<Long> ary = new ArrayList<Long>();
		try {
			String sql = "Select syskey from UVM022 Where syskey " + "IN (Select n2 from UVM023 Where n1=" + skey
					+ ") AND n2<>0";

			PreparedStatement stat = conn.prepareStatement(sql);
			ResultSet res = stat.executeQuery();

			while (res.next()) {
				ary.add(res.getLong("syskey"));
			}

		} catch (SQLException sqle) {
			sqle.printStackTrace();
		}

		long[] result = new long[ary.size()];

		for (int i = 0; i < ary.size(); i++) {
			result[i] = ary.get(i);
		}
		return result;
	}

	public int clearRoleMenu(RoleData data, Connection conn) throws SQLException {

		String sql = "DELETE FROM UVM023 WHERE n1=?";
		PreparedStatement stmt = conn.prepareStatement(sql);
		stmt.setLong(1, Long.parseLong(data.getSyskey()));
		int rs = stmt.executeUpdate();
		return rs;
	}

	public int deleteRoleHeader(String syskey, Connection conn) throws NumberFormatException, SQLException {
		int effectedRow = 0;

		String sql = "UPDATE UVM023 SET RecordStatus=4 WHERE n1=?";
		PreparedStatement stmt = conn.prepareStatement(sql);
		stmt.setLong(1, Long.parseLong(syskey));
		effectedRow = stmt.executeUpdate();
		return effectedRow;
	}

	public boolean canDelete(String key, Connection conn) throws SQLException {

		ArrayList<Long> dataList = new ArrayList<Long>();
		String sql = "Select n1 From JUN002 Where n2=? And RecordStatus<>4";
		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setLong(1, Long.parseLong(key));
		ResultSet result = stat.executeQuery();
		while (result.next()) {
			dataList.add(result.getLong("n1"));
		}
		if (dataList.size() > 0) {
			return true;
		} else {
			return false;
		}
	}

	public int deleteRoleMenu(String syskey, Connection conn) throws SQLException {
		int effectedRow = 0;
		if (!canDelete(syskey, conn)) {
			String sql = "UPDATE UVM009 SET RecordStatus=4 WHERE Syskey=?";
			PreparedStatement stmt = conn.prepareStatement(sql);
			stmt.setLong(1, Long.parseLong(syskey));
			effectedRow = stmt.executeUpdate();
		}
		return effectedRow;
	}

	public List<RoleData> getAllData(Connection conn) throws SQLException {
		List<RoleData> result = new ArrayList<>();
		String sql = "SELECT SYSKEY,T1,T2 FROM UVM009 WHERE RECORDSTATUS<>4";
		PreparedStatement stat = conn.prepareStatement(sql);
		ResultSet rs = stat.executeQuery();
		while (rs.next()) {
			RoleData data = new RoleData();
			data.setSyskey(rs.getString("SYSKEY"));
			data.setT1(rs.getString("T1"));
			data.setT2(rs.getString("T2"));
			result.add(data);
		}
		return result;
	}

}
