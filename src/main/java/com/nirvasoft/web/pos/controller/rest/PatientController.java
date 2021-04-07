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

import com.nirvasoft.web.pos.model.FilterRequest;
import com.nirvasoft.web.pos.service.PatientService;

@RestController
@RequestMapping("/patients")
public class PatientController extends IController {
	@Autowired
	PatientService patientService;
	
	@GetMapping(value = "/adnos/{pId}")
	public ArrayList<HashMap<String, Object>> getAdNosByPatient(@PathVariable("pId") Long pId, 
			HttpServletRequest request) {
		return patientService
				.fetchAdNosByPatient(pId, getUser(request));
				
	}
	
	@PostMapping(value = "/")
	public HashMap<String, Object> getAllPatients(@RequestBody FilterRequest filteredRequest, HttpServletRequest request) {
		return patientService
				.fetchAllPatients(filteredRequest, getUser(request))
				.toHashMap();
	}
	
	@GetMapping(value = "/{rgsNo}")
	public HashMap<String, Object> getPatientByRgsNo(@PathVariable("rgsNo") Long rgsNo, 
			HttpServletRequest request) {
		return patientService.
				fetchPatientByRgsNo(rgsNo, getUser(request))
				.toHashMap();
	}
	
	@GetMapping(value = "/patient-types")
	public HashMap<String, Object> getAllPatientTypes(HttpServletRequest request) {
		return patientService.fetchAllPatientTypes(getUser(request)).toHashMap();
	}
	
	@GetMapping(value = "/role/{pId}")
	public HashMap<String, Object> getUserRole(@PathVariable("pId") String pId, HttpServletRequest request) {
		Boolean role = patientService.getRole(pId, getUser(request)).orElse(null);

		HashMap<String, Object> map = new HashMap<>();
		if (role != null) {
			map.put("isDoctorRank", role);
			map.put("status", 1);
		} else {
			map.put("status", 0);
		}
		return map;
	}
}
