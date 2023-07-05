import React, {useState} from 'react'
import TeacherInput from '../components/TeacherInput';
import Teachers from '../components/Teachers';
import StudentInput from '../components/StudentInput';
import Student from '../components/Student';

function HomeScreen() {
  const [isStudentPortal, setIsStudentPortal] = useState("student");
  const handleStudent = () =>{
    setIsStudentPortal("student")
  }
  const handleTeacher = () =>{
    setIsStudentPortal("teacher")
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
                <Teachers/>
              </div>
            </div>
            :
            <div className='w-[100%] flex flex-row'>
              <div className='w-[50%]'>
                <StudentInput/>
              </div>
              <div className='w-[50%]'>
                <Student/>
              </div>
            </div>
          }
          
        </div>
        
    </section>
  )
}

export default HomeScreen