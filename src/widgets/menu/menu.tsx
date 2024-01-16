import classNames from "classnames";

export default function Menu({ isMenuOpen }: { isMenuOpen: boolean }) {
  return (
    <aside
      className={classNames("h-full bg-block transition-width", {
        "w-side-menu": isMenuOpen,
        "w-side-menu-closed": !isMenuOpen,
      })}
    ></aside>
  );
}
