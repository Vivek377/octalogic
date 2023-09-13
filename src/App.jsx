// import "./App.css";
import Navbar from "./components/Navbar";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "3rem",
          fontFamily:
            "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
        }}
      >
        <Navbar />
        <AllRoutes />
      </div>
    </>
  );
}

export default App;
