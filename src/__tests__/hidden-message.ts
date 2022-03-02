// these imports are something you'd normally configure Jest to import for you
// automatically.
import '@testing-library/jest-dom/extend-expect'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as angular from 'angular'
import 'angular-mocks'
import {render, fireEvent, inject} from '../pure'
import '../hidden-message'
import {MyServiceInterface} from '../my-service'

beforeEach(() => angular.mock.module('atl'))

test('renders the Test Message', () => {
  const testMessage = 'Test Message'

  const {queryByLabelText, getByLabelText} = render(
    `
    <atl-hidden-message message="testMessage"></atl-hidden-message>
  `,
    {
      scope: {
        testMessage,
      },
    },
  )

  expect(queryByLabelText('greeting')).toBeNull()

  fireEvent.click(getByLabelText(/show/i))

  expect(getByLabelText('greeting')).toBeInTheDocument()
  expect(getByLabelText('greeting').textContent).toBe(testMessage)
})

test('renders the user name', () => {
  const MockedMyService = inject<MyServiceInterface>('MyService')
  MockedMyService.getUser = jest.fn().mockReturnValue({name: 'Foo'})

  const testMessage = 'Hello'

  const {queryByLabelText, getByLabelText} = render(
    `
    <atl-hidden-message message="testMessage"></atl-hidden-message>
  `,
    {
      scope: {
        testMessage,
      },
    },
  )

  expect(queryByLabelText('user-name')).toBeNull()

  fireEvent.click(getByLabelText(/show/i))

  expect(getByLabelText('user-name').textContent).toBe('Foo')
})
