import { createSlice } from '@reduxjs/toolkit';
import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import axios from 'axios';
import ISpecies from '../../model/Species';

export interface SpeciesState {
    species: ISpecies[]
    loading: boolean;
    errors: string;
}

const initialState: SpeciesState = {
    species: [],
    loading: false,
    errors: "",
}
// Slice
const speciesSlice = createSlice({
  name: 'species',
  initialState,
  reducers: {
    setSpecies: (state, action) => {
      state.species = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const { setSpecies, setLoading, setErrors } = speciesSlice.actions;

export default speciesSlice.reducer;

export const speciesSelector = (state: {speciesStore: SpeciesState}) => state.speciesStore;

// Actions

export const getSpecies = (urls: string[]): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      let speciesData: ISpecies[] = []
      await Promise.allSettled(urls.map((url) => axios.get(url)))
        .then((data) => {
          data.forEach((species: any) => speciesData.push(species?.value.data))
        })
        .catch((err) => console.log(err));
      dispatch(setLoading(false));
      dispatch(setSpecies(speciesData));
    } catch (e: any) {
      dispatch(setErrors(e.message));
      dispatch(setLoading(false));
    }
  }
}