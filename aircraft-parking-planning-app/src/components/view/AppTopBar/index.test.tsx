import React from 'react';
import { shallow } from 'enzyme';
import AppTopBar from '.';
import { fireEvent, render } from '@testing-library/react';
import { Link } from '@mui/material';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<AppTopBar tabs={[{ title: 'DASHBOARD', url: '/dashboard' },
    { title: 'ASSIGN AIRCRAFT PARKING', url: '/ParkingForm' },
    { title: 'PARKING OVERVIEW CHART', url: '/Parking' },]} title={'AeroPark'} />);
  });
});

describe('LinkButton', () => {
    it('should render a LinkButton', () => {
      render(<Link />)
    })
  })
  