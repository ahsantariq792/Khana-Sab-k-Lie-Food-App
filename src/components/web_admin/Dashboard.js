// import { addDoc, collection, query, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { addDoc, collection, query, onSnapshot, doc, deleteDoc, getDoc, db } from "./../../Firebase";
import './../../App.css';
import React, { useEffect, useState } from 'react';
import { Card, Button } from "react-bootstrap";
import AdminNavbar from "../Navbar/AdminNavbar";


function Dashboard() {

  const [data, setData] = useState([])

  useEffect(() => {

    const q = query(collection(db, "Rashan"));
    const unsubscribe = onSnapshot(q, (snapshot) => {

      let temp = [];
      snapshot.forEach((doc) => {

        let id = doc.id;
        let data = doc.data();

        temp.unshift({
          id: id,
          name: data.name,
          email: data.email,
          fname: data.fname,
          dob: data.dob,
          rashan: data.rashan,
          income: data.income,
        });
      })
      setData(temp)
    });

    return () => {
      unsubscribe()
      console.log("unsub")
    };
  }, []);



  return (
    <>
      <AdminNavbar />
      <h1 id="title">Requests For Rashan</h1>

      <div className="requestcards">
        {data.map((eachUser, i) => {

          return (<div key={i}>

            <div id="cards">
              <Card style={{ width: '18rem' }}>
                <Card.Body>

                  <Card.Title >
                    {eachUser.rashan}
                  </Card.Title>

                  <Card.Text>
                    <p>name: {eachUser.name}</p>
                    <p>email: {eachUser.email}</p>

                    <p>  
                      father name:   
                    {eachUser.fname}
                    </p>
                    <p>
                      income:
                    {eachUser.income}

                    </p>
                  </Card.Text>
                  <div className="buttons">
                    <Button variant="success">Accept</Button>
                    <Button variant="danger">Reject</Button>
                  </div>
                </Card.Body>
              </Card>


            </div>
            <br />
          </div>)
        })}
      </div>

    </>

  )
}

export default Dashboard;   