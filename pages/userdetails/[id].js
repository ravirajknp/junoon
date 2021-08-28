import React, { useEffect, useState } from 'react';
import { Popover } from '@material-ui/core';
import { Button } from '@material-ui/core';
import {Modal} from '@material-ui/core';

const UserDetails = ({ id }) => {

    const [popup, togglePopup] = useState(false);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3001/api/user/${id}`)
            .then(res => res.json())
            .then(res => setUserData(res)).catch(err => console.log(err))
    }, [])
    
    const togglePopupHandler = ()=> {
        togglePopup(!popup);
    }

    return (

        <div>
            <p>{userData.name}</p>
            <p>{userData.email}</p>
            <Button onClick={togglePopupHandler}>Edit</Button>
           {popup && <PopUpBox open ={popup}></PopUpBox>}
        </div >
    )
}

export default UserDetails;

export async function getServerSideProps({ params }) {
    console.log(params);
    return {
        props: {
            id: params.id,
        }
    }
}

const PopUpBox = ({}) =>{
    return (
        <div >
            hello
        </div> 
    )
}