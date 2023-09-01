

import React, { useState } from 'react'
import { Box, Button, Dialog, DialogActions,  DialogTitle, Paper } from '@mui/material'
import Draggable from 'react-draggable'
function DraggableDialog(props){
  return(
   <Draggable handle="#dragables">
    <Paper {...props}/>
   </Draggable>
  )
}
function Dragable() {
  const[open,setOpen] = useState(false)
  const handleClick=()=>{
    setOpen(true)
  }
  const handleClose=()=>{
    setOpen(false)
  }
  return (
<Box>
  
   <Box>
    <Button variant='contained'  onClick={handleClick}>Save</Button>
    <Dialog 
    open={open}
    aria-labelledby='dragable'
    PaperComponent={DraggableDialog}
    style={{cursor:"move",content: {
            width: '300px',
            height: '200px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          },}}>
    <DialogTitle id='dragables'>Material dialog</DialogTitle>
    {/* <DialogContent>
      <DialogContentText>
       <Alert icon={false} color='secondary' variant='filled'>Do you want to close it</Alert> 
      </DialogContentText>
    </DialogContent> */}
    <DialogActions>
      <Button variant='contained' color='secondary'>No</Button>
      <Button variant='contained' color='secondary' onClick={handleClose}>yes</Button>
    </DialogActions>

    </Dialog>
   </Box>
</Box>
  )
}

export default Dragable

