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

import com.nirvasoft.web.pos.model.ButtonData;
import com.nirvasoft.web.pos.model.MenuData;
import com.nirvasoft.web.pos.model.MenuOrderData;
import com.nirvasoft.web.pos.model.MenuRightData;
import com.nirvasoft.web.pos.util.ServerUtil;

@Repository
public class MenuDao {

	public Map<String, Object> searchMenuList(HashMap<String, Object> data, Connection conn) throws SQLException {
		Map<String, Object> result = new HashMap<>();
		List<MenuData> dataList = new ArrayList<MenuData>();
		int totalCount = 0;

		String sql = "SELECT SYSKEY,T1,T2,T3,N2 FROM UVM022";
		String whereClause = " WHERE RECORDSTATUS<>4 ";

		whereClause += ServerUtil.getFilter((String) data.get("code"), (String) data.get("codeType"), "SYSKEY");
		whereClause += ServerUtil.getFilter((String) data.get("description"), (String) data.get("descriptionType"),
				"T2");

		sql += whereClause;
		int currentPage = (int) data.get("currentPage");
		int pageSize = (int) data.get("pageSize");
		int start = (currentPage - 1) * pageSize;
		sql += " ORDER BY T1 OFFSET  " + start + " ROWS FETCH NEXT " + pageSize + " ROWS ONLY ";
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();

		while (rs.next()) {
			MenuData menudata = new MenuData();
			menudata.setSyskey(rs.getString("SYSKEY"));
			menudata.setT1(rs.getString("T1"));
			menudata.setT2(rs.getString("T2"));
			menudata.setT3(rs.getString("T3"));
			menudata.setT4(getParent(rs.getString("N2"), conn));
			dataList.add(menudata);
		}

		stmt = conn.prepareStatement("SELECT COUNT(SYSKEY) AS totalCount FROM UVM022 " + whereClause);
		rs = stmt.executeQuery();
		if (rs.next())
			totalCount = rs.getInt("totalCount");
		result.put("menulistdata", dataList);
		result.put("totalCount", totalCount);
		return result;
	}

	public String getMaxCode(Connection conn) throws SQLException {
		String sql = "SELECT ISNULL(MAX(SYSKEY),0)+1 AS MAXCOUNT FROM UVM022 ";
		String Parent = "";
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();
		if (rs.next()) {
			Parent = rs.getString("MAXCOUNT");
		}
		return Parent;
	}

	public String getMaxCode23(Connection conn) throws SQLException {
		String sql = "SELECT ISNULL(MAX(SYSKEY),0)+1 AS MAXCOUNT FROM UVM023 ";
		String Parent = "";
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();
		if (rs.next()) {
			Parent = rs.getString("MAXCOUNT");
		}
		return Parent;
	}

	public String getParent(String parentId, Connection conn) throws SQLException {
		String Parent = "";
		if (!parentId.equals("0")) {
			String sql = "SELECT T2 AS PARENT FROM UVM022 WHERE SYSKEY=? AND RECORDSTATUS<>4 ";
			PreparedStatement stmt = conn.prepareStatement(sql);
			stmt.setLong(1, Long.parseLong(parentId));
			ResultSet rs = stmt.executeQuery();

			if (rs.next()) {
				Parent = rs.getString("PARENT");
			}
		}
		return Parent;
	}

	public boolean isCodeExist(MenuData obj, Connection conn) throws SQLException {
		String sql = "SELECT COUNT(*) AS TotalCount FROM UVM022 WHERE RecordStatus<>4 AND SYSKEY <> ? AND T2 LIKE ?";
		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setString(1, obj.getSyskey());
		stat.setString(2, obj.getT2());
		ResultSet rs = stat.executeQuery();
		rs.next();
		if (rs.getInt("TotalCount") > 0) {
			return true;
		} else {
			return false;
		}
	}

