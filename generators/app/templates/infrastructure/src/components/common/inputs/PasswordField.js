import React, { useState, useCallback } from 'react'
import CustomTextField from "./CustomTextField"
import { InputAdornment, IconButton } from "@material-ui/core"
import { Visibility, VisibilityOff } from "@material-ui/icons"


const PasswordField = ({ ...rest }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = useCallback(_ => {
        setShowPassword(x => !x)
    }, [])

    const handleMouseDownPassword = useCallback(event => {
        event.preventDefault();
    }, [])

    return (
        <CustomTextField
            {...rest}
            customInputProps={{
                type: showPassword ? 'text' : 'password'
            }}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                    >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
            }
        />
    )
}

export default PasswordField