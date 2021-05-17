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
// function Example() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

export default App;
