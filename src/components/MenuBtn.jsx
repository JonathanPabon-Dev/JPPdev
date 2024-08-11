import { useContext } from "react";
import BarsIcon from "../icons/BarsIcon";
import CloseIcon from "../icons/CloseIcon";
import MenuContext from "../contexts/MenuContext";

const MenuBtn = () => {
  const { handleShowMenu, showMenu } = useContext(MenuContext);

  return (
    <button
      type="button"
      className="flex size-8 items-center justify-center rounded-full bg-transparent transition md:hidden"
      onClick={handleShowMenu}
    >
      {showMenu ? (
        <CloseIcon className="text-slate-800 dark:text-slate-300 dark:hover:text-white" />
      ) : (
        <BarsIcon className="text-slate-800 dark:text-slate-300 dark:hover:text-white" />
      )}
    </button>
  );
};

export default MenuBtn;
