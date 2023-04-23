import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { BlockPicker } from "react-color";
import { MenuItem, Select, TextField } from "@mui/material";
const cities = [
  "Sydney",
  "Melbourne",
  "Brisbane",
  "Perth",
  "Adelaide",
  "Gold Coast",
  "Canberra",
  "Hobart",
  "Darwin",
  "Cairns",
];
type AppProps = { modalVisible: boolean; handleClose: () => void };
const CreateModal = ({ modalVisible, handleClose }: AppProps) => {
  const [blockPickerColor, setBlockPickerColor] = useState("#37d67a");
  const [colors, setColors] = useState<string[]>([]);
  useEffect(() => {}, [colors, blockPickerColor]);
  const removeColors = () => {
    const temp = [...colors];
    temp.splice(colors.length - 1, 1);
    setColors(temp);
  };
  const addColor = () => {
    if (colors.length < 30) {
      setColors([...colors, blockPickerColor]);
    }
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const eventData = new FormData(event.currentTarget);
    const data = {
      making: eventData.get("making"),
      size: eventData.get("size"),
      budget: eventData.get("budget"),
      city: eventData.get("city"),
      description: eventData.get("description"),
      colors:colors
    }
    console.log(data);}
  return (
    <Modal
      open={modalVisible}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style1} component="form" onSubmit={handleSubmit}>
        <Box sx={style}>
          <div className="making-detail">
            <p className="col-name">The making detail</p>
            <TextField name="making" required />
          </div>
          <div className="grid-info">
            <p className="col-name">Size</p>
            <p className="col-name">Budget</p>
            <p className="col-name">Location</p>
            <TextField id="size" name="size" required variant="standard" sx={textSx} />
            <TextField
              id="budget"
              name="budget"
              required
              variant="standard"
              type="number"

              sx={textSx}
            />
            <Select
              name="city"
              id="city"
              required
              variant="standard"
              sx={textSx}
            >
              {cities.map((city,key) => (
                <MenuItem key={key} value={city}>{city}</MenuItem>
              ))}
            </Select>
          </div>
          <TextField
            name="description"
            label="Description"
            required
            variant="outlined"
            rows={5}
            multiline
            fullWidth
          />
          <p className="col-name">colors</p>
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
                {colors.map((color,key) => (
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
  width: 400,
  bgcolor: "#f9f9f9",
  border: "0.1px rgba(50,155,155,0.1) solid",
  borderRadius: 5,
};

const style1 = {
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
const textSx = { width: 80, mb: 1, ml: 3, mr: 3 };
