import axios from 'axios';
import { React, useEffect, useState } from 'react';
import './lecturer.css'
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../reducers/classDetailReducer';
export default function Attendance() {

    const [courseList, setCourseList] = useState([]);
    const [open, setOpen] = useState(true);
    const [classesId, setClassesId] = useState("")
    const [lesson, setLesson] = useState("")
    const { student } = useSelector(state => state.classDetailReducer);

    const dispatch = useDispatch();

    useEffect(async () => {
        const course = await axios(
            'http://localhost:6969/lecturer/1',
        );
        setCourseList(course.data.classes)
    }, [])

    useEffect(async () => {
        if (lesson !== "" && classesId !== "") {
            dispatch(action.onFetchClassDetail({ classesId, lesson }))
        } else {
            return;
        }
    }, [lesson, classesId])
    const chooseCourse = (e) => {
        setClassesId(e)
    }
    const chooseLesson = (e) => {
        setLesson(e)
    }
    const onAttendance = (e) => {
        dispatch(action.onFetchAttendanceStudent({ attendanceId: e.id, attendanceVal: e.val, lesson, studentId: e.studentId }))
    }
    return (
        <>
            <div className="" >
                <div id="mySidebar" style={open ? { width: '250px' } : { width: 0 }} className="sidebar">
                    <a href="#" className="closebtn" onClick={e => setOpen(false)}>&times;</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>
                <div id="main" style={open ? { marginLeft: '250px' } : { marginLeft: 0 }}>
                    {/* <button className="openbtn" onClick={e => setOpen(true)}>&#9776; Open Sidebar</button> */}
                    <div style={{ width: '500px' }} className="d-flex">
                        <select className="form-select" defaultValue="0" onChange={e => chooseCourse(e.target.value)}>
                            <option value="0" disabled>Chọn Lớp học</option>
                            {courseList && courseList.map((x, y) => {
                                return (
                                    <option value={x.id} key={y + 1}>{x.className}</option>
                                )
                            })}
                        </select>
                        <select className="form-select" defaultValue="0" onChange={e => chooseLesson(e.target.value)}>
                            <option value="0" disabled>Chọn buổi học</option>
                            <option value="b1">Buổi 1</option>
                            <option value="b2">Buổi 2</option>
                            <option value="b3">Buổi 3</option>
                            <option value="b4">Buổi 4</option>
                            <option value="b5">Buổi 5</option>
                        </select>
                    </div>
                    <div style={{ backgroundColor: 'white', marginTop: '50px', width: '800px' }}>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th >STT</th>
                                    <th style={{ width: 400 }}>Họ Và Tên</th>
                                </tr>
                            </thead>
                            <tbody>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}