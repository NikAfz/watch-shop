import React from "react";
import WatchCard from "./WatchCard";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function CardList() {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return(

    <div className="Card-list">
      {/* <div>

        <FormControl color="secondary" sx={{ m: 0, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-helper-label">Order by</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            value={age}
            label="handle"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>prise</MenuItem>
            <MenuItem value={2}>raiting</MenuItem>
          </Select>
          <ButtonGroup fullWidth color="secondary" variant="outlined" >
            <Button>111</Button>
            <Button>111</Button>
            <Button>111</Button>
          </ButtonGroup>
        </FormControl>

      </div> */}
      <div className="Card-list--container">
        <WatchCard/>
        <WatchCard/>
        <WatchCard/>
        <WatchCard/>
        <WatchCard/>
        <WatchCard/>
        <WatchCard/>
        <WatchCard/>
        <WatchCard/>
        <WatchCard/>
        <WatchCard/>
        <WatchCard/>
      </div>
    </div>
  )
}
export default CardList;