import Image from 'next/image';
import React from 'react';

const Weather = ({ data }) => {
  return (
    <>
    <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[50vh] m-auto p-4 text-gray-300 z-10 top-20'>
      <div className='flex justify-between items-center'>
        <div className='pl-10'>
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt='/'
            width='100'
            height='100'
          />
          <p className='text-2xl pl-5'>{data.weather[0].main}</p>
          </div>
          <div className='pr-10'>
          <h1 className='text-8xl'>{data.main.temp.toFixed(0)}&#176;C</h1>
        </div>
      </div>
    </div>
    <div className='flex justify-center items-center'>
    <div className='relative text-center max-w-[500px] w-full h-[50vh] m-auto p-4 text-gray-300 z-10 bg-black/40 rounded-xl bottom-4'>
      <h1 className='text-4xl pt-10'>Weather in {data.name}, {data.sys.country}</h1>
      <div className='flex justify-evenly mt-24 text-2xl'>
        <div>{data.main.feels_like}&#176;C<br />Feels like</div>
        <div>{data.main.humidity}<br /> Humidity</div>
        <div>{data.wind.speed}<br /> MPH</div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Weather;