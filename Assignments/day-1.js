// even or odd

function even_or_odd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// reversed strings

function solution(str) {
  const text = str.split("");
  const reverse = text.reverse();
  const result = reverse.join("");
  return result;
}

// Fun with ES6 Classes #1 - People, people, people

class Person {
  // Get coding in ES6 :D

  constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  sayFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}

Person.sayFullName;
Person.greetExtraTerrestrials;
