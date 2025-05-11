import "./Product.css";
import Price  from "./Price";

function Product({title,idx}) {
  let oldPrice =["12,456","11,678","10,456","9,678"];
  let newPrice=["10,999","8,999","7,999","6,999"];
  let  description =[
    ["8,000 DIP0",  "5 Programmable buttons"],
    ["intutive surface",  "designed for ipad Pro"],
    ["designed for ipad Pro",  "intutive surface"],
    ["wireless",  "Optical orientation"]
  ];
    return (
      <div className="Product">
        <h4>{title}</h4>
        <p>{description[idx][0]}</p>
        <p>{description[idx][1]}</p>
        <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
      </div>
    );
  }
  export default Product;