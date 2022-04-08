import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import "./Login.css";
import "./Signup.css";
import Hello from "./hello";
import { PrivateRoute } from "./components/privateRoute";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/hello" element={<PrivateRoute>
              <Hello />
            </PrivateRoute>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
