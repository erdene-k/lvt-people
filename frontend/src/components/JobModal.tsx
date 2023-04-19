import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Job } from '../models/itypes';
import PublicIcon from '@mui/icons-material/Public';
type AppProps = { data: Job, modalVisible: boolean, handleClose: () => void };
const JobModal = ({ data, modalVisible, handleClose }: AppProps) => {


    return (

        <Modal
            open={modalVisible}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div style={{display:'flex', justifyContent:'space-between'}}>  
                    <h3 style={{color:"#212529"}}>{data.type}</h3>
                    <div style={{display:'flex', alignItems:'center'}}>  
                <h4 style={{color:"#495057"}}>{data.location}</h4>
                    <PublicIcon color="action"/>
                </div>
                </div>
                
               <div style={{display:'grid', gridColumn:2}}>
               <p>
                   Size: {data.size}                   
                </p>
                <p>Description: {data.description}</p>
             <p>   {data.numOfQuotations} quotations</p>
               </div>
              <button className='bid-button'>BID</button>
            </Box>
        </Modal>
    )
}

export default JobModal
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#f9f9f9',
    borderRadius: 6,
    boxShadow: 1,
    p: 4,
    height: 'max-content'
};