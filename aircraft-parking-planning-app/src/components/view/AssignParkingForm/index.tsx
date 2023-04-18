import React, { useState } from 'react';
import { useFormik } from 'formik';
import './style.css';
import { Alert, Button, Card, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { isValid } from 'date-fns';
import { LocalizationProvider, MobileDateTimePicker } from '@mui/x-date-pickers';
import { Close } from '@mui/icons-material';
import { ParkingFlightTable } from '../ParkingFlightTable';
import axios from 'axios';
import { Flight } from '../../../Model/Flight';
import { ParkingSpot } from '../../../Model/ParkingSpot';

function ParkingForm() {
    const baseUrl = "https://localhost:7029/api/";

    const [isValidValue, setIsValidValue] = useState(false);
    const [errorMessages, setErrorMessage] = useState('');
    const [isOpneErrorMessage, setIsOpneErrorMessage] = useState(false);

    const dateFormat = "YYYY-MM-DDTHH:mm:00";
    const [startDate, setStartDate] = useState<Dayjs | any>(dayjs(Date()));
    const [endDate, setEndDate] = useState<Dayjs | any>(dayjs(Date()));

    const [parkingSpotData, setParkingSpotData] = useState<ParkingSpot[]>();
    const [aircraftData, setAircraftData] = useState<any[]>();
    const [flights, setFlights] = useState<Flight[]>();

    const [airCraftId, setAirCraftId] = useState('');
    const [parkingSpotId, setparkingSpotId] = useState('');

    const [aircraftFootPrintSqm, setAircraftFootPrintSqm] = useState<undefined | null | number>(0);
    const [selectedParkingSlotTotalSpace, setSelectedParkingSlotTotalSpace] = useState<undefined | null | number>(0);
    const [occupiedFootPrintSqm, setoccupiedFootPrintSqm] = useState<undefined | null | number>(0);
    const [freespace, setfreeSpace] = useState<undefined | null | number>(0);

    const [overAllOccupied, setOverAllOccupied] = useState<undefined | null | number>(0);
    const [overAllFreeSpace, setOverAllFreeSpace] = useState<undefined | null | number>(0);
    const [isDilogOpen, setIsDilogOpen] = useState(false);

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

    const formik = useFormik({
        initialValues: {
            registraionCode: '',
            startDate: '',
            endDate: '',
            parkingSlotName: '',
        },
        onSubmit: async (data) => {
            validation();
            if (isValidValue) {
                setIsDilogOpen(true);
            }
        },
    });

    const handleCancel = () => {
        setIsValidValue(false);
        setIsDilogOpen(false);
    };

    const handleConfirmation = async () => {
        const Flight: Flight[] = []
        Flight?.push(
            {
                startDateTime: startDate.format(dateFormat),
                endDateTime: endDate.format(dateFormat),
                aircraftid: parseInt(airCraftId),
                parkingSpotid: parseInt(parkingSpotId),
                id: 0
            }
        );
        try {
            await axios.post(baseUrl + "Flights/AddFlight", Flight[0]);
            alert("Parking Assign Successfully");
            setIsDilogOpen(false);
            LoadParkingSpot();
            LoadAircraft();
            LoadFLights();
        } catch (err) {
            alert(err);
        }
    };

    const handleReset = () => {
        formik.values.registraionCode = '';
        formik.values.parkingSlotName = '';

        setSelectedParkingSlotTotalSpace(0);
        setoccupiedFootPrintSqm(0);
        setfreeSpace(0);
        setparkingSpotId('');
        setAirCraftId('')
        setOverAllFreeSpace(0);
        setOverAllOccupied(0);
        setAircraftFootPrintSqm(0);
    };

    const handleSelectChange = async (event: SelectChangeEvent) => {
        if (event.target.value) {
            setparkingSpotId(event.target.value);
            const result = await axios.get(baseUrl + "ParkingSpot/GetParkingSpotByID/" + event.target.value);
            setSelectedParkingSlotTotalSpace(result.data.footprintSqm);
            setoccupiedFootPrintSqm(aircraftFootPrintSqm);
            setfreeSpace(result.data.footprintSqm! - aircraftFootPrintSqm!);

            calculateOverallOccupiedSpace();
            calculateOverallFreeSpace(parkingSpotData!);

        }
    };

    const handleRegistrationCodeSelectChange = async (event: SelectChangeEvent) => {
        if (event.target.value) {
            setAirCraftId(event.target.value);
            const result = await axios.get(baseUrl + "Aircraft/GetAircraftByID/" + event.target.value);
            setAircraftFootPrintSqm(result.data.footprintSqm);
            setoccupiedFootPrintSqm(result.data.footprintSqm);
            setIsValidValue(false);
        }
    };

    function calculateOverallOccupiedSpace() {
        let totalOccupied = 0;

        flights?.map((row) => {
            const startD = row.startDateTime ? row.startDateTime : '';
            const endD = row.endDateTime ? row.endDateTime : '';

            if (startDate.format(dateFormat) <= endD && endDate.format(dateFormat) >= startD) {
                const aircraftFootprint = aircraftData?.find((aircraftData: { id: any; }) => aircraftData.id === row.aircraftid)?.footprintSqm;
                totalOccupied += aircraftFootprint;
            }
            return totalOccupied;
        });

        setOverAllOccupied(totalOccupied);

    }

    function calculateOverallFreeSpace(parkingSpotData: ParkingSpot[]) {
        let overallFreeSpace = 0;

        for (let i = 0; i < parkingSpotData.length; i++) {
            overallFreeSpace += parkingSpotData[i].footprintSqm;
        }
        setOverAllFreeSpace(overallFreeSpace - overAllOccupied!);
        return overallFreeSpace;
    }

    const validation = () => {

        const aircraftFootprint = aircraftData?.find((aircraftData: { id: any; }) => aircraftData.id === airCraftId)?.footprintSqm;
        const parkingSpotFootprint = parkingSpotData?.find((parkingSpotData: { id: any; }) => parkingSpotData.id === parkingSpotId)?.footprintSqm;

        if (aircraftFootprint > parkingSpotFootprint!) {
            setIsOpneErrorMessage(true);
            setErrorMessage('aircraft footprint should be less than equal to parking spot size');
        }
        else {

            if (flights?.length === 0) {
                setIsValidValue(true);
            }
            else {
                // eslint-disable-next-line 
                flights?.map((row) => {

                    const parkingSpotid = row.parkingSpotid.toString();
                    const selectedParkingSpotId = parkingSpotId.toString();

                    if (parkingSpotid === selectedParkingSpotId) {

                        const startD = row.startDateTime ? row.startDateTime : '';
                        const endD = row.endDateTime ? row.endDateTime : '';

                        if (startDate.format(dateFormat) <= endD && endDate.format(dateFormat) >= startD) {
                            setIsOpneErrorMessage(true);
                            setErrorMessage('There is no free parking space untill-' + row.endDateTime);
                            setIsValidValue(false);
                        }
                        else {
                            setIsValidValue(true);
                        }
                    }
                    else {
                        setIsValidValue(true);
                    }
                });
            }
        }
    }

    return (

        <><Grid container>
            <Grid item xs={12}>
                <Card className="card">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-div">
                            <Grid className="form-title">
                                <Typography variant="h6">Choose Parking Space</Typography>
                            </Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={6} sm={6}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <MobileDateTimePicker
                                            label="Start Date"
                                            ampm={false}
                                            value={startDate}
                                            //minDateTime={startDate}
                                            onChange={(value) => setStartDate(isValid(value) ? value : value)}
                                            slotProps={{ textField: { fullWidth: true, helperText: 'MM / DD / YYYY' } }} />
                                    </LocalizationProvider>

                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <MobileDateTimePicker
                                            label="End Date"
                                            ampm={false}
                                            value={endDate}
                                            //minDateTime={endDate}
                                            onChange={(value) => setEndDate(isValid(value) ? value : value)}
                                            slotProps={{ textField: { fullWidth: true, helperText: 'MM / DD / YYYY' } }} />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Aircraft Registraion Code</InputLabel>
                                        <Select
                                            id="registraionCode"
                                            name="registraionCode"
                                            label="Registraion Code"
                                            fullWidth
                                            required
                                            value={airCraftId}
                                            onChange={handleRegistrationCodeSelectChange}
                                        >
                                            {aircraftData?.map((row) => (
                                                <MenuItem value={row.id}>{row.registrationCode}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <TextField
                                        id="footprintsqm"
                                        name="footprintsqm"
                                        label="Aircraft Foot Print sqm"
                                        fullWidth
                                        type="number"
                                        //required
                                        disabled
                                        onChange={formik.handleChange}
                                        value={aircraftFootPrintSqm} />
                                </Grid>
                                <Grid item xs={6} sm={6}>


                                    <FormControl fullWidth>
                                        <InputLabel>Parking Slot</InputLabel>
                                        <Select
                                            id="parking-registration-code"
                                            fullWidth
                                            required
                                            value={parkingSpotId}
                                            label="Parking Slot Name"
                                            onChange={handleSelectChange}
                                        >
                                            {parkingSpotData?.map((row) => (
                                                <MenuItem value={row.id}>{row.name}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={2} sm={2}>
                                    <Typography>{'Total Parking Space (Selected Parking Spot Footprint)'}</Typography>
                                    <Typography className="typoGraphy">{selectedParkingSlotTotalSpace}</Typography>
                                </Grid>
                                <Grid item xs={2} sm={2}>
                                    <Typography>{'Occupied Parking Space (Selected Aircraft Spot Footprint)'}</Typography>
                                    <Typography className="typoGraphy">{occupiedFootPrintSqm}</Typography>
                                </Grid>
                                <Grid item xs={2} sm={2}>
                                    <Typography>{'Free Parking Space'}</Typography>
                                    <Typography className="typoGraphy">{freespace}</Typography>
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    {isOpneErrorMessage && (<Alert severity="error"
                                        action={<IconButton
                                            aria-label="close"
                                            color="inherit"
                                            size="small"
                                            onClick={() => {
                                                setIsOpneErrorMessage(false);
                                            }}
                                        >
                                            <Close fontSize="inherit" />
                                        </IconButton>}
                                        sx={{ mb: 2 }}
                                    >
                                        {errorMessages}
                                    </Alert>)}
                                </Grid>
                                <Grid item container xs={12} sm={12}>
                                    <Grid item xs={3} sm={3}>
                                        <Typography>{'Overall free parking spot'}</Typography>
                                        <Typography className="typoGraphy">{overAllFreeSpace}</Typography>
                                    </Grid>
                                    <Grid item xs={3} sm={3}>
                                        <Typography>{'Overall occupied parking spot'}</Typography>
                                        <Typography className="typoGraphy">{overAllOccupied}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Grid className="buttom-grid">
                                        <Button data-testid="save" id="save" style={{ marginRight: '20px' }} type="submit" className="btn btn-primary" variant="contained">
                                            SAVE
                                        </Button>
                                        <Button
                                            data-testid="reset"
                                            id="reset"
                                            type="button"
                                            variant="contained"
                                            className="btn btn-warning float-right"
                                            onClick={handleReset}
                                        >
                                            RESET
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    </form>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card className="card">
                    <ParkingFlightTable flight={flights!} aircraftData={aircraftData} parkingSpotData={parkingSpotData!}></ParkingFlightTable>
                </Card>
            </Grid>
        </Grid>
            <Dialog
                data-testid="confirmation-dialog"
                disableEscapeKeyDown
                maxWidth="sm"
                fullWidth
                aria-labelledby="confirmation-dialog-title"
                open={isDilogOpen}
            >
                <DialogTitle id="confirmation-dialog-title">{'Confirmation Dialog'}</DialogTitle>
                <DialogContent id="confirmation-dialog-content">
                    <Typography gutterBottom>
                        {'Are you sure, do you want to assign this parking?'}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button data-testid='dialog-cancel-btn' onClick={handleCancel} autoFocus color="primary">
                        {'CANCEl'}
                    </Button>
                    <Button data-testid='dialog-confirm-btn' onClick={handleConfirmation} color="primary"
                        variant='contained'>
                        {'CONFIRM'}
                    </Button>
                </DialogActions>
            </Dialog></>
    );
}

export default ParkingForm;