	public int saveMenu(MenuData data, Connection conn) throws SQLException {
		int effectedRow = 0;
		String sql = "INSERT UVM022 (syskey, createddate, modifieddate, userid, username, RecordStatus, SyncStatus, SyncBatch, t1, t2, t3, t4, t5, t6, n1, n2, n3, n4, usersyskey, n5 ,n6 ,n7) "
				+ "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, '', '', '', 0, ?, ? , 0, ?, 0, '', 0)";
		PreparedStatement stat = conn.prepareStatement(sql);
		String currentDate = ServerUtil.getCurrentDate();
		int i = 1;
		stat.setString(i++, data.getSyskey());
		stat.setString(i++, currentDate);
		stat.setString(i++, currentDate);
		stat.setString(i++, data.getUserId());
		stat.setString(i++, data.getUserName());
		stat.setInt(i++, 1);// RecordStatus
		stat.setInt(i++, 0); // SyncStatus
		stat.setInt(i++, 0); // SyncBatch
		stat.setString(i++, data.getT1());
		stat.setString(i++, data.getT2());
		stat.setString(i++, data.getT3());
		stat.setString(i++, data.getN2());
		stat.setString(i++, data.getN3());
		stat.setString(i++, data.getUsersyskey()); // UserSyskey

		effectedRow = stat.executeUpdate();
		return effectedRow;
	}

	public int saveRoleMenu(MenuData data, Connection conn) throws SQLException {
		int effectedRow = 0;
		String sql = "INSERT UVM023 (syskey, createddate, modifieddate, userid, username, RecordStatus, SyncStatus, SyncBatch, t1, t2, t3, n1, n2, n3, n4, n5, n6, usersyskey) "
				+ "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?, ? , 0, 0, 0, ?)";
		PreparedStatement stat = conn.prepareStatement(sql);
		String currentDate = ServerUtil.getCurrentDate();
		int i = 1;
		stat.setString(i++, getMaxCode23(conn));
		stat.setString(i++, currentDate);
		stat.setString(i++, currentDate);
		stat.setString(i++, data.getUserId());
		stat.setString(i++, data.getUserName());
		stat.setInt(i++, 1);// RecordStatus
		stat.setInt(i++, 0); // SyncStatus
		stat.setInt(i++, 0); // SyncBatch
		stat.setString(i++, data.getT1());
		stat.setString(i++, data.getT2());
		stat.setString(i++, data.getT3());
		stat.setString(i++, data.getSyskey());
		stat.setString(i++, data.getN3());
		stat.setString(i++, data.getUsersyskey()); // UserSyskey

		effectedRow = stat.executeUpdate();
		return effectedRow;
	}

	public int updateMenu(MenuData data, Connection conn) throws SQLException {
		int effectedRow = 0;

		String sql = "UPDATE UVM022 SET modifieddate=?, userid=?, username=?, t1=?, t2=?, t3=?, n2=?, n3=?, UserSysKey=? WHERE SYSKEY=? AND RECORDSTATUS<>4";
		PreparedStatement stat = conn.prepareStatement(sql);
		String currentDate = ServerUtil.getCurrentDate();
		int i = 1;
		stat.setString(i++, currentDate);
		stat.setString(i++, data.getUserId());
		stat.setString(i++, data.getUserName());
		stat.setString(i++, data.getT1());
		stat.setString(i++, data.getT2());
		stat.setString(i++, data.getT3());
		stat.setString(i++, data.getN2());
		stat.setString(i++, data.getN3());
		stat.setString(i++, data.getUsersyskey());
		stat.setString(i++, data.getSyskey());
		effectedRow = stat.executeUpdate();
		return effectedRow;

	}

	public int updateRoleMenu(MenuData data, Connection conn) throws SQLException {
		int effectedRow = 0;
		String sql = "UPDATE UVM023 SET modifieddate=?, userid=?, username=?, t1=?, t2=?, t3=?, n2=?, n3=?, UserSysKey=? WHERE SYSKEY=? AND RECORDSTATUS<>4";

		PreparedStatement stat = conn.prepareStatement(sql);
		String currentDate = ServerUtil.getCurrentDate();
		int i = 1;
		stat.setString(i++, currentDate);
		stat.setString(i++, data.getUserId());
		stat.setString(i++, data.getUserName());
		stat.setString(i++, data.getT1());
		stat.setString(i++, data.getT2());
		stat.setString(i++, data.getT3());
		stat.setString(i++, data.getSyskey());
		stat.setString(i++, data.getN3());
		stat.setString(i++, data.getUsersyskey()); // UserSyskey
		stat.setString(i++, data.getSyskey());
		effectedRow = stat.executeUpdate();
		return effectedRow;
	}

