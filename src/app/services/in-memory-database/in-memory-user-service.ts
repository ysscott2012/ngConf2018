import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Authenticate} from '../../auth/models/authenticate';
import {User} from '../../interfaces/user';

export class InMemoryUserService implements InMemoryDbService {
  createDb () {
    const users: User[] = [
      {
        id: 1,
        username: 'admin',
        password: '',
        email: 'admin@gmail.com',
        name: 'Admin'
      },
      {
        id: 2,
        username: 'guest',
        password: '',
        email: 'guest@gmail.com',
        name: 'Guest'
      },
    ];
    return {users};
  }
}
