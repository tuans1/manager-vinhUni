package com.intern.student.entity;

import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Entity
@Data
public class Classes {

	@Id
	private String id;

	@Column(name = "class_name")
	private String className;
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "course_id", insertable = false, updatable = false)
	private Course course;

	@JsonIgnore
	@OneToMany(mappedBy = "classes")
	private Collection<ClassDetail> classDetail;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "lecturer_id", insertable = false, updatable = false)
	private Lecturer lecturer;
}