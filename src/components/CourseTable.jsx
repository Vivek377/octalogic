const CourseTable = ({ data }) => {
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
            <th style={{ width: "10rem" }}>Name</th>
            <th style={{ width: "10rem" }}>Description</th>
            <th style={{ width: "10rem" }}>Instructor</th>
            <th style={{ width: "10rem" }}>Instrument</th>
            <th style={{ width: "10rem" }}>Day of Week</th>
            <th style={{ width: "10rem" }}># of Students</th>
            <th style={{ width: "10rem" }}>Price</th>
            <th style={{ width: "10rem" }}>Status</th>
            <th style={{ width: "10rem" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele) => {
            return (
              <tr key={ele.courseName}>
                <td>{ele.courseName}</td>
                <td>{ele.description}</td>
                <td>{ele.instructor}</td>
                <td>{ele.instrument}</td>
                <td>{ele.dayOfWeek}</td>
                <td>{ele.numberOfStudents}</td>
                <td>{ele.price}</td>
                <td>{ele.status}</td>
                <td>:</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;
