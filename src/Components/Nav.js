import { useState } from "react";

export default function Nav() {
  const [data, setData] = useState({
    price: 0,
    category: "",
  });
  let NavBar = (
    <div className="Nav">
      <input
        type="number"
        min={0}
        placeholder="price"
        onChange={(event) => {
          setData({...data, price: parseInt(event.target.value) });
        }}
      />
      <input
        type="text"
        placeholder="category"
        onChange={(event) => {
          setData({...data, category: event.target.value });
        }}
      />
    </div>
  );

  return { NavBar, data };
}
