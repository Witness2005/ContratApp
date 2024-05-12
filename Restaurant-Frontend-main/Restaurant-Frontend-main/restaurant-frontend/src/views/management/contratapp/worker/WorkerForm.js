import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import {
    CForm,
    CCol,
    CFormInput,
    CButton
} from '@coreui/react';

const WorkerForm = () => {
    const [workerData, setWorkerData] = useState({
        workername: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setWorkerData({
            ...workerData,
            [name]: value
        });
    };

    const handleReturn = () => {
        navigate('/contratapp/workerform');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await Axios.post('http://localhost:1337/api/createworker', workerData);
            console.log(response.data);
            alert(`"${workerData.workername}" has been saved successfully!`);
            navigate('/contratapp/worker');
        } catch (error) {
            console.error(error);
        }
    };

    const handleCancel = () => {
        const confirmCancel = window.confirm("Are you sure you want to cancel? The worker won't be added.");
        if (confirmCancel) {
            handleReturn();
        }
    };

    return (
        <CForm className="row g-3" onSubmit={handleSubmit}>
            <CCol md={12}>
                <CFormInput type="text" id="username" name="username" label="username" value={workerData.username} onChange={handleChange} />
            </CCol>
            <CCol md={12}>
                <CFormInput type="email" id="email" name="email" label="Email" value={workerData.email} onChange={handleChange} />
            </CCol>
            <CCol md={12}>
                <CFormInput type="password" id="password" name="password" label="Password" value={workerData.password} onChange={handleChange} />
            </CCol>
            <CCol xs={6}>
                <CButton color="primary" type="submit">Save</CButton>
            </CCol>
            <CCol xs={6}>
                <CButton color="secondary" onClick={handleCancel}>Cancel</CButton>
            </CCol>
        </CForm>
    );
};

export default WorkerForm;
