import { Card, CardMedia, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";
import "./List.css";
export const List: React.FC = () => {
  const { products } = useSelector((store: any) => store.todo);
  const { getProduct } = useActions();
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Box id="list">
          {products
            ? products.map((item: any) => (
                <Card id="card" key={item.id}>
                  <Box
                    sx={{
                      margin: "7px",
                      display: "flex",
                      alignItems: "center",
                    }}>
                    <CardMedia
                      sx={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "50px",
                      }}
                      component="img"
                      image="https://wallpaperaccess.com/full/7280.jpg"
                    />
                    <Box sx={{ marginLeft: "15px" }}>
                      <Typography>{item.user}</Typography>
                      <Typography>Mbrteeglf;l</Typography>
                    </Box>
                    <Typography sx={{ marginLeft: "20px" }}>
                      {" "}
                      23.23.04
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "end",
                        width: "100%",
                      }}>
                      <CardMedia
                        sx={{
                          filter: "invert(1)",
                          width: "20px",
                        }}
                        component="img"
                        image="https://cdn-icons-png.flaticon.com/512/60/60969.png"
                      />
                    </Box>
                  </Box>
                  <CardMedia component="img" image={item.img} />
                  <Typography sx={{ margin: "10px" }}>
                    {" "}
                    Описание: {item.description}
                  </Typography>
                </Card>
              ))
            : null}
        </Box>
      </Container>
    </>
  );
};
