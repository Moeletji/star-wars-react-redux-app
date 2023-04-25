import React from 'react';
import { waitFor, screen } from '@testing-library/react';
import { render } from '../../test/render';
import Species from '../Species';

const getSpecies = jest.fn().mockResolvedValue({});

describe (`Species section`, () => {
    const species: string[] = [];

    beforeEach(() => {
        getSpecies.mockClear();
    })

    it('calls required api', () => {
        const {container} = render(<Species species={species} />);
        expect(getSpecies()).toHaveBeenCalled();
    });
});