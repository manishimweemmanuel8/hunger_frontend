import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddAboutComponent from "../../../../components/admin/masterDate/about/AddAbout";
import ListAboutComponent from "../../../../components/admin/masterDate/about/ListAbout";
import AdminDashboardLayout from "../../../../components/layout/Admin";
import ModalBox from "../../../../components/ui/Modal/MessageAlert";
import { AppState } from "../../../../store/configureStore";
import {
  createAbout,
  getAbouts,
} from "../../../../store/masterData/about/actions";
import { IAbout } from "../../../../store/masterData/about/types";

type Props = {
  history: any;
  location: any;
};

export default function ListAbout(props: Props) {
  const dispatch = useDispatch();

  const { abouts }: { abouts: IAbout[] } = useSelector(
    (state: AppState) => state.about
  );
  React.useEffect(() => {
    dispatch(getAbouts());
  }, []);
  console.log(abouts);
  return (
    <AdminDashboardLayout>
      <ListAboutComponent abouts={abouts} />
    </AdminDashboardLayout>
  );
}
