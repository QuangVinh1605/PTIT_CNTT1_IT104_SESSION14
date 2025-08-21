import React, { useState } from "react";

interface Product {
  name: string;
  price: number;
}

const ProductForm = () => {
  const [product, setProduct] = useState<Product>({
    name: "",
    price: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Sản phẩm:", product);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Thêm sản phẩm</h3>
      <div>
        <label>
          Tên sản phẩm:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Giá:
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Lưu</button>
    </form>
  );
};

export default ProductForm;
