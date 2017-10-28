import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {

  // class Person {
  //   constructor(name = 'Anonymous', age = 0) {
  //     this.name = name;
  //     this.age = age
  //   }
  //   getGreeting() {
  //     //Hi I am Andrew.
  //   //  return 'Hi I am ' + this.name + ' .';
  //   return `Hi I am ${this.name}.`;
  //   }
  //   getPersonDescription() {
  //     return `${this.name} is ${this.age} year(s) old`;
  //   }
  // }
  //
  // class Employee extends Person {
  //   constructor(name, age, title) {
  //     super(name, age);
  //     this.title = title
  //   }
  //   getGreeting() {
  //     if (this.title) {
  //       return `Hi I am ${this.name}. I work as a ${this.title}.`;
  //     }else{
  //       return super.getGreeting();
  //     }
  //   }
  //   hasJob() {
  //     return !!this.title;
  //   }
  // }
  //
  // class Programmer extends Person {
  //   constructor(name, age, preferredLanguage = 'assembly') {
  //     super(name, age);
  //     this.preferredLanguage = preferredLanguage
  //   }
  //   getGreeting() {
  //     if (this.preferredLanguage) {
  //       return `Hi I am ${this.name}. I am a ${this.preferredLanguage} developer.`;
  //     }else{
  //       return super.getGreeting();
  //     }
  //   }
  // }
  //
  // // let me = new Employee('Mike', 26, 'db admin');
  // // console.log(me.getGreeting());
  // //
  // //
  // // let person = new Employee('Andrew', 25);
  // // console.log(person.getGreeting());
  //
  //   let userOne = new Programmer('Evan', 14, 'none');
  //   console.log(userOne.getGreeting());
});
// let user = {
//   name: 'Andrew',
//   location: 'Philadephia',
//   age: 0
// };
//
// let person = {
//   ...user,
//   age: 25
// };
// //console.log(person);
//
// let bike = "Scott";
// let stuff = {
//   bike,
//   laptop: 'Mac'
// };
// //console.log(stuff);
//
// let house = {
//   bedrooms: 2,
//   bathrooms: 1.5
// };
// let yearBuilt = 1995;
//
// let building = {
//   ...house, yearBuilt,
//   bedrooms: 3,
//   flooring: 'Carpet'
// };
// console.log(building);
