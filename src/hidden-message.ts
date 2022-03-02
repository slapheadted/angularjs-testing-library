import * as angular from 'angular'
import {MyService} from './my-service'

class HiddenMessage {
  showMessage = false
  user = {}

  /* @ngInject */
  // eslint-disable-next-line no-shadow
  constructor(private MyService: any) {
    console.log('showMessage', this.showMessage)
    this.user = this.MyService.getUser()
  }
}
const template = `
  <div>
    <label for="toggle">Show Message</label>
    <input
      id="toggle"
      type="checkbox"
      ng-model="$ctrl.showMessage"
    />
    <div ng-if="$ctrl.showMessage">
      <p aria-label="greeting">{{$ctrl.message}}</p>
      <span aria-label="user-name">{{$ctrl.user.name}}</span>
    </div>
  </div>
`

angular
  .module('atl', [])
  .component('atlHiddenMessage', {
    template,
    controller: HiddenMessage,
    bindings: {
      message: '<',
    },
  })
  .service('MyService', MyService)
