import React from 'react'
import { red } from '@mui/material/colors'
import CoronavirusIcon from '@mui/icons-material/Coronavirus'
import { Grid } from '@mui/material'

const Header = () => {
  return (
    <>
      <Grid container>
        <Grid items xs={2}>
          <CoronavirusIcon sx={{ color: red[700], fontSize: 100, m: 2 }} />{' '}
        </Grid>
        <Grid items xs={6} sx={{ m: 2 }}>
          <h1>STATISTIC</h1>
        </Grid>
        <Grid items xs={4}></Grid>
      </Grid>
    </>
  )
}

export default Header
