// 1. Create a TypeScript interface representing a course
interface Course {
  title: string;
  description: string;
  duration: number;
}

// 2. Create a function that receives a course object and prints out the course details
function printCourseInfo(course: Course): void {
  console.log(`Title: ${course.title}`);
  console.log(`Description: ${course.description}`);
  console.log(`Duration: ${course.duration}`);
}

// 3. Create a TypeScript class representing a student
export class Student {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Getter
  getName(): string {
    return this.name;
  }

  // Getter
  getAge(): number {
    return this.age;
  }

  // 4. Create a method that receives a course and associates the student's information with the course information
  enrollInCourse(course: Course): void {
    console.log(`${this.name} is enrolled in the course "${course.title}"`);
  }
}

// 5. Create a function that receives a student object and prints out the student's basic information
function printStudentInfo(student: Student): void {
  console.log(`Student Name: ${student.getName()}`);
  console.log(`Student Age: ${student.getAge()}`);
}

// 6. Create a course object
const typescriptCourse: Course = {
  title: 'Introduction to TypeScript',
  description: 'Learn the basics of TypeScript programming language.',
  duration: 10,
};

// 7. Create a student object
const student1 = new Student('John', 20);

printCourseInfo(typescriptCourse);
printStudentInfo(student1);
student1.enrollInCourse(typescriptCourse);
