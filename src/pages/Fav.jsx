import { Button } from "@mui/material";
import CardList from "../camponents/WatchCardList";
import WavyHeader from "../camponents/WavyHeader";
import DeleteIcon from '@mui/icons-material/Delete';

function Fav() {
  return (
    <>
      <WavyHeader name="Favorits"/>
      <div className="spacer2"></div>
      <div className="side-page-button--container">
        <Button className="r-b" endIcon={<DeleteIcon/>} sx={{"&:hover": {borderColor: "rgb(135, 99, 227)" , backgroundColor: "rgba(215, 199, 255, 0.557)", borderWidth:"2px"}, borderRadius:"10px", color:"#8763e3", borderColor:"rgb(135, 99, 227)"}} size="large" variant="outlined">
          remove all
        </Button>
      </div>
      <CardList/>
      
    </>
  )
}

export default Fav;