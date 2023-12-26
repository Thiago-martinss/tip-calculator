export default function Bill({ children, bill, onSetBill }) {
  return (
    <div>
      <label>{children}</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}
