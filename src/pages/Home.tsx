import { Container, Grid } from "@mui/material";
import { useEffect } from "react";
import MyCard from "../components/MyCard";
import NavBar from "../components/NavBar";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import listarPersonagens from "../store/modules/personagens/actions";

function Home() {
  const dispatch = useAppDispatch()
  const listaPersonagensRedux = useAppSelector((state)=>state.personagens)

  useEffect(()=>{
    dispatch(listarPersonagens())
  },[])

  

    return (
      <>
        <NavBar />
        <Container maxWidth="md" sx={{ paddingY: 5 }}>
          <Grid container spacing={2}>
            {listaPersonagensRedux.map((personagem)=>{
              return (
                <MyCard
                  name={personagem.name}
                  species={personagem.species}
                  gender={personagem.gender}
                  id={personagem.id}
                  image={personagem.image}
                />
              );
            })}
          </Grid>
        </Container>
      </>
    );
}

export default Home