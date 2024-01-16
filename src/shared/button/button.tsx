import { ButtonHTMLAttributes } from "react";
import _ from "lodash";
import LoadingIcon from "./assets/loading.png";
import classNames from "classnames";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  throttleTime?: number;
};

export default function Button(p: Props) {
  const { loading, throttleTime, onClick, ...buttonProps } = p;
  const onClickHandler = _.throttle(
    (event) => onClick?.(event),
    throttleTime || 0
  );

  return (
    <button
      className={classNames(
        "w-full h-10 bg-c-green hover:bg-c-green-light transition-colors text-white rounded-md flex justify-center items-center",
        {
          "opacity-75": loading || buttonProps.disabled,
        }
      )}
      onClick={onClickHandler}
      {...buttonProps}
    >
      {loading ? (
        <img src={LoadingIcon} alt="loading" className="w-5 h-5 animate-spin" />
      ) : (
        <>{buttonProps.children}</>
      )}
    </button>
  );
}
