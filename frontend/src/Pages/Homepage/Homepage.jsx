
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



    useEffect(() => {
        dispatch(userInfoFetched(JSON.parse(localStorage.getItem("UserData"))));
    }, []);
    return (
        <h2>Here is the homepage</h2>
     )
}

export default Homepage;