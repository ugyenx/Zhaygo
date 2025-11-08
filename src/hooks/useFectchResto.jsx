import { useEffect, useState } from "react";
import { RESTO_API } from "../utils/constants";
const useFectchResto = () => {
  const [restInfo, setrestInfo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RESTO_API);
    const json = await data.json();
    setrestInfo(json);
  };
  return restInfo;
};

export default useFectchResto;
