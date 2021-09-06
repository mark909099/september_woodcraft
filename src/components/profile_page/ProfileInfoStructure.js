import {
    Grid,
     } from '@material-ui/core';
import ProfileInfo from './ProfileInfo';

export default function ProfileInfoStructure() {
    return (
<div>
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="flex-start"
>
<Grid item xs={1} sm={3} md={4}></Grid>
<Grid item xs={10} sm={6} md={4}><ProfileInfo /></Grid>
<Grid item xs={1} sm={3} md={4}></Grid>

</Grid>
            
</div>
    )
}
