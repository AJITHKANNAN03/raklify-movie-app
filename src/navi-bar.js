import React, { useState } from "react";
import "./navibar.css";
// import {Link} from "react-router-dom";
export default function Navbar(props) {
    const [search,setSearch]=useState("");
    const handlesearch=(e)=>{
        setSearch(e.target.value);
    }
    const handeleSelect=(e)=>{
        props.selectclick(e.target.value);
        }
    const handleClick=(e)=>{
     props.searchclick(search);
    }
    const handleDown=(e)=>{
        if(e.key==="Enter"){
            handleClick();
        }
        
    }
    return (
        <div className="navi">
            <div className="navi-left">
                <h1>RAKLIFY</h1>
                <div className="navi-right">
                    <input type="text" placeholder="search movies" className="search" onKeyDown={handleDown} onChange={handlesearch}/>
                    <button className="search-btn" onClick={handleClick}>SEARCH</button>
                </div>
            </div>
            <div className="navi-center">
                <select onChange={handeleSelect}>
                    <option value="all">ALL</option>
                    <option value="tamil">TAMIL</option>
                    <option value="telugu">TELUGU</option>
                    <option value="malayalam">MALAYALAM</option>
                    <option value="kanna">KANNADA</option>
                    <option value="hindi">HINDI</option>
                    <option value="english">ENGLISH</option>
                </select>
                {/* <a><Link to="/later">WATCH LATER</Link></a> */}
            </div>
        </div>
    );
}

