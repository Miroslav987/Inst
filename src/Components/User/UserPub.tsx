import { Box, Button, Card, CardMedia } from "@mui/material";
import * as React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";
import { useEffect, useState } from "react";
import "./User.css";
import { useNavigate } from "react-router-dom";
export const UserPub: React.FC = () => {
  const { products } = useSelector((store: any) => store.todo);
  const { getProduct, deleteProduct } = useActions();
  useEffect(() => {
    getProduct();
  }, []);
  const [modal, setModal] = useState("none");
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}>
        {products
          ? products.map((item: any) => (
              <Card className="cardPub">
                <Box
                  onMouseOut={() => setModal("none")}
                  onClick={() => navigate(`/details/${item.id}`)}
                  className="modal1"
                  sx={{ display: modal }}>
                  Подробно
                </Box>
                <CardMedia
                  onMouseOver={() => setModal("flex")}
                  key={item.id}
                  component="img"
                  image={item.img}
                />
              </Card>
            ))
          : null}
      </Box>
    </>
  );
};
