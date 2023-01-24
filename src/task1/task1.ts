/* eslint-disable @typescript-eslint/no-empty-function */
type User = {
    name: string;
    age: number;
    occupation: string;
    messagesCount: number,
    registrationDate: Date,
    warningsCount: number,
}

const arr: Array<User> = [];

const users: User[] = [
    {
        name: 'Calvin Klein',
        age: 38,
        occupation: 'Artist',
        messagesCount: 0,
        registrationDate: new Date('12/7/2021'),
        warningsCount: 0,
    },
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
        messagesCount: 16,
        registrationDate: new Date('12/7/2018'),
        warningsCount: 3,
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
        messagesCount: 243,
        registrationDate: new Date('1/7/2020'),
        warningsCount: 12,
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Developer',
        messagesCount: 434,
        registrationDate: new Date('5/11/2021'),
        warningsCount: 14,
    },
    {
        name: 'Chloe Price',
        age: 19,
        occupation: 'Student',
        messagesCount: 167,
        registrationDate: new Date('6/3/2019'),
        warningsCount: 67,
    },
];

function getNumberOfDays( start: Date ):number {
    const date1: Date = new Date();
    const date2: Date = new Date(start);
    const oneDay: number = 1000 * 60 * 60 * 24;
    const diffInTime: number = date1.getTime() - date2.getTime();
    const diffInDays: number = Math.round(diffInTime / oneDay);
    return diffInDays; 
}

class TrustedUser {
  user: User;
  static getConfidenceRatio(user: User): number {
    const ratio: number = (user.messagesCount*2)-(user.warningsCount*100) + getNumberOfDays(user.registrationDate);
    return ratio;
  }
  constructor( user: User ){
    this.user = user; 
    TrustedUser.getConfidenceRatio(this.user);
  }
}

class ConfidenceHelper { 
  static checkConfidenceRatio(user: User): boolean {
    if(TrustedUser.getConfidenceRatio(user) >= 0){
      return true;
    }
    return false;
  }
}

function checkUsersConfidence(users: User[]): Array<User> {
    for(const user of users){
      if(!ConfidenceHelper.checkConfidenceRatio(user)){
        arr.push(user)
      }
    }
    return arr;
}

console.log(checkUsersConfidence(users));
