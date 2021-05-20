import React from "react";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import "../assets/css/App.css";
import TableContainer from "./Table/Table";
import CustomizedTreeView from "./SideNavTree/SiteNavTree";
import SampleData from "../common/data";

const filter = createFilterOptions();

function App() {
  const [data, setData] = React.useState(SampleData.TestCaseFormid);
  const [value, setValue] = React.useState(null); 
  const [descriptionValue, setDescriptionValue] = React.useState(null); 
  const [desiredValue, setDesiredValue] = React.useState(null); 
  const [extensionValue, setExtenstionValue] = React.useState(null); 
  const [remarkValue, setRemarkValue] = React.useState(null); 
  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    { title: "The Lord of the Rings: The Return of the King", year: 2003 },
    { title: "The Good, the Bad and the Ugly", year: 1966 },
    { title: "Fight Club", year: 1999 },
    { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
    { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
    { title: "Forrest Gump", year: 1994 },
    { title: "Inception", year: 2010 },
    { title: "The Lord of the Rings: The Two Towers", year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: "Goodfellas", year: 1990 },
    { title: "The Matrix", year: 1999 },
  ];

  // const renderEditable = (cellInfo) => {
  //   setData;
  //   return (
  //     <div
  //       style={{ backgroundColor: "#fafafa" }}
  //       contentEditable
  //       suppressContentEditableWarning
  //       onBlur={(e) => {
  //         const data = [...data];
  //         console.log("render editable data", data);
  //         data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
  //         setData({ data });
  //       }}
  //       dangerouslySetInnerHTML={{
  //         __html: setData[cellInfo.index][cellInfo.column.id],
  //       }}
  //     />
  //   );
  // };
  const columns = React.useMemo(
    () => [
      {
        Header: "Action",
        accessor: "action",
      },
      {
        Header: "Service Type",
        accessor: "serviceType",
        Cell: (cellProps) => {
          return (
            <Autocomplete
              value={value}
              onChange={(event, newValue) => {
                if (typeof newValue === "string") {
                  setValue(
                     newValue,
                  );
                } else if (newValue && newValue) {
                  // Create a new value from the user input
                  setValue(
                    newValue,
                  );
                } else {
                  setValue(newValue);
                }
              }}
              selectOnFocus
              clearOnBlur={false}
              handleHomeEndKeys
              id="free-solo-with-text-demo"
              options={cellProps.value}
              getOptionLabel={(option) => {
                // Value selected with enter, right from the input
                if (typeof option === "string") {
                  return option;
                }
                // Add "xxx" option created dynamically
                if (option) {
                  return option;
                }
                // Regular option
                return option;
              }}
              renderOption={(option) => option}
              style={{ width: 300 }}
              freeSolo
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Free solo with text demo"
                  variant="outlined"
                />
              )}
            />
          );
        },
      },
      {
        Header: "Parameter/Description",
        accessor: "description",
        Cell: (cellProps) => {
          return (
            <Autocomplete
              value={descriptionValue}
              onChange={(event, newValue) => {
                if (typeof newValue === "string") {
                  setDescriptionValue(
                     newValue,
                  );
                } else if (newValue && newValue) {
                  // Create a new value from the user input
                  setDescriptionValue(
                    newValue,
                  );
                } else {
                  setDescriptionValue(newValue);
                }
              }}
              selectOnFocus
              clearOnBlur={false}
              handleHomeEndKeys
              id="free-solo-with-text-demo"
              options={cellProps.value}
              getOptionLabel={(option) => {
                // Value selected with enter, right from the input
                if (typeof option === "string") {
                  return option;
                }
                // Add "xxx" option created dynamically
                if (option) {
                  return option;
                }
                // Regular option
                return option;
              }}
              renderOption={(option) => option}
              style={{ width: 300 }}
              freeSolo
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                />
              )}
            />
          );
        }
      },
      {
        Header: "Desired Vlaue/ Expected Value",
        accessor: "desiredValue",
        Cell: (cellProps) => {
          return (
            <Autocomplete
              value={desiredValue}
              onChange={(event, newValue) => {
                if (typeof newValue === "string") {
                  setDesiredValue(
                     newValue,
                  );
                } else if (newValue && newValue) {
                  // Create a new value from the user input
                  setDesiredValue(
                    newValue,
                  );
                } else {
                  setDesiredValue(newValue);
                }
              }}
              selectOnFocus
              clearOnBlur={false}
              handleHomeEndKeys
              id="free-solo-with-text-demo"
              options={cellProps.value}
              getOptionLabel={(option) => {
                // Value selected with enter, right from the input
                if (typeof option === "string") {
                  return option;
                }
                // Add "xxx" option created dynamically
                if (option) {
                  return option;
                }
                // Regular option
                return option;
              }}
              renderOption={(option) => option}
              style={{ width: 300 }}
              freeSolo
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                />
              )}
            />
          );
        }
      },
      {
        Header: "Extensions",
        accessor: "extensions",
        Cell: (cellProps) => {
          return (
            <Autocomplete
              value={extensionValue}
              onChange={(event, newValue) => {
                if (typeof newValue === "string") {
                  setExtenstionValue(
                     newValue,
                  );
                } else if (newValue && newValue) {
                  // Create a new value from the user input
                  setExtenstionValue(
                    newValue,
                  );
                } else {
                  setExtenstionValue(newValue);
                }
              }}
              selectOnFocus
              clearOnBlur={false}
              handleHomeEndKeys
              id="free-solo-with-text-demo"
              options={cellProps.value}
              getOptionLabel={(option) => {
                // Value selected with enter, right from the input
                if (typeof option === "string") {
                  return option;
                }
                // Add "xxx" option created dynamically
                if (option) {
                  return option;
                }
                // Regular option
                return option;
              }}
              renderOption={(option) => option}
              style={{ width: 300 }}
              freeSolo
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                />
              )}
            />
          );
        }
      },
      {
        Header: "Additional Remarks",
        accessor: "comments",
        Cell: (cellProps) => {
          return (
            <Autocomplete
              value={remarkValue}
              onChange={(event, newValue) => {
                if (typeof newValue === "string") {
                  setRemarkValue(
                     newValue,
                  );
                } else if (newValue && newValue) {
                  // Create a new value from the user input
                  setRemarkValue(
                    newValue,
                  );
                } else {
                  setRemarkValue(newValue);
                }
              }}
              selectOnFocus
              clearOnBlur={false}
              handleHomeEndKeys
              id="free-solo-with-text-demo"
              options={cellProps.value}
              getOptionLabel={(option) => {
                // Value selected with enter, right from the input
                if (typeof option === "string") {
                  return option;
                }
                // Add "xxx" option created dynamically
                if (option) {
                  return option;
                }
                // Regular option
                return option;
              }}
              renderOption={(option) => option}
              style={{ width: 300 }}
              freeSolo
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                />
              )}
            />
          );
        }
      },
    ],
    []
  );

  return (
    <div>
      <h1>Hello, Electron!</h1>

      <p>
        I hope you enjoy using basic-electron-react-boilerplate to start your
        dev off right!
      </p>
      <div className="float-container">
        <div className="float-child">
          <CustomizedTreeView />
        </div>
        <div className="float-second-child">
          <TableContainer columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
