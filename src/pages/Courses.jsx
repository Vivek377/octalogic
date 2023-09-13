import { useEffect, useState } from "react";
import CourseTable from "../components/CourseTable";
import axios from "axios";

const Courses = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(` http://localhost:3000/courses?q=${query}`)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, [query]);

  return (
    <div>
      <div style={{ marginBottom: "3rem" }}>
        <h2>Courses</h2>
      </div>
      <div
        style={{
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3>COURSE LIST</h3>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <CourseTable data={data} />
    </div>
  );
};

export default Courses;
