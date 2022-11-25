import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from "react-redux";
import { AppState } from '../../Store/Index';
import { modalopen } from '../../Store/ModalReducer';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export default function DeleteModal() {
    const modal = useSelector((state: AppState) => state.modal); // see store.ts
    const dispatch = useDispatch();
    const handleClose = () => {
        console.log('handleClose')
        dispatch(modalopen(false));
    }
    console.log('modal-->', modal.isopen);
    return (
        <div>
            <Modal
                open={modal.isopen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Information ...
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Deleted Successfully !
                    </Typography>
                    <Button onClick={() => { handleClose() }}>Close</Button>
                </Box>
            </Modal>
        </div>
    );
}
