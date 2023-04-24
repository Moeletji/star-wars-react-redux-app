import { createSlice } from '@reduxjs/toolkit';
import IFilm from '../../model/Film';
import { getFilms } from '../../services/swapi-service'
import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import axios from 'axios';

export interface FilmState {
    films: IFilm[]
    loading: boolean;
    errors: string;
    film: IFilm;
}

const initialState: FilmState = {
    films: [],
    loading: false,
    errors: "",
    film: {
      title: '',
      episode_id: '', 
      opening_crawl: '',
      director: '',
      producer: '', 
      release_date: '', 
      characters: [], 
      planets: [],
      starships: [], 
      vehicles: [],
      species: [], 
      created: '', 
      edited: '',
      url: '',
  },
}
// Slice
const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setFilms: (state, action) => {
      state.films = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    setFilm: (state, action) => {
      state.film = action.payload
    }
  },
});

export const { setFilms, setLoading, setErrors, setFilm } = filmsSlice.actions;

export default filmsSlice.reducer;

export const filmsSelector = (state: {filmsStore: FilmState}) => state.filmsStore;
export const filmSelector = (state: {filmsStore: FilmState}) => state.filmsStore;

// Actions
export const getAllFilms = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await getFilms();
      dispatch(setLoading(false));
      dispatch(setFilms(response.data?.results));
    } catch (e: any) {
      dispatch(setErrors(e.message));
      dispatch(setLoading(false));
    }
  }
}

export const getFilm = (url: string): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.get(url);
      dispatch(setLoading(false));
      dispatch(setFilm(response.data));
    } catch (e: any) {
      dispatch(setErrors(e.message));
      dispatch(setLoading(false));
    }
  }
}