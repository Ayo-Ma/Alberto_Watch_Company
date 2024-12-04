import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Css/ProductDetails.css";
import { useCart } from "./CartContext";
import { ToastContainer, toast } from "react-toastify";

const ProductDetails = () => {
  const { category, id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  const notify = () => {
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 3000, 
      hideProgressBar: true, 
    });
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        const product = (data[category] || []).find(
          (item) => item.id === parseInt(id)
        );
        setProduct(product);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [category, id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="product-details">
    <div className="product-image">
      <img src={product.image} alt={product.name} />
    </div>
    <div className="product-info">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => {
        addToCart(product);
        notify();
        console.log("Product added to cart:", product);
      }}>Add to Cart</button>
    </div>
    <ToastContainer />
  </div>
  );
};

export default ProductDetails;
