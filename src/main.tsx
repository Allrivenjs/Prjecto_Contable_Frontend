import React from 'react'
import ReactDOM from 'react-dom'
import './Styles/tailwind.css';
import { MantineProvider } from '@mantine/core';
import App from './Route/';
ReactDOM.render(
  <MantineProvider theme={{
      fontFamily: 'OpenSans, sans-serif',

  }} >
    <App/>
  </MantineProvider>,
  document.getElementById('root')
)
