const Table = ({ data }) => {
  return (
    <div>
      <table
        style={{
          gap: "3rem",
          textAlign: "center",
          boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
          padding: "2rem",
          borderRadius: ".5em",
        }}
      >
        <thead>
          <tr style={{ borderBottom: "1px solid black" }}>
            <th style={{ width: "10rem" }}>Enr. No.</th>
            <th style={{ width: "10rem" }}>S. Name</th>
            <th style={{ width: "10rem" }}>C. Name</th>
            <th style={{ width: "10rem" }}>Fees</th>
            <th style={{ width: "10rem" }}>Enr. Date.</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele) => {
            return (
              <tr key={ele.enrollmentNo}>
                <td>{ele.enrollmentNo}</td>
                <td>{ele.name}</td>
                <td>{ele.courseName}</td>
                <td>${ele.fees}</td>
                <td>{ele.enrollmentDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
