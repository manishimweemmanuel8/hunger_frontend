import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './title';
import { ICampaign } from '../../../store/campaign/types';

// Generate Order Data



function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}
interface CampaignProps {
  campaigns: ICampaign[];
}
export default function Campaigns(props: CampaignProps) {
  const {campaigns}=props;
  return (
    <React.Fragment>
      <Title>Recent Campaing</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Quality</TableCell>
            <TableCell>Quantity Method</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {campaigns.sort((a, b) => Date.parse(b.createdDate) - Date.parse(a.createdDate)).slice(0, 5).map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.createdDate.substring(0, 10)}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.quality}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.status? `True` : `False`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Link color="primary" href="/district/campaign"  sx={{ mt: 3 }}>
        See more campaing
      </Link> */}
    </React.Fragment>
  );
}