/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

// 1. Definisi Tipe Data (Type Definition)
type Student = {
  studentId: string;
  fullName: string;
  age: number;
  isActive: boolean;
};

// 2. Implementasi Data untuk 3 Siswa
const student1: Student = {
  studentId: "ST2026001",
  fullName: "Nadia Putri",
  age: 16,
  isActive: true,
};

const student2: Student = {
  studentId: "ST2026002",
  fullName: "Budi Santoso",
  age: 17,
  isActive: true,
};

const student3: Student = {
  studentId: "ST2026003",
  fullName: "Citra Lestari",
  age: 16,
  isActive: false,
};


console.log(student1);
console.log(student2);
console.log(student3);