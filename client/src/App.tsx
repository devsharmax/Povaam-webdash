import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource/inter";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Trips from "./pages/Trips";
import Users from "./pages/Users";
import Reports from "./pages/Reports";
import NotFound from "./pages/not-found";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="trips" element={<Trips />} />
          <Route path="users" element={<Users />} />
          <Route path="reports" element={<Reports />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
