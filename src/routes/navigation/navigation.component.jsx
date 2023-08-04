import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import {
  NavigationToolbar,
  NavLinkContainer,
  NavLinksContainer,
  LogoContainer,
} from "./navigation.styles.jsx";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector.js";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  // console.log("the currentUser is here", currentUser);
  const { cartOpen } = useContext(CartContext);
  // console.log("inside the navigation component, cartOpen is", cartOpen);
  return (
    <Fragment>
      <NavigationToolbar>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLinkContainer to="/shop">SHOP</NavLinkContainer>
          {currentUser ? (
            <NavLinkContainer to="/auth" onClick={signOutUser}>
              SIGN OUT
            </NavLinkContainer>
          ) : (
            <NavLinkContainer to="/auth">SIGN IN</NavLinkContainer>
          )}
          <CartIcon />
        </NavLinksContainer>
        {cartOpen && <CartDropdown />}
      </NavigationToolbar>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
