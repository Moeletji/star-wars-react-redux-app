import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);
const store = mockStore({});

const Wrapper = ({ children }) => {
    return (
            <MemoryRouter>{children}</MemoryRouter>
    );
}

export const render = (node) => {
    return rtlRender(node, { wrapper: Wrapper });
}

export const renderWithStore = (node, state = {}) => {
    const Wrapper = ({ children }) => {
        const store = mockStore(state);
        return (
        <Provider store={store}>
                <MemoryRouter>{children}</MemoryRouter>
        </Provider>);
    }

    return rtlRender(node, { wrapper: Wrapper });
}