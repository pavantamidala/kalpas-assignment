import React,{useState} from 'react'
import './App.css';
import Content from './components/content/content'
import useFetch from './hooks/useFetch';

function App() {
  const [listView,setListView] = useState(true)
  const [offset,setOffSet] = useState(0)
  const [data, setData] = useState([])
  
  return (
    <div className="App">
    <Content listView={listView} setListView = {setListView} offset={offset} data={data} setData={setData} />

    </div>
  );
}

export default App;
