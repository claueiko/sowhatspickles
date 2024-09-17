import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
import EventsListPage from "./Pages/EventsListPage";
import EventPage from "./Pages/EventPage";
import "./App.css";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeTemplate />} />
          <Route path="events" element={<EventsListPage />} />
          <Route path="events/:id" element={<EventPage />} />
          <Route path="error" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} /> 
          {/* claudia to add 404 page */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
