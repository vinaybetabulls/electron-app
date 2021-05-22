import React from "react";
import "../assets/css/App.css";
import TableContainer from "./Table/Table";
import CustomizedTreeView from "./SideNavTree/SiteNavTree";
import SampleData from "../common/data";
import EditableCell from "../utils/Editable";
//import { updateMyData } from "../utils/UpdateCellData";
import { useTable, usePagination } from "react-table";

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Action",
        accessor: "action",
      },
      {
        Header: "Parameter / Service Type",
        accessor: "serviceType",
      },
      {
        Header: "Parameter / Description",
        accessor: "description",
      },
      {
        Header: "Desired Value / Expected Value",
        accessor: "desiredValue",
      },
      {
        Header: "Extensions",
        accessor: "extensions",
      },
      {
        Header: "Additional Remarks",
        accessor: "comments",
      },
    ],
    []
  );

  const [data, setData] = React.useState(SampleData.TestCaseFormid);
  const [originalData] = React.useState(data);
  const updateMyData = (rowIndex, columnId, value) => {
    console.log("value...value", value);
    // We also turn on the flag to not reset the page
    //setSkipPageReset(true)
    setData((old) =>
      old.map((row, index) => {
        console.log("row...", row);
        console.log("index..", index);
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };
  // Set our editable cell renderer as the default Cell renderer
  const defaultColumn = {
    Cell: EditableCell,
  };
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable({
    columns,
    data,
    defaultColumn,
    // use the skipPageReset option to disable page resetting temporarily
    //autoResetPage: !skipPageReset,
    // updateMyData isn't part of the API, but
    // anything we put into these options will
    // automatically be available on the instance.
    // That way we can call this function from our
    // cell renderer!
    updateMyData,
  });

  return (
    <div>
      <h1 className="mite-title">MITE Project!</h1>
      <div className="float-container">
        <div className="float-child">
          <CustomizedTreeView />
        </div>
        <div className="float-second-child">
          <TableContainer
            columns={columns}
            data={data}
            updateMyData={updateMyData}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
