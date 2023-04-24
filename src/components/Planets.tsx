import React, { useEffect, useState} from 'react';
import { getPlanet, planetSelector } from '../features/planet/PlanetSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import IPlanet from '../model/Planet';
import DisplayPlanets from './DisplayPlanets';
import LoadingSpinner from './loading-spinner/LoadingSinner';

function Planets(props:{ planets: string[] }) {
    const [planetData, setPlanetData] = useState<IPlanet[]>([]);
  
    const dispatch: any = useAppDispatch();
    const { planets, loading } = useAppSelector(planetSelector);

    useEffect(() => {
      dispatch(getPlanet(props.planets));
    }, [props.planets, dispatch])
    
    
    useEffect(() => {
      setPlanetData(planets);
    }, [planets]);

    if (loading) {
      return <LoadingSpinner />;
  }
  
    return (
      <>
        <DisplayPlanets planets={planetData} />
      </>
    );
  }
  
  export default Planets;