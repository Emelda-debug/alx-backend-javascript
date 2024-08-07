export interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [extra:string]: any
}

export interface Director extends Teacher {
  numberOfReports: number,
}

export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;

}

export interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass {
  private _firstName!: string;
  private _lastName!: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework() {
    return('Currently working')
  }

  displayName() {
    return this._firstName;
  }
}