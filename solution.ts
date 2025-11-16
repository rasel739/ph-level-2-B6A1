type commonType = string | number | boolean;
type formatValueType = commonType;
type getLengthType = string | commonType[];

const formatValue = (value: formatValueType) => {
  if (value === '' || value === 0) {
    return 'This value is not allow!';
  }

  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else if (typeof value === 'boolean') {
    return value === true ? false : true;
  } else {
    return 'Sorry you do not provide any value';
  }
};

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));

const getLength = (value: getLengthType) => {
  if (value.length === 0) {
    return 'Empty value is not allow';
  }

  if (typeof value === 'string') {
    return value.trim().length;
  } else if (Array.isArray(value)) {
    return value.length;
  } else {
    return 'This value is not Allow!';
  }
};

// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));

class Person {
  private name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());
