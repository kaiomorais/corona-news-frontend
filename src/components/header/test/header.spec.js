/* eslint-disable no-undef */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import TogglerNav from '../TogglerNav'
// import Header from '../Header'
// import { useLocation } from 'react-router-dom'

test('should change toggler icon', () => {
  const navLinks = () => (
    <> </>
  )

  const { container } = render(<TogglerNav onClickAct={() => { }}> children={navLinks()} </ TogglerNav>)

  const button = container.querySelector('.togglerBtn')

  const span = container.querySelector('.togglerIcon')
  expect(span).toBeInTheDocument()

  fireEvent.click(button)

  const spanTogger = container.querySelector('.togglerIcon')
  expect(spanTogger).not.toBeInTheDocument()

  expect(spanTogger).not.toBeInTheDocument()

  const spanClose = container.querySelector('.togglerClose')

  expect(spanClose).toBeInTheDocument()
})

test('should change toggler icon', () => {
  //   const navLinks = () => (
  //     <> </>
  //   )

  //   const { container, debug } = render(<Header />)

  //   const button = container.querySelector('.togglerBtn')
  //
  debug(container)
})
