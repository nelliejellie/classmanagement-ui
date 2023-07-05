import React, {useState} from 'react'

function StudentInput() {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [nin, setNin] = useState("")
  const [studentNumber, setStudentNumber] = useState(0)
  const [selectedDate, setSelectedDate] = useState("");


  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleInputs = (e, valueSetter) =>{
    valueSetter(e.target.value)
  }
  return (
    <section className=''>
        <h1 className='font-bold text-2xl text-black'>Add a new Student</h1>
        <div className='flex flex-col justify-center items-center w-[100%] mt-10'>
            <div className='flex flex-col justify-start items-center space-x-4 w-[60%]'>
                <label htmlFor="Name">Name: </label>
                <input 
                    className='outline-none w-[100%] h-[40px] border-2 pl-4'
                    type="text" 
                    onChange={(e)=>{handleInputs(e, setName)}}
                    value={name}
                    placeholder='Name'
                />
            </div>
            <div className='flex flex-col justify-start items-center space-x-4 w-[60%]'>
                <label htmlFor="SurName">SurName: </label>
                <input 
                    className='outline-none w-[100%] h-[40px] border-2 pl-4'
                    type="text" 
                    onChange={(text)=>{handleInputs(text, setSurname)}}
                    value={surname}
                    placeholder='SurName'
                />
            </div>
            <div className='flex flex-col justify-start items-center space-x-4 w-[60%]'>
                <label htmlFor="Nin">Nin: </label>
                <input 
                    className='outline-none w-[100%] h-[40px] border-2 pl-4'
                    type="text" 
                    onChange={(text)=>{handleInputs(text, setNin)}}
                    value={nin}
                    placeholder='Nin'
                />
            </div>
            <div className='flex flex-col justify-start items-center space-x-4 w-[60%]'>
                <label htmlFor="Teacher Number">Student Number: </label>
                <input 
                    className='outline-none w-[100%] h-[40px] border-2 pl-4'
                    type="text" 
                    onChange={(text)=>{handleInputs(text, setStudentNumber)}}
                    value={studentNumber}
                    placeholder='Student Number'
                />
            </div>
            <div className='flex flex-col justify-start items-center space-x-4 w-[60%]'>
                <label htmlFor="datepicker">Select your date of birth:</label>
                <input
                    className='outline-none w-[100%] h-[40px] border-2 pl-4'
                    type="date"
                    id="datepicker"
                    value={selectedDate}
                    onChange={handleDateChange}
                />
             </div>
            
            <div className='flex flex-col justify-start items-center w-[60%] mt-10 ml-4'>
                <button 
                    className='outline-none w-[100%] h-[40px] border-2 pl-4 bg-green-500 text-white'>
                        Submit
                </button>
            </div>
        </div>  
    </section>
  )
}

export default StudentInput