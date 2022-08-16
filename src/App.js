import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <List />
            <Map />
        </>
    );
};

export default App;
