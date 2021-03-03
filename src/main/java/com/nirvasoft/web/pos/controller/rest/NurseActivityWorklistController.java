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


import com.nirvasoft.web.pos.service.NurseActivityWorklistService;
import com.nirvasoft.web.pos.util.ReportUtil;
import com.nirvasoft.web.pos.model.DeleteData;
import com.nirvasoft.web.pos.model.Doctor;
import com.nirvasoft.web.pos.model.FilterRequest;
import com.nirvasoft.web.pos.model.NurseActivityData;
import com.nirvasoft.web.pos.model.SelectItem;

@RestController
@RequestMapping("/nurse-activity-worklist")
public class NurseActivityWorklistController extends IController {
	@Autowired
	NurseActivityWorklistService nurseActivityWorklistService;
	
	@GetMapping(value="/procedures")
	public List<HashMap<String, Object>> getAllProcedures(HttpServletRequest request) {
		ArrayList<SelectItem> selectItems = nurseActivityWorklistService.fetchAllProcedures(getUser(request));
		
		
		return selectItems.stream()
				.map((item) -> {
					HashMap<String, Object> map = new HashMap<>();
					map.put("value", item.getValue());
					map.put("text", item.getText());
					return map;
				}).collect(Collectors.toList());
	}
	
	@PostMapping(value="/doctors")
	public HashMap<String, Object> getAllDoctors(@RequestBody FilterRequest req, HttpServletRequest request) {
		return nurseActivityWorklistService
				.fetchAllDoctors(req, getUser(request))
				.toHashMap();
	}
	
	@GetMapping(value="/doctors/{syskey}")
	public HashMap<String, Object> getDoctorById(@PathVariable("syskey") Long syskey, HttpServletRequest request) {
		HashMap<String, Object> map = new HashMap<>();
		 Doctor doctor = nurseActivityWorklistService
				.fetchDoctorById(syskey, getUser(request))
				.orElse(null);
		 if (doctor != null) {
			 map = doctor.toHashMap();
		 }
		 return map;
	}
				
	
	@GetMapping(value="/activities")
	public List<HashMap<String, Object>> getAllActivities(HttpServletRequest request) {
		return nurseActivityWorklistService
				.fetchAllActivities(getUser(request))
				.stream()
				.map(activity -> activity.toHashMap())
				.collect(Collectors.toList());
	}
	
	@GetMapping(value="/get-by-patient/{pId}")
	public List<HashMap<String, Object>> getActivitiesByPatientId(@PathVariable("pId") Integer pId, HttpServletRequest request) {
		return nurseActivityWorklistService
				.fetchActivitiesByPatient(pId, getUser(request))
				.stream()
				.map(activity -> activity.toHashMap())
				.collect(Collectors.toList());
	}
	
	@PostMapping(value = "/save")
	public HashMap<String, String> save(@RequestBody NurseActivityData data, HttpServletRequest request) {
		HashMap<String, String> map = new HashMap<>();
		long syskey = nurseActivityWorklistService.save(data, getUser(request));
		map.put("message", "Nurse Activity save successful!");
		map.put("syskey", syskey+"");
		return map;
	}
	
	@PostMapping(value = "/update/{syskey}")
	public HashMap<String, String> update(@PathVariable("syskey") Long syskey, @RequestBody NurseActivityData data, HttpServletRequest request) {
		HashMap<String, String> map = new HashMap<>();
		nurseActivityWorklistService.update(syskey, data, getUser(request));
		map.put("message", "Nurse Activity update successful!");
		return map;
	}
	
	@PostMapping(value = "/delete/{syskey}")
	public HashMap<String, String> delete(@PathVariable("syskey") Long syskey, @RequestBody DeleteData data, HttpServletRequest request) {
		HashMap<String, String> map = new HashMap<>();
		nurseActivityWorklistService.delete(syskey, getUser(request));
		map.put("message", "Nurse Activity deleted successful!");
		return map;
	}
	
	@GetMapping(value = "/patient-info/{patientId}")
	public List<HashMap<String, Object>> getDummyPatient(@PathVariable("patientId") Long patientId, HttpServletRequest request) {
		return nurseActivityWorklistService
				.fetchPatientInfoById(patientId, getUser(request))
				.stream()
				.map(info -> info.toHashMap())
				.collect(Collectors.toList());
	}
	
	@PostMapping(value = "/patients")
	public HashMap<String, Object> getAllPatients(@RequestBody FilterRequest filteredRequest, HttpServletRequest request) {
		return nurseActivityWorklistService
				.fetchAllPatients(filteredRequest, getUser(request))
				.toHashMap();
	}
	
	@GetMapping(value = "/patient-types")
	public HashMap<String, Object> getAllPatientTypes(HttpServletRequest request) {
		return nurseActivityWorklistService.fetchAllPatientTypes(getUser(request)).toHashMap();
	}
}
