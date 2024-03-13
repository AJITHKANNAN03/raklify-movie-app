import { FaRegWindowClose } from "react-icons/fa";
import './popup.css';


function MoviesPOP(popdata) { 
  return (
    <>
       <div className='popbody'>
        <div onClick={popdata.handleClose}><FaRegWindowClose/></div>
       <img src={popdata.datapop.thumb}></img>
       <h1>{popdata.datapop.title}</h1>
       <p>{popdata.datapop.des}</p>
      <a href={popdata.datapop.video}style={{all:"unset"}} target="_blank"><button onClick={popdata.handleClose}>PLAY</button></a>
      <button onClick={popdata.handleClose}>WATCH LATER</button>
       </div>
    </>
  );
}

export default MoviesPOP;