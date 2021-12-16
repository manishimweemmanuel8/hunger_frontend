import React, { ChangeEvent, useState, useEffect } from "react";
import Layout from "../../../components/Layout/Client";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../store/configureStore";
import { getClients } from "../../../store/admin/actions";
import { IClient } from "../../../store/admin/types";
import { decode } from "jsonwebtoken";
import "./style.scss";
import { Contactless, Fastfood, Money, Payment, PeopleAlt, PlaylistAddCheck, Restaurant } from '@material-ui/icons';
import { Grid, Paper, Typography } from "@material-ui/core";
import clsx from 'clsx';
import {theme} from './style'
import {ThemeProvider} from "@material-ui/core";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';

type Props = {
  history: any;
}; 

// Generate Sales Data
function createData(time:any, amount:any) {
  return { time, amount };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

export const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
   
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const DashboardClient = (props:Props) => {
  const classes = useStyles();
  // const theme = useTheme();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClients());
    // eslint-disable-next-line
  }, []);

  const { clients }: { clients: IClient[] } = useSelector(
    (state: AppState) => state.admin
  );

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <Layout>
      <div className  ="section-1">
        <div className  ="content row">   
            <div className="col dashboard-card">
              <div className="icon-client"><PeopleAlt style={{color: "rgba(255, 166, 1)", opacity: 1}}/></div>
                <div className="text">
                <h1>2000</h1>
               <p>Employees</p>
             </div>
           </div>
           <div className="col dashboard-card">
            <div className="dashboard-icon"><Fastfood style={{color: "rgba(210, 67, 0, 1)", opacity: 1 }}/></div>
            <div className="text">
              <h1>1000</h1>
              <p>Products on menu</p>
            </div>
          </div>
           <div className="col dashboard-card">
              <div className="icon-client"><PlaylistAddCheck style={{color: "green", opacity: 1}}/></div>
                <div className="text">
                <h1>2000</h1>
               <p>Orders</p>
             </div>
           </div>
        </div>
        <div className  ="content row">   
            <div className="col dashboard-card">
              <div className="icon-client"><Money style={{color: "rgba(255, 166, 1)", opacity: 1}}/></div>
                <div className="text">
                <h1>2000 frw</h1>
               <p>Cash payments</p>
             </div>
           </div>
           <div className="col dashboard-card">
            <div className="dashboard-icon"><Contactless style={{color: "yellow", opacity: 1 }}/></div>
            <div className="text">
              <h1>1000 frw</h1>
              <p>Momo payments</p>
            </div>
          </div>
           <div className="col dashboard-card">
              <div className="icon-client"><Payment /></div>
                <div className="text">
                <h1>2000 frw</h1>
               <p>Card payments</p>
             </div>
           </div>
        </div>
    </div>
    <div className  ="section-2">
        <div className  ="content">
              <Paper className={fixedHeightPaper}>
                {/* <Chart /> */}
                {/* <Title>Today</Title> */}
                <Typography component="h2" variant="h6"  gutterBottom>
                  Today
                </Typography>
                  <ResponsiveContainer>
                    <LineChart
                      data={data}
                      margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                      }}
                    >
                      <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
                      <YAxis stroke={theme.palette.text.secondary}>
                        <Label
                          angle={270}
                          position="left"
                          style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
                        >
                          Orders
                        </Label>
                      </YAxis>
                      <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
              </Paper>
        </div>
    </div>
    </Layout>
  );
};

export default DashboardClient;