import * as React from "react";
import { color, styled } from "@mui/system";
import TablePaginationUnstyled from "@mui/base/TablePaginationUnstyled";
import {
  Avatar,
  Button,
  CardMedia,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { useHistory } from "react-router-dom";
import { IDistrict } from "../../../../store/district/types";
import Title from "../../../../pages/admin/Dashboard/title";
import { ICampaign } from "../../../../store/campaign/types";
import defaultImage from "../../../../assets/images/logo192.png";
import { IDonation } from "../../../../store/donation/types";
import { useDispatch } from "react-redux";
import { getDonate } from "../../../../store/donation/actions";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function createData(name: string, calories: number, fat: number) {
  return { name, calories, fat };
}

const blue = {
  200: "#A5D8FF",
  400: "#3399FF",
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const Root = styled("div")(
  ({ theme }) => `
  table {
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    text-align: left;
    padding: 6px;
  }

  th {
    background-color: ${theme.palette.mode === "dark" ? grey[900] : grey[100]};
  }
  `
);

const CustomTablePagination = styled(TablePaginationUnstyled)(
  ({ theme }) => `
  & .MuiTablePaginationUnstyled-spacer {
    display: none;
  }
  & .MuiTablePaginationUnstyled-toolbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }
  & .MuiTablePaginationUnstyled-selectLabel {
    margin: 0;
  }
  & .MuiTablePaginationUnstyled-select {
    padding: 2px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    border-radius: 50px;
    background-color: transparent;
    &:hover {
      background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    }
    &:focus {
      outline: 1px solid ${
        theme.palette.mode === "dark" ? blue[400] : blue[200]
      };
    }
  }
  & .MuiTablePaginationUnstyled-displayedRows {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }
  & .MuiTablePaginationUnstyled-actions {
    padding: 2px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    border-radius: 50px;
    text-align: center;
  }
  & .MuiTablePaginationUnstyled-actions > button {
    margin: 0 8px;
    border: transparent;
    border-radius: 2px;
    background-color: transparent;
    &:hover {
      background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    }
    &:focus {
      outline: 1px solid ${
        theme.palette.mode === "dark" ? blue[400] : blue[200]
      };
    }
  }
  `
);

interface DonationProps {
  donations: IDonation[];
  normal?: any;
}

interface pdf {}

export default function ListCampaignDonationComponent(props: DonationProps) {
  const { donations, normal } = props;
  console.log(donations);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const rows = donations.sort((a, b) => (a.names < b.names ? -1 : 1));
  const rowsTop = donations.sort((a, b) => (a.amount > b.amount ? -1 : 1));
  var number = 0;
  var printNumber = 0;
  var today = new Date(),
    date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const history = useHistory();
  const dispatch = useDispatch();
  var totalDonation: any = 0;
  var totalCampaign: any = 0;
  var totalRemain: any = 0;

  const handleViewById = (id: any) => {
    dispatch(getDonate(id, history));
  };

  const exportTopDonorPdfData = () => {
    let doc = new jsPDF();
    let now = new Date();

    let companyName = `HUNGER MS`;
    let fileName = now;
    let imageData = defaultImage;

    doc.setFont(normal, "bold");
    doc.setFontSize(12);
    doc.addImage(imageData, "JPEG", 80, 5, 50, 23);
    doc.setDrawColor(255, 0, 0);
    doc.line(15, 25, 195, 25);
    doc.text(`Print Date:${date}`, 15, 35);
    doc.text(`Printed By:${localStorage.getItem("USERNAME")}`, 15, 43);

    doc.setDrawColor(255, 0, 0);
    doc.line(15, 25, 195, 25);

    // doc.text(`Print date : ${now.toString()}`, 80, 35);

    doc.text("TOP DONOR REPORT", 80, 45);
    doc.line(75, 47, 50, 25);

    // doc.autoTable({
    //   styles: { fontSize: 9 },
    //   theme: "grid",
    //   margin: { top: 40 },
    //   html: "#my-table",
    // });
    autoTable(doc, {
      styles: { fontSize: 9 },
      theme: "grid",
      margin: { top: 60 },
      html: "#my-table-top-donor",
    });

    // doc.setTextColor(255, 0, 0);
    addFooters(doc);

    doc.output("dataurlnewwindow");
  };

  const exportPdfData = () => {
    let doc = new jsPDF();
    let now = new Date();

    let companyName = `HUNGER MS`;
    let fileName = now;
    let imageData = defaultImage;

    doc.setFont(normal, "bold");
    doc.setFontSize(12);
    doc.addImage(imageData, "JPEG", 80, 5, 50, 20);
    doc.setDrawColor(255, 0, 0);
    doc.line(15, 25, 195, 25);
    doc.text(`Print Date:${date}`, 15, 35);
    doc.text(`Printed By:${localStorage.getItem("USERNAME")}`, 15, 43);

    doc.setDrawColor(255, 0, 0);
    doc.line(15, 25, 195, 25);

    // doc.text(`Print date : ${now.toString()}`, 80, 35);

    doc.text("CAMPAIGN DONATION REPORT", 80, 45);
    doc.line(75, 47, 50, 25);

    // doc.autoTable({
    //   styles: { fontSize: 9 },
    //   theme: "grid",
    //   margin: { top: 40 },
    //   html: "#my-table",
    // });
    autoTable(doc, {
      styles: { fontSize: 9 },
      theme: "grid",
      margin: { top: 60 },
      html: "#my-table",
    });

    // doc.setTextColor(255, 0, 0);
    addFooters(doc);

    doc.output("dataurlnewwindow");
  };
  const addFooters = (doc: any) => {
    const pageCount = doc.internal.getNumberOfPages();

    doc.setFont("helvetica", "italic");
    doc.setFontSize(8);
    for (var i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.text(
        "Page " + String(i) + " of " + String(pageCount),
        doc.internal.pageSize.width / 2,
        287,
        {
          align: "center",
        }
      );
    }
  };

  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Title>DONATION LIST</Title>

        <Root sx={{ width: 1200, maxWidth: "100%" }}>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" size="small" onClick={exportPdfData}>
              Print report
            </Button>
            <Button
              variant="outlined"
              size="small"
              onClick={exportTopDonorPdfData}
            >
              Print TOP donor
            </Button>
          </Stack>
          <Divider>
            <Chip />
          </Divider>
          <>
            <table aria-label="custom pagination table">
              <thead>
                <tr>
                  <th>NO</th>
                  <th>NAMES</th>
                  <th>EMAIL</th>
                  <th>PHONE</th>
                  <th>QUANTITY</th>
                  <th>AMOUNT</th>
                  <th>STATUS</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {(rowsPerPage > 0
                  ? rows.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : rows
                ).map((row) => (
                  <tr key={row.id}>
                    <td style={{ width: 120 }}>{(number += 1)}</td>
                    <td style={{ width: 320 }}>{row.names}</td>
                    <td style={{ width: 320 }}>{row.email}</td>

                    <td style={{ width: 320 }} align="right">
                      {row.phone}
                    </td>
                    <td style={{ width: 120 }} align="right">
                      {row.quantity}
                      <p hidden>{(totalDonation += row.quantity)}</p>
                      <p hidden>{(totalCampaign = row.campaign?.quantity)}</p>
                    </td>
                    <td style={{ width: 120 }} align="right">
                      {row.amount}
                    </td>
                    <td style={{ width: 720 }} align="right">
                      {row.received ? `True` : `False`}
                    </td>

                    <td style={{ width: 520 }}>
                      <Button
                        variant="outlined"
                        onClick={() => handleViewById(row.id)}
                      >
                        Details
                      </Button>
                    </td>
                  </tr>
                ))}

                {emptyRows > 0 && (
                  <tr style={{ height: 41 * emptyRows }}>
                    <td colSpan={3} />
                  </tr>
                )}
              </tbody>
              <tfoot>
                <tr>
                  <CustomTablePagination
                    rowsPerPageOptions={[
                      5,
                      10,
                      25,
                      { label: "All", value: -1 },
                    ]}
                    colSpan={8}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    componentsProps={{
                      select: {
                        "aria-label": "rows per page",
                      },
                      actions: {
                        showFirstButton: true,
                        showLastButton: true,
                      } as any,
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </tr>
              </tfoot>
            </table>

            <div>
              <table hidden aria-label="custom pagination table" id="my-table">
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>NAMES</th>
                    <th>EMAIL</th>
                    <th>PHONE</th>
                    <th>QUANTITY</th>
                    <th>AMOUNT</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {(rowsPerPage > 0
                    ? rows.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : rows
                  ).map((row) => (
                    <tr key={row.id}>
                      <td style={{ width: 120 }}>{(printNumber += 1)}</td>
                      <td style={{ width: 320 }}>{row.names}</td>
                      <td style={{ width: 320 }}>{row.email}</td>

                      <td style={{ width: 320 }} align="right">
                        {row.phone}
                      </td>
                      <td style={{ width: 120 }} align="right">
                        {row.quantity}
                      </td>
                      <td style={{ width: 120 }} align="right">
                        {row.amount}
                      </td>
                      <td style={{ width: 720 }} align="right">
                        {row.received ? `True` : `False`}
                      </td>
                    </tr>
                  ))}

                  {emptyRows > 0 && (
                    <tr style={{ height: 41 * emptyRows }}>
                      <td colSpan={3} />
                    </tr>
                  )}
                </tbody>
                <tfoot>
                  {/* {(rowsPerPage > 0
                  ? rows.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : rows
                ).map((row) => ( */}
                  <tr>
                    <td>Donation Update</td>
                    <td>Camaping </td>
                    <td>{totalCampaign}</td>
                    <td>Received</td>
                    <td>{totalDonation}</td>
                    <td>Remain</td>
                    <td>{(totalRemain = totalCampaign - totalDonation)}</td>
                  </tr>

                  {/* ))} */}
                </tfoot>
              </table>
            </div>

            <div>
              <table
                hidden
                aria-label="custom pagination table"
                id="my-table-top-donor"
              >
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>NAMES</th>
                    <th>EMAIL</th>
                    <th>PHONE</th>
                    <th>QUANTITY</th>
                    <th>AMOUNT</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {(rowsPerPage > 0
                    ? rows.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : rowsTop
                  ).map((row) => (
                    <tr key={row.id}>
                      <td style={{ width: 120 }}>{(printNumber += 1)}</td>
                      <td style={{ width: 320 }}>{row.names}</td>
                      <td style={{ width: 320 }}>{row.email}</td>

                      <td style={{ width: 320 }} align="right">
                        {row.phone}
                      </td>
                      <td style={{ width: 120 }} align="right">
                        {row.quantity}
                      </td>
                      <td style={{ width: 120 }} align="right">
                        {row.amount}
                      </td>
                      <td style={{ width: 720 }} align="right">
                        {row.received ? `True` : `False`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        </Root>
      </Paper>
    </Grid>
  );
}
