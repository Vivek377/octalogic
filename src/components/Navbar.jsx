import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          //   borderRight: "2px solid black",
          width: "50%",
          height: "100vh",
          padding: "2rem",
          boxShadow:
            "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
        }}
      >
        <div>
          <img
            style={{ width: "38px" }}
            src="https://octalogic.in/images/logos/octalogic.svg"
            alt=""
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <NavLink
              style={({ isActive }) => ({
                padding: "0.3rem",
                textDecoration: "none",
                borderBottom: isActive
                  ? "2px solid #2F855A"
                  : "2px solid transparent",
              })}
              to={"/"}
            >
              Home
            </NavLink>
          </div>
          <div>
            <NavLink
              style={({ isActive }) => ({
                padding: "0.3rem",
                textDecoration: "none",
                borderBottom: isActive
                  ? "2px solid #2F855A"
                  : "2px solid transparent",
              })}
              to={"/courses"}
            >
              Courses
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
