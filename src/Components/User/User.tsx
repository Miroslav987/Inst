import { Box, CardMedia, colors, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";

import "./User.css";
import { UserPub } from "./UserPub";
export const User: React.FC = () => {
  const { products } = useSelector((store: any) => store.todo);
  const { getProduct } = useActions();
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          left: "30%",
          height: "100hv",
          color: "white",
        }}>
        <Box
          sx={{
            margin: "100px auto",
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
          }}>
          <CardMedia
            sx={{ height: "200px", width: "200px", borderRadius: "200px" }}
            component="img"
            image="https://wallpaperaccess.com/full/7280.jpg"
          />
          <Box
            sx={{
              height: "200px",
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
            }}>
            <Typography variant="h5">mfbdfbd@gmail.com</Typography>
            <Box
              sx={{
                marginTop: "10px",
                display: "flex",
              }}>
              <Box sx={{ display: "flex" }}>
                {products
                  ? products.reduce((sum: any, current: any) => (
                      <Typography>{current.id}</Typography>
                    ))
                  : null}
                <Typography sx={{ marginLeft: "5px" }}> Публикаций</Typography>
              </Box>
              <Typography sx={{ marginLeft: "10px" }}>Подписчиков</Typography>
              <Typography sx={{ marginLeft: "10px" }}> Подписок</Typography>
            </Box>
            <Typography>mfbdfbd@gmail.com</Typography>
          </Box>
        </Box>{" "}
        <Box id="line" sx={{ borderTop: "1px solid white" }}>
          <Box className="userInfo">
            <CardMedia
              component="img"
              image="https://cdn-icons-png.flaticon.com/512/3602/3602126.png"
            />
            <Typography>Публикации</Typography>
          </Box>
          <Box className="userInfo">
            <CardMedia
              component="img"
              image="https://cdn-icons-png.flaticon.com/512/709/709496.png"
            />
            <Typography>Сохраненное</Typography>
          </Box>
          <Box className="userInfo">
            <CardMedia
              component="img"
              image="https://cdn-icons-png.flaticon.com/512/107/107804.png"
            />
            <Typography>Нравится</Typography>
          </Box>
        </Box>
        <UserPub />
      </Box>
    </>
  );
};
