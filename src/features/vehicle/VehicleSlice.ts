import { createSlice } from '@reduxjs/toolkit';
import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import axios from 'axios';
import IVehicle from '../../model/Vehicle';

export interface VehicleState {
    vehicles: IVehicle[]
    loading: boolean;
    errors: string;
}

const initialState: VehicleState = {
    vehicles: [],
    loading: false,
    errors: "",
}
// Slice
const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    setVehicles: (state, action) => {
      state.vehicles = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export const { setVehicles, setLoading, setErrors } = vehiclesSlice.actions;

export default vehiclesSlice.reducer;

export const vehicleSelector = (state: {vehiclesStore: VehicleState}) => state.vehiclesStore;

// Actions

export const getVehicle = (urls: string[]): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      let vehicleData: IVehicle[] = []
      await Promise.allSettled(urls.map((url) => axios.get(url)))
        .then((data) => {
          data.forEach((vehicle: any) => vehicleData.push(vehicle?.value.data))
        })
        .catch((err) => console.log(err));
      dispatch(setLoading(false));
      dispatch(setVehicles(vehicleData));
    } catch (e: any) {
      dispatch(setErrors(e.message));
      dispatch(setLoading(false));
    }
  }
}