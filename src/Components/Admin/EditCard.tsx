// @flow
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useEffect } from "react";

export const EditCard: React.FC = () => {
  const { readOneProduct, editProduct } = useActions();

  const { productDetails } = useSelector((store: any) => store.todo2);
  console.log(productDetails);
  const [inpValues, setInpValues] = React.useState(productDetails);
  console.log(inpValues);
  let { id } = useParams();

  useEffect(() => {
    readOneProduct(id);
  }, [id]);

  function handleChange(e: any) {
    let obj: object = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  }
  const navigate = useNavigate();

  function handleSave(e: any) {
    e.preventDefault(); // останавливает автообновление бразуреа при отправке данных через form
    if (!inpValues.img.trim()) {
      alert("Заполните все поля!");
      return;
    }
    editProduct(id, inpValues);
    navigate("/");
  }

  return (
    <>
      <>
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <form id="form-add" onSubmit={e => handleSave(e)}>
            <TextField
              id="outlined-basic"
              className="outlined-basic"
              label="img"
              variant="outlined"
              name="img"
              value={inpValues.img}
              onChange={e => handleChange(e)}
            />
            <TextField
              id="outlined-basic"
              className="outlined-basic"
              label="description"
              variant="outlined"
              name="description"
              value={inpValues.description}
              onChange={e => handleChange(e)}
            />
            <Button id="btn_add" type="submit">
              Добавить
            </Button>
          </form>
        </Box>
      </>
    </>
  );
};
