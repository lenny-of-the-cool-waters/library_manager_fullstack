import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import Table from "../dashboard/components/Table/Table";

const useStyles = makeStyles((theme) => ({
  tableOverflow: {
    overflow: "auto",
  },
}));

const Books = () => {
  const classes = useStyles();
  const [bookData, setBookData] = useState([
    [
      "Harry Potter",
      "Prisoner of Azkaban",
      "JK Rowling",
      "2002",
      "Adventure",
      "Read",
    ],
    [
      "Harry Potter",
      "Goblet of Fire",
      "JK Rowling",
      "2003",
      "Adventure",
      "Read",
    ],
  ]);

//   TODO
/* Create join query in backend that returns data from both book and stats table to populate the respective datatable fields */

  /* useEffect(() => {
        let data = 
    }, []) */

  return (
    <>
      <PageTitle title="Books" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Book List"
            data={bookData}
            columns={[
              "Book Series",
              "Book",
              "Author",
              "Release Date",
              "Genre",
              "Status",
            ]}
            options={{ filterType: "checkbox" }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Books;
