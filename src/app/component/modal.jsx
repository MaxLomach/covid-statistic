import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

import HeartBrokenRoundedIcon from '@mui/icons-material/HeartBrokenRounded'
import MedicalServicesRoundedIcon from '@mui/icons-material/MedicalServicesRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { Button, Grid } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: '0 0 124px black',
  borderRadius: 6,

  p: 4
}

export default function BasicModal({ row }) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <div>
      <Button onClick={handleOpen}>Info</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            id='modal-modal-title'
            variant='h3'
            component='h2'
            sx={{ textAlign: 'center' }}
          >
            {row.Country}
          </Typography>
          <Grid container sx={{ m: 2 }}>
            <Grid item xs={2}>
              <HeartBrokenRoundedIcon />
            </Grid>
            <Grid item xs={6}>
              <Typography>Total Confirmed</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>{row.TotalConfirmed}</Typography>
            </Grid>
          </Grid>
          <Grid container sx={{ m: 2 }}>
            <Grid item xs={2}>
              <MedicalServicesRoundedIcon />
            </Grid>
            <Grid item xs={6}>
              <Typography>Total Deaths</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>{row.TotalDeaths}</Typography>
            </Grid>
          </Grid>
          <Grid container sx={{ m: 2 }}>
            <Grid item xs={2}>
              <CloseRoundedIcon />
            </Grid>
            <Grid item xs={6}>
              <Typography>Total Recovered</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>{row.TotalRecovered}</Typography>
            </Grid>
          </Grid>
          <Button onClick={handleClose}>close</Button>
        </Box>
      </Modal>
    </div>
  )
}
