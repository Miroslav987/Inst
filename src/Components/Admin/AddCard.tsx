import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { Navbar } from "../Navbar/Navbar";
import "./AddCard.css";
export const AddCard: React.FC = () => {
  const { addProduct } = useActions();

  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  function handleAdd(e: any) {
    e.preventDefault(); // останавливает автообновление бразуреа при отправке данных через form
    if (!img.trim()) {
      alert("Надо заполнить поле с фото !");
      return;
    }

    let obj: object = {
      img,
      description,
    };
    console.log(obj);
    addProduct(obj);
    setImg("");
    setDescription("");
  }
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <form id="form-add" onSubmit={e => handleAdd(e)}>
          <TextField
            id="outlined-basic"
            className="outlined-basic"
            label="Фото"
            variant="outlined"
            value={img}
            onChange={e => setImg(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            className="outlined-basic"
            label="Описание"
            variant="outlined"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <Button id="btn_add" type="submit">
            Добавить
          </Button>
        </form>
      </Box>
    </>
  );
};
