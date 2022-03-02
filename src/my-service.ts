export class MyService {
  getUser() {
    return {
      name: 'John',
    }
  }
}

export interface MyServiceInterface {
  getUser: () => {name: 'string '}
}
