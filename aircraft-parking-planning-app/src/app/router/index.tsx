import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from "../../components/view/Dashboard";
import ParkingChartOverview from "../../components/view/ParkingChart";
import ParkingForm from '../../components/view/AssignParkingForm';

function Router() {

  return (
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<HomeView />} />
            <Route path="/Parking" element={<ParkingChartOverview/>} />
            <Route path="/ParkingForm" element={<ParkingForm/>} />
          </Routes>
        </BrowserRouter>
  );
}

export default Router;
