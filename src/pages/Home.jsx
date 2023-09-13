import { useEffect, useState } from "react";
import OverviewCard from "../components/OverviewCard";
import Table from "../components/Table";
import recent from "../data/recent";
import axios from "axios";
import BestStudents from "../components/BsetStudents";

const Home = () => {
  const [data, setData] = useState([]);
  const [best, setBest] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/students`)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));

    axios
      .get(`http://localhost:3000/bestStudents`)
      .then((res) => setBest(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <div>
        <h2>Overview</h2>
      </div>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "3rem" }}>
        {recent.map((ele) => {
          return <OverviewCard key={ele.message} ele={ele} />;
        })}
      </div>

      <div>
        <h3>LATEST ENROLMENTS</h3>
      </div>

      <div style={{ marginBottom: "3rem" }}>
        <Table data={data} />
      </div>

      <div style={{ marginBottom: "3rem" }}>
        <BestStudents best={best} />
      </div>
    </div>
  );
};

export default Home;