	public HashMap<String, Object> getButtonList(Connection conn) throws SQLException {

		HashMap<String, Object> result = new HashMap<>();
		List<ButtonData> dataList = new ArrayList<ButtonData>();
		String sql = "SELECT SYSKEY,T1,T2 FROM BUT001 WHERE RECORDSTATUS<>4 ";
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();
		while (rs.next()) {
			ButtonData buttondata = new ButtonData();
			buttondata.setSyskey(rs.getString("SYSKEY"));
			buttondata.setT1(rs.getString("T1"));
			buttondata.setT2(rs.getString("T2"));
			dataList.add(buttondata);
		}
		result.put("buttonlistdata", dataList);
		return result;
	}

	public HashMap<String, Object> getMainList(Connection conn) throws SQLException {

		HashMap<String, Object> result = new HashMap<>();
		List<MenuData> dataList = new ArrayList<MenuData>();
		String sql = "SELECT syskey,t2 FROM UVM022  WHERE RecordStatus<>4 AND n2=0 order by SyncBatch";
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();
		while (rs.next()) {
			MenuData buttondata = new MenuData();
			buttondata.setSyskey(rs.getString("SYSKEY"));
			buttondata.setT2(rs.getString("T2"));
			dataList.add(buttondata);
		}
		result.put("mainmenudatas", dataList);
		return result;
	}

	public MenuData readMenu(String id, Connection conn) throws SQLException {
		MenuData result = new MenuData();
		String sql = "SELECT SYSKEY, T1, T2, T3, N2, N3 FROM UVM022 WHERE SYSKEY=? AND RECORDSTATUS<>4";
		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setLong(1, Long.parseLong(id));
		ResultSet rs = stat.executeQuery();
		if (rs.next()) {
			result.setSyskey(rs.getString("SYSKEY"));
			result.setT1(rs.getString("T1"));
			result.setT2(rs.getString("T2"));
			result.setT3(rs.getString("T3"));
			result.setN2(rs.getString("N2"));
			result.setN3(rs.getString("N3"));
		}

		return result;
	}

	public boolean checkMenu(long id, Connection conn) throws SQLException {
		String sql = "SELECT COUNT(*) AS TotalCount FROM UVM022 WHERE RecordStatus<>4 AND N2=?";
		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setLong(1, id);
		ResultSet rs = stat.executeQuery();
		rs.next();
		if (rs.getInt("TotalCount") > 0) {
			return true;
		} else {
			return false;
		}
	}

	public int deleteMenu(long syskey, long n2, Connection conn) throws SQLException {
		int effectedRow = 0;
		String sql = "UPDATE UVM022 SET RecordStatus=4 WHERE syskey=?";
		PreparedStatement stmt = conn.prepareStatement(sql);
		stmt.setLong(1, syskey);
		effectedRow = stmt.executeUpdate();
		return effectedRow;

	}

	public boolean canDeletekMenu(long id, Connection conn) throws SQLException {
		String sql = "SELECT COUNT(*) AS TotalCount FROM UVM023 WHERE RecordStatus<>4 AND N2=?";
		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setLong(1, id);
		ResultSet rs = stat.executeQuery();
		rs.next();
		if (rs.getInt("TotalCount") > 0) {
			return true;
		} else {
			return false;
		}
	}

	public boolean canDeleteParent(long key, Connection conn) throws SQLException {
		ArrayList<Long> dbrs = new ArrayList<Long>();
		String sql = "Select N1 From UVM022 Where  RecordStatus<>4 AND N2=" + key;

		PreparedStatement stat = conn.prepareStatement(sql);
		ResultSet result = stat.executeQuery();
		while (result.next()) {
			dbrs.add(result.getLong("n1"));
		}
		if (dbrs.size() > 0) {
			return false;
		} else {
			return true;
		}
	}

