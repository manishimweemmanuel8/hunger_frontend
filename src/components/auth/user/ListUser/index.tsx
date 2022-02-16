import * as React from "react";
import { Box, styled } from "@mui/system";
import TablePaginationUnstyled from "@mui/base/TablePaginationUnstyled";
import {
  Backdrop,
  Button,
  Chip,
  Divider,
  Fade,
  Grid,
  Modal,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import { IDistrict } from "../../../../store/district/types";
import Title from "../../../../pages/admin/Dashboard/title";
import { useDispatch, useSelector } from "react-redux";
import { getDistrict } from "../../../../store/district/actions";
import { IUser } from "../../../../store/auth/types";
import { changeUserPassword, getUser } from "../../../../store/auth/actions";
import { AppState } from "../../../../store/configureStore";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import ModalBox from "../../../ui/Modal/MessageAlert";

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
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface UsersProps {
  users: IUser[];
  history?: any;
}

export default function ListUserComponent(props: UsersProps) {
  const [openP, setOpenP] = React.useState(false);
  const handleOpenP = () => setOpenP(true);
  const handleCloseP = () => setOpenP(false);
  const { users } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const rows = users;
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

  const handleViewById = (id: any) => {
    dispatch(getUser(id, history));
  };

  const authReducer = useSelector((state: AppState) => state.auth);
  const { user }: { user: IUser } = authReducer;

  const {
    errors,
    message,
  }: {
    errors: any;
    message: string;
  } = authReducer;
  React.useEffect(() => {
    if (message || errors) {
      setModalState({ ...modalState, open: true });
      setState({ ...state, spinner: false });
    }
    // eslint-disable-next-line
  }, [authReducer]);

  const [state, setState] = React.useState({
    password: "",
    username: "",
    spinner: false,
  });

  const [modalState, setModalState] = React.useState({
    open: false,
  });
  const { password, username } = state;
  const data = {
    password,
    username,
  };
  const [isPasswordField, setIsPasswordField] = React.useState(true);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setState({ ...state, spinner: true });
    console.log(data);
    dispatch(changeUserPassword(data, props.history));
  };
  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    setModalState({ ...modalState, open: false });
  };

  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Title>USER LIST</Title>

        <Root sx={{ width: 1200, maxWidth: "100%" }}>
          <Button
            type="button"
            color="inherit"
            variant="outlined"
            onClick={handleOpenP}
          >
            CHANGE PASSWORD
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openP}
            onClose={handleCloseP}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={openP}>
              <Box sx={style}>
                <ModalBox
                  handleClose={handleClose}
                  state={modalState}
                  message={message}
                  error={errors && errors.message}
                  title={"Change password"}
                />
                <Box
                  p={1}
                  sx={{
                    marginTop: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography component="h1" variant="h5">
                    CHANGE PASSWORD
                  </Typography>
                  <Box
                    component="form"
                    onSubmit={onSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                  >
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="username"
                      label="username"
                      name="username"
                      value={username}
                      autoComplete="username"
                      autoFocus
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        onChange(e)
                      }
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      value={password}
                      label="Password"
                      // type="password"
                      id="password"
                      autoComplete="current-password"
                      type={isPasswordField ? "password" : "text"}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        onChange(event)
                      }
                      InputProps={{
                        // startAdornment: <LockOutlined className="txt-icon" />,
                        endAdornment: isPasswordField ? (
                          <VisibilityOutlined
                            className="txt-icon-active"
                            onClick={() => setIsPasswordField(!isPasswordField)}
                          />
                        ) : (
                          <VisibilityOffOutlined
                            className="txt-icon-active"
                            onClick={() => setIsPasswordField(!isPasswordField)}
                          />
                        ),
                      }}
                    />

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      SUBMIT
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Fade>
          </Modal>
          <Divider>
            <Chip />
          </Divider>
          <>
            <table aria-label="custom pagination table">
              <thead>
                <tr>
                  <th>NO</th>
                  <th>USERNAME</th>
                  <th>EMAIL</th>
                  <th>ROLE</th>
                  <th>STATUS</th>
                  <th align="center">ACTION</th>
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

                    <td style={{ width: 320 }} align="right">
                      {row.username}
                    </td>
                    <td style={{ width: 320 }} align="right">
                      {row.email}
                    </td>
                    <td style={{ width: 320 }} align="right">
                      {row.role}
                    </td>
                    <td style={{ width: 120 }} align="right">
                      {row.isActive ? `True` : `False`}
                    </td>
                    <td style={{ width: 520 }} align="center">
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
                    colSpan={6}
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
