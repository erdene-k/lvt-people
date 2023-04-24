import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { BlockPicker } from "react-color";
import { MenuItem, Select, TextField } from "@mui/material";
import { cities, types } from "../models/itypes";
import axios from "axios";
import { GetLocalStorageData } from "../hooks/useLocalStorage";

type AppProps = { modalVisible: boolean; handleClose: () => void };
const CreateModal = ({ modalVisible, handleClose }: AppProps) => {
  const [blockPickerColor, setBlockPickerColor] = useState("#37d67a");
  const [colors, setColors] = useState<string[]>([]);
  const [images, setImages] =  useState<File[]>([]);
  const user = GetLocalStorageData("sst_exd");
  useEffect(() => {
  }, [colors, blockPickerColor]);
  const removeColors = () => {
    const temp = [...colors];
    temp.splice(colors.length - 1, 1);
    setColors(temp);
  };
  const addColor = () => {
    if (colors.length < 6) {
      setColors([...colors, blockPickerColor]);
    }
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const eventData = new FormData(event.currentTarget);
    // const data = {
    //   making: eventData.get("making"),
    //   size: eventData.get("size"),
    //   budget: eventData.get("budget"),
    //   city: eventData.get("location"),
    //   description: eventData.get("description"),
  
    // };
    // const formData = new FormData();
    for (let i = 0; i < images.length; i++) {
      const file = images[i];
      eventData.append('images', file);
    }
    for (let i = 0; i < colors.length; i++) {
      const image = colors[i];
      eventData.append('colors[]', image);
    }


  eventData.append(`user_id`, user.id);

    let config = {
      method: "post",
      maxBodyLength: Infinity,

      url: `${process.env.REACT_APP_SERVER_URL}/jobs`,
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
        "Content-Type": "charset=utf-8"
        // "Access-Control-Allow-Origin": "*",
      },
      data: eventData,
    };
    axios
    .request(config)
    .then((response) => {
      console.log(response.data);
    })

    .catch((error) => {
     console.log(error);
     
    })
 

  };
  return (
    <Modal
      open={modalVisible}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle} component="form" onSubmit={handleSubmit}>
        <Box sx={style}>
          <div className="making-detail">
            <p className="col-name">The making detail</p>
            <TextField name="making" required />
          </div>
          <div className="grid-create">
            <p className="col-name">Size</p>
            <p className="col-name">Budget</p>
            <p className="col-name">Type</p>
            <p className="col-name">Location</p>
            <TextField
              id="size"
              name="size"
              required
              variant="standard"
              sx={textSx}
            />
            <TextField
              id="budget"
              name="budget"
              required
              variant="standard"
              type="number"
              sx={textSx}
            />
                 <Select
              name="type"
              id="city"
              required
              variant="standard"
              sx={selectSx}
            >
              {types.map((type, key) => (
                <MenuItem key={key} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
            <Select
              name="location"
              id="city"
              required
              variant="standard"
              sx={selectSx}
            >
              {cities.map((city, key) => (
                <MenuItem key={key} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </div>
          <TextField
            name="description"
            label="Description"
            required
            variant="outlined"
            rows={3}
            multiline
            fullWidth
          />
          <p className="color-p">Colors</p>
          <div style={{ display: "flex" }}>
            <BlockPicker
              color={blockPickerColor}
              onChange={(color: any) => {
                setBlockPickerColor(color.hex);
              }}
            />
            <div style={{ display: "block", marginLeft: 20 }}>
              <div className="btn-group">
                <button
                  className="color-button"
                  style={{ backgroundColor: blockPickerColor }}
                  type="button"
                  onClick={addColor}
                >
                  Add
                </button>
                <button
                  className="color-button"
                  type="button"
                  onClick={removeColors}
                >
                  Remove
                </button>
              </div>
              <div className="all-colors">
                {colors.map((color, key) => (
                  <div className="color-container" key={key}>
                    <div
                      style={{
                        backgroundColor: color,
                        width: "100%",
                        margin: 3,
                      }}
                    ></div>
                  </div>
                ))}
              </div>
              <input
                type="file"
                multiple={true}
                name="images"
                accept="image/png, image/gif, image/jpeg"
                className="custom-file-input"
                onChange={(e:any) => {
                  setImages(e.target.files)}}
              />
            </div>
          </div>

          <button className="primary-button" type="submit">
            Post
          </button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateModal;
const style = {
  width: "max-content",
  bgcolor: "#f9f9f9",
  border: "0.1px rgba(50,155,155,0.1) solid",
  borderRadius: 5,
  height: "max-content",
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "max-content",
  bgcolor: "#f9f9f9",
  borderRadius: 6,
  boxShadow: 1,
  p: 4,
  height: "max-content",
  display: "flex",
  gap: 5,
};
const textSx = { width: 70, mb: 1, ml: 3, };
const selectSx = { mb: 1, ml: 2, mr: 2 };
