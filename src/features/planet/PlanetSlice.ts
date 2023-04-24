import { createSlice } from '@reduxjs/toolkit';
import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import axios from 'axios';
import IPlanet from '../../model/Planet';

export interface PlanetState {
    planets: IPlanet[]
    loading: boolean;
    errors: string;
}

const initialState: PlanetState = {
    planets: [],
    loading: false,
    errors: "",
}
// Slice
const planetsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    setPlanets: (state, action) => {
      state.planets = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const { setPlanets, setLoading, setErrors } = planetsSlice.actions;

export default planetsSlice.reducer;

export const planetSelector = (state: {planetsStore: PlanetState}) => state.planetsStore;

// Actions

export const getPlanet = (urls: string[]): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      let planetData: IPlanet[] = []
      await Promise.allSettled(urls.map((url) => axios.get(url)))
        .then((data) => {
          data.forEach((planet: any) => planetData.push(planet?.value.data))
        })
        .catch((err) => console.log(err));
      dispatch(setLoading(false));
      dispatch(setPlanets(planetData));
    } catch (e: any) {
      dispatch(setErrors(e.message));
      dispatch(setLoading(false));
    }
  }
}