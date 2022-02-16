import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ListAboutComponent from "../../../../components/admin/masterDate/about/ListAbout";
import ListServiceComponent from "../../../../components/admin/masterDate/service/ListAbout";
import AdminDashboardLayout from "../../../../components/layout/Admin";
import { AppState } from "../../../../store/configureStore";

import { IAbout } from "../../../../store/masterData/about/types";
import { getServices } from "../../../../store/masterData/services/actions";
import { IService } from "../../../../store/masterData/services/types";

type Props = {
  history: any;
  location: any;
};

export default function ListService(props: Props) {
  const dispatch = useDispatch();

  const { services }: { services: IService[] } = useSelector(
    (state: AppState) => state.service
  );
  React.useEffect(() => {
    dispatch(getServices());
  }, []);
  return (
    <AdminDashboardLayout>
      <ListServiceComponent services={services} />
    </AdminDashboardLayout>
  );
}
