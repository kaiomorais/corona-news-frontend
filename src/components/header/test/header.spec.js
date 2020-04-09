import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import TogglerNav from '../TogglerNav'
import Header from '../Header'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

test('should change toggler icon', () => {
  const navLinks = () => <> </>

  const { container } = render(
    <TogglerNav onClickAct={() => {}}> children={navLinks()} </TogglerNav>
  )

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

test('should active noticias and sobre links', () => {
  const history = createMemoryHistory()
  const { container } = render(
    <Router history={history}>
      <Header />
    </Router>
  )

  var linkNoticias = container.querySelector('#linkNoticias')
  var linkSobre = container.querySelector('#linkSobre')
  var linkAtivo = container.querySelector('.active')

  expect(linkAtivo.innerHTML).toBe(' Notícias ')
  fireEvent.click(linkSobre)
  linkAtivo = container.querySelector('.active')

  expect(linkAtivo.innerHTML).toBe(' Sobre ')
  fireEvent.click(linkNoticias)

  linkAtivo = container.querySelector('.active')

  expect(linkAtivo.innerHTML).toBe(' Notícias ')
})

test('should hidden countbanner', () => {
  const history = createMemoryHistory()
  const { container } = render(
    <Router history={history}>
      <Header />
    </Router>
  )

  var buttonToggler = container.querySelector('button.navbar-toggler')
  var counterBanner = container.querySelector('a.counterBanner')

  expect(counterBanner.style.display).toBe('block')
  fireEvent.click(buttonToggler)

  expect(counterBanner.style.display).toBe('none')
})
