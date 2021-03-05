package com.nirvasoft.web.pos.service;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nirvasoft.web.pos.dao.InpatientMedicalRecordDao;
import com.nirvasoft.web.pos.model.BloodData;
import com.nirvasoft.web.pos.model.DietData;
import com.nirvasoft.web.pos.model.FilterRequest;
import com.nirvasoft.web.pos.model.InjectionData;
import com.nirvasoft.web.pos.model.InstructionData;
import com.nirvasoft.web.pos.model.NonParenteralData;
import com.nirvasoft.web.pos.model.ResponseData;
import com.nirvasoft.web.pos.model.StatMedicationData;
import com.nirvasoft.web.pos.model.StatMedicationRequest;
import com.nirvasoft.web.pos.model.UserData;
import com.nirvasoft.web.pos.util.ConnectionUtil;

@Service
public class InpatientMedicalRecordService {
	@Autowired
	private InpatientMedicalRecordDao inpatientMedicalRecordDao;
	
	public long saveInstruction(InstructionData data, UserData user) {
		long syskey = 0;
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			syskey = inpatientMedicalRecordDao.saveInstruction(data, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return syskey;
	}
	
	public ArrayList<Long> saveStatMedication(ArrayList<StatMedicationData> data, UserData user) {
		ArrayList<Long> savedList = new ArrayList<>();
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			savedList = inpatientMedicalRecordDao.saveStatMedication(data, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return savedList;
	}
	
	public ArrayList<Long> saveBloods(ArrayList<BloodData> data, UserData user) {
		ArrayList<Long> savedList = new ArrayList<>();
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			savedList = inpatientMedicalRecordDao.saveBloods(data, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return savedList;
	}
	
	public ArrayList<Long> saveDiets(ArrayList<DietData> data, UserData user) {
		ArrayList<Long> savedList = new ArrayList<>();
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			savedList = inpatientMedicalRecordDao.saveDiets(data, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return savedList;
	}
	
	public ArrayList<Long> saveNonParenteral(ArrayList<NonParenteralData> data, UserData user) {
		ArrayList<Long> updatedList = new ArrayList<>();
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			updatedList = inpatientMedicalRecordDao.saveNonParenteral(data, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return updatedList;
	}
	
	public ArrayList<Long> saveInjection(ArrayList<InjectionData> data, UserData user) {
		ArrayList<Long> updatedList = new ArrayList<>();
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			updatedList = inpatientMedicalRecordDao.saveInjection(data, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return updatedList;
	}
	
	public int deleteInstruction(long syskey, UserData user) {
		int status = 0;
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			status = inpatientMedicalRecordDao.deleteInstruction(syskey, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}
	
	public int deleteStatMedication(long syskey, UserData user) {
		int status = 0;
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			status = inpatientMedicalRecordDao.deleteStatMedication(syskey, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}
	
	public int deleteNonParenteral(long syskey, UserData user) {
		int status = 0;
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			status = inpatientMedicalRecordDao.deleteNonParenteral(syskey, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}
	
	public int deleteInjection(long syskey, UserData user) {
		int status = 0;
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			status = inpatientMedicalRecordDao.deleteInjection(syskey, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}
	
	public int deleteBlood(long syskey, UserData user) {
		int status = 0;
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			status = inpatientMedicalRecordDao.deleteBlood(syskey, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}
	
	public StatMedicationData fetchStatMedicationById(long syskey, UserData user) {
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			return inpatientMedicalRecordDao.getStatMedicationById(syskey, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new StatMedicationData();
	}
	
	public int deleteDiet(long syskey, UserData user) {
		int status = 0;
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			status = inpatientMedicalRecordDao.deleteDiet(syskey, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}
	
	public long updateInstruction(long syskey, InstructionData data, UserData user) {
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			inpatientMedicalRecordDao.updateInstruction(syskey, data, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return syskey;
	}
	
	public long updateStatMedication(long syskey, StatMedicationData data, UserData user) {
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			inpatientMedicalRecordDao.updateStatMedication(syskey, data, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return syskey;
	}
	
	public long updateNonParenteral(long syskey, NonParenteralData data, UserData user) {
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			inpatientMedicalRecordDao.updateNonParenteral(syskey, data, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return syskey;
	}
	
	public long updateInjection(long syskey, InjectionData data, UserData user) {
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			inpatientMedicalRecordDao.updateInjection(syskey, data, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return syskey;
	}
	
	public long updateBlood(long syskey, BloodData data, UserData user) {
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			inpatientMedicalRecordDao.updateBlood(syskey, data, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return syskey;
	}
	
	public long updateDiet(long syskey, DietData data, UserData user) {
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			inpatientMedicalRecordDao.updateDiet(syskey, data, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return syskey;
	}
	
	public ArrayList<InstructionData> fetchAllInstructions(UserData user) {
		ArrayList<InstructionData> instructions = new ArrayList<>();
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			instructions = inpatientMedicalRecordDao.getAllInstructions(conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return instructions;
	}
	
	public ArrayList<BloodData> fetchAllBloods(UserData user) {
		ArrayList<BloodData> bloods = new ArrayList<>();
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			bloods = inpatientMedicalRecordDao.getAllBloods(conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return bloods;
	}
	
	public ArrayList<DietData> fetchAllDiets(UserData user) {
		ArrayList<DietData> diets = new ArrayList<>();
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			diets = inpatientMedicalRecordDao.getAllDiets(conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return diets;
	}
	
	public ArrayList<HashMap<String, String>> fetchAllergiesByPatient(long patientId, UserData user) {
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			return inpatientMedicalRecordDao.getAllergiesByPatient(patientId, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ArrayList<HashMap<String, String>>();
	}
	
	public ArrayList<HashMap<String, Object>> fetchRoutes(UserData user) {
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			return inpatientMedicalRecordDao.getRoutes(conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ArrayList<HashMap<String, Object>>();
	}
	
	public ArrayList<HashMap<String, Object>> fetchDoses(UserData user) {
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			return inpatientMedicalRecordDao.getDoses(conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ArrayList<HashMap<String, Object>>();
	}
	
	public ArrayList<HashMap<String, Object>> fetchDrugTasks(UserData user) {
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			return inpatientMedicalRecordDao.getDrugTasks(conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ArrayList<HashMap<String, Object>>();
	}
	
	public ArrayList<StatMedicationData> fetchStatMedicationsInitial(FilterRequest req, UserData user) {
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			return inpatientMedicalRecordDao.getStatMedicationsInitial(req, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ArrayList<StatMedicationData>();
	}
	
	public ResponseData fetchStatMedications(FilterRequest req, UserData user) {
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			return inpatientMedicalRecordDao.getAllStatMedications(req, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseData();
	}
	
	public ArrayList<NonParenteralData> fetchNonParenteralsInitial(FilterRequest filterRequest, UserData user) {
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			return inpatientMedicalRecordDao.getNonParenteralsInitial(filterRequest, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ArrayList<NonParenteralData>();
	}
	
	public ArrayList<InjectionData> fetchInjectionsInitial(FilterRequest filterRequest, UserData user) {
		try (Connection conn = ConnectionUtil.getConnection(user.getOrgId());) {
			return inpatientMedicalRecordDao.getInjectionsInitial(filterRequest, conn);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ArrayList<InjectionData>();
	}
}
