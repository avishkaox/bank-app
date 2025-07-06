import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: 'USD',
  }).format(value);
}

function BalanceDisplay() {
  const accountBalance = useSelector((store) => store.account.balance);
  console.log(accountBalance);
  return <div className="balance">{formatCurrency(accountBalance)}</div>;
}

export default BalanceDisplay;
