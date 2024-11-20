import { useLocation } from "react-router-dom";

function Order() {
  const location = useLocation();
  console.log(location.state);
  const { fullName, email, address, city, phone, paymentType } = location.state || {};
  console.log(location.state);
  console.log(fullName, email, address, city, phone, paymentType);
  if (!location.state) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h1>Order Summary</h1>
      <p>Full Name: {fullName}</p>
      <p>Email: {email}</p>
      <p>Address: {address}</p>
      <p>City: {city}</p>
      <p>Phone: {phone}</p>
      <p>Payment Type: {paymentType}</p>
    </div>
  );
}

export default Order;
