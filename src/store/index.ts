import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import filmsSliceReducer from '../features/films/FilmSlice';
import characterSliceReducer from '../features/characters/CharacterSlice';
import planetsSliceReducer from '../features/planet/PlanetSlice';
import speciesSliceReducer from '../features/species/SpeciesSlice';
import starshipSliceReducer from '../features/starship/StarshipSlice';
import vehicleSliceReducer from '../features/vehicle/VehicleSlice';

const reducer = combineReducers({
  // here we will be adding reducers
  filmsStore: filmsSliceReducer,
  charactersStore: characterSliceReducer,
  planetsStore: planetsSliceReducer,
  speciesStore: speciesSliceReducer,
  starshipsStore: starshipSliceReducer,
  vehiclesStore: vehicleSliceReducer,
})

const store = configureStore({
  reducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;