import { RefObject, useLayoutEffect } from "react";

export interface OptProps {
  isDisabled?: boolean;
  onClick?: EventListener;
}

function useClickOutside(
  ref: RefObject<HTMLElement>,
  { isDisabled, onClick }: OptProps,
) {
  useLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mouseDownListener: EventListener = (e) => {
      if (onClick && !ref.current?.contains(e.target as Node)) {
        onClick(e);
      }
    };

    if (!isDisabled) {
      window.addEventListener("mousedown", mouseDownListener);
    }

    return () => {
      window.removeEventListener("mousedown", mouseDownListener);
    };
  }, [ref, onClick, isDisabled]);
}

export default useClickOutside;
