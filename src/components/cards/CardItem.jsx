//styles
import "./card.css"
import Button from '@mui/material/Button';

import { FiPlus } from "react-icons/fi";

//CONTEXT
import { itemTypes } from "../../context/actions/itemReducer";
import { ItemContex } from "../../context/ItemContext";
import { useContext, useState } from "react";


import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  };

const CardItem = ({title, stock, type, image, id, description, price, numberSelect}) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)

    // eslint-disable-next-line no-unused-vars
    const [ listProducts, dispatch ] = useContext(ItemContex)

    return ( 

        <div className="card-container">
            <div onClick={handleOpen} className="image-content">
            {
                numberSelect > 1 && (
                    <div className="numberContador"><h1>X{numberSelect}</h1></div>
                )
            }

            {
                stock < 1 && (
                    <div className="agoted-products"><h1>Out of Stock</h1></div>
                )
            }
             <img  src={image} alt={title}/>
            </div>
             <div className="info-card">
                 <p>Stock: {stock}</p>
                 <p>Type: {type}</p>
                 <Button disabled={stock ? false : true} onClick={() => dispatch({type: itemTypes.addCart, payload: id, stock: stock, numberSelect: numberSelect})} variant="contained"><FiPlus /></Button>
             </div>
             <h4>{title}</h4>

             <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
             >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                     <img src={image}  alt={title}/>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                     type: {type}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                     price: {price}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                     <p>{description}</p>
                </Typography>
                <Button disabled={stock ? false : true} onClick={() => dispatch({type: itemTypes.addCart, payload: id, stock: stock})}>Add</Button>
            </Box>
            </Modal>
        </div>
     );
}
 
export default CardItem;