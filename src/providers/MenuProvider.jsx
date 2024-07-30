import { useState } from "react";
import PropTypes from "prop-types";
import MenuContext from "../contexts/MenuContext";

const MenuProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <MenuContext.Provider value={{ showMenu, handleShowMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

MenuProvider.propTypes = {
  children: PropTypes.node,
};

export default MenuProvider;
