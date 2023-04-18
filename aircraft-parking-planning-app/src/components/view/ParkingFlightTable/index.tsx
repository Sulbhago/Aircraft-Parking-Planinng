import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Flight } from '../../../Model/Flight';
import { Aircraft } from '../../../Model/Aircraft';
import { ParkingSpot } from '../../../Model/ParkingSpot';

interface FlightProps {
    flight: Flight[];
    aircraftData?: Aircraft[];
    parkingSpotData: ParkingSpot[];
}

export const ParkingFlightTable: React.FC<FlightProps> = ({ flight, aircraftData, parkingSpotData }) => {
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Start Date(MM-DD-YYYY)</TableCell>
                            <TableCell>End Date(MM-DD-YYYY)</TableCell>
                            <TableCell>Registration Code</TableCell>
                            <TableCell>Foot Print Sqm</TableCell>
                            <TableCell>Parking Spot Name</TableCell>
                            <TableCell>Parking Foot Print Sqm</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {flight?.map((row, index) => {
                            return (
                                <TableRow key={row.id}>
                                    <TableCell>{new Date(row.startDateTime!).toLocaleString()}</TableCell>
                                    <TableCell>{new Date(row.endDateTime!).toLocaleString()}</TableCell>
                                    <TableCell>{aircraftData?.find((aircraftData: { id: any; }) => aircraftData.id === row.aircraftid)?.registrationCode}</TableCell>
                                    <TableCell>{aircraftData?.find((aircraftData: { id: any; }) => aircraftData.id === row.aircraftid)?.footprintSqm}</TableCell>
                                    <TableCell>{parkingSpotData?.find((parkingSpotData: { id: any; }) => parkingSpotData.id === row.parkingSpotid)?.name}</TableCell>
                                    <TableCell>{parkingSpotData?.find((parkingSpotData: { id: any; }) => parkingSpotData.id === row.parkingSpotid)?.footprintSqm}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
