/*
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import {
  CButton,
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableDataCell,
  CTableHeaderCell
  
} from '@coreui/react'
import { DocsExample } from 'src/components'
import { Title } from 'chart.js'

const User = () => {
  const [userData, setUserData] = useState([]);
  function handleCreateUser (event){
  useEffect(()=>{
    const getUsers = async() =>{
      const response = await Axios ({
        url: 'http://localhost:1337/api/listusers'
      });
      const lstUsers= Object.keys(response.data).map(i=> response.data[i])
      setUserData(lstUsers.flat());


    }
    getUsers();


  },[]);


  }
  const columns = [
    {
      title: 'ID',
      dataIndex: 'userId'
    },
    {
      title: 'Name',
      dataIndex: 'username'
    },
    {
      title: 'Email',
      dataIndex: 'email'
    },
    {
      title: 'Phone Number',
      dataIndex: 'phonenumber'
    },
  ]
  return (
    <div>
      <CButton> ¡New User!</CButton>
      <CTable responsive>
        <CTableHead>
          <CTableRow>
            {columns.map((columns, index) => (
              <CTableHeaderCell key ={index}>{columns.title}</CTableHeaderCell>

            ))
            }
          </CTableRow>

        </CTableHead>
        <CTableBody>
          {userData.map((user, index) => (
            <CTableRow key={index}>
              {columns.map((columns, columnIndex) => (
                <CTableDataCell key={columnIndex}> {user[columns.dataIndex]}</CTableDataCell>
              ))}
            </CTableRow>


          ))}
        </CTableBody>
      </CTable>
    </div>
  )
}

export default User
*/
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


const User = () => {

  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const getUsers = async() =>{
      const response = await Axios({
        url: 'http://localhost:1337/api/listusers'
      });
      console.log(response.data); // Log the response data

      const lstUsers = Object.keys(response.data).map(i=> response.data[i]);
      setUserData(lstUsers.flat());
    }

    getUsers();
  },[]);
  function handleCreateUser(event){
    navigate('/contratapp/userform');
  }

  function handleEdit(restaurantId) {
    // Lógica para editar el restaurante
    console.log('Editar restaurante con ID:', restaurantId);
  }

  function handleDelete(restaurantId) {
    
    console.log('Eliminar restaurante con ID:', restaurantId);
  }


  return (
    <div>
            <CButton onClick={handleCreateUser} > New Restaurant </CButton>

      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell>User id</CTableHeaderCell>
            <CTableHeaderCell>Name</CTableHeaderCell>
            <CTableHeaderCell>Email</CTableHeaderCell>
            <CTableHeaderCell>Phone Number</CTableHeaderCell>
            <CTableHeaderCell>Options</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
            {userData.map((user, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{user.userId}</CTableDataCell>
                <CTableDataCell>{user.username}</CTableDataCell>
                <CTableDataCell>{user.email}</CTableDataCell>
                <CTableDataCell>{user.phonenumber}</CTableDataCell>
                <CTableDataCell>
                <CButton onClick={() => handleEdit(restaurant.id)} color="primary" size="sm">Edit</CButton>{' '}
                  <CButton onClick={() => handleDelete(restaurant.id)} color="danger" size="sm">Delete</CButton>
                </CTableDataCell>
              </CTableRow>
            ))}
        </CTableBody>
      </CTable>
    </div>
  )
}

export default User
