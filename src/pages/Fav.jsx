import { Button } from "@mui/material";
import CardList from "../camponents/WatchCardList";
import WavyHeader from "../camponents/WavyHeader";
import DeleteIcon from '@mui/icons-material/Delete';
import NoItem from "../camponents/NoItem";

function Fav(props) {

  const fixData = props.data.filter(watch => watch.fav === true)

  const removeFav = () => {
    const newData = props.data.map((item)=>{
      return { ...item, fav: false }
    });
    localStorage.setItem("dataKey", JSON.stringify(newData))
    props.setData(newData);
  }

  return (
    <>
      <WavyHeader name="Favorits" />
      <div className="spacer2 spacer2-1"></div>
      {fixData.length >= 1 ? (
        <>
          <div className="side-page-button--container">
            <Button
              className="r-b"
              endIcon={<DeleteIcon />}
              sx={{
                "&:hover": {
                  borderColor: "rgb(135, 99, 227)",
                  backgroundColor: "rgba(215, 199, 255, 0.557)",
                  borderWidth: "2px",
                },
                borderRadius: "10px",
                color: "#8763e3",
                borderColor: "rgb(135, 99, 227)",
              }}
              size="large"
              variant="outlined"
              onClick={removeFav}
            >
              remove all
            </Button>
          </div>
          <CardList data={props.data} setData={props.setData} location='fav'/>
        </>
      ) : <NoItem title="Favorited"/>}
    </>
  );
  
}

export default Fav;