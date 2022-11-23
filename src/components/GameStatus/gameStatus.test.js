/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import GameStatus from './gameStatus';

describe('GameStatus', () => {
    it('renders the current player token of O', async () => {
        const data = { token: "O", win: false, draw: false, winner: null }
        render(<GameStatus games={data} />);
        
        const linkElement = screen.getByText(/Current turn: O/i);

        expect(linkElement).toBeInTheDocument;
        expect(linkElement).toBeVisible;
    });
});