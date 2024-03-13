import Popup from "./moviespop";
import "./movies.css";
import { useState } from "react";

export default function Movies(moviesdata) {
  // this is popup open close functionality to happened here,then here we pass the pop data 
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(true);
  const handleShow = (showpop) => {
    setShow(false);
    setpopdata(
      {
        title:showpop.title,
        des:showpop.des,
        video:showpop.video,
        thumb:showpop.thumb,
        lang:showpop.lang,
        id:showpop.id
      }
    )
  }
  const [popdata,setpopdata]=useState(
    {
      title:null,
      des:null,
      video:null,
      thumb:null,
      lang:null,
      id:null
    }
  );
  return (
    <>
      <h1>Trending on OTT</h1>
      <div>
        <div className="movie-list">
          {
        moviesdata.records.map((item,i) => {
            return (
            <img src={item.thumb} onClick={()=>handleShow(item)}/>
            )
          })
          }
        </div>
      </div>
      {show === false ? <Popup show={show} handleClose={handleClose} datapop={popdata} /> : null}
    </>

  )
}