import React, { useEffect } from 'react'
import UseFetch from '../../hooks/UseFetch'
import AreaCard from './AreaCard'

import './styles/LocationsCard.css'

const LocationsCard = ({ url }) => {

    const [infoLocat, getInfoLocat] = UseFetch(url)

    useEffect(() => {
        getInfoLocat();
    }, [])

    return (
        <div className='card__locations'>
            <table className='table__locations'>
                <thead>
                    <tr className='row__titles'>
                        <th className='location__column'>Locations</th>
                        <th className='area__column'>Areas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><h3>{infoLocat?.name}</h3></td>
                        <td>
                            <div className="container__areas">
                                {
                                    infoLocat?.areas.map((area, index) => (
                                        <AreaCard
                                            key={index}
                                            url={area.url}
                                        />
                                    ))
                                }
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default LocationsCard
