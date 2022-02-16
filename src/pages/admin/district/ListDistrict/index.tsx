import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ListDistrictComponent from "../../../../components/admin/district/ListDistrict";
import AdminDashboardLayout from "../../../../components/layout/Admin";
import { AppState } from "../../../../store/configureStore";
import { getDistricts } from "../../../../store/district/actions";
import { IDistrict } from "../../../../store/district/types";

type Props = {
  history: any;
  location: any;
};

export default function ListDistrict(props: Props) {
  const dispatch = useDispatch();

  const { districts }: { districts: IDistrict[] } = useSelector(
    (state: AppState) => state.district
  );
  React.useEffect(() => {
    dispatch(getDistricts());
  }, []);
  console.log(districts);
  return (
    <AdminDashboardLayout>
      <ListDistrictComponent districts={districts} />
    </AdminDashboardLayout>
  );
}
