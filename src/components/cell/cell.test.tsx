import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {Cell} from './cell';

describe('cell', () => {
    const mockOnClick = jest.fn();
    it('displays X value in the indiviudal container', async () => {
        render(<Cell value="X" onClick={mockOnClick} />);

        expect(screen.getByRole('button')).toHaveTextContent('X');
    });

    it('accepts the onClick event on the indiviudal container', async () => {
        render(<Cell value="X" onClick={mockOnClick} />);

        fireEvent.click(screen.getByRole("button"));

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    })

});