
import React, { useEffect, useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { userInfoFetched, userInfoLost } from '../../redux/authActions';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';

function Homepage(props) {
    const history = useNavigate();
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const [data, setData] = useState([]);

    const allProducts = async () => {
        getAllProduct().then(res => {
            setData(res.data);
        }).catch(err => {
            console.log("Error ", err);
        });
    }


    useEffect(() => {
        dispatch(userInfoFetched(JSON.parse(localStorage.getItem("UserData"))));
        allProducts();
    }, []);
    return (
        <h2>Here is the homepage</h2>
     )
}

export default Homepage;