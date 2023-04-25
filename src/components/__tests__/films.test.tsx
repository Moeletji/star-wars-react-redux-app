import React from 'react';
import { waitFor, screen, render } from '@testing-library/react';
// import { render, renderWithStore } from '../../test/render';
import Films from '../Films';
import { MemoryRouter } from 'react-router-dom';

const getAllFilms = jest.fn().mockResolvedValue({});

describe (`Films Page`, () => {
    beforeEach(() => {
        getAllFilms.mockClear();
    })

    it('calls required api', () => {
        const {container} = render(<MemoryRouter><Films /></MemoryRouter>);
        expect(getAllFilms()).toHaveBeenCalled();
    });
});