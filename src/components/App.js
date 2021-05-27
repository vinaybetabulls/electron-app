import React from "react";
import "../assets/css/App.css";
import TableContainer from "./Table/Table";
import CustomizedTreeView from "./SideNavTree/SiteNavTree";
import SampleData from "../common/data";
import EditableCell from "../utils/Editable";
//import { updateMyData } from "../utils/UpdateCellData";
import { useTable, usePagination } from "react-table";

function App() {
  /** Test sequence */
  const testSequenceValue = SampleData.testcase.TestCaseFormid.filter(
    (testsuite) => testsuite.type === "Test Sequence"
  );
  const testSequenceDesiredValue = testSequenceValue
    .map((val) => val.desiredValue.toString())
    .filter((val) => val !== "");
  testSequenceDesiredValue.unshift("desiredValue");

  const testSequenceComments = testSequenceValue
    .map((val) => val.comments)
    .filter((val) => val !== "");
  testSequenceComments.unshift("comments");
  const testSequenceExtensions = testSequenceValue
    .map((val) => val.extensions)
    .filter((val) => val !== "");
  testSequenceExtensions.unshift("extensions");

  /** Post conditions */

  const postCondtionValue = SampleData.testcase.TestCaseFormid.filter(
    (testsuite) => testsuite.type === "Post Conditions"
  );
  const postCondistionDesiredValue = postCondtionValue
    .map((val) => val.desiredValue)
    .filter((val) => val !== "");
  postCondistionDesiredValue.unshift("desiredValue");
  const postCondistionComments = postCondtionValue
    .map((val) => val.comments)
    .filter((val) => val !== "");
  postCondistionComments.unshift("comments");
  const postCondistionExtensions = postCondtionValue
    .map((val) => val.extensions)
    .filter((val) => val !== "");
  postCondistionExtensions.unshift("extensions");

  /** pre condition */
  const preCondtionValue = SampleData.testcase.TestCaseFormid.filter(
    (testsuite) => testsuite.type === "Pre Conditions"
  );
  const preCondistionDesiredValue = preCondtionValue
    .map((val) => val.desiredValue)
    .filter((val) => val !== "");
  preCondistionDesiredValue.unshift("desiredValue");

  const preCondistionComments = preCondtionValue
    .map((val) => val.comments)
    .filter((val) => val !== "");
  preCondistionComments.unshift("comments");
  const preCondistionExtensions = preCondtionValue
    .map((val) => val.extensions)
    .filter((val) => val !== "");
  preCondistionExtensions.unshift("extensions");

  const testSequenceVal = SampleData.testcase.TestCaseFormid.map(
    (testsuite) => {
      if (testsuite.type === "Test Sequence") {
        testsuite["desiredValuesArray"] = testSequenceDesiredValue;
        testsuite["commentsArray"] = testSequenceComments;
        testsuite["extensionsArray"] = testSequenceExtensions;
      }
      if (testsuite.type === "Post Conditions") {
        testsuite["desiredValuesArray"] = postCondistionDesiredValue;
        testsuite["commentsArray"] = postCondistionComments;
        testsuite["extensionsArray"] = postCondistionExtensions;
      }
      if (testsuite.type === "Pre Conditions") {
        testsuite["desiredValuesArray"] = preCondistionDesiredValue;
        testsuite["commentsArray"] = preCondistionComments;
        testsuite["extensionsArray"] = preCondistionExtensions;
      }
      return testsuite;
    }
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "idHead",
      },
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
        accessor: "desiredValuesArray",
      },
      {
        Header: "Extensions",
        accessor: "extensionsArray",
      },
      {
        Header: "Additional Remarks",
        accessor: "commentsArray",
      },
    ],
    []
  );

  const [data, setData] = React.useState(testSequenceVal);
  const [originalData] = React.useState(data);
  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    //setSkipPageReset(true)
    setData((old) =>
      old.map((row, index) => {
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
            getRowProps={row => ({
              style: {
                background: row.index % 2 === 0 ? 'red' : 'white',
              },
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
