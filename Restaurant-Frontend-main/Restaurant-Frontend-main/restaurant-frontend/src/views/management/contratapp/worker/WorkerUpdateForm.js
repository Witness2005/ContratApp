import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CForm, CCol, CFormInput, CButton } from '@coreui/react';
import Axios from 'axios';

const WorkerUpdateForm = () => {
    const { workerId } = useParams(); 
    const [workerData, setWorkerData] = useState({
        workername: '',
        email: '',
        password: '',
        phonenumber: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        const getWorker = async () => { 
            try {
                const response = await Axios.get(`http://localhost:1337/api/getWorker/${workerId}`);
                const worker = response.data.data;
                setWorkerData(worker);
            } catch (error) {
                console.error(error);
            }
        };

        getWorker();
    }, [workerId]); 

    const handleChange = (event) => {
        const { name, value } = event.target;
        setWorkerData({
            ...workerData,
            [name]: value
        });
    };

    const handleReturn = () => {
        
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await Axios.put(`http://localhost:1337/api/updateWorker/${workerId}`, workerData);
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

export default WorkerUpdateForm;
