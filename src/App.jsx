import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import { initGA, pageView } from "./utils/analytics";

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    pageView(location.pathname + location.search);
  }, [location]);

  return null;
}

function App() {
  return (
    <>
      <AnalyticsTracker />
      <AppRoutes />
    </>
  );
}

export default App;