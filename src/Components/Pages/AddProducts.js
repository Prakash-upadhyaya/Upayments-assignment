// import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddProducts() {
  const history = useNavigate();
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    avatar: "",
    developerEmail: "",
  });

  const { name, price, category, description, avatar, developerEmail } =
    newProduct;

  function handleSubmit() {
    if (
      !name ||
      !price ||
      !category ||
      !description ||
      !avatar ||
      !developerEmail
    ) {
      alert("Please fill all the fields");
    } else if (price.match(/[^0-9]/)) {
      alert("Please enter valid price");
    } else {
      console.log(newProduct);
      history("/");
    }
  }

  return (
    <>
      <div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="Product Name"
          >
            Product Name
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="Product Name"
          >
            Product Price
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="Product Name"
          >
            Product category
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="category"
            value={newProduct.category}
            onChange={(e) =>
              setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="Product Name"
          >
            Product Description
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="description"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="Product Name"
          >
            Product Avatar
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="avatar"
            value={newProduct.avatar}
            onChange={(e) =>
              setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="Product Name"
          >
            DeveloperEmail Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="developerEmail"
            value={newProduct.developerEmail}
            onChange={(e) =>
              setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
            }
          />

          <button
            onClick={handleSubmit}
            className="bg-transparent m-1 mb-2 ml-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default AddProducts;
