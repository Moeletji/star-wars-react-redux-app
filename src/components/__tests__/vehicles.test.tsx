import React from 'react';
import { waitFor, screen } from '@testing-library/react';
import { render } from '../../test/render';
import Vehicles from '../Vehicles';

const getVehicle = jest.fn().mockResolvedValue({});

describe (`Films Page`, () => {
    const vehicles: string[] = [];

    beforeEach(() => {
        getVehicle.mockClear();
    })

    it('calls required api', () => {
        const {container} = render(<Vehicles vehicles={vehicles} />);
        expect(getVehicle()).toHaveBeenCalled();
    });
});