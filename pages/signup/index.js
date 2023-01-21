import React from 'react'
import { TextField } from '@mui/material'
import  Image from "next/image"
import logo from "../../assets/instagram.jpeg"

function index() {
    return (
        <div className='signup-container'>
            <div className='signup-card'>
            <Image src = {logo}/>
                <TextField id="outlined-basic" size = "small" fullWidth margin='dense' label="Email" variant="outlined" />
                <TextField id="outlined-basic" size = "small" fullWidth  margin='dense'type="password" label="Password" variant="outlined" />
                <TextField id="outlined-basic" size = "small" fullWidth  margin='dense' label="Full Name" variant="outlined" />
            </div>

        </div>
    )
}

export default index