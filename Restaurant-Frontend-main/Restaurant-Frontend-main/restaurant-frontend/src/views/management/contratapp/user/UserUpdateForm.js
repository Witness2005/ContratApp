import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CForm, CCol, CFormInput, CButton } from '@coreui/react';
import Axios from 'axios';

const UserUpdateForm = () => {
    const { userId } = useParams(); 
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        phonenumber: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        const getUser = async () => { 
            try {
                const response = await Axios.get(`http://localhost:1337/api/getUser/${userId}`);
                const user = response.data.data;
                setUserData(user);
            } catch (error) {
                console.error(error);
            }
        };

        getUser();
    }, [userId]); 

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleReturn = () => {
        navigate('/contratapp/user');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await Axios.put(`http://localhost:1337/api/updateUser/${userId}`, userData);
            console.log(response.data);
            alert(`"${userData.username}" has been saved successfully!`);
            navigate('/contratapp/user');
        } catch (error) {
            console.error(error);
        }
    };

    const handleCancel = () => {
        const confirmCancel = window.confirm("Are you sure you want to cancel? The user won't be added.");
        if (confirmCancel) {
            handleReturn();
        }
    };

    return (
        <CForm className="row g-3" onSubmit={handleSubmit}>
            <CCol md={12}>
                <CFormInput type="text" id="username" name="username" label="Username" value={userData.username} onChange={handleChange} />
            </CCol>
            <CCol md={12}>
                <CFormInput type="email" id="email" name="email" label="Email" value={userData.email} onChange={handleChange} />
            </CCol>
            <CCol md={12}>
                <CFormInput type="password" id="password" name="password" label="Password" value={userData.password} onChange={handleChange} />
            </CCol>
            <CCol md={12}>
                <CFormInput type="tel" id="phonenumber" name="phonenumber" label="Phone Number" value={userData.phonenumber} onChange={handleChange} />
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

export default UserUpdateForm;
