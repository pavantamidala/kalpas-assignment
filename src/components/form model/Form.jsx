import React, { useState } from 'react'
import { FormControl, TextField, InputLabel, FormHelperText, Input, Button } from '@material-ui/core';
import CountrySelect from './country'
import isEmail from 'validator/lib/isEmail';
function FormComp() {
    const [error,setError] = useState({number:false,email:false})
    function numberCheck(e){
        if(e.target.value.length !== 10){
            setError({...error,number:true})
        }
        if(e.target.value.length === 10){
            setError({...error,number:false})
        }
    }
    function emailCheck(e){
        
        let val = isEmail(e.target.value)
        if(val===false){
            setError({...error,email:true})
        }
        if(val){
            setError({...error,email:false})
        }
    }
    return (
        <div>
            <h3>Thanky you so much for taking the time!</h3>
            <p>Please provide the below details</p>    
            
            <form action="#">
<div className="first-name">

            <FormControl   color="primary" variant="outlined">
                <InputLabel htmlFor="my-input">First Name</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
</div>

                <FormControl color="primary" variant="outlined">
                    <InputLabel htmlFor="my-input">Last Name</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                </FormControl>
                <br /> <br />
                <TextField
                    id="outlined-multiline-static"
                    label="Address"
                    multiline
                    rows={4}
                    // size="medium"
                    fullWidth={true}
                    variant="outlined"
                    placeholder="Address"
                />
               <br /> <br />
                <CountrySelect />
                <br /> 
                <TextField id="outlined-basic" error={error.number} onChange={numberCheck}  label="Ph Number" type="number" variant="outlined"  /> <br /> <br />
                <TextField id="outlined-basic" error={error.email} onChange={emailCheck} label="Email"  type="email" variant="outlined" /> <br /> 
                <Button variant="contained" color="primary">
                    Send FeedBack
</Button>

            </form>
        </div>
    )
}
export default FormComp
