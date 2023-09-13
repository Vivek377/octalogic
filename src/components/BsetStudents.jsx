const BestStudents = ({ best }) => {
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
            <th style={{ width: "10rem" }}>Reg. No.</th>
            <th style={{ width: "10rem" }}>F. Name</th>
            <th style={{ width: "10rem" }}>L. Name</th>
            <th style={{ width: "10rem" }}>Course #</th>
            <th style={{ width: "10rem" }}>Total Fees</th>
            <th style={{ width: "10rem" }}>Reg. Date</th>
          </tr>
        </thead>
        <tbody>
          {best.map((ele) => {
            return (
              <tr key={ele.registrationNo}>
                <td>{ele.registrationNo}</td>
                <td>{ele.firstName}</td>
                <td>{ele.lastName}</td>
                <td>{ele.courseNumber}</td>
                <td>{ele.totalFees}</td>
                <td>{ele.registrationDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BestStudents;
