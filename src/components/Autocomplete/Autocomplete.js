import React from "react";
import MuiAutocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
const values = ["Option 1", "Option 2"];
function Autocomplete({ valuess, onChange, onBlur }) {
  console.log("value..", values);
  const [value, setValue] = React.useState(values[0]);
  const [inputValue, setInputValue] = React.useState("");
  // React.useEffect(() => {
  //   setValue(values[0]);
  // }, [values]);

  return (
    <p>Hello</p>
    // <>
    //   {value && (
    //     <div>
    //       <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div>
    //       <div>{`inputValue: '${inputValue}'`}</div>
    //       <br />
    //       <Autocomplete
    //         value={value}
    //         onChange={(event, newValue) => {
    //           setValue(newValue);
    //         }}
    //         inputValue={inputValue}
    //         onInputChange={(event, newInputValue) => {
    //           setInputValue(newInputValue);
    //         }}
    //         id="controllable-states-demo"
    //         options={values}
    //         style={{ width: 300 }}
    //         renderInput={(params) => (
    //           <TextField {...params} label="Controllable" variant="outlined" />
    //         )}
    //       />
    //     </div>
    //   )}
    // </>
  );
}

export default Autocomplete;
