import { createSlice } from '@reduxjs/toolkit';
import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import axios from 'axios';
import ICharacter from '../../model/Character';

export interface CharacterState {
    characters: ICharacter[]
    loading: boolean;
    errors: string;
}

const initialState: CharacterState = {
  characters: [],
    loading: false,
    errors: "",
}
// Slice
const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const { setCharacters, setLoading, setErrors } = charactersSlice.actions;

export default charactersSlice.reducer;

export const characterSelector = (state: {charactersStore: CharacterState}) => state.charactersStore;

// Actions

export const getCharacter = (urls: string[]): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      let characterData: ICharacter[] = []
      await Promise.allSettled(urls.map((url) => axios.get(url)))
        .then((data) => {
          data.forEach((character: any) => characterData.push(character?.value.data))
        })
        .catch((err) => console.log(err));
      dispatch(setLoading(false));
      dispatch(setCharacters(characterData));
    } catch (e: any) {
      dispatch(setErrors(e.message));
      dispatch(setLoading(false));
    }
  }
}