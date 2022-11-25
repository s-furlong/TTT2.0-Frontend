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

    it('renders message for the winner when the game is over', async () => {
        const data = { token: "O", win: true, draw: false, winner: "X" }
        render(<GameStatus games={data} />);
        
        const linkElement = screen.getByText(/X is the winner/i);

        expect(linkElement).toBeInTheDocument;
        expect(linkElement).toBeVisible;
    });

    it('renders message if there is a tie and the game is over', async () => {
        const data = { token: "O", win: false, draw: true, winner: null }
        render(<GameStatus games={data} />);
        
        const linkElement = screen.getByText(/game is a tie/i);

        expect(linkElement).toBeInTheDocument;
        expect(linkElement).toBeVisible;
    });
});