import React from 'react';
import { waitFor, screen } from '@testing-library/react';
import { render } from '../../test/render';
import Planets from '../Planets';

const getPlanet = jest.fn().mockResolvedValue({});

describe (`Planet section`, () => {
    const planets: string[] = [];

    beforeEach(() => {
        getPlanet.mockClear();
    })

    it('calls required api', () => {
        const {container} = render(<Planets planets={planets} />);
        expect(getPlanet()).toHaveBeenCalled();
    });
});