import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";

import CustomButton from '../custom-button/custom-button.component';
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import './cart-dropdown.styles.scss';

import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItems>
    {cartItems.length
      ? (cartItems.map(cartItem => (
      <CartItem key={cartItem.id} item={cartItem} />
    )))
      : <EmptyMessage>Your cart is empty</EmptyMessage>
    }
    </CartItems>
    <CustomButton
      onClick={
        () => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }
      }>
      GO TO CHECKOUT
    </CustomButton>
  </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));