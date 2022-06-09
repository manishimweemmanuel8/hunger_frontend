import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { ICampaign } from "../../../store/campaign/types";
import defaultImage from "../../../assets/images/logo192.png";
import Backdrop from "@mui/material/Backdrop";
import { Box, Button, Fade, Modal, Stack } from "@mui/material";
import DonationComponent from "../Donation";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../store/configureStore";
import { createDonate } from "../../../store/donation/actions";
import ModalBox from "../../ui/Modal/MessageAlert";
import { createSubscription } from "../../../store/subscription/actions";
import SubscriptionComponent from "../Subscription";
import { useHistory } from "react-router-dom";


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
  history?: any;
}

export default function CampaignList(props: CampaignProps) {
  const { campaign } = props;
  const campId = campaign.id;
  const history = useHistory();

  // const params = useParams<RouteParams>();
  const handleOpenFeedback = () => {
    history.push(`/campaign/beneficiaries/feedback/${campId}`);
  };

  const image = `http://localhost:3001/api/v1/campaign/image/${campaign.image}`;
  const [openDonation, setOpenDonation] = React.useState(false);
  const handleOpenDonation = () => setOpenDonation(true);
  const handleCloseDonation = () => setOpenDonation(false);
  const dispatch = useDispatch();

  const donationReducer = useSelector((state: AppState) => state.donation);
 
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
    dispatch(createDonate(data, props.history));
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
    dispatch(createSubscription(dataS, props.history));
  };
  const handleCloseS = (event: React.MouseEvent<HTMLElement>) => {
    setModalStateS({ ...modalStateS, open: false });
  };

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ height: 230, display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {campaign.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {campaign.createdDate.substring(0, 10)}
            </Typography>
            <Typography variant="subtitle1" color="text.primary">
              Quality: {campaign.quality} , Quantity: {campaign.quantity}
            </Typography>

            <Typography
              variant="subtitle1"
              paragraph
              sx={{
                position: "relative",
                overflow: "auto",
                maxHeight: 70,
              }}
            >
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
                  FEEDBACK
              </Button>
            </Stack>
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              width: 160,
              height: 230,
              display: { xs: "none", sm: "block" },
            }}
            image={campaign.image ? image : defaultImage}
            alt={campaign.image}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}
