import {Role} from './role';
import {UserBase} from '../auth/models/user-base';
import {Authenticate} from '../auth/models/authenticate';

export interface User extends Authenticate, UserBase {
  id: number;
}
