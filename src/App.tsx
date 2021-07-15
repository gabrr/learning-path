import React from 'react';
import { Home } from './pages';
import { Provider } from 'react-redux'
import store from './redux'

const App = () => {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    )
}

export default App;
