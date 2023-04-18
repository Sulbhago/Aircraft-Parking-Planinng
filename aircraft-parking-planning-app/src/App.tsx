import "./App.css";
import AppTopBar from "./components/view/AppTopBar";
import Router from "./app/router";

const tabs = [
  { title: 'DASHBOARD', url: '/dashboard' },
  { title: 'PARKING', url: '/ParkingForm' },
  { title: 'CHART', url: '/Parking' },

];

function App() {
  return (
    <div className="App">
      <AppTopBar tabs={tabs} title={"AeroPark"}></AppTopBar>
      <div className="wrapperDiv">
      <Router/>
      </div>
    </div>
  );
}

export default App;
