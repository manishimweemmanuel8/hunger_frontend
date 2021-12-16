import "./style.scss";
import { PeopleAlt, Restaurant } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core/styles";
import SupporterLayout from "../../../components/Layout/Supporter";

type Props = {
  history: any;
};





export const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

const SupporterDashboard = (props: Props) => {

  return (
    <SupporterLayout>
      <div className="section-1">
        <div className="content row">
          <div className="col dashboard-card">
            <div className="icon-client">
              <PeopleAlt style={{ color: "rgba(255, 166, 1)", opacity: 1 }} />
            </div>
            <div className="text">
              <h1>2000</h1>
              <p>Users</p>
            </div>
          </div>
          <div className="col dashboard-card">
            <div className="dashboard-icon">
              <Restaurant
                style={{ color: "rgba(210, 67, 0, 1)", opacity: 1 }}
              />
            </div>
            <div className="text">
              <h1>1000</h1>
              <p>Request</p>
            </div>
          </div>

          <div className="col dashboard-card">
            <div className="icon-client">
              <PeopleAlt style={{ color: "rgba(255, 166, 1)", opacity: 1 }} />
            </div>
            <div className="text">
              <h1>1000</h1>
              <p>Received request</p>
            </div>
          </div>
        </div>
      </div>
    </SupporterLayout>
  );
};

export default SupporterDashboard;
