import Products from "../API";
import CardContent from "./CardContent";
import "./Nav.css";
import Nav from "./Nav";

export default function Card() {
  const { NavBar, data } = Nav();

  let foundProducts = false;

  let products = Products.map((product) => {
    let output = (
      <CardContent
        key={product.id}
        title={product.title}
        image={product.image}
        description={product.description}
        price={product.price}
      />
    );
    if (
      data.price !== 0 &&
      !isNaN(data.price) &&
      data.category !== "" &&
      data.category !== null &&
      data.price >= parseInt(product.price) &&
      product.category.includes(data.category)
    ) {
      console.log("One");
      foundProducts = true;
      return output;
    } else if (
      ((data.price !== 0 &&
        !isNaN(data.price) &&
        (data.category === "" || data.category === null)) ||
        ((data.price === 0 || isNaN(data.price)) &&
          data.category !== "" &&
          data.category !== null)) &&
      (data.price >= parseInt(product.price) ||
        product.category.includes(data.category))
    ) {
      console.log("Two");
      foundProducts = true;
      return output;
    } else {
      return output;
    }
  });

  if (foundProducts === false) {
    products = <h4>No Results</h4>;
  }

  return (
    <>
      {NavBar}
      <div className="Card-Body">{products}</div>
      
    </>
  );
}
