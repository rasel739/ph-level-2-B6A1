# Blog Post

## Q. 1 What are some differences between interfaces and types in TypeScript?

### Answer:

Typescript interface and type is similar but use case is differences.

1. interface most of the time use big array or big object.
2. type most of the time use small array or small object and use sucsses, pendding, error type declaration

## Q. 2 What is the use of the keyof keyword in TypeScript? Provide an example.

### Answer:

When you need keyof but you see key and value is similar and then use keyof your object and now convert object to key.
Example:

```typescript
type electronicType = {
  leptop: string;
  smartphone: string;
  smartwatch: string;
  headphone: string;
};

const electronic: electronicType = {
  leptop: 'leptop',
  smartphone: 'smartphone',
  smartwatch: 'smartwatch',
  headphone: 'headphone',
};

type electronicType = {
  leptop: string;
  smartphone: string;
  smartwatch: string;
  headphone: string;
};

const electronic: electronicType = {
  leptop: 'leptop',
  smartphone: 'smartphone',
  smartwatch: 'smartwatch',
  headphone: 'headphone',
};

const electronicProduct = (product: electronicType, key: keyof electronicType) => {
  return product[key];
};

console.log(electronicProduct, 'smartwatch'); // smartwatch
```

## Q. 3 Explain the difference between any, unknown, and never types in TypeScript.

### Answer:

Typescript provide diffrent diffrent type. But most of the developer confusd any, unknown and never type. So below now explain any, unknown, never.

1. any type - any type is typescript default type. When you don't use specific type and then typescript automatic set any type. So you don't use any type.

2. unknown type - You are don't no specific type and now you can use unknown type and then use check type check logic and inside impliment your code.

3. never type - This type use infinate loop or functon.you can create error throw function and this function entire life return never. Because this function always throw error.

## Q. 4 What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

### Answer:

Typescript enum type use constrant and improving your code readability and type safety.
Example:

```typescript
// numeric enum
enum Status {
  success = 1,
  error = 2,
  pending = 3,
}

// string enum
enum Status {
  success = 'success',
  error = 'error',
  pending = 'pending',
}
```

## Q. 5 Provide an example of using union and intersection types in TypeScript.

### Answer:

Below example typescript union and intersection:

```typescript
// union
type Status = 'success' | 'error' | 'pending';

// intersection

type User = {
  id: number;
  name: string;
  age: number;
};

type Admin = {
  role: string;
};

type UserAndAdmin = User & Admin;

const employee: UserAndAdmin = {
  id: 12345,
  name: 'Alice Doe',
  age: 30,
  role: 'admin',
};
```
