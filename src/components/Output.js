export default function Output({ bill, onReset, tip }) {
  return (
    <div>
      <h2>
        You Pay ${bill + tip} (${bill} + ${tip} tip){' '}
      </h2>
    </div>
  );
}
