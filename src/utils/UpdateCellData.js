 // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  export const updateMyData = (rowIndex, columnId, value) => {
      console.log('value...value', value)
    // We also turn on the flag to not reset the page
    //setSkipPageReset(true)
    setData(old =>
      old.map((row, index) => {
          console.log('row...', row);
          console.log('index..', index)
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )
  }

