package com.nirvasoft.web.pos.controller.rest;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nirvasoft.web.pos.model.NurseShiftSummaryData;
import com.nirvasoft.web.pos.service.NurseShiftSummaryService;

@RestController
@RequestMapping("/nurseshiftsummary")
public class NurseShiftSummaryController extends IController {
	@Autowired
	NurseShiftSummaryService nurseShiftSummaryService;
	

	@PostMapping("/save")
	public Map<String, String> saveNurseShiftSummary(@RequestBody NurseShiftSummaryData data, HttpServletRequest request) {
		return nurseShiftSummaryService.save(data,getUser(request));
	}
	@PostMapping("/getnurseshiftsummary")
	public HashMap<String,Object> getNurseShiftSummary(@RequestBody NurseShiftSummaryData data,HttpServletRequest request){
		return nurseShiftSummaryService.getNurseShiftSummary(data,getUser(request));
	}
	@PostMapping("/delete")
	public HashMap<String, Object> delete(@RequestBody NurseShiftSummaryData data, HttpServletRequest request) {
		return nurseShiftSummaryService.delete(data, getUser(request));
	}
	@PostMapping("/get")
	public HashMap<String,Object> getNurseShiftSummary1(@RequestBody NurseShiftSummaryData data,HttpServletRequest request){
		return nurseShiftSummaryService.getNurseShiftSummary1(data,getUser(request));
	}
	
}
