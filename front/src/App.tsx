import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/context/AuthProvider";
import HomePage from "./components/Homepage";
import Page1 from "./components/Page1";
import { ProctedLayout } from "./components/ProctedLayout";
import Resgister from "./components/Resgister";
import SingInUser from "./components/SignInUser";
import SingInEmployees from "./components/SingInEmployees";
import Logout from "./components/Logout";
import "./Style.css";
import SecretaryList from "./components/SecretaryList";
import PatientList from "./components/PatientList";
import AttendanceList from "./components/AttendanceList";
import { TetAdmin } from "./components/TetAdmin";
import EditAttendance from "./components/EditAttendance";
import CreateAttendance from "./components/CreateAttendance";
import ListDoctors from "./components/ListDoctors";
import { TetDoctor } from "./components/TetDoctor";
import CreateDoctor from "./components/CreateDoctor";
import CreateSecretary from "./components/CreateSecretary";
import { TetSecretary } from "./components/TetSecretary";


const APP = () => {
  
  return (
    <>
      <AuthProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/register" element={<Resgister />} />
            <Route path="/sign" element={<SingInUser />} />
            <Route path="/sign/employee" element={<SingInEmployees />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/secretary" element={
              <TetAdmin>
                <SecretaryList />
              </TetAdmin>
            } />
            <Route path="/patient" element={
              <ProctedLayout>
                <PatientList />
              </ProctedLayout>
            } />
            <Route path="/attendance" element={
              <ProctedLayout>
                <AttendanceList />
              </ProctedLayout>
            } />
            <Route path="/attendance/edit/:id" element={
              <TetSecretary>
                <EditAttendance />
              </TetSecretary>
            } />
            <Route path="/attendance/create/:id" element={
              <TetDoctor>
                <CreateAttendance />
              </TetDoctor>
            } />
            <Route path="/doctors" element={
              <TetAdmin>
                <ListDoctors />
              </TetAdmin>
            } />
            <Route path="/doctor/create" element={
              <TetAdmin>
                <CreateDoctor />
              </TetAdmin>
            } />
            <Route path="/secretary/create" element={
              <TetAdmin>
                <CreateSecretary />
              </TetAdmin>
            } />
            
          </Routes>
      </AuthProvider>
    </>
  );
}

export default APP;