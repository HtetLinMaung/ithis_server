package com.nirvasoft.web.pos.controller.rest;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nirvasoft.web.pos.model.DeleteData;
import com.nirvasoft.web.pos.model.FilterRequest;
import com.nirvasoft.web.pos.model.GeneralWardData;
import com.nirvasoft.web.pos.model.GeneralWardRequest;
import com.nirvasoft.web.pos.model.GwData;
import com.nirvasoft.web.pos.model.InstructionData;
import com.nirvasoft.web.pos.service.GeneralWardService;

@RestController
@RequestMapping("/general-ward")
@CrossOrigin
public class GeneralWardController extends IController {
	@Autowired
	private GeneralWardService generalWardService;

	@PostMapping(value = "/")
	public HashMap<String, Object> getAllGeneralWards(@RequestBody FilterRequest req, HttpServletRequest request) {
		return generalWardService.fetchAllGeneralWards(req, getUser(request)).toHashMap();

	}

	@GetMapping(value = "/goals")
	public List<HashMap<String, Object>> getAllGoals(HttpServletRequest request) {
		return generalWardService.fetchAllGoals(getUser(request)).stream().map(data -> data.toHashMap())
				.collect(Collectors.toList());
	}

	@GetMapping(value = "/shifts/{parentId}")
	public List<HashMap<String, Object>> getShiftsByParent(@PathVariable("parentId") Long parentId,
			HttpServletRequest request) {
		return generalWardService.fetchShiftsByParent(parentId, getUser(request)).stream().map(data -> data.toHashMap())
				.collect(Collectors.toList());
	}

	@PostMapping(value = "/initials")
	public List<HashMap<String, Object>> getAllGeneralWardsInitial(@RequestBody FilterRequest filteredReq,
			HttpServletRequest request) {
		return generalWardService.fetchAllGeneralWardsInitial(filteredReq, getUser(request)).stream()
				.map(data -> data.toHashMap()).collect(Collectors.toList());
	}

	@PostMapping(value = "/with-rgsno")
	public List<HashMap<String, Object>> getGwsByRgsNo(@RequestBody FilterRequest filteredReq,
			HttpServletRequest request) {
		return generalWardService.fetchGwsByRgsNo(filteredReq, getUser(request)).stream().map(data -> data.toHashMap())
				.collect(Collectors.toList());
	}

	@PostMapping(value = "/patient-adl")
	public List<HashMap<String, Object>> getPatientADL(@RequestBody FilterRequest filteredReq,
			HttpServletRequest request) {
		return generalWardService.fetchPatientADL(filteredReq, getUser(request)).stream().map(data -> data.toHashMap())
				.collect(Collectors.toList());
	}

	// @PostMapping(value="/with-date")
	// public List<HashMap<String, Object>> getGeneralWards(@RequestBody
	// FilterRequest filteredReq, HttpServletRequest request) {
	// return generalWardService
	// .fetchGeneralWards(filteredReq, getUser(request))
	// .stream()
	// .map(data -> data.toHashMap())
	// .collect(Collectors.toList());
	// }
	//
	// @PostMapping(value="/with-intervention")
	// public HashMap<String, Object> getGwData(@RequestBody GwData data,
	// HttpServletRequest request) {
	// return generalWardService
	// .fetchGwByIntervention(data, getUser(request))
	// .toHashMap();
	// }

	@PostMapping(value = "/save")
	public HashMap<String, Object> saveGeneralWards(@RequestBody GeneralWardRequest req, HttpServletRequest request) {
		HashMap<String, Object> map = new HashMap<>();
		ArrayList<Long> updatedList = generalWardService.saveGeneralWards(req.getGeneralWards(), getUser(request));
		map.put("message", "General wards save successful!");
		map.put("updatedList", updatedList);
		return map;
	}

	@PostMapping(value = "/update/{syskey}")
	public HashMap<String, String> updateGeneralWard(@PathVariable("syskey") Long syskey,
			@RequestBody GeneralWardData data, HttpServletRequest request) {
		HashMap<String, String> map = new HashMap<>();
		generalWardService.updateGeneralWard(syskey, data, getUser(request));
		map.put("message", "General Ward update successful!");
		return map;
	}

	@PostMapping(value = "/delete/{syskey}")
	public HashMap<String, String> deleteGeneralWard(@PathVariable("syskey") Long syskey, @RequestBody DeleteData data,
			HttpServletRequest request) {
		HashMap<String, String> map = new HashMap<>();
		generalWardService.deleteGeneralWard(syskey, data.getSyskey(), getUser(request));
		map.put("message", "General Ward deleted successful!");
		return map;
	}
}
