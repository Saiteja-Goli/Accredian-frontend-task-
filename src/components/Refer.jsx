import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Snackbar, Alert } from '@mui/material';

const Refer = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    referedBy: ''
  });
  const [toast, setToast] = useState({ open: false, message: '', severity: 'success' });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleToastClose = () => {
    setToast({ ...toast, open: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/referal", formData);
      setToast({ open: true, message: 'Email sent successfully', severity: 'success' });
    } catch (error) {
      setToast({ open: true, message: 'Something went wrong', severity: 'error' });
      console.log(error);
    }
    handleClose();
  };

  return (
    <Box style={{display:'grid',justifyContent:'center',alignItems:'center',marginTop:'20px'}}>
      <Box>
        <Button variant='contained' onClick={handleClickOpen}>Refer</Button>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Refer a Friend</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              required
              margin="dense"
              name="name"
              label="Name"
              type="text"
              fullWidth
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
            required
              margin="dense"
              name="email"
              label="Email"
              type="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
            required
              margin="dense"
              name="referedBy"
              label="Referred By"
              type="text"
              fullWidth
              value={formData.referedBy}
              onChange={handleChange}
            />
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" variant="contained">Submit</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={toast.open}
        autoHideDuration={6000}
        onClose={handleToastClose}
      >
        <Alert onClose={handleToastClose} severity={toast.severity} sx={{ width: '100%' }}>
          {toast.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Refer;
