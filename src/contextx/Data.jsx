import { createContext, useContext, useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";

export const Maindata = createContext();
function Dataprovider({ children }) {
  const gifmaindata = new GiphyFetch(import.meta.env.VITE_APIKEY);
  let [gif, setgif] = useState([]);
  let [favourate, setfavourate] = useState([]);
  let [filter, setfilter] = useState("");
  let [laststate, setlaststate] = useState("");
  let [view, setview] = useState({
    url: "https://media3.giphy.com/media/v1.Y2lkPTA2N2YyODc4czZpcHFxbGhjbjR2c3N1ZmVhcGpodTcxN2V5d283aWFrNzBnMm80dyZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/ZOwljDSMNr1rV76DMc/200w.gif",
    name: false,
    cat: false,
  }); //ye jaha valu sav kr raha hu

  return (
    <Maindata.Provider
      value={{
        gifmaindata,
        gif,
        setgif,
        filter,
        setfilter,
        favourate,
        setfavourate,
        view,
        setview, //pass kiya
        setlaststate,
        laststate,
      }}
    >
      {children}
    </Maindata.Provider>
  );
}
export const Gifstate = () => {
  return useContext(Maindata);
};

export default Dataprovider;
