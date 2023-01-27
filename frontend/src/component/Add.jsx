import React, { useState } from "react";
import axios from "axios";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

function Add() {
  const [refresh, setRefresh] = useState(false);
  const [rows, setRows] = useState(1);
  const [data, setData] = useState([]);
  const [image, setImage] = useState({
    file: [],
  });

  console.log("data", data);

  const [item, setItem] = useState({
    title: "",
    description: "",
    quantity: "",
    price: "",
    data: "",
  });
  console.log("item", item);

  const imgUpload = (e) => {
    setImage({ ...image, file: e.target.files[0] });
  };

  const postdata = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setItem({ ...item, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    data &&
      data.map(async (val, index) => {
        formData.append("image", image.file);
        formData.append("title", val.title);
        formData.append("description", val.description);
        formData.append("quantity", val.quantity);
        formData.append("price", val.price);
        formData.append("date", val.date);
        window.alert("data submit");

        const config = {
          "Content-Type": "multipart/form-data",
        };

        const res = await axios.post(
          "http://localhost:3010/api/img-post",
          formData,
          config
        );
        console.log(res, "response");
        window.alert("Data submitted");
        setRefresh(!refresh);

        setItem({
          title: "",
          description: "",
          quantity: "",
          price: "",
          data: "",
        });
      });
  };

  const pushData = async () => {
    setData([...data, item]);
    setItem({
      image: image.file[0],
      title: "",
      description: "",
      quantity: "",
      price: "",
      date: "",
    });
  };

  const dataRemove = (id) => {
    const newItem = data.filter((newVal, index) => {
      return index !== id;
    });
    setData(newItem);
  };
  return (
    <form onSubmit={postData}>
      <div
        style={{
          border: "2px solid black",
          margin: "1rem",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            border: "2px solid black",
            margin: "2rem",
            padding: "2rem",
            borderRadius: "5px",
          }}
        >
          <table style={{tableLayout:"fixed"}}>
            <thead>
              <tr style={{ border: "2px solid black" }}>
                <th>Images</th>
                <th>Title</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((val, index) => {
                return (
                  <tr key={index}>
                    <td>
                      {
                        <img
                          width={100}
                          height={100}
                          src={`http://localhost:3010/${val.image}`}
                          className="img-fluid rounded-start"
                          alt="logo"
                        />
                      }
                    </td>
                    <td>{val.title}</td>
                    <td>{val.description}</td>
                    <td>{val.quantity}</td>
                    <td>{val.price}</td>
                    <td>{val.date}</td>
                    <td>
                      <button type="button" onClick={() => dataRemove(index)}>
                        <MinusOutlined />
                      </button>
                    </td>
                  </tr>
                );
              })}

              <tr>
                <td>
                  <input
                    type="file"
                    multiple
                    name="images"
                    onChange={imgUpload}
                    required
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="title"
                    value={item.title}
                    onChange={postdata}
                    required
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="description"
                    value={item.description}
                    onChange={postdata}
                    required
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="quantity"
                    value={item.quantity}
                    onChange={postdata}
                    required
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="price"
                    value={item.price}
                    onChange={postdata}
                    required
                  />
                </td>
                <td>
                  <input
                    type="date"
                    name="date"
                    value={item.date}
                    onChange={postdata}
                    required
                  />
                </td>

                <button
                  type="button"
                  onClick={() => {
                    pushData();
                    setRows(rows + 1);
                  }}
                >
                  <PlusOutlined />
                </button>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          style={{ textAlign: "right", padding: "1rem", marginRight: "10rem" }}
        >
          <button type="submit">Save</button>
        </div>
      </div>
    </form>
  );
}

export default Add;
