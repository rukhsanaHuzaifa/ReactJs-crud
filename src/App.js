import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetDetails from "./Components/GetDetails";
import Add from "./Components/Add";

import UpdateDetails from "./Components/UpdateDetails";
import StudentDetail from "./Components/StudentDetail";

function App() {
  return (
    <div className="text-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetDetails />} />
          <Route path="/add-students" element={<Add />} />

          <Route path="/edit-students/:studentid" element={<UpdateDetails />} />
          <Route
            path="/student-details/:studentid"
            element={<StudentDetail />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
