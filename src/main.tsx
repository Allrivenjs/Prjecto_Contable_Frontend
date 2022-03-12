import React from 'react'
import ReactDOM from 'react-dom'
// import './Styles/tailwind.css';
import { MantineProvider } from '@mantine/core';
import App from './Route/';
ReactDOM.render(
  <MantineProvider  >
    <App/>
  </MantineProvider>,
  document.getElementById('root')
)
