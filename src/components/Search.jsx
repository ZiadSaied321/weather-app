import React, { useState } from 'react'

const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className='flex justify-center'>
        <input value={searchTerm} onChange={(e)=>{
            setSearchTerm(()=>e.target.value)
        }} className='focus:outline-none focus:border-0 focus:ring focus:ring-blue-500 min-w-40 border-2 rounded-lg px-2 w-4/5' type="text" />
        <button onClick={()=>{
          props.setParam(searchTerm)
          setSearchTerm('')
          }} 
          className='hover:bg-blue-500 hover:text-slate-100 bg-white text-blue-500 mx-2 px-2 text-sm py-1 border-2 border-blue-500 rounded-md'>Search</button>
    </div>
  )
}

export default Search