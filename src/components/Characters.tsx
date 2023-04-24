import React, { useEffect, useState} from 'react';
import { characterSelector, getCharacter } from '../features/characters/CharacterSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import ICharacter from '../model/Character';
import DisplayCharacters from './DisplayCharacters';
import LoadingSpinner from './loading-spinner/LoadingSinner';

function Characters(props: { characters: string[] }) {
    const [characterData, setCharacterData] = useState<ICharacter[]>([]);

    const dispatch: any = useAppDispatch();
    const { characters, loading } = useAppSelector(characterSelector);

    useEffect(() => {
      dispatch(getCharacter(props.characters));
    },[props.characters, dispatch])

    useEffect(() => {
      setCharacterData(characters);
    }, [characters]);

    if (loading) {
      return <LoadingSpinner />;
  }
  
    return (
      <>
        <DisplayCharacters characters={characterData} />
      </>
    );
  }
  
  export default Characters;