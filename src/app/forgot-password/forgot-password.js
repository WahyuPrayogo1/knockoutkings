"use client"

import { useState } from 'react' 
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import CircularProgress from '@mui/material/CircularProgress'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import FormError from '../../../Forms/Error'
import { ForgotPassword } from '../../../services/firebase'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'common.white',
  boxShadow: 24,
  p: 4,
};

const ForgotPasswordModal = ({ open, CloseModal }) => {
  const [isLoading, setIsLoading] = useState(false)
  const {register, handleSubmit, formState: { errors } } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (values) => {
    const { email } = values;
    try {
      setIsLoading(true);
      await ForgotPassword(email);
      setIsSuccess(true);
      alert('Your reset password email has been sent to your Gmail');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleModalClose = () => {
    setIsSuccess(false);
    CloseModal();
  };

  return (
    <div style={{fontFamily: 'Roboto'}}>

      <Modal
        open={open}
        onClose={CloseModal}
      >
        <Box sx={style}>
          <Typography variant="h5" component="h1" sx={{ mb: 4 }}>
            Reset your password account
          </Typography>
          <Grid sx={{ mb: 4 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl sx={{ mb: 2 }} fullWidth>
                <TextField
                  id="email"
                  name="email"
                  type="email"
                  label="Email Address"
                  variant="filled"
                  {...register("email", { required: true })}
                />
                <FormError error={errors.email}/>
              </FormControl>
              <Button type="submit" disabled={isLoading} color='error' variant="contained" size="large" fullWidth>
                {isLoading && (
                  <CircularProgress size={24} sx={{mr:1}}/>
                )}
                Send Reset Password Email
              </Button>
            </form>
          </Grid>
          <Grid
            container
            alignItems="center"
            justifyContent="start"
            gap="10px"
            sx={{ mb: 1, mt:1 }}
            className='group'
          >
            <Box>
              <Typography variant="caption">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 font-bold group-hover:-translate-x-1 transition duration-500">
                <   path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </Typography>
            </Box>
            <Typography variant="caption" component="a" href="/">
              Back to Knockout King's 
            </Typography>
          </Grid>
        </Box>
      </Modal>

    </div>
  )
}

export default ForgotPasswordModal
