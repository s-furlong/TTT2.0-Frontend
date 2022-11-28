/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import GameStatus from './gameStatus';

describe('GameStatus', () => {
    it('renders the current player token of X', async () => {
        const data = { token: "X", win: false, draw: false, winner: null }
        render(<GameStatus currentMove={data} />);
        
        const expectedTest = screen.getByText(/Current turn: X/i);

        expect(expectedTest).toBeInTheDocument;
    });

    it('renders message for the winner when the game is over and the game is won', async () => {
        const data = { token: "O", win: true, draw: false, winner: "X" }
        render(<GameStatus currentMove={data} />);
        
        const expectedTest = screen.getByText(/X is the winner/i);

        expect(expectedTest).toBeInTheDocument;
    });

    it('renders message if there is a tie and the game is over', async () => {
        const data = { token: "O", win: false, draw: true, winner: null }
        render(<GameStatus currentMove={data} />);
        
        const expectedTest = screen.getByText(/game is a tie/i);

        expect(expectedTest).toBeInTheDocument;
    });
});