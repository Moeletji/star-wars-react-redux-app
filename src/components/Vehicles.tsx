import React, { useEffect, useState} from 'react';
import { getVehicle, vehicleSelector } from '../features/vehicle/VehicleSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import IVehicle from "../model/Vehicle";
import DisplayVehicles from './DisplayVehicles';
import LoadingSpinner from './loading-spinner/LoadingSinner';

function Vehicles(props:{ vehicles: string[] }) {
    const [vehicleData, setVehicleData] = useState<IVehicle[]>([]);
  
    const dispatch: any = useAppDispatch();
    const { vehicles, loading } = useAppSelector(vehicleSelector);

    useEffect(() => {
      dispatch(getVehicle(props.vehicles));
    }, [props.vehicles, dispatch])
    

    useEffect(() => {
      setVehicleData(vehicles);
    }, [vehicles]);
    
    if (loading) {
      return <LoadingSpinner />;
  }

    return (
      <>
        <DisplayVehicles vehicles={vehicleData} />
      </>
    );
  }

export default Vehicles;