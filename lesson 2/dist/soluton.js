// Index Properties
// let userInfo: MixedDictionary = {
//   username: "alex",
//   age: 25,
//   country: "Ukraine",
//   postalCode: 12345,
// };
// let productInfo: MixedDictionary = {
//   productName: "Laptop",
//   model: "X-123",
//   price: 1000,
//   weight: 1.5,
// };
// let bookDetails: MixedDictionary = {
//   title: "TypeScript Guide",
//   author: "John Doe",
//   pages: 320,
//   edition: "second",
// };
// Generic
// function reverse<T>(items: T[]): T[] {
//   return items.reverse();
// }
// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] | undefined {
//   return obj[key] || undefined;
// }
// // patrial;
// // 1
// interface User {
//   name: string;
//   age: number;
//   email: string;
// }
// type UserUpdateForm = Partial<User>;
// const update: UserUpdateForm = {
//   email: "newemail@example.com",
// };
// // 2
// interface Config {
//   host: string;
//   port: number;
//   protocol: string;
// }
// function setupConfig(partial: Partial<Config>): Config {
//   return {
//     host: partial.host || "localhost",
//     port: partial.port || 80,
//     protocol: partial.protocol || "http",
//   };
// }
// // 2. Readonly<T>
// // 1
// function doSomethingWithArray(input: ReadonlyArray<number>): number[] {
//   // Деякі операції над масивом, але без його зміни
//   return Array.from(input);
// }
// const nums = [1, 2, 3];
// doSomethingWithArray(nums);
// // 2
// interface Config {
//   apiUrl: string;
//   timeout: number;
// }
// const config: Readonly<Config> = {
//   apiUrl: "https://api.example.com",
//   timeout: 5000,
// };
// // 3. Pick<T, K>
// //1
// interface User {
//   name: string;
//   age: number;
//   email: string;
// }
// function getUserContact(user: User): Pick<User, "name" | "email"> {
//   return {
//     name: user.name,
//     email: user.email,
//   };
// }
// //2
// interface ApiResponse {
//   id: number;
//   title: string;
//   content: string;
//   createdAt: Date;
// }
// function displayPost(post: ApiResponse): Pick<ApiResponse, "title" | "content"> {
//   return {
//     title: post.title,
//     content: post.content,
//   };
// }
// 4. Record<K, T>
// 1
// const usersAge: Record<string, number> = {
//   Alice: 25,
//   Bob: 30,
//   Charlie: 35,
// };
// // 2
// const daysInMonth: Record<string, number> = {
//   January: 31,
//   February: 28,
//   March: 31,
//   // ... і так далі
// };
// 5. Omit<T, K>
// 1
// interface User {
//   username: string;
//   password: string;
//   email: string;
// }
// type SafeUser = Omit<User, "password">;
// const userToSend: SafeUser = {
//   username: "Alice",
//   email: "alice@example.com",
// };
// // 2
// interface ApiResponse {
//   id: number;
//   title: string;
//   content: string;
//   createdAt: Date;
// }
// type Post = Omit<ApiResponse, "createdAt">;
// const displayedPost: Post = {
//   id: 1,
//   title: "Title",
//   content: "Content",
// };
// інтерфейси
// interface MenuItem {
//   name: string;
//   price: number;
//   category: "starter" | "main" | "dessert";
// }
// interface User {
//   name: string;
//   email: string;
//   birthdate: Date;
// }
// класи
// interface CarProperties {
//   brand: string;
//   year: number;
//   fuelType: "petrol" | "diesel" | "electric";
// }
// class Car implements CarProperties {
//   constructor(public brand: string, public year: number, public fuelType: "petrol" | "diesel" | "electric") {}
//   getDetails() {
//     console.log(`This is a ${this.year} ${this.brand} that runs on ${this.fuelType}.`);
//   }
// }
// 2
// interface StudentData {
//   name: string;
//   studentID: number;
//   major: string;
// }
// class Student implements StudentData {
//   constructor(public name: string, public studentID: number, public major: string) {}
//   introduce() {
//     console.log(`Hello, my name is ${this.name}. My student ID is ${this.studentID} and I study ${this.major}.`);
//   }
// }
