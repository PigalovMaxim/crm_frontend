import classNames from "classnames";
import { MENU_ITEMS } from "./menu.options";
import { routes } from "@/app/router";
import { useLocation, useNavigate } from "react-router-dom";
import { logouted } from "@/app/stores";

export default function Menu({ isMenuOpen }: { isMenuOpen: boolean }) {
  const navigation = useNavigate();
  const { pathname } = useLocation();

  const onPressHandler = (url: string) => {
    if (pathname === url) return;
    navigation(url);
  };

  return (
    <aside
      className={classNames(
        "h-full flex flex-col justify-start items-start bg-block transition-width",
        {
          "w-side-menu": isMenuOpen,
          "w-side-menu-closed": !isMenuOpen,
        }
      )}
    >
      <button
        className={classNames(
          "w-full transition-opacity text-white font-bold text-3xl mt-4 mb-10",
          {
            "opacity-0": !isMenuOpen,
          }
        )}
      >
        CRM
      </button>
      {MENU_ITEMS.map((item) => (
        <button
          key={item.title}
          onClick={() => onPressHandler(item.url)}
          className="w-full px-4 h-14 hover:bg-block-highlighted transition-colors flex flex-row items-center justify-center"
        >
          <img
            src={item.icon}
            alt={item.title}
            className={classNames("w-5 h-5", { "mr-2": isMenuOpen })}
          />
          <span
            className={classNames(
              "text-white transition-width text-lg overflow-hidden",
              {
                "max-w-full": isMenuOpen,
                "max-w-0": !isMenuOpen,
              }
            )}
          >
            {item.title}
          </span>
        </button>
      ))}
      <button
        className={classNames(
          "w-full hover:bg-block-highlighted transition-all py-4 text-c-red text-lg mt-auto mb-10",
          {
            "opacity-0": !isMenuOpen,
          }
        )}
        onClick={() => {
          logouted();
          navigation(routes.login, { replace: true });
        }}
      >
        Выйти
      </button>
    </aside>
  );
}
