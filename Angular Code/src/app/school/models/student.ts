import { User } from 'src/app/shared/models/user';

export class Student extends User {
    rollNumber?: number;
    standard?: number;
}