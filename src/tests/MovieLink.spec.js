import React from 'react'
//import { rest } from 'msw'
//import { setupServer } from 'msw/node'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter as Router } from "react-router-dom";


import MovieLink from '../components/MovieLink'


/*test ('loads and displays greeting', async()=>{
    const title ={
        url: '',
        name:'Owen',
        films: []
    }
})*/


render (
    <Router>
        <MovieLink>
           
        </MovieLink>

    </Router>
)