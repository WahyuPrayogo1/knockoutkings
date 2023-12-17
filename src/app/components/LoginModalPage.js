"use client"

import { useState } from 'react' 
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import CircularProgress from '@mui/material/CircularProgress'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import FormError from '../../../Forms/Error'
import { SignIn, GetErrorSignIn } from '../../../firebase'

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

const LoginModal = ({ open, CloseModal }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const {register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (values) => {
    setIsLoading(true)
    const {email, password} = values
    try {
      await SignIn(email, password)
    } catch (error) {
      const message = GetErrorSignIn(error.code)
      console.log(message)
      alert(message)
      setIsLoading(false)
    }
  }

  return (
    <div style={{fontFamily: 'Roboto'}}>

      <Modal
        open={open}
        onClose={CloseModal}
      >
        <Box sx={style}>
          <Typography variant="h5" component="h1" sx={{ mb: 4 }}>
            Log In To Your Account
          </Typography>
          <Grid sx={{ mb: 2 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl sx={{ mb: 2 }} fullWidth>
                <TextField
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  variant="filled"
                  {...register("email", { required: true })}
                />
                <FormError error={errors.email}/>
              </FormControl>
              <FormControl sx={{ mb: 4 }} fullWidth>
                <TextField
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  label="Password"
                  variant="filled"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? 'Hide' : 'Show'}
                        </Button>
                      </InputAdornment>
                    )
                  }}
                  {...register("password", { required: true, minLength: 8 })}
                />
                <FormError error={errors.password}/>
              </FormControl>
              <Button type="submit" disabled={isLoading} color='error' variant="contained" size="large" fullWidth>
                {isLoading && (
                  <CircularProgress size={24} sx={{mr:1}}/>
                )}
                Log in
              </Button>
            </form>
          </Grid>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: 1 }}
          >
            <Box>
              <Checkbox />
              <Typography variant="caption">
                Remember me
              </Typography>
            </Box>
            <Typography variant="caption" color='primary' component="a" href="/forgot-password">
              Forgot Password?
            </Typography>
          </Grid>
          <Grid container alignItems="center" sx={{ mb: 2 }}>
            <Image
              src="/facebook.png"
              height={20}
              width={20}
              layout="fixed"
              alt="Facebook Login"
            />
            <Typography variant="caption" component="a" href="#" sx={{ ml: 1 }}>
              Login with Facebook
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="body1" component="span">
              New to Knockout King's?
            </Typography>
            <Typography variant="body1" color="primary" component="a" href="/sign-up">
              &nbsp;Sign up now.
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="caption">
              This page is protected by Google reCAPTCHA to ensure you are not a bot.
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="caption" color="primary" component="a" href="#">
               Learn more.
            </Typography>
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

export default LoginModal
