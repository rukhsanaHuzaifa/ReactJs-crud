import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UpdateDetails = () => {
  const { studentid } = useParams();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState(true);
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // const item = { name, number, email, password, active };
    fetch(`http://localhost:8000/student/${studentid}`)
      .then((res) => res.json())
      .then((resp) => {
        setId(resp.id);
        setName(resp.name);
        setNumber(resp.number);
        setEmail(resp.email);
        setPassword(resp.password);
        setActive(resp.active);
      })
      .catch((err) => err.message);
  }, [studentid]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { id, name, number, email, password, active };
    fetch("http://localhost:8000/student/" + studentid, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => {
        alert("saved successfully!!");
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="container text-left  ">
      <h2 className="mt-5 pb-3 border-bottom text-primary">
        Edit Students Details:
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputId" className="form-label">
            ID
          </label>
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            type="id"
            className="form-control"
            id="exampleInputId"
            aria-describedby="idHelp"
            disabled
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
            required
            value={name}
            onMouseDown={(e) => setValidation(true)}
            onChange={(e) => setName(e.target.value)}
            type="name"
            className="form-control"
            id="exampleInputName"
            aria-describedby="nameHelp"
          />
          {name.length === 0 && validation && (
            <span className="text-danger">Enter the name</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPhoneNumber" className="form-label">
            Phone Number
          </label>
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="name"
            className="form-control"
            id="exampleInputPhoneNumber"
            aria-describedby="phonenumberHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            checked={active}
            onChange={(e) => setActive(e.target.checked)}
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label " htmlFor="exampleCheck1">
            Is Active
          </label>
        </div>
        <button type="submit" className="btn btn-danger me-5">
          Save
        </button>
        <Link to="/">
          <button type="submit" className="btn btn-success">
            Back
          </button>
        </Link>
      </form>
    </div>
  );
};

export default UpdateDetails;
