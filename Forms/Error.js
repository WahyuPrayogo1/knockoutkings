import FormHelperText from "@mui/material/FormHelperText"
import { red } from "@mui/material/colors"

const GetErrorMessage = (type) => {
    switch (type) {
        case 'minLength':
            return 'The number of characters does not meet the minimum.'
        case 'validate':
            return 'Your password does not match'
        case 'required':
        default:
            return 'Please fill in the field.'
    }
}

const FormError = ({ error }) => {
    if (!error) {
        return<></>
    }

    const { type } = error 
    const message = GetErrorMessage(type)

    return (
        <FormHelperText sx={{ color: red[500], m: 0}}>
            {message}
        </FormHelperText>
    )
}

export default FormError


