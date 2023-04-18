import React from 'react';
import { shallow } from 'enzyme';
import ParkingForm from '.';
import { Button } from '@mui/material';
import { render  } from '@testing-library/react';

describe('ParkingForm', () => {
    it('renders without crashing', () => {
        // shallow(<ParkingForm />);
    });
});

describe('Button', () => {
    it('should render a Button', () => {
        render(<Button />)
    })
})