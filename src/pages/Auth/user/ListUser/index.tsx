import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ListDistrictComponent from "../../../../components/admin/district/ListDistrict";
import ListUserComponent from "../../../../components/auth/user/ListUser";
import AdminDashboardLayout from "../../../../components/layout/Admin";
import { getUsers } from "../../../../store/auth/actions";
import { IUser } from "../../../../store/auth/types";
import { AppState } from "../../../../store/configureStore";
import { getDistricts } from "../../../../store/district/actions";
import { IDistrict } from "../../../../store/district/types";

type Props = {
  history: any;
  location: any;
};

export default function ListUser(props: Props) {
  const dispatch = useDispatch();

  const { users }: { users: IUser[] } = useSelector(
    (state: AppState) => state.auth
  );
  React.useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <AdminDashboardLayout>
      <ListUserComponent users={users} />
    </AdminDashboardLayout>
  );
}
