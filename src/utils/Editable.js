import React from "react";
import Autocomplete from "../components/Autocomplete/Autocomplete";

const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData, // This is a custom function that we supplied to our table instance
}) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = React.useState(initialValue);

  console.log(value);
  console.log("value type..", typeof value);

  function move(arr, old_index, new_index) {
    while (old_index < 0) {
      old_index += arr.length;
    }
    while (new_index < 0) {
      new_index += arr.length;
    }
    if (new_index >= arr.length) {
      var k = new_index - arr.length;
      while (k-- + 1) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
  }

  const onChange = (e) => {
    let arr = initialValue[e?.target?.value];
    initialValue.unshift(arr);
    console.log("new arr..", initialValue);
    setValue(new Set(initialValue));
  };

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    console.log("onblur", { index, id, value });
    updateMyData(index, id, value);
  };

  // If the initialValue is changed external, sync it up with our state
  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <>
      {value && typeof value === "string" ? (
        <span>{value}</span>
      ) : (
        <Autocomplete options={value} />
      )}
    </>
  );
};

export default EditableCell;
