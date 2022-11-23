import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {Board} from './board'


describe('board', () => {
  let postAPIData;

  beforeEach(() => {
    postAPIData = jest.fn();
    render(<Board postAPIData={postAPIData}/>)
  });

  it('begins with a blank board', async () => {
    const move = screen.getByTestId("game-board")
    expect(move.textContent).toBe("         ")
  });

  it('after first click on board produces an X', () => {
    const firstToClick = screen.getByTestId('cell_0')
    
    expect(firstToClick.textContent).toBe(" ")
    fireEvent.click(firstToClick)
    
    expect(firstToClick?.textContent).toBe("X")
  });

  it('after second click the player token swithes to O', () => {
    const firstToClick = screen.getByTestId('cell_0')
    const secondToClick = screen.getByTestId('cell_1')
    
    expect(firstToClick.textContent).toBe(" ")
    fireEvent.click(firstToClick)
    fireEvent.click(secondToClick)

    expect(secondToClick?.textContent).toBe("O")
  })

  it('token remains the same after clicking on already occupied cell', () => {
    const firstToClick = screen.getByTestId('cell_0')
    const secondToClick = screen.getByTestId('cell_0')
    
    expect(firstToClick.textContent).toBe(" ")
    fireEvent.click(firstToClick)
    fireEvent.click(secondToClick)

    expect(secondToClick?.textContent).toBe("X")
  })

  it('accepts the postAPIData event on the indiviudal container', async () => {

    const firstToClick = screen.getByTestId('cell_0')

    fireEvent.click(firstToClick)

    expect(postAPIData).toHaveBeenCalledTimes(1);
  })
});

