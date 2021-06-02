export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token?: string;
    // userInfo: any;
}

export class UserDetail {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token?: string;
    userInfo: {
        lastLogin: string,
        acctBalance: string,
        acctData: AcctData[], 
    }   
}

export class AcctData {
    data: string;
    desc: string;
    amount: string;
}