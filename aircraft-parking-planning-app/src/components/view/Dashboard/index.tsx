import * as React from 'react';
import { Card, Grid } from '@mui/material';
import { ParkingDeatilsExpandableTable } from '../ParkingDeatilsExpandableTable';
import "./dashboard.css";
import Chart from 'react-google-charts';
import { ConnectingAirports } from '@mui/icons-material';
import { useState } from 'react';
import { Flight } from '../../../Model/Flight';
import axios from 'axios';

export default function HomeView() {

  const baseUrl = "https://localhost:7029/api/";
  const [parkingSpotData, setParkingSpotData] = useState<any[]>();
  const [aircraftData, setAircraftData] = useState<any[]>();
  const [flights, setFlights] = useState<Flight[]>();

  React.useEffect(() => {
    LoadParkingSpot();
    LoadAircraft();
    LoadFLights();
}, []);

async function LoadParkingSpot() {
    axios.get(baseUrl + "ParkingSpot/GetParkingSpot")
        .then(response => {
            setParkingSpotData(response.data);
        })
        .catch(err => console.log(err))
}

async function LoadAircraft() {
     axios.get(baseUrl + "Aircraft/GetAircraft")
        .then(response => {
            setAircraftData(response.data);
        })
        .catch(err => console.log(err))
}

async function LoadFLights() {
     axios.get(baseUrl + "Flights/GetFlight")
        .then(response => {
            setFlights(response.data);
        })
        .catch(err => console.log(err))
}

  const columns = [
    { type: "string", id: "position" },
    { type: "string", id: "registrationCode" },
    { type: "date", id: "startDateTime" },
    { type: "date", id: "endDateTime" },
  ];

  const rows: any[] = []

  flights?.map((row) => {
    return rows.push([(parkingSpotData?.find((parkingSpotData: { id: any; }) => parkingSpotData.id === row.parkingSpotid)?.name), (aircraftData?.find((aircraftData: { id: any; }) => aircraftData.id === row.aircraftid)?.registrationCode), new Date(row.startDateTime!), new Date(row.endDateTime!)]);
  });

  const data = [columns, ...rows];

  return (
    <Grid container spacing={2} margin={2}>
      <Grid item xs={8}>
        <ParkingDeatilsExpandableTable flight={flights!} aircraftData={aircraftData!} parkingSpotData={parkingSpotData!} />
      </Grid>
      <Grid item xs={4}>
        <Card className="styed-card">
          <ConnectingAirports style={{ fontSize: '200px', marginTop: '20px' }}></ConnectingAirports>
        </Card>
        <Card className="styed-card" >
          {data &&(<Chart chartType="Timeline" data={data} />)}
          <h5>Parking Overview</h5>
        </Card>
      </Grid>
    </Grid>

  );
}
