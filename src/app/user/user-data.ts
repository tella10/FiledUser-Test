import { InMemoryDbService } from 'angular-in-memory-web-api';

import { UserDTO } from '../user/shared/userDTO';

export class UserData implements InMemoryDbService {

    createDb() {
        const users : UserDTO[] = [
            {
                id: 1,
                firstname: 'Hambal',
                lastname: 'Tella',
                phone: 2347056104197,
                email: 'Hambaltella@gmail.com',
                budget: 300,
                currency: '$'
            },
            {
                id: 2,
                firstname: 'John',
                lastname: 'Duke',
                phone: 12345678934,
                email: 'JohnDuke@gmail.com',
                budget: 400,
                currency: '$'
            },
            {
                id: 3,
                firstname: 'Tobi',
                lastname: 'Mount',
                phone: 2348127688006,
                email: 'Tobimount@gmail.com',
                budget: 500,
                currency: '$'
            },
            {
                id: 4,
                firstname: 'G',
                lastname: 'Andrew',
                phone: 12056104197,
                email: 'Andrewg@gmail.com',
                budget: 600,
                currency: '$'
            }
        ];
        return { users };
    }
}
