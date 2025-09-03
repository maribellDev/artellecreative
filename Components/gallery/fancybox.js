import { useEffect } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

function Fancybox({ children, delegate = "[data-fancybox]", options = {} }) {
  useEffect(() => {
    NativeFancybox.bind(delegate, options);

    return () => {
      NativeFancybox.destroy();
    };
  }, [delegate, options]);

  return <>{children}</>;
}

export default Fancybox;
