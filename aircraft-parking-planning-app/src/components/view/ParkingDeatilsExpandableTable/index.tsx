import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ParkingSpot } from '../../../Model/ParkingSpot';
import { Aircraft } from '../../../Model/Aircraft';
import { Flight } from '../../../Model/Flight';

function Row(props: { key: any, row: any, aircraftData: Aircraft[], parkingSpotData: ParkingSpot[] }) {
    const { row } = props;
    const { aircraftData } = props;
    const { parkingSpotData } = props;
    const [open, setOpen] = React.useState(false);
    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {new Date(row.startDateTime!).toLocaleString()}
                </TableCell>
                <TableCell>{new Date(row.endDateTime!).toLocaleString()}</TableCell>
                <TableCell>{aircraftData?.find((aircraftData: { id: any; }) => aircraftData.id === row.aircraftid)?.registrationCode}</TableCell>
                <TableCell>{aircraftData?.find((aircraftData: { id: any; }) => aircraftData.id === row.aircraftid)?.footprintSqm}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Parking Details
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Parking Spot Name</TableCell>
                                        <TableCell>Foot Print Sqm</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={row.key}>
                                        <TableCell>{parkingSpotData?.find((parkingSpotData: { id: any; }) => parkingSpotData.id === row.parkingSpotid)?.name}</TableCell>
                                        <TableCell>{parkingSpotData?.find((parkingSpotData: { id: any; }) => parkingSpotData.id === row.parkingSpotid)?.footprintSqm}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

interface FlightProps {
    flight: Flight[];
    aircraftData: Aircraft[];
    parkingSpotData: ParkingSpot[];

}

export const ParkingDeatilsExpandableTable: React.FC<FlightProps> = ({ flight, aircraftData, parkingSpotData }) => {

    return (

        <TableContainer component={Paper} sx={{ height: 525 }}>
            <Table aria-label="collapsible table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Start Date(MM-DD-YYYY)</TableCell>
                        <TableCell>End Date(MM-DD-YYYY)</TableCell>
                        <TableCell>Registration Code</TableCell>
                        <TableCell>Foot Print Sqm</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {flight?.map((row, index) => (
                        <Row key={index + 1} row={row} aircraftData={aircraftData} parkingSpotData={parkingSpotData} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
}
