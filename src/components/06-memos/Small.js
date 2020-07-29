import React, {memo} from 'react'

export const Small = memo(({value}) => {
    console.log("llamado");
    return (
        <small>{value}</small>
    )
})
//Memo sirve para memorizar algo y que solo si sus properties cambias va a volverse a memorizar
