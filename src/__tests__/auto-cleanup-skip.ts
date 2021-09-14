import {render} from '../pure';

// This one verifies that if ATL_SKIP_AUTO_CLEANUP is set
// then we DON'T auto-wire up the afterEach for folks
test('first', () => {
  render(`<div>hi</div>`)
})

test('second', () => {
  expect(document.body.innerHTML).toEqual(
    '<div><div class="ng-scope">hi</div></div>',
  )
})
