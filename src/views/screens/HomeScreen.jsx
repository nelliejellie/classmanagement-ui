import React, {useState, useEffect} from 'react'
import TeacherInput from '../components/TeacherInput';
import Teachers from '../components/Teachers';
import StudentInput from '../components/StudentInput';
import Student from '../components/Student';
import axios from "axios";

function HomeScreen() {
  const [isStudentPortal, setIsStudentPortal] = useState("student");
  const [students, setStudents] = useState([])
  const [teachers, setTeachers] = useState([])

  useEffect(()=>{
    getStudents()
    getTeachers()
  },[])

  const handleStudent = () =>{
    setIsStudentPortal("student")
  }
  const handleTeacher = () =>{
    setIsStudentPortal("teacher")
  }

  const getStudents = async () => {
    const response = await axios.get("https://localhost:7175/api/Student");
    setStudents(response.data.payload)
    console.log(response)
  }
  const getTeachers = async () => {
    const response = await axios.get("https://localhost:7175/api/Teacher");
    setTeachers(response.data.payload)
    console.log(response)
  }
  return (
    <section>
        <h2 className='font-bold text-3xl text-green-500'>Class Management</h2>
        <div className='flex flex-row justify-around'>
            <h1 
              className={isStudentPortal === 'student' ? `font-bold text-2xl text-green-500 border-b-4 border-b-green-500 pb-4 w-[500px] hover:cursor-pointer`:`font-bold text-2xl text-green-500 w-[500px] hover:cursor-pointer`} 
              onClick={handleStudent}
            >
                Student Portal
            </h1>
            <h1 
              className={isStudentPortal === 'teacher' ? `font-bold text-2xl text-green-500 border-b-4 border-b-green-500 pb-4 w-[500px] hover:cursor-pointer`:`font-bold text-2xl text-green-500 w-[500px] hover:cursor-pointer`} 
              onClick={handleTeacher}
            >
                Teacher Portal
            </h1>
            
        </div>
        <div className='mt-10 flex flex-row'>
          {
            isStudentPortal === 'teacher' ?
            <div className='w-[100%] flex flex-row'>
              <div className='w-[50%]'>
                <TeacherInput/>
              </div>
              <div className='w-[50%]'>
                <Teachers teachers={teachers}/>
              </div>
            </div>
            :
            <div className='w-[100%] flex flex-row'>
              <div className='w-[50%]'>
                <StudentInput/>
              </div>
              <div className='w-[50%]'>
                <Student students={students}/>
              </div>
            </div>
          }
          
        </div>
        
    </section>
  )
}

export default HomeScreen