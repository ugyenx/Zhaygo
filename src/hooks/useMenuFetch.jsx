import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";
const useMenuFetch = (resId) => {
  const [restInfo, setrestInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setrestInfo(json.data);
    console.log(json);
  };
  return restInfo;
};

export default useMenuFetch;
