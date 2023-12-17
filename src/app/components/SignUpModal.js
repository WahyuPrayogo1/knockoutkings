"use client"

import '../globals.css'
import { useRef, useState } from 'react' 
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
import FormControlLabel from '@mui/material/FormControlLabel'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import FormError from '../../../Forms/Error'
import { GetErrorSignUp, SignUp as SignUpToFirebase } from '../../../firebase'
import Link from 'next/link'

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

const SignUpLandingPage = ({ open, CloseModal }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const {register, handleSubmit, watch, formState: { errors } } = useForm();

  const password = useRef({})
  password.current = watch('password')

  const onSubmit = async (values) => {
    setIsLoading(true)
    const {email, password} = values
    try {
      await SignUpToFirebase(email, password)
    } catch (error) {
      const message = GetErrorSignUp(error.code)
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
            Create Your Account
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
              <FormControl sx={{ mb: 2 }} fullWidth>
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
              <FormControl sx={{ mb: 2 }} fullWidth>
                <TextField
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  label="Confirm Password"
                  variant="filled"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button 
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                          {showConfirmPassword ? 'Hide' : 'Show'}
                        </Button>
                      </InputAdornment>
                    )
                  }}
                  {...register("confirmPassword", {
                     required: true, 
                     minLength: 8,
                    validate: (value) => value === password.current 
                  })}
                />
                <FormError error={errors.confirmPassword}/>
              </FormControl>
              <FormControl sx={{mb:4}} fullWidth>
                  <FormControlLabel
                  label="Agree with terms and condition"
                  control={<Checkbox{...register("agreement", { required: true})}/>}>
                  </FormControlLabel>
                  <FormError error={errors.agreement}/>
              </FormControl>
              <Button type="submit" sx={{mb: 2}} disaled={isLoading} color='info' variant="contained" size="large" fullWidth>
                {isLoading && (
                  <CircularProgress size={24} sx={{mr:1}}/>
                )}
                Create Your Account
              </Button>
              <Link href='/log-in'>
                <Button color='error' variant="contained" size="large" fullWidth>
                  Log In
                </Button>
              </Link>
            </form>
          </Grid>
        </Box>

                  
      </Modal>

    </div>
  )
}

export default SignUpLandingPage
