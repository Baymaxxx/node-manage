import { User } from './model/user.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  api_url: string;
  node_url: string;
  constructor(private http: Http) {
    this.api_url = 'https://www.easy-mock.com/mock/595af9579adc231f357033a7/niceFish/user';
    this.node_url = '/api/users';
  }

  findUser(userNameOrId: any): Promise<User> {
    return this.http.get(`${this.api_url}`)
      .toPromise()
      .then((res) => {
        let users = res.json().users as User[];
        users = users.filter(item => {
          return item.username === userNameOrId || item.id === userNameOrId;
        });
        return users.length > 0 ? users[0] : null;
      });
  }

  getUsers(): Promise<User[]> {
    return this.http.get(`${this.node_url}`)
      .toPromise()
      .then((res) => {
        const data = res.json();
        if (data.code === 200) {
          const users = data.data;
          return users;
        }
      });
  }

  registerUser(user: User): Promise<User> {
    return this.http.post(`${this.node_url}`, JSON.stringify(user))
      .toPromise()
      .then(() => {
        return user as User;
      });
  }
}
