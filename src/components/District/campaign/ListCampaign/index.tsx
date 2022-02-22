import * as React from "react";
import { styled } from "@mui/system";
import TablePaginationUnstyled from "@mui/base/TablePaginationUnstyled";
import {
  Button,
  CardMedia,
  Chip,
  Divider,
  Grid,
  Paper,
  Stack,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import { IDistrict } from "../../../../store/district/types";
import Title from "../../../../pages/admin/Dashboard/title";
import { ICampaign } from "../../../../store/campaign/types";
import defaultImage from "../../../../assets/images/logo192.png";
import { useDispatch } from "react-redux";
import { getCampaign } from "../../../../store/campaign/actions";

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

interface CampaignProps {
  campaigns: ICampaign[];
}

export default function ListCampaignComponent(props: CampaignProps) {
  const { campaigns } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const rows = campaigns.sort((a, b) => (a.name < b.name ? -1 : 1));
  var number = 0;

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
  const image = false;
  const handleViewById = (id: any) => {
    dispatch(getCampaign(id, history));
    // history.push(`/district/campaign/${id}`);
  };
  const handleImageById = (id: any) => {
    // dispatch(getCampaign(id,history, image:true));
    history.push(`/district/campaign/image/${id}`);
  };

  const handleDonationById = (id: any) => {
    history.push(`/district/campaign/donation/${id}`);
  };

  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Title>CAMPAIGN LIST</Title>

        <Root sx={{ width: 1200, maxWidth: "100%" }}>
          <Button
            variant="outlined"
            size="small"
            href="/district/campaign/create"
          >
            ADD NEW
          </Button>
          <Divider>
            <Chip />
          </Divider>
          <>
            <table aria-label="custom pagination table">
              <thead>
                <tr>
                  <th>NO</th>
                  <th>IMAGE</th>
                  <th>NAME</th>
                  <th>QUALITY</th>
                  <th>QUANTITY</th>
                  <th>DESCRIPTION</th>
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
                  <tr key={row.name}>
                    <td style={{ width: 120 }}>{(number += 1)}</td>
                    <td style={{ width: 120 }}>
                      <CardMedia
                        onClick={() => handleImageById(row.id)}
                        component="img"
                        sx={{
                          width: 30,
                          height: 25,
                          display: { xs: "none", sm: "block" },
                        }}
                        image={
                          row.image
                            ? `http://localhost:3001/api/v1/campaign/image/${row.image}`
                            : defaultImage
                        }
                        alt={row.image}
                      />
                    </td>

                    <td style={{ width: 320 }} align="right">
                      {row.name}
                    </td>
                    <td style={{ width: 120 }} align="right">
                      {row.quality}
                    </td>
                    <td style={{ width: 120 }} align="right">
                      {row.quantity}
                    </td>
                    <td style={{ width: 720 }} align="right">
                      {row.description}
                    </td>
                    <td style={{ width: 120 }} align="right">
                      {row.status ? `True` : `False`}
                    </td>

                    <td style={{ width: 520 }}>
                      <Stack
                        spacing={2}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Button
                          variant="outlined"
                          onClick={() => handleViewById(row.id)}
                        >
                          Details
                        </Button>
                        <Button
                          variant="outlined"
                          onClick={() => handleDonationById(row.id)}
                        >
                          Donation
                        </Button>
                      </Stack>
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
          </>
        </Root>
      </Paper>
    </Grid>
  );
}
