package com.intern.student.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.intern.student.entity.Lecturer;
import com.intern.student.repository.LecturerRepository;

@RestController
@RequestMapping("/lecturer")
public class LecturerController {

	@Autowired
	LecturerRepository lecturerRepo;
	
	@GetMapping
	public Optional<Lecturer> getLecturer(){
		Optional<Lecturer> lecturer = lecturerRepo.findById("1");
		return lecturer;
	}
	
}