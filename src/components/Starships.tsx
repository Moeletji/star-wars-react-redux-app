import React, { useEffect, useState} from 'react';
import { getStarship, starshipSelector } from '../features/starship/StarshipSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import IStarship from '../model/Starship';
import DisplayStarships from './DisplayStarships';
import LoadingSpinner from './loading-spinner/LoadingSinner';

function Starships(props:{ starships: string[] }) {
    const [starshipData, setStarshipData] = useState<IStarship[]>([]);
  
    const dispatch: any = useAppDispatch();
    const { starships, loading } = useAppSelector(starshipSelector);

    useEffect(() => {
      dispatch(getStarship(props.starships));
    }, [props.starships, dispatch])
    

    useEffect(() => {
      setStarshipData(starships);
    }, [starships]);

    if (loading) {
      return <LoadingSpinner />;
  }
  
    return (
      <>
        <DisplayStarships starships={starshipData} />
      </>
    );
  }

  export default Starships;