import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function AutoComplete({ options, original, actualValue }) {
  const [value, setValue] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [autoCompleteOptions, setAutoCompleteOptions] = React.useState([])
  React.useEffect(() => {
    const test = original[actualValue];
    const selectedVal = options.find((option) => option?.toString() === test?.toString());
    setValue(selectedVal || "");
    options.splice(0,1)
    setAutoCompleteOptions(options)
    
  }, [options, actualValue, original]);

  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={autoCompleteOptions}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} variant="outlined" />}
      />
    </div>
  );
}
