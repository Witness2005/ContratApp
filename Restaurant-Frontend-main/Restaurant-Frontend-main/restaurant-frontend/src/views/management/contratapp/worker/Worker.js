import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import {
  CButton,
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell
} from '@coreui/react';

const Worker = () => {

    const [workerData, setWorkerData] = useState([]);
    const navigate = useNavigate();
  
    useEffect(()=>{
      const getWorkers = async() =>{
        const response = await Axios({
          url: 'http://localhost:1337/api/listworkers'
        });
        console.log(response.data); 
  
        const listWorkers = Object.keys(response.data).map(i=> response.data[i]);
        setWorkerData(listWorkers.flat());
      }
  
      getWorkers();
    },[]);
    function handleCreateWorker(event){
      navigate('/contratapp/workerform');
    }
  
    function handleEdit(workerId) {
      navigate(`/contratapp/workerupdateform/${workerId}`);
  
  
      console.log('Editar worker con ID:', workerId);
    }
  
  
    const handleDisable = async (workerId) => {
      try {
        const url = `http://localhost:1337/api/disableWorker/${workerId}`;
        await Axios.put(url);
    
        
        setWorkerData(prevData => prevData.map(worker => {
          if (worker.workerId === workerId) {
            return { ...worker, disabled: true }; 
          }
          return worker;
          
        })); 
        window.location.reload();
  
      }
       catch (error) {
        console.log('Error al deshabilitar el usuario con ID:', workerId);
        console.error(error);
      }
    };
    
  
    return (
      <div>
              <CButton onClick={handleCreateWorker} > New Worker </CButton>
  
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>Worker id</CTableHeaderCell>
              <CTableHeaderCell>Name</CTableHeaderCell>
              <CTableHeaderCell>Email</CTableHeaderCell>

              <CTableHeaderCell>Options</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
              {workerData.map((worker, index) => (
                <CTableRow key={index}>
                  <CTableDataCell>{worker.workerId}</CTableDataCell>
                  <CTableDataCell>{worker.username}</CTableDataCell>
                  <CTableDataCell>{worker.email}</CTableDataCell>
                  <CTableDataCell>
                  <CButton onClick={() => handleEdit(worker.workerId)} color="primary" size="sm">Edit</CButton>{' '}
                  <CButton onClick={() => handleDisable(worker.workerId)} color="danger" size="sm">Delete</CButton>
                  </CTableDataCell>
                </CTableRow>
              ))}
          </CTableBody>
        </CTable>
      </div>
    )
  }
  
  export default Worker
  