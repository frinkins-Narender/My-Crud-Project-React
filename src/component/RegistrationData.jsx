import axios from "axios";
import React, { useState, useEffect } from "react";
import RegisterationForm from "./RegisterationForm";

const RegistrationData = () => {
  const [studentData, setStudentData] = useState();
  const [toggle, setToggle] = useState(true);
  const [FetchApi, setFetchApi] = useState(false)

  
  useEffect(() => {
    axios
      .get("http://localhost:3200/student")
      .then((res) => {
        console.log("response from get Api", res);
        setStudentData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [toggle, FetchApi]);

  const handleDelete = (data)=> {
    const id = data.id
    console.log("inside delete function", data);
    axios.delete("http://localhost:3200/student/" + id).then((res)=> {
      console.log(res)
      setFetchApi(!FetchApi);
    }).then((error)=> {
      console.log("error fetch data not found", error);
    })
  }


  return (
    <>
      <button className="btn btn-primary btn-md my-2" onClick={()=>setToggle(!toggle)}>{toggle? "View Student" : "Add Student"}</button>
      {toggle && toggle ? 
        <RegisterationForm setToggle={setToggle}/>
       : 
        <div className="container-wrapper">
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th scope="col">#Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact</th>
                <th scope="col">Password</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              {studentData?.map((element) => {
                return (
                  <tr key={element.id}>
                    <td>{element.id}</td>
                    <td>{element.name}</td>
                    <td>{element.email}</td>
                    <td>{element.contact}</td>
                    <td>{element.password}</td>
                    <td><button className="btn btn-danger" onClick={()=> handleDelete(element)}>Delete</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      }
    </>
  );
};

export default RegistrationData;
