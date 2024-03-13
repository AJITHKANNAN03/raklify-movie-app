import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import "./slider.css";

export default function Slider(moviesdata) {

  return (
    <>
    <Carousel>
      {
      moviesdata.data.map((itemData, i) => {
          if(itemData.id==1||itemData.id==5||itemData.id==7||itemData.id==9||itemData.id==11||itemData.id==15){
          return(
            <Carousel.Item>
            <img
            className="d-block w-100"
            src={itemData.thumb}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>{itemData.title}</h1>
            <p>{itemData.des}</p>
            <button><a href={itemData.video} target="_blank" style={{all:"unset"}}>PLAY</a></button>
            <button>WATCH LATER</button>
          </Carousel.Caption>
          </Carousel.Item>
          )  
          }
        })
      }
    </Carousel>
          </>
          )
}
