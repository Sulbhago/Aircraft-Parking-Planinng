import React, { useState } from "react";
import { Chart } from "react-google-charts";
import { Grid } from "@mui/material";
import { Flight } from "../../../Model/Flight";
import axios from "axios";

export default function ParkingChartOverview() {
  const baseUrl = "https://localhost:7029/api/";
  const [parkingSpotData, setParkingSpotData] = useState<any[]>();
  const [aircraftData, setAircraftData] = useState<any[]>();
  const [flights, setFlights] = useState<Flight[]>();

  React.useEffect(() => {
    LoadParkingSpot();
    LoadAircraft();
    LoadFLights();
  }, []);

  function LoadParkingSpot() {
    axios.get(baseUrl + "ParkingSpot/GetParkingSpot")
      .then(response => {
        setParkingSpotData(response.data);
      })
      .catch(err => console.log(err))
  }

  function LoadAircraft() {
    axios.get(baseUrl + "Aircraft/GetAircraft")
      .then(response => {
        setAircraftData(response.data);
      })
      .catch(err => console.log(err))
  }

  function LoadFLights() {
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

  console.log(flights);
  const rows: any[] = []

  flights?.map((row) => {
    return rows.push([(parkingSpotData?.find((parkingSpotData: { id: any; }) => parkingSpotData.id === row.parkingSpotid)?.name) + "----" + new Date(row.startDateTime!).toDateString(), (aircraftData?.find((aircraftData: { id: any; }) => aircraftData.id === row.aircraftid)?.registrationCode), new Date(row.startDateTime!), new Date(row.endDateTime!)]);
  });

  const data = [columns, ...rows];

  var options = {
    timeline: {
      showRowLabels: true,
      showBarLabels: true
    }
  };


  return (
    <Grid container margin={2}>
      <Grid item xs={12}>
        <h3 style={{ justifyContent: 'flex-start', display: 'flex' }}>{'Parking Overview'}</h3>
        <h6 style={{ justifyContent: 'flex-start', display: 'flex' }}>{'Parking spot name: (North- N1, N2, N3) (South- S1, S2, S3)...'}</h6>
      </Grid>
      <Grid item xs={12}>
      {data &&(<Chart chartType="Timeline" data={data} options={options} width="100%" height="600px" />)}
      </Grid>
    </Grid>
  );
}
