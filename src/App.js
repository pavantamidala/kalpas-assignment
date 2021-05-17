import React,{useState} from 'react'
import './App.css';
import Content from './components/content/content'
import useFetch from './hooks/useFetch';
import {Modal,Button} from 'react-bootstrap'

function App() {
  const [listView,setListView] = useState(true)
  const [offset,setOffSet] = useState(0)
  const [data, setData] = useState([])
  const [activePage,setActivePage] = useState(1)
  return (
    <div className="App">
    <Content listView={listView} setListView = {setListView} offset={offset} setOffSet={setOffSet} data={data} setData={setData} />
   
    
    </div>
  );
}

export default App;
