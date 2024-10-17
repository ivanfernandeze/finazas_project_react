import React from 'react'
import { Typography } from '@material-tailwind/react'
import { CardDefault } from './components/card'

function FactorFRC() {
    // alert('Factor FRC')
    return (
        <>
            {/* <h1 className='text-5xl'>Factor de Recuperacion de Capital(FRC)</h1> */}
            <Typography variant='h1' color='green' textGradient>Factor de Recuperacion de Capital(FRC)</Typography>
            <img
                className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                alt="nature image"
            />
            <CardDefault></CardDefault>
        </>
    )
}

export default FactorFRC