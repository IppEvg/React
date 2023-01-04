import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import {Button} from './Button.js'

describe ('testing button',()=>{
    it('render component Button', () => {
        render(<Button>Change name</Button>)
      })

    it ("render button with snapshot", ()=>{
    const {asFragment} = render(<Button>Send</Button>)
    expect (asFragment()).toMatchSnapshot()
})
    it('button click with userEvent', async () => {
    const mockHandler = jest.fn();

    render (<Button click={mockHandler}>Sign in</Button>)
    await userEvent.click(screen.getByText(/Sign in/))
    expect(mockHandler).toHaveBeenCalledTimes(1)
  })
// it ('button click with userEvent',async ()=>{
//     const mockHandler = jest.fn()
//     render (<Button onClick={mockHandler}>Delete</Button>)
//     await userEvent.onClick(screen.getByText(/Delete/))
//     expect(mockHandler).toHaveBeenCalledTimes(1)
//  })
})
