import React, { useEffect } from 'react'
import './styles/LocationsPage.css'
import NavigationMenu from '../../components/Shared/NavigationMenu'
import GeneralHeader from '../../components/Shared/GeneralHeader'
import UseFetch from '../../hooks/UseFetch'
import LocationsCard from '../../components/LocationsPage/LocationsCard'

const LocationsPage = () => {

    const url = `https://pokeapi.co/api/v2/location/?offset=0&limit=50`

    const [locations, getLocations] = UseFetch(url)

    useEffect(() => {
        getLocations();
    }, [])

    let locationResults = locations?.results
    console.log(locationResults)

  return (
    <div>
        <GeneralHeader/>
        <NavigationMenu/>
        
        <section className='container__all__locations'>
            {
                locationResults?.map((locat, index) => (
                    <LocationsCard
                    key={index}
                    url={locat.url}
                    />
                ))
            }
        </section>


    </div>
  )
}

export default LocationsPage