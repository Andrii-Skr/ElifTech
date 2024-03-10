import { useState } from "react";
import "./Info.css";

type TInfo = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

const Info = () => {
  const [info, setInfo] = useState<TInfo>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  return (
    <div className="infoBox">
      <h5>Name:</h5>
      <input
        type="text"
        placeholder="Your name*"
        value={info.name}
        onChange={(event) => setInfo({ ...info, name: event.target.value })}
      />
      <h5>Email:</h5>
      <input
        type="email"
        placeholder="Your Email*"
        value={info.email}
        onChange={(event) => setInfo({ ...info, email: event.target.value })}
        required
      />
      <h5>Phone:</h5>
      <input
        type="tel"
        placeholder="Your Phone*"
        value={info.phone}
        onChange={(event) => setInfo({ ...info, phone: event.target.value })}
        required
      />
      <h5>Address:</h5>
      <input
        type="text"
        placeholder="Your Address*"
        value={info.address}
        onChange={(event) => setInfo({ ...info, address: event.target.value })}
      />
    </div>
  );
};
export default Info;
