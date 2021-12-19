import { collection, onSnapshot, doc, setDoc, db, getAuth, createUserWithEmailAndPassword, } from "./../../Firebase";
import './../../App.css';
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from "@mui/material/Button";
import { TextField } from '@mui/material';
import { Container } from '@mui/material';
import AdminNavbar from "../Navbar/AdminNavbar";


import {
    useHistory
} from "react-router-dom";


const validationSchema = yup.object({
    email: yup
        .string('Enter your item')
        .min(3, 'item should be of minimum 3 characters length')
        .required('item is required'),

    password: yup
        .string('Enter your item')
        .min(3, 'item should be of minimum 3 characters length')
        .required('No password provided.')
});









function Addmanager() {

    async function submit(values) {
        console.log("values", values)

        try {
            let auth = getAuth()

            let { user } = await createUserWithEmailAndPassword(auth, values.email, values.password);

            let dataRef = doc(db, 'Branch Manager', user.uid)

            await setDoc(dataRef, {
                name: values.name,
                email: user.email,
                password: values.password,
                branch: values.branch,
                uid: user.uid,
            });

        } catch (err) {
            console.log(err.message)
        }

    }










    //getting data in object
    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: {
            name: '',
            email: '',
            password: '',
            branch: ''
        },
        onSubmit: submit
    },
    );


    return (
        <>
            <AdminNavbar />
            <Container>
                <div className="webadmin">
                    <div className="adminlogin">
                        <h2 ><i>Add Branch Manager</i></h2>

                        <form onSubmit={formik.handleSubmit}>

                            <TextField
                                id="outlined-basic"
                                name="name"
                                label="name"
                                className="box"
                                value={formik.values.name}
                                onChange={formik.handleChange}

                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                                variant="outlined" />

                            

                            <TextField
                                id="outlined-basic"
                                name="email"
                                label="email"
                                className="box"
                                value={formik.values.email}
                                onChange={formik.handleChange}

                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                                variant="outlined" />
                            


                            <TextField
                                id="outlined-basic"
                                name="password"
                                label="password"
                                className="box"
                                value={formik.values.password}
                                onChange={formik.handleChange}

                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                                variant="outlined" />

                        


                            <TextField
                                id="outlined-basic"
                                name="branch"
                                label="branch location"
                                className="box"
                                value={formik.values.branch}
                                onChange={formik.handleChange}

                                error={formik.touched.branch && Boolean(formik.errors.branch)}
                                helperText={formik.touched.branch && formik.errors.branch}
                                variant="outlined" />

                            <Button id="btn" variant="contained" color="primary" type="submit">
                                Add Branch Manger
                            </Button>
                        </form>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Addmanager;