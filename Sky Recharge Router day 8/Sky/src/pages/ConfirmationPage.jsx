import React from "react";
import { useLocation } from "react-router-dom";

function ConfirmationPage() {
  const { state } = useLocation();
  const { number, amount, txid } = state || {};

  if (!state) {
    return <p>No data found. Please go back and try again.</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Recharge Confirmation</h1>
      <p><strong>Mobile Number:</strong> {number}</p>
      <p><strong>Amount:</strong> ₹{amount}</p>
      <p><strong>Transaction ID:</strong> {txid}</p>
      <p><strong>Status:</strong> Success ✅</p>
    </div>
  );
}

export default ConfirmationPage;
