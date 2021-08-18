const Income = ({ data }) => {
  return (
    <div>
      <h2>Incomes</h2>
      {data.map((el) => (
        <p key={el}>{el}</p>
      ))}
    </div>
  );
};

export default Income;
