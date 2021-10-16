//COMPONENTS
import TablesCart from "../tables/TablesCart";

//CONTEXT
import { useContext, useState } from "react";
import { ItemContex } from "../../context/ItemContext";

//COMPONENTS MUI
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

//STYLES
import "./view-cart.css"
import { Button } from "@mui/material";

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



const ViewCart = () => {


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)

    const [ listProducts ] = useContext(ItemContex)
    
    // eslint-disable-next-line no-unused-vars
    const [total, setTotal] = useState(0)


    const response = listProducts.filter(item => item.isSelect === true)

    return ( 

        <div className="view-cart-content">
            {
                response.length > 0 ?
                <>
                    <div className="tables-content">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Amount</th>
                                    <th>stock</th>
                                    <th>price</th>
                                    <th>Delete x1</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    response.map(item => <TablesCart 
                                        key={item.id} 
                                    name={item.name} 
                                    stock={item.stock} 
                                    price={item.price} 
                                    numberSelect={item.numberSelect}
                                    id={item.id}
                                    />)
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="total-price">
                        <h2>Total</h2>
                        <hr />
                        <div>
                            <p>Total to pay: ${total}</p>
                            <Button variant="contained" onClick={handleOpen}>To Pay</Button>
                            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
             >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    confirm purchase
                </Typography>
                <Button onClick={() => alert("checkout!")} variant="contained" color="success">Checkout</Button>
            </Box>
            </Modal>
                        </div>
                    </div>
                </>

                : 
                <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="warning">There are no products added to the cart!</Alert>
              </Stack>
            }
        </div>
     );
}
 
export default ViewCart;