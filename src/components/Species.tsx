import React, { useEffect, useState} from 'react';
import { getSpecies, speciesSelector } from '../features/species/SpeciesSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import ISpecies from '../model/Species';
import DisplaySpecies from './DisplaySpecies';
import LoadingSpinner from './loading-spinner/LoadingSinner';

function Species(props: { species: string[] }) {
    const [speciesData, setSpeciesData] = useState<ISpecies[]>([]);
  
    const dispatch: any = useAppDispatch();
    const { species, loading } = useAppSelector(speciesSelector);

    useEffect(() => {
      dispatch(getSpecies(props.species));
    }, [props.species, dispatch])
    

    useEffect(() => {
      setSpeciesData(species);
    }, [species]);

    if (loading) {
      return <LoadingSpinner />;
  }
  
    return (
      <>
        <DisplaySpecies species={speciesData} />
      </>
    );
  }
  
  export default Species;