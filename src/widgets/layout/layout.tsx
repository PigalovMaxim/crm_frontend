import classNames from "classnames";
import { useCallback, useEffect, useState } from "react";
import Menu from "../menu";
import Header from "../header";
import { useUnit } from "effector-react";
import { $user } from "@/app/stores";
import { useNavigate } from "react-router-dom";
import { routes } from "@/app/router";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const navigate = useNavigate();
  const user = useUnit($user);
  const toggleMenu = useCallback(() => {
    setMenuOpen((value) => !value);
  }, []);

  useEffect(() => {
    if (!user) {
      navigate(routes.login, { replace: true });
    }
  }, []);

  return (
    <div className="w-full h-full bg-bg flex flex-row justify-start items-center">
      <Menu isMenuOpen={isMenuOpen} />
      <main
        className={classNames("h-full transition-width", {
          "w-main-screen": isMenuOpen,
          "w-main-screen-full": !isMenuOpen,
        })}
      >
        <Header toggleMenu={toggleMenu} />
        <div className="h-content-height p-gap overflow-auto overflow-x-auto">
          <div className="min-w-[1280px] max-w-[1920px] w-full">{children}</div>
        </div>
      </main>
    </div>
  );
}
