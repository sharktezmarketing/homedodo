import React,
{
  useEffect,
  useState,
} from "react";

import axios from "axios";

function AddService() {

  const [categories, setCategories] =
    useState([]);

  const [formData, setFormData] =
    useState({
      category_id: "",
      service_name: "",
      description: "",
      price: "",
      image: null,
    });

  const fetchCategories = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/categories"
      );

      setCategories(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    fetchCategories();

  }, []);

  const handleChange = (e) => {

    if (e.target.name === "image") {

      setFormData({
        ...formData,
        image: e.target.files[0],
      });

    } else {

      setFormData({
        ...formData,
        [e.target.name]:
          e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const data = new FormData();

    data.append(
      "category_id",
      formData.category_id
    );

    data.append(
      "service_name",
      formData.service_name
    );

    data.append(
      "description",
      formData.description
    );

    data.append(
      "price",
      formData.price
    );

    data.append(
      "image",
      formData.image
    );

    try {

      const res = await axios.post(
        "http://localhost:5000/api/services/add",
        data
      );

      alert(res.data.message);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>Add Service</h1>

      <br />

      <form onSubmit={handleSubmit}>

        <select
          name="category_id"
          onChange={handleChange}
        >

          <option>
            Select Category
          </option>

          {categories.map((cat) => (

            <option
              key={cat.id}
              value={cat.id}
            >
              {cat.name}
            </option>

          ))}

        </select>

        <br /><br />

        <input
          type="text"
          name="service_name"
          placeholder="Service Name"
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="file"
          name="image"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Add Service
        </button>

      </form>

    </div>
  );
}

export default AddService;