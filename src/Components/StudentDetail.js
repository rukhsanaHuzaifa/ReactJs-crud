import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const StudentDetail = () => {
  const { studentid } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    // const item = { name, number, email, password, active };
    fetch("http://localhost:8000/student/" + studentid)
      .then((res) => res.json())
      .then((resp) => setData(resp))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div>
      <h2 className="text-danger">Student Details:</h2>
      <div className="container border">
        {data && (
          <div>
            <p className="border-bottom">
              student name is<b> {data.name}</b> and id is <b>({data.id})</b>
            </p>
            <h4 className="border-bottom text-primary">Contact Info:</h4>
            <h6 className="border-bottom">Email: {data.email}</h6>
            <h6 className="border-bottom">Mobile Number: {data.number}</h6>
            <Link to="/" className="btn btn-danger mt-3 mb-3">
              BACK TO STUDENT DETAILS LIST
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDetail;
