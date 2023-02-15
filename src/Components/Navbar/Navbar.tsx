import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { CardMedia } from "@mui/material";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <AppBar sx={{ background: "none", zIndex: 0 }}>
      <Box
        sx={{
          padding: "40px",
          borderRight: "0.1px solid #383838  ",
          display: "flex",
          flexDirection: "column",
          width: "280px",
          height: "100vh",
          background: "black",
        }}>
        <CardMedia
          sx={{ filter: "invert(1)", width: "130px" }}
          component="img"
          image="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.svg"
        />
        <Box
          sx={{ paddingTop: "50px", display: "flex", flexDirection: "column" }}>
          <Link to="/">
            <Box id="navList">
              <CardMedia
                id="navListImg"
                component="img"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/2048px-Home-icon.svg.png"
              />
              <Typography id="navListtx">Главная</Typography>
            </Box>
          </Link>
          <Link to="/add">
            <Box id="navList">
              <CardMedia
                id="navListImg"
                component="img"
                image="https://icons-for-free.com/iconfiles/png/512/create+cross+new+plus+icon-1320168707626274697.png"
              />
              <Typography id="navListtx">Создать</Typography>
            </Box>
          </Link>
          <Link to="/user">
            <Box id="navList">
              <CardMedia
                id="navListImg"
                component="img"
                image="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
              />
              <Typography id="navListtx">Профиль</Typography>
            </Box>
          </Link>
        </Box>
      </Box>
    </AppBar>
  );
};
