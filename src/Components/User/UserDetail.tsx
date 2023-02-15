// @flow
import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useSelector } from "react-redux";
import { Button, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
export const UserDetail: React.FC = () => {
  const { productDetails } = useSelector((store: any) => store.todo2);
  console.log(productDetails);
  const { readOneProduct, deleteProduct } = useActions();

  const { id } = useParams();

  useEffect(() => {
    readOneProduct(id);
  }, [id]);

  const navigate = useNavigate();
  return (
    <>
      {productDetails ? (
        <Box className="detail">
          <Box className="detailIn">
            <CardMedia component="img" image={productDetails.img} />
            <Box className="detailtx">
              <Typography variant="h5">Описание</Typography>
              <Typography>{productDetails.description}</Typography>
            </Box>
            <Button>Удалить</Button>
            <Button onClick={() => navigate(`/edit/${productDetails.id}`)}>
              Изменить
            </Button>
          </Box>
        </Box>
      ) : null}
    </>
  );
};
