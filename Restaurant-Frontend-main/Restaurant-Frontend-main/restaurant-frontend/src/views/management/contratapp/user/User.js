
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
  const [restaurantData, setRestaurantData] = useState([]);
  function handleCreateUser (event){
  useEffect(()=>{
    const getUsers = async() =>{
      const response = await Axios ({
        url: ''
      });


    }


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
      </CTable>
    </div>
  )
}

export default User
