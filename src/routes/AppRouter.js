import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Details from '../views/Details/Details';
import { Home } from '../views/Home/Home';
import List from '../views/List/List';

import Cart from '../commons/Cart/Cart';
import Header from '../commons/Header/Header';

const AppRouter = () => {
    return (
        <Router>
        <Header />
        <Cart />
            <Routes>
                <Route path='/' element ={<Home /> }/>
                <Route path='/listado-coleccionables' element ={<List /> }/>
                <Route path='/details' element ={<Details /> }/>
            </Routes>
        </Router>
    )
}

export default AppRouter