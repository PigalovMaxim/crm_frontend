import React from "react";
import BurgerMenuIcon from "./assets/burger-menu.svg";

function Header({ toggleMenu }: { toggleMenu: () => void }) {
  return (
    <header className="h-14 bg-block w-full border-l border-bg">
      <button
        className="h-full aspect-square text-white font-extrabold hover:bg-block-highlighted flex justify-center items-center"
        onClick={toggleMenu}
      >
        <img className="w-6/10 h-6/10" src={BurgerMenuIcon} alt="burger menu" />
      </button>
    </header>
  );
}

export default React.memo(Header);
