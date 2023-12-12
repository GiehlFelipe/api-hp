import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";

interface MyCardProps {
  id: string;
  name: string;
  gender: string;
  species: string;
  image: string;
}

function MyCard(props: MyCardProps) {
  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: "100%" }}>
        <CardMedia
          sx={{
            height: 150,
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
          image={props.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.gender}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.species}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => alert(`id: ${props.id}`)} size="small">
            Ver mais
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default MyCard;