	public boolean canDelete(long key, Connection conn) throws SQLException {
		ArrayList<Long> dbrs = new ArrayList<Long>();
		String sql = "Select n1 From UVM023 Where RecordStatus<>4 AND n2=" + key + " AND n1<>1";
		PreparedStatement stat = conn.prepareStatement(sql);
		ResultSet result = stat.executeQuery();
		while (result.next()) {
			dbrs.add(result.getLong("n1"));
		}
		if (dbrs.size() > 0) {
			return true;
		} else {
			return false;
		}
	}

	public ArrayList<MenuRightData> getMenusRight(Connection conn, String ukey, String parentSyskey)
			throws SQLException {
		MenuRightData result = null;
		ArrayList<MenuRightData> dataList = new ArrayList<>();
		String sql = " select SYSKEY,T1,T2,T3 from UVM022 where syskey In( select n2 from UVM023  Where n1 = (select n2  from Jun002 where n1=?) ) and n2=? order by N4";
		if (parentSyskey.equals("")) {
			sql = " select SYSKEY,T1,T2,T3 from UVM022 where syskey In( select n2 from UVM023  Where n1 = (select n2  from Jun002 where n1=?) ) and n2=0 order by N4";
		}
		PreparedStatement stat = conn.prepareStatement(sql);
		stat.setLong(1, Long.parseLong(ukey));
		if (!parentSyskey.equals("")) {
			stat.setLong(2, Long.parseLong(parentSyskey));
		}
		ResultSet rs = stat.executeQuery();
		while (rs.next()) {
			result = new MenuRightData();
			result.setSyskey(rs.getString("SYSKEY"));
			result.setCaption(rs.getString("T2"));
			result.setMenuItem(rs.getString("T1"));
			result.setButtonRight(rs.getString("T3"));
			dataList.add(result);
		}
		return dataList;
	}
	
	public int saveMenuOrder(MenuOrderData data, Connection conn) throws SQLException {
		int effectedRow = 0;
		String sql = "UPDATE UVM022 SET  n4=? WHERE SYSKEY=? AND RECORDSTATUS<>4";
		PreparedStatement stat = conn.prepareStatement(sql);
		int i = 1;		
		stat.setInt(i++, data.getN4());
		stat.setString(i++, data.getSyskey());
		effectedRow = stat.executeUpdate();
		return effectedRow;

	}

public HashMap<String, Object> getMenuOrderList(Connection conn) throws SQLException {
		HashMap<String, Object> result = new HashMap<>();
		List<MenuOrderData> dataList = new ArrayList<MenuOrderData>();
		String sql = "SELECT syskey,t2,n4 FROM UVM022  WHERE RecordStatus<>4 AND n2=0 ORDER BY N4";
		PreparedStatement stmt = conn.prepareStatement(sql);
		ResultSet rs = stmt.executeQuery();
		while (rs.next()) {
			MenuOrderData menuOrderData = new MenuOrderData();
			menuOrderData.setSyskey(rs.getString("SYSKEY"));
			menuOrderData.setT2(rs.getString("T2"));
			menuOrderData.setN4(rs.getInt("N4"));
			menuOrderData.setChild(getMenuOrderChildList(rs.getString("SYSKEY"),conn));
			dataList.add(menuOrderData);
		}
		result.put("menudatas", dataList);
		return result;
	}
	
	public ArrayList<MenuOrderData> getMenuOrderChildList(String id,Connection conn) throws SQLException {
		ArrayList<MenuOrderData> result = new ArrayList<>();
		String sql = "SELECT syskey,t2,n4 FROM UVM022  WHERE RecordStatus<>4 AND n2=? ORDER BY N4";
		PreparedStatement stmt = conn.prepareStatement(sql);
		stmt.setLong(1, Long.parseLong(id));
		ResultSet rs = stmt.executeQuery();
		while (rs.next()) {
			MenuOrderData menuOrderData = new MenuOrderData();
			menuOrderData.setSyskey(rs.getString("SYSKEY"));
			menuOrderData.setT2(rs.getString("T2"));
			menuOrderData.setN4(rs.getInt("N4"));			
			result.add(menuOrderData);
		}	
		return result;
	}

}
