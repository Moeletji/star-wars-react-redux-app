import { createSlice } from '@reduxjs/toolkit';
import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import axios from 'axios';
import IStarship from '../../model/Starship';

export interface StarshipState {
    starships: IStarship[]
    loading: boolean;
    errors: string;
}

const initialState: StarshipState = {
    starships: [],
    loading: false,
    errors: "",
}
// Slice
const starshipsSlice = createSlice({
  name: 'starships',
  initialState,
  reducers: {
    setStarships: (state, action) => {
      state.starships = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const { setStarships, setLoading, setErrors } = starshipsSlice.actions;

export default starshipsSlice.reducer;

export const starshipSelector = (state: {starshipsStore: StarshipState}) => state.starshipsStore;

// Actions

export const getStarship = (urls: string[]): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      let starshipData: IStarship[] = []
      await Promise.allSettled(urls.map((url) => axios.get(url)))
        .then((data) => {
          data.forEach((starship: any) => starshipData.push(starship?.value.data))
        })
        .catch((err) => console.log(err));
      dispatch(setLoading(false));
      dispatch(setStarships(starshipData));
    } catch (e: any) {
      dispatch(setErrors(e.message));
      dispatch(setLoading(false));
    }
  }
}