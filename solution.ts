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

interface IBooks {
  title: string;
  rating: number;
}

const books: IBooks[] = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
  { title: 'Book D', rating: 3.9 },
  { title: 'Book E', rating: 4.3 },
];

const filterByRating = (book: IBooks[]): string | IBooks[] => {
  if (!Array.isArray(book)) {
    return 'Invalid value!';
  }

  return book
    .filter((items) => items.rating >= 4 && items.rating <= 5)
    .sort((a, b) => a.rating - b.rating);
};

// console.log(filterByRating(books));

interface IUsers {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const users: IUsers[] = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

const filterActiveUsers = (user: IUsers[]): string | IUsers[] => {
  if (!Array.isArray(user)) {
    return 'Invalid value!';
  }
  return user.filter((item) => item.isActive === true);
};

// console.log(filterActiveUsers(users));
