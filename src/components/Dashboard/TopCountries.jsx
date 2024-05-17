import React from 'react'
// import MapWithMarkers from './MapWithMarkers'
import { topCountriesStatistics } from "@/constants/data";

const TopCountries = () => {
    return (
        <section className='flex border rounded-lg border-neutral-200'>
            {/* <MapWithMarkers data={topCountriesStatistics} /> */}
            <div className='mr-5 divide-y-[1.4px] divide-gray-400 w-52'>
                {topCountriesStatistics.map((country) => (
                    <div key={country.country} className='flex items-center justify-between py-2 text-lg font-medium'>
                        <div className='flex items-center gap-2'>
                            <img
                                src={country.flag}
                                width={25}
                                className='object-cover h-[25px] rounded-full'
                            />
                            <p className='text-gray-400'>{country.country}</p>
                        </div>
                        <p className='text-dark-600'>{country.users}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TopCountries