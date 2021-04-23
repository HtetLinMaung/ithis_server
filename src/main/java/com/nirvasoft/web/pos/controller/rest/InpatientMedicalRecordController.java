package com.nirvasoft.web.pos.controller.rest;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nirvasoft.web.pos.model.BloodData;
import com.nirvasoft.web.pos.model.BloodRequest;
import com.nirvasoft.web.pos.model.DeleteData;
import com.nirvasoft.web.pos.model.DietData;
import com.nirvasoft.web.pos.model.DietRequest;
import com.nirvasoft.web.pos.model.FilterRequest;
import com.nirvasoft.web.pos.model.InjectionData;
import com.nirvasoft.web.pos.model.InjectionRequest;
import com.nirvasoft.web.pos.model.InstructionData;
import com.nirvasoft.web.pos.model.NonParenteralData;
import com.nirvasoft.web.pos.model.NonParenteralRequest;
import com.nirvasoft.web.pos.model.StatMedicationData;
import com.nirvasoft.web.pos.model.StatMedicationRequest;
import com.nirvasoft.web.pos.service.InpatientMedicalRecordService;

@RestController
@RequestMapping("/inpatient-medical-record")
public class InpatientMedicalRecordController extends IController {
	@Autowired
	private InpatientMedicalRecordService inpatientMedicalRecordService;
	
	@PostMapping(value = "/save-instruction")
	public HashMap<String, String> saveInspection(@RequestBody InstructionData data, HttpServletRequest request) {
		HashMap<String, String> map = new HashMap<>();
		long syskey = inpatientMedicalRecordService.saveInstruction(data, getUser(request));
		map.put("message", "Instruction save successful!");
		map.put("syskey", syskey+"");
		return map;
	}
	
	@PostMapping(value = "/save-stat-medication")
	public HashMap<String, Object> saveStatMedication(@RequestBody StatMedicationRequest data, HttpServletRequest request) {
		HashMap<String, Object> map = new HashMap<>();
		ArrayList<Long> updatedList = inpatientMedicalRecordService.saveStatMedication(data.getStatMedications(), getUser(request));
		map.put("message", "Stat medication save successful!");
		map.put("updatedList", updatedList);
		return map;
	}
	
	@PostMapping(value = "/save-non-parenteral")
	public HashMap<String, Object> saveNonParenteral(@RequestBody NonParenteralRequest data, HttpServletRequest request) {
		HashMap<String, Object> map = new HashMap<>();
		ArrayList<Long> updatedList = inpatientMedicalRecordService.saveNonParenteral(data.getNonParenterals(), getUser(request));
		map.put("message", "Non parenteral save successful!");
		map.put("updatedList", updatedList);
		return map;
	}
	
	@PostMapping(value = "/save-injection")
	public HashMap<String, Object> saveInjection(@RequestBody InjectionRequest data, HttpServletRequest request) {
		HashMap<String, Object> map = new HashMap<>();
		ArrayList<Long> updatedList = inpatientMedicalRecordService.saveInjection(data.getInjections(), getUser(request));
		map.put("message", "Injection save successful!");
		map.put("updatedList", updatedList);
		return map;
	}
	
	@PostMapping(value = "/save-blood")
	public HashMap<String, Object> saveBlood(@RequestBody BloodRequest data, HttpServletRequest request) {
		HashMap<String, Object> map = new HashMap<>();
		ArrayList<Long> updatedList = inpatientMedicalRecordService.saveBloods(data.getBloods(), getUser(request));
		map.put("message", "Bloods save successful!");
		map.put("updatedList", updatedList);
		return map;
	}
	
	@PostMapping(value = "/save-diets")
	public HashMap<String, Object> saveDiets(@RequestBody DietRequest data, HttpServletRequest request) {
		HashMap<String, Object> map = new HashMap<>();
		ArrayList<Long> updatedList = inpatientMedicalRecordService.saveDiets(data.getDiets(), getUser(request));
		map.put("message", "Diets save successful!");
		map.put("updatedList", updatedList);
		return map;
	}
	
	@GetMapping(value="/instructions")
	public List<HashMap<String, Object>> getAllInstructions(HttpServletRequest request) {
		return inpatientMedicalRecordService
				.fetchAllInstructions(getUser(request))
				.stream()
				.map(data -> data.toHashMap())
				.collect(Collectors.toList());
	}
	
	@GetMapping(value="/bloods")
	public List<HashMap<String, Object>> getAllBloods(HttpServletRequest request) {
		return inpatientMedicalRecordService
				.fetchAllBloods(getUser(request))
				.stream()
				.map(data -> data.toHashMap())
				.collect(Collectors.toList());
	}
	
	@GetMapping(value="/diets")
	public List<HashMap<String, Object>> getAllDiets(HttpServletRequest request) {
		return inpatientMedicalRecordService
				.fetchAllDiets(getUser(request))
				.stream()
				.map(data -> data.toHashMap())
				.collect(Collectors.toList());
	}
	
	@GetMapping(value="/routes")
	public ArrayList<HashMap<String, Object>> getAllRoutes(HttpServletRequest request) {
		return inpatientMedicalRecordService
				.fetchRoutes(getUser(request));
	}
	
	@GetMapping(value="/doses")
	public ArrayList<HashMap<String, Object>> getAllDoses(HttpServletRequest request) {
		return inpatientMedicalRecordService
				.fetchDoses(getUser(request));
	}
	
	@GetMapping(value="/drug-tasks")
	public ArrayList<HashMap<String, Object>> getAllDrugTasks(HttpServletRequest request) {
		return inpatientMedicalRecordService
				.fetchDrugTasks(getUser(request));
	}
	
	@PostMapping(value="/stat-medications-initial")
	public List<HashMap<String, Object>> getAllStatMedicationsInitial(@RequestBody FilterRequest filterRequest, 
			HttpServletRequest request) {
		return inpatientMedicalRecordService
				.fetchStatMedicationsInitial(filterRequest, getUser(request))
				.stream()
				.map((data) -> data.toHashMap())
				.collect(Collectors.toList());
	}
	
	@PostMapping(value="/stat-medications")
	public HashMap<String, Object> getAllStatMedications(@RequestBody FilterRequest filterRequest, 
			HttpServletRequest request) {
		return inpatientMedicalRecordService
				.fetchAllStatMedications(filterRequest, getUser(request))
				.toHashMap();
	}
	
	@PostMapping(value="/injections")
	public HashMap<String, Object> getAllInjections(@RequestBody FilterRequest filterRequest, 
			HttpServletRequest request) {
		return inpatientMedicalRecordService
				.fetchAllInjections(filterRequest, getUser(request))
				.toHashMap();
	}
	
	@PostMapping(value="/non-parenterals")
	public HashMap<String, Object> getAllNonParenterals(@RequestBody FilterRequest filterRequest, 
			HttpServletRequest request) {
		return inpatientMedicalRecordService
				.fetchAllNonParenterals(filterRequest, getUser(request))
				.toHashMap();
	}
	
	@PostMapping(value="/injections-initial")
	public List<HashMap<String, Object>> getAllInjectionsInitial(@RequestBody FilterRequest filterRequest, HttpServletRequest request) {
		return inpatientMedicalRecordService
				.fetchInjectionsInitial(filterRequest, getUser(request))
				.stream()
				.map((data) -> data.toHashMap())
				.collect(Collectors.toList());
	}
	
	@PostMapping(value="/non-parenterals-initial")
	public List<HashMap<String, Object>> getAllNonParenteralsInitial(@RequestBody FilterRequest filterRequest, HttpServletRequest request) {
		return inpatientMedicalRecordService
				.fetchNonParenteralsInitial(filterRequest, getUser(request))
				.stream()
				.map((data) -> data.toHashMap())
				.collect(Collectors.toList());
	}
	
	@GetMapping(value="/allergies/{patientId}")
	public ArrayList<HashMap<String, String>> getAllergiesByPatient(@PathVariable("patientId") Long patientId, HttpServletRequest request) {
		return inpatientMedicalRecordService.fetchAllergiesByPatient(patientId, getUser(request));
	}
	
	@PostMapping(value = "/update-instruction/{syskey}")
	public HashMap<String, String> updateInstruction(@PathVariable("syskey") Long syskey, @RequestBody InstructionData data, HttpServletRequest request) {
		HashMap<String, String> map = new HashMap<>();
		inpatientMedicalRecordService.updateInstruction(syskey, data, getUser(request));
		map.put("message", "Instruction update successful!");
		return map;
	}
	
	@PostMapping(value = "/update-stat-medication/{syskey}")
	public HashMap<String, String> updateStatMedication(@PathVariable("syskey") Long syskey, @RequestBody StatMedicationData data, HttpServletRequest request) {
		HashMap<String, String> map = new HashMap<>();
		inpatientMedicalRecordService.updateStatMedication(syskey, data, getUser(request));
		map.put("message", "Stat Medication update successful!");
		return map;
	}
	
	@PostMapping(value = "/update-non-parenteral/{syskey}")
	public HashMap<String, String> updateNonParenteral(@PathVariable("syskey") Long syskey, @RequestBody NonParenteralData data, HttpServletRequest request) {
		HashMap<String, String> map = new HashMap<>();
		inpatientMedicalRecordService.updateNonParenteral(syskey, data, getUser(request));
		map.put("message", "Non parenteral update successful!");
		return map;
	}
	
	@PostMapping(value = "/update-injection/{syskey}")
	public HashMap<String, String> updateInjection(@PathVariable("syskey") Long syskey, @RequestBody InjectionData data, HttpServletRequest request) {
		HashMap<String, String> map = new HashMap<>();
		inpatientMedicalRecordService.updateInjection(syskey, data, getUser(request));
		map.put("message", "Injection update successful!");
		return map;
	}
	
	@PostMapping(value = "/update-blood/{syskey}")
	public HashMap<String, String> updateBlood(@PathVariable("syskey") Long syskey, @RequestBody BloodData data, HttpServletRequest request) {
		HashMap<String, String> map = new HashMap<>();
		inpatientMedicalRecordService.updateBlood(syskey, data, getUser(request));
		map.put("message", "Blood update successful!");
		return map;
	}
	
	@PostMapping(value = "/update-diet/{syskey}")
	public HashMap<String, String> updateDiet(@PathVariable("syskey") Long syskey, @RequestBody DietData data, HttpServletRequest request) {
		HashMap<String, String> map = new HashMap<>();
		inpatientMedicalRecordService.updateDiet(syskey, data, getUser(request));
		map.put("message", "Diet update successful!");
		return map;
	}
	
	@PostMapping(value = "/delete-instruction/{syskey}")
	public HashMap<String, String> deleteInstruction(@PathVariable("syskey") Long syskey, @RequestBody DeleteData data, HttpServletRequest request) {
		HashMap<String, String> map = new HashMap<>();
		inpatientMedicalRecordService.deleteInstruction(syskey, getUser(request));
		map.put("message", "Instruction deleted successful!");
		return map;
	}
	
	@PostMapping(value = "/delete-stat-medication/{syskey}")
	public HashMap<String, String> deleteStatMedication(@PathVariable("syskey") Long syskey, @RequestBody DeleteData data, HttpServletRequest request) {
		HashMap<String, String> map = new HashMap<>();
		inpatientMedicalRecordService.deleteStatMedication(syskey, getUser(request));
		map.put("message", "Stat Medication deleted successful!");
		return map;
	}
	
	@PostMapping(value = "/delete-non-parenteral/{syskey}")
	public HashMap<String, String> deleteNonParenteral(@PathVariable("syskey") Long syskey, @RequestBody DeleteData data, HttpServletRequest request) {
		HashMap<String, String> map = new HashMap<>();
		inpatientMedicalRecordService.deleteNonParenteral(syskey, getUser(request));
		map.put("message", "Non parenteral deleted successful!");
		return map;
	}
	
	@PostMapping(value = "/delete-injection/{syskey}")
	public HashMap<String, String> deleteInjection(@PathVariable("syskey") Long syskey, @RequestBody DeleteData data, HttpServletRequest request) {
		HashMap<String, String> map = new HashMap<>();
		inpatientMedicalRecordService.deleteInjection(syskey, getUser(request));
		map.put("message", "Injection deleted successful!");
		return map;
	}
	
	@PostMapping(value = "/delete-blood/{syskey}")
	public HashMap<String, String> deleteBlood(@PathVariable("syskey") Long syskey, @RequestBody DeleteData data, HttpServletRequest request) {
		HashMap<String, String> map = new HashMap<>();
		inpatientMedicalRecordService.deleteBlood(syskey, getUser(request));
		map.put("message", "Blood deleted successful!");
		return map;
	}
	
	@GetMapping(value = "/stat-medications/{syskey}")
	public HashMap<String, Object> getStatMedicationById(@PathVariable("syskey") Long syskey, 
			HttpServletRequest request) {
		return inpatientMedicalRecordService
				.fetchStatMedicationById(syskey, getUser(request))
				.toHashMap();
	}
	
	@PostMapping(value = "/delete-diet/{syskey}")
	public HashMap<String, String> deleteDiet(@PathVariable("syskey") Long syskey, @RequestBody DietData data, HttpServletRequest request) {
		HashMap<String, String> map = new HashMap<>();
		inpatientMedicalRecordService.deleteDiet(syskey, getUser(request));
		map.put("message", "Diet deleted successful!");
		return map;
	}
}
