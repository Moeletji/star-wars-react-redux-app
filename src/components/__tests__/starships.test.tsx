import React from 'react';
import { waitFor, screen } from '@testing-library/react';
import { render } from '../../test/render';
import Starships from '../Starships';

const getStarship = jest.fn().mockResolvedValue({});

describe (`Films Page`, () => {
    const starships: string[] = [];

    beforeEach(() => {
        getStarship.mockClear();
    })

    it('calls required api', () => {
        const {container} = render(<Starships starships={starships} />);
        expect(getStarship()).toHaveBeenCalled();
    });
});