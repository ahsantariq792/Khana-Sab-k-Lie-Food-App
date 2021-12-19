import { addDoc, collection, query, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import './../../App.css';
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from "@mui/material/Button";
import { TextField } from '@mui/material';
import { Container } from '@mui/material';
import { db } from '../../Firebase'
import { getDocs } from "firebase/firestore"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {
  useHistory
} from "react-router-dom";
const admin = collection(db, "admin")
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









function Login() {

  let history = useHistory();

  const [login, setlogin] = useState([])


  async function submit(values) {
    console.log("values", values)
  
    const auth = getAuth();
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("user loginned")
        history.push("/dashboard") 
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  




  useEffect(() => {

    const getData = async () => {
      const querySnapshot = await getDocs(admin);
      let data = []
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        data.push(doc.data())
      });
      setlogin(data)
    }
    getData()

    return () => {
      console.log("cleanup")
    };
  }, []);







  //getting data in object
  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: submit
  }, 
  );


  return (
    <>
      <Container>
        <div className="webadmin">
          <h1>Web Admin</h1>
          <br />
          <div className="adminlogin">

            <form onSubmit={formik.handleSubmit}>

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

              <br />
              <br />

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
              <br />
              <br />
              <Button id="btn" variant="contained" color="primary" type="submit">
                submit
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Login;