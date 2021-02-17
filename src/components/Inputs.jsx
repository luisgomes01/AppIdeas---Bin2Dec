import React from 'react'
import './Inputs.css'
import H3 from './H3'

export default () => {
    return(
        <div className='inputs'>
            <H3></H3>
            <div className='bin2dec'>
                <label>Bin<br></br><input placeholder='binary value'></input></label>
            </div>
            <div className='bin2dec'>
                <label>Dec<br></br><input placeholder='decimal value'></input></label>
            </div>
        </div>    
    );
}