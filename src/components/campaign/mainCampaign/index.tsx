import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { ICampaign } from "../../../store/campaign/types";
import { Backdrop, Button, Fade, Modal, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../store/configureStore";
import { createDonate } from "../../../store/donation/actions";
import { createSubscription } from "../../../store/subscription/actions";
import ModalBox from "../../ui/Modal/MessageAlert";
import DonationComponent from "../Donation";
import SubscriptionComponent from "../Subscription";
import { useHistory } from "react-router-dom";
// import { useParams } from "react-router-dom";

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
interface CampaignProps {
  campaign: ICampaign;
}
// interface RouteParams {
//   id: string;
// }

export default function MainCampaign(props: CampaignProps) {
  const { campaign } = props;
  const campId = campaign.id;
  const history = useHistory();

  // const params = useParams<RouteParams>();
  const handleOpenFeedback = () => {
    history.push(`/campaign/beneficiaries/feedback/${campId}`);
  };


  const image = `http://localhost:3001/api/v1/campaign/image/${campaign.image}`;
  const donationReducer = useSelector((state: AppState) => state.donation);
  const [openDonation, setOpenDonation] = React.useState(false);
  const handleOpenDonation = () => setOpenDonation(true);
  const handleCloseDonation = () => setOpenDonation(false);
  const dispatch = useDispatch();


  const {
    errors,
    message,
  }: {
    errors: any;
    message: string;
  } = donationReducer;
  React.useEffect(() => {
    if (message || errors) {
      setModalState({ ...modalState, open: true });
      setState({ ...state, spinner: false });
    }
    // eslint-disable-next-line
  }, [donationReducer]);

  const [state, setState] = React.useState({
    names: "",
    email: "",
    phone: "",
    location: "",
    campaignId: "",
    description: "",
    amount: 0,
    spinner: false,
  });
  const [modalState, setModalState] = React.useState({
    open: false,
  });
  const { names, email, phone, location, campaignId, description, amount } =
    state;
  const data = {
    names,
    email,
    phone,
    location,
    campaignId: campId,
    description,
    amount,
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setState({ ...state, spinner: true });
    dispatch(createDonate(data, history));
  };
  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    setModalState({ ...modalState, open: false });
  };

  //Subscription

  const [openSubscription, setOpenSubscription] = React.useState(false);
  const handleOpenSubscription = () => setOpenSubscription(true);
  const handleCloseSubscription = () => setOpenSubscription(false);

  const subscriptionReducer = useSelector(
    (stateS: AppState) => stateS.subscription
  );

  const {
    errorsS,
    messageS,
  }: {
    errorsS: any;
    messageS: string;
  } = subscriptionReducer ;
  React.useEffect(() => {
    if (messageS || errorsS) {
      setModalStateS({ ...modalStateS, open: true });
      setStateS({ ...stateS, spinnerS: false });
    }
    // eslint-disable-next-line
  }, [subscriptionReducer]);

  const [stateS, setStateS] = React.useState({
    emailS: "",
    campaignIdS: "",
    spinnerS: false,
  });
  const [modalStateS, setModalStateS] = React.useState({
    open: false,
  });
  const { emailS, campaignIdS } = stateS;
  const dataS = {
    emailS,
    campaignIdS: campId,
  };
  const onChangeS = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setStateS({ ...stateS, [name]: value });
  };
  const onSubmitS = (event: React.FormEvent) => {
    event.preventDefault();
    setStateS({ ...stateS, spinnerS: true });
    dispatch(createSubscription(dataS, history));
  };
  const handleCloseS = (event: React.MouseEvent<HTMLElement>) => {
    setModalStateS({ ...modalStateS, open: false });
  };

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: "none" }} src={image} alt={campaign.image} />}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              color="inherit"
              gutterBottom
            >
              {campaign.name}
            </Typography>
            <Typography
              component="h1"
              variant="h5"
              color="inherit"
              gutterBottom
            >
              quality: {campaign.quality} 
              </Typography>
              <Typography
              component="h1"
              variant="h5"
              color="inherit"
              gutterBottom
            >
               quantity: {campaign.quantity}
              </Typography>
            <Typography variant="h6" color="inherit" paragraph>
              {campaign.description}
            </Typography>
            <Stack
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                type="button"
                color="inherit"
                variant="outlined"
                onClick={handleOpenDonation}
              >
                Donate
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openDonation}
                onClose={handleCloseDonation}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={openDonation}>
                  <Box sx={style}>
                    <ModalBox
                      handleClose={handleClose}
                      state={modalState}
                      message={message}
                      error={errors && errors.message}
                      title={"Donation"}
                    />
                    <DonationComponent
                      // handleCloseDonation={handleCloseDonation}
                      onChange={onChange}
                      state={state}
                      onSubmit={onSubmit}
                      campaign={campaign}
                    />
                  </Box>
                </Fade>
              </Modal>
              <Button
                variant="outlined"
                color="inherit"
                onClick={handleOpenSubscription}
              >
                Subscribe
              </Button>

              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openSubscription}
                onClose={handleCloseSubscription}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={openSubscription}>
                  <Box sx={style}>
                    <ModalBox
                      handleClose={handleCloseS}
                      state={modalStateS}
                      message={messageS}
                      error={errorsS && errorsS.message}
                      title={"Subscription"}
                    />
                    <SubscriptionComponent
                      // handleCloseDonation={handleCloseDonation}
                      onChangeS={onChangeS}
                      stateS={stateS}
                      onSubmitS={onSubmitS}
                      campaign={campaign}
                    />
                  </Box>
                </Fade>
              </Modal>

              <Button
                type="button"
                color="inherit"
                variant="outlined"
                onClick={handleOpenFeedback}
              >
                 BENEFICIARIES FEEDBACK
              </Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
