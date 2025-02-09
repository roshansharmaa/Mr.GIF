import React, { useContext } from 'react'
import Maincomp from '../component/Maincomp'
import { Maindata } from '../contextx/Data';

function Serch() {
  const { data, setdata } = useContext(Maindata);
  let demo = () => {
    let num = Math.floor(Math.random() * 5);
    return num;
  };
   
   const handleclick = () => {
     setdata(prev => prev + 1); 
   };
 
  console.log(demo());
  let imgs = [
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
    `https://picsum.photos/${demo()}00/${demo()}00.jpg`,
  ];
  return (
<>
<Maincomp imgs={imgs} />

</>
  )
}

export default Serch