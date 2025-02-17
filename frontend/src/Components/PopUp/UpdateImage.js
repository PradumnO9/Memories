import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import './UpdateImage.css'
import { FI_API } from "../utils/constants";

const UpdateImage = (props) => {
  const [data, setData] = useState({
    title: "",
    caption: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.title || !data.caption) {
      alert("Please fill all the fields!");
    } else {
      axios
        .put(
          `${FI_API}/updateImage/${props.imageId}/${props.userId}`, data
        )
        .then((res) => {
          alert(res.data.message);
          props.updateData(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <>
      <form className="update__ImageForm">
        <h6>Update {`${props.title}`} Details</h6>
        <div className="update__FormFields">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={data.title}
            placeholder="new title"
            onChange={handleChange}
          />
        </div>
        <div className="update__FormFields">
          <label htmlFor="caption">Caption</label>
          <input
            type="text"
            name="caption"
            value={data.caption}
            placeholder="new caption"
            onChange={handleChange}
          />
        </div>
        <Button variant="warning" size="sm" onClick={handleSubmit} style={{height: "30px"}}>Update</Button>
      </form>
    </>
  );
};

export default UpdateImage;