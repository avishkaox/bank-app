import { useSelector } from "react-redux";

function formatCurrency(value, currency) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: currency,
  }).format(value);
}

function BalanceDisplay() {
  const accountBalance = useSelector((store) => store.account.balance);
  const currency = useSelector((store) => store.account.currency);
  return <div className="balance">{formatCurrency(accountBalance , currency)}</div>;
}

export default BalanceDisplay;
