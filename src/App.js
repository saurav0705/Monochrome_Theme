import React,{useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
// import data from './test.json';
import {URL} from './service';
import LoadingData from './components/LoadingData/LoadingData';
// import { MdNextWeek } from 'react-icons/md';

function App() {
  const [data,setData] = useState('');
  const [loading,setLoading] = useState(0);
  useEffect(()=>{
    setInterval(()=> setLoading(loading => {if(loading=== 100){return 100;}else{ return loading+1}}),100);
    fetch(URL)
    .then(resp => resp.json())
    .then(resp => {setData(resp)}).catch(err => setData({"error":err}))

    
  },[])
  return (
    <div className="App">
      {data.length !== 0 ?
        <>
      <Header/>
      <Content data={data}/></>:<LoadingData loading={loading}/>}
    </div>
  );
}

export default App;
