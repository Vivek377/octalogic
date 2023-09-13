const OverviewCard = ({ ele }) => {
  return (
    <div>
      <div
        key={ele.message}
        style={{
          boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
          lineHeight: "1rem",
          padding: "2rem",
          borderRadius: "10px",
        }}
      >
        <div>
          <h3>{ele.number}</h3>
        </div>
        <div>{ele.message}</div>
      </div>
    </div>
  );
};

export default OverviewCard;
