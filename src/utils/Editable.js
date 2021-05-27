import React from "react";
import Autocomplete from "../components/Autocomplete/Autocomplete";

const EditableCell = ({
  value: initialValue,
  row: { index, original },
  column: { id },
  updateMyData, // This is a custom function that we supplied to our table instance
}) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = React.useState(initialValue);

  const changeColor = () => {
  };

  React.useEffect(() => {
    const el2 = document.querySelectorAll(".specialChild");
    el2.forEach((el)=>{
      el.parentElement.parentNode.style.backgroundColor = "#c5c5c5";
    })
    
  });

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
    setValue(new Set(initialValue));
  };

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    updateMyData(index, id, value);
  };

  // If the initialValue is changed external, sync it up with our state
  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  
  const getComponent = () => {
    if (original.idHead === "#") {
      return (
        <div className="specialChild" onLoad={changeColor}>
          {value}
        </div>
      );
    } else {
      return <span>{value}</span>;
    }
  };
  return (
    <>
      {typeof value !== "object" ? (
        getComponent()
      ) : (
        <Autocomplete
          options={value}
          original={original}
          actualValue={value[0]}
        />
      )}
    </>
  );
};

export default EditableCell;
