import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import { CursorProvider } from "./components/CursorContext";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading period (e.g., data fetching)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <CursorProvider>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* Hide the default cursor */}
          <style>{`body { cursor: none; }`}</style>
          <CustomCursor />
          <Header />
          <div className="pt-16">
            <Home />
          </div>
        </>
      )}
    </CursorProvider>
  );
}

export default App;
