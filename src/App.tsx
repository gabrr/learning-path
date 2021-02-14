import React from 'react';
import { Home } from './pages';
import { Provider } from 'react-redux'
import store from './redux'

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkModeMediaQuery.addEventListener('change', (e) => {
  const darkModeOn = e.matches;
  console.log(`Dark mode is ${darkModeOn ? '🌒 on :)' : '☀️ off ;('}.`);
});

const App = () => {
    
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    )
}

export default App;
