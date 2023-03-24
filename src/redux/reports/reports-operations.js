import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getDataTransaction = createAsyncThunk(
    'getTranzaction/curentData',
    async date => {
        setAuthHeader("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDYyZTc1ZjFkZWJhZDQ4ZmU1NGZlMzciLCJzaWQiOiI2NDFjZmNjYmViMDNiYjNkOTg2M2Q5MjciLCJpYXQiOjE2Nzk2MjEzMjMsImV4cCI6MTY3OTYyNDkyM30.Yhbaa-mMJaBLGzddemcjR_lImmHNoI1cCknptYkpSjc");
        return await axios.get(`/transaction/period-data?date=${date}`);
    }
);


// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const getDataTransaction = createAsyncThunk(
//     'getTranzaction/curentData',
//     async date => {
//         console.log(date);
//         return await axios.get(`/transaction/period-data?date=${date}`);
//     }
// );

