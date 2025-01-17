import * as React from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'
import BlazePose from "./BlazePose.js"
import Babylon3D from "./Babylon3D.js"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: 'auto',
  marginTop: theme.spacing(1),
  marginLeft: theme.spacing(1)/2,
  marginRight: theme.spacing(1)/2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

function AppHome() {
  let videoPath = 'dancing.mp4'
  return (
    <div >
      <Grid container spacing={2}>
        <Grid xs={3}>
          <Item>
            < BlazePose
              src={videoPath}
              width={window.innerWidth/4 - 32}
              height={window.innerHeight - 64 - 12*3}
            />
          </Item>
        </Grid>
        <Grid xs={9}>
          <Item>
            < Babylon3D
              width={window.innerWidth*3/4 - 12*5}
              height={window.innerHeight - 64 - 12*3}
            />
          </Item>
        </Grid>
      </Grid>
    </div>
  )
}

export default AppHome
