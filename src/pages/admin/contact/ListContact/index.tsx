import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ListContactComponent from "../../../../components/admin/masterDate/contact/ListContact";
import AdminDashboardLayout from "../../../../components/layout/Admin";
import { AppState } from "../../../../store/configureStore";
import { getContacts } from "../../../../store/masterData/contact/actions";
import { IContact } from "../../../../store/masterData/contact/types";


type Props = {
  history: any;
  location: any;
};

export default function ListContact(props: Props) {
  const dispatch = useDispatch();

  const { contacts }: { contacts: IContact[] } = useSelector(
    (state: AppState) => state.contact
  );
  React.useEffect(() => {
    dispatch(getContacts());
  }, []);
  return (
    <AdminDashboardLayout>
      <ListContactComponent contacts={contacts} />
    </AdminDashboardLayout>
  );
}
