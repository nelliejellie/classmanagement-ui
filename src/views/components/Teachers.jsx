import React from 'react'

export default function Teachers({teachers}) {
    console.log(teachers)
  return (
    <section>
        {
            teachers.length > 0 ?
            <div>
                <h1 className='font-bold text-2xl text-black'>Teachers</h1>
                <div className='mt-10'>
                    <div className='flex flex-row justify-around w-[80%]'>
                        <p className='font-bold text-center w-[13%]'>Title</p>
                        <p className='font-bold text-center w-[13%]'>Name</p>
                        <p className='font-bold text-center w-[13%]'>Surname</p>
                        <p className='font-bold text-center w-[13%]'>DOB</p>
                        <p className='font-bold text-center w-[13%]'>Salary</p>
                        <p className='font-bold text-center w-[13%]'>Teacher Number</p>
                        <p className='font-bold text-center w-[13%]'>NIN</p>
                    </div>
                </div>
                {
                    teachers.map(item =>(
                        <div key={item.id} className='flex flex-row justify-around w-[80%] mt-5'>
                            <p className='text-center w-[13%]'>{item.title}</p>
                            <p className='text-center w-[13%]'>{item.name}</p>
                            <p className='text-center w-[13%]'>{item.surname}</p>
                            <p className='text-center w-[13%]'>{item.dob.slice(0,10)}</p>
                            <p className='text-center w-[13%]'>{item.salary}</p>
                            <p className='text-center w-[13%]'>{item.teacherNumber}</p>
                            <p className='text-center w-[13%]'>{item.nin}</p>
                        </div>
                    ))
                }
            </div>
            :
            <h1 className='text-center'>No teacher have been added yet</h1>
        }
        
    </section>
  )
}

