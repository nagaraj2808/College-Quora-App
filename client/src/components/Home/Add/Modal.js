import { Box,  IconButton, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Add from './Add';

const modalStyle = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9999,
    },
    content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        borderRadius: '4px',
        maxWidth: '400px',
        width: '100%',
        maxHeight: '650px',
        overflow: 'auto',
        minWidth:'650px',
        
    },
};

export default function Modal_(props) {
    function handleClose() {
        props.closeModal(false);
    }

    return (
        <Box sx={modalStyle.overlay}>
            <Paper sx={modalStyle.content} >
                                
                <IconButton    style={{
                    position: "relative", // Position the remove button absolutely
                    top: 0, // Align the button to the top
                    left: '95%', // Align the button to the right
                    padding: "0px",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    border: "none",
                    cursor: "pointer",
                   
                    
                  }}
                  onClick={handleClose}><CloseIcon />
                  </IconButton>
                
                <Add type={props.type} question={props?.question} closeModal = {props.closeModal}/>
            </Paper>
        </Box>
    );
}
