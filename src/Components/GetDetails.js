import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GetDetails = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/add-students");
  };
  const editFunction = (id) => {
    navigate("/edit-students/" + id);
  };
  const deleteFunction = (id) => {
    if (window.confirm("Do you want to delete?")) {
      fetch(`http://localhost:8000/student/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully!");
          window.location.reload();
        })
        .catch((error) => console.log(error.message));
    }
  };
  const detailsFunction = (id) => {
    navigate("/student-details/" + id);
  };
  useEffect(() => {
    // const item = { name, number, email, password, active };
    fetch("http://localhost:8000/student")
      .then((res) => res.json())
      .then((resp) => setData(resp))
      .catch((err) => err.message);
  }, []);
  return (
    <div>
      <h2 className="mt-3 mb-4 fw-bold pt-3 pb-3 bg-dark text-light ">
        React JS CRUD Operations:
      </h2>
      <div className="card">
        <div className="card-tittle fw-bold mt-3">STUDENT DETAILS LIST</div>
        <div className="card-body">
          <button onClick={handleClick} className="btn btn-success ">
            Add(+)
          </button>
          <table className="table table-borders">
            <thead>
              <tr>
                <td>id</td>
                <td>Name</td>
                <td>Phone Number</td>
                <td>Email Adress</td>
                <td>Password</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.number}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>

                    <td>
                      <button
                        onClick={() => editFunction(item.id)}
                        className="btn btn-warning"
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => deleteFunction(item.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => detailsFunction(item.id)}
                        className="btn btn-primary"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GetDetails;
