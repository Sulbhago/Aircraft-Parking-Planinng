import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import { ParkingFlightTable } from '.';

describe('ParkingForm', () => {
    it('renders without crashing', () => {
        shallow(<ParkingFlightTable flight={[]} aircraftData={undefined} parkingSpotData={[]} />);
    });
});

const mockData = [
    {
        "id": 1,
        "startDateTime": "3 Jan 2023 13:00",
        "endDateTime": "4 Jan 2023 15:00",
        "aircraftid": 2,
        "parkingSpotid": 1,

    },
    {
        "id": 2,
        "startDateTime": "1 Jan 2023 09:30",
        "endDateTime": "4 Jan 2023 09:00",
        "aircraftid": 2,
        "parkingSpotid": 1,
    }
]

test("List renders successfully", () => {
    render(<ParkingFlightTable flight={mockData!} parkingSpotData={[]} />)
})