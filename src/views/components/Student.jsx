import React from 'react'

function Student({students}) {
  return (
    <div>
        {
            students.length > 0 ?
            <div>
                <h1 className='font-bold text-2xl text-black'>Students</h1>
                <div className='mt-10'>
                    <div className='flex flex-row justify-around w-[80%]'>
                        <p className='font-bold text-center w-[13%]'>Name</p>
                        <p className='font-bold text-center w-[13%]'>Surname</p>
                        <p className='font-bold text-center w-[13%]'>DOB</p>
                        <p className='font-bold text-center w-[13%]'>Student Number</p>
                        <p className='font-bold text-center w-[13%]'>Nin</p>
                    </div>
                </div>
                {
                    students.map(item =>(
                        <div key={item.id} className='flex flex-row justify-around w-[80%] mt-5'>
                            <p className='text-center w-[13%]'>{item.name}</p>
                            <p className='text-center w-[13%]'>{item.surname}</p>
                            <p className='text-center w-[13%]'>{item.dob.slice(0,10)}</p>
                            <p className='text-center w-[13%]'>{item.salary}</p>
                            <p className='text-center w-[13%]'>{item.studentNumber}</p>
                            <p className='text-center w-[13%]'>{item.nin}</p>
                        </div>
                    ))
                }
            </div>
            :
            <h1 className='text-center'>No student have been added yet</h1>
        }
    </div>
  )
}

export default Student