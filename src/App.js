import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homework/Homework";
import PasswordPage from "./pages/PasswordForm/PasswordForm";
import RankTablePage from "./pages/RankTable/RankTable";
import TaskTablePage from "./pages/TaskTable/TaskTable";
import Profile from "./pages/Profile/Homepage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/password" element={<PasswordPage />} />
          <Route path="/rank" element={<RankTablePage />} />
          <Route path="/task" element={<TaskTablePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
