import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b289e47fba54a5b7e9eac4.mockapi.io/";

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
    try {
        const response = await axios.get('contacts');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue('Error fetching data!');
    }

});


export const fetchNewContact = createAsyncThunk('contacts/fetchNewContact', async (newContact, thunkAPI) => {
    try {
        const response = await axios.post('contacts', newContact);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue('Error fetching data!');
    }

});


export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
    try {
        const response = await axios.delete(`contacts/${id}`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue('Error fetching data!');
    }

});

