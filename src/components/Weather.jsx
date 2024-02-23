import React from 'react'

const Weather = (props) => {
        const { city, weatherd, weatherDescription, temp, windSpeed, humidity, country } = props.data;
    return (
        <div className='px-2 py-4 text-center bg-blue-50 porder-2 rounded-xl'>
            <h1 className='font-bold text-bg-blue-500 shadow-sm'>{`${city} ${country}`}</h1>
            <h2 className='text-2xl text-blue-950'>{`Status ${weatherd}`}</h2>
            <h2 className='text-blue-500 text-lg'>{`description: ${weatherDescription}`}</h2>
            <div>
            <h2 className='text-xl text-blue-950 font-semibold'>Tempreture</h2>
            <h2 className='text-blue-800 font-extrabold text-2xl'>{`${temp} C`}</h2>
            </div>
            <div className='flex justify-around'>
                {/* Wind speed card */}
                <div className='border-2 border-slate-400 px-2 py-1 rounded-md mt-2 w-1/3'>
                <h2 className='text-slate-500 font-bold'>Wind Speed</h2>
                <h2 className='text-slate-500 font-bold'>{windSpeed}</h2>
                </div>
                {/* humidity Card */}
                <div className='border-2 border-slate-400 px-2 py-1 rounded-md mt-2 w-1/3'>
                <h2 className='text-slate-500 font-bold'>humidity</h2>
                <h2 className='text-slate-500 font-bold'>{humidity}</h2>
                </div>
            </div>
        </div>
    )
}

export default Weather