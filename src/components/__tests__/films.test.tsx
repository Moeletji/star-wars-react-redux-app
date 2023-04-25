import React from 'react';
import { waitFor, screen } from '@testing-library/react';
import { render } from '../../test/render';
import Films from '../Films';

const getAllFilms = jest.fn().mockResolvedValue({});

describe (`Films Page`, () => {
    beforeEach(() => {
        getAllFilms.mockClear();
    })

    it('calls required api', () => {
        const {container} = render(<Films />);
        expect(getAllFilms()).toHaveBeenCalled();
    });
});