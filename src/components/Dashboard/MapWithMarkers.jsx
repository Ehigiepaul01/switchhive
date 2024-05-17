//create a map component using react simple map libary
import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import features from '@/constants/features.json';

const MapWithMarkers = ({ data }) => {
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        // Transform data into markers array
        const countryMarkers = data.map(country => ({
            name: country.country,
            coordinates: [country.longitude, country.latitude],
            users: country.users,
            flag: country.flag
        }));
        setMarkers(countryMarkers);

    }, [data]);


    return (
        <div className='w-full h-[450px]'>
            <ComposableMap projection="geoMercator" projectionConfig={{ scale: 100 }}>
                <Geographies geography={features}>
                    {({ geographies }) =>
                        geographies.map(geo => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill="#E4E6DE"
                                stroke="#E4E6DE"
                            />
                        ))
                    }
                </Geographies>
                {markers.map(({ name, coordinates, users, flag }, index) => (
                    <React.Fragment key={name + index}>
                        <Marker coordinates={coordinates}>
                                    <g
                                        style={{
                                            zIndex: 999,
                                            pointerEvents: 'none',
                                        }}
                                    >
                                        <path d="M 0,3.5 -6,-3.5 6,-3.5 Z" fill="#fff" stroke="#fff" strokeWidth="0.5" />
                                        {/* Tooltip */}
                                        <g
                                            style={{
                                                pointerEvents: 'auto', 
                                            }}
                                        >
                                            <rect x="-25" y="-20" width="50" height="20" fill="#fff" rx="5" stroke="#fff" strokeWidth="0.5" />
                                            <image
                                                href={flag} 
                                                x="-20"
                                                y="-18"
                                                width="16" 
                                                height="16"
                                            />
                                            <text x="8" y="-6.5" fontSize="10" fill="#000" textAnchor="middle">
                                                {`${users}`}
                                            </text>
                                        </g>
                                    </g>
                                )
                        </Marker>
                    </React.Fragment>
                ))}
            </ComposableMap>
        </div>
    );
};

export default MapWithMarkers;
