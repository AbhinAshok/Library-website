import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGA, pageView } from "./utils/analytics";

function App() {
  return <AppRoutes />;
}

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    pageView(location.pathname);
  }, [location]);

  return null;
}

export default App;