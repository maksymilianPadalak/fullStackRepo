import axios from 'axios';

export class UserService {
  public getUsers = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    return response.data;
  };
}
