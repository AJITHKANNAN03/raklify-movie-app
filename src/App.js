import Navbar from "./navi-bar";
import Slider from "./slider";
import Later from "./later";
import Movies from "./movies";
import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  useEffect(() => {
    fetch("https://65dd6719e7edadead7edd580.mockapi.io/movie-app/movie-app", {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    }).then(tasks => {
      setData(tasks);
      setRecords(tasks);
    }).catch(error => {
      // handle error
    })
  }, [])
  const Filter = (searchData) => {
    setRecords(data.filter(f =>f.title.toLowerCase().includes(searchData)));
  }
  const SelectFilter = (selectdata) => {
    setRecords(data.filter(f => f.lang.toLowerCase().includes(selectdata)))
  }
  const handleBack = () => {
    setRecords(data);
  }

  return (
    <div id="app">
      <Slider data={data}/>
      <button onClick={handleBack} style={{ all: "unset", cursor: "pointer", color: "white", border: "2px solid white", padding: "5px 20px 5px 20px", margin: "10px 0px 0px 10px", borderRadius: "10px", position: "sticky", top: "150px", backgroundColor: "black" }}>BACK</button>
      <Movies data={data} records={records} />
      <BrowserRouter>
        <Navbar searchclick={Filter} selectclick={SelectFilter} />
        <Routes>
          {/* <Route path="/later" element={<Later/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
