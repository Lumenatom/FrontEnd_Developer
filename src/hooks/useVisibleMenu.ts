import { useState } from "react";

const useVisibleMenu = () => {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false);

  const handlerVisibleMenu = (e: boolean): void => {
    setVisibleMenu(e);
  };

  return {
    visibleMenu,
    handlerVisibleMenu,
  };
};

export default useVisibleMenu;
