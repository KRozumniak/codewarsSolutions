// https://www.codewars.com/kata/597c684822bc9388f600010f/

// FIXME: Get Full Name

class Dinglemouse{
  constructor( firstName, lastName ){
    this.firstName = firstName.trim();
    this.lastName = lastName.trim();
  }
  getFullName(firstName, lastName){
    let fullName = `${this.firstName} ${this.lastName}`.trim();
    return fullName;
  }
}