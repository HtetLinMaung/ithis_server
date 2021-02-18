package com.nirvasoft.web.pos.controller.rest;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nirvasoft.web.pos.model.NursingCareRecordData;
import com.nirvasoft.web.pos.model.Relationship;
import com.nirvasoft.web.pos.service.NursingCareRecordService;

@RestController
@RequestMapping("/nursingcarerecord")
public class NursingCareRecordController extends IController {

	@Autowired
	NursingCareRecordService nursingCareRecordService;

	@PostMapping("/save")
	public Map<String, String> save(@RequestBody NursingCareRecordData data, HttpServletRequest request) {
		return nursingCareRecordService.save(data, getUser(request));
	}

	@PostMapping("/getnursingcarerecord")
	public HashMap<String, Object> getNursingCareRecord(@RequestBody NursingCareRecordData data,
			HttpServletRequest request) {
		return nursingCareRecordService.getNursingCareRecord(data, getUser(request));
	}

	@PostMapping("/delete")
	public HashMap<String, Object> delete(@RequestBody NursingCareRecordData data, HttpServletRequest request) {
		return nursingCareRecordService.delete(data, getUser(request));
	}

	@PostMapping("/get")
	public HashMap<String, Object> getNursingCareRecord1(@RequestBody NursingCareRecordData data,
			HttpServletRequest request) {
		return nursingCareRecordService.getNursingCareRecord1(data, getUser(request));
	}

	@PostMapping("/getrelationship")
	public HashMap<String, Object> getRelationship(@RequestBody Relationship data, HttpServletRequest request) {
		return nursingCareRecordService.getRelationship(data, getUser(request));
	}
}
