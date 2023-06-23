'use client'
import { useSelector } from "react-redux";
import DeleteTicket from "../_components/Modal/DeleteTicket/DeleteTicket";

const Cart = () => {
    let cart = useSelector((state: any) => state.cart)
    return (
        <div>
            <DeleteTicket/>

        </div>
    )
}
export default Cart;