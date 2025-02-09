import { createContext, useState } from "react";

export const Maindata = createContext();
function Dataprovider({ children }) {
  const { data, setdata } = useState(0);

  return (
    <Maindata.Provider value={{ data, setdata }}>{children}</Maindata.Provider>
  );
}

export default Dataprovider;
