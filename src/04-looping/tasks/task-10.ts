/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];

let submittedCount = 0;
let notSubmittedCount = 0;
let passedCount = 0;
let revisionCount = 0;
let notSubmittedNames: string[] = [];
let revisionNames: string[] = [];
let totalScore = 0;

for (let i = 0; i < submissions.length; i++) {
  const item = submissions[i];
  totalScore += item.score;

  if (item.submitted) {
    submittedCount++;
  } else {
    notSubmittedCount++;
    notSubmittedNames.push(item.student);
  }

  if (item.score >= 75) {
    passedCount++;
  } else {
    revisionCount++;
    revisionNames.push(item.student);
  }
}

const classAverage = totalScore / submissions.length;

console.log("Submitted Count:", submittedCount);
console.log("Not Submitted Count:", notSubmittedCount);
console.log("Passed Count:", passedCount);
console.log("Revision Count:", revisionCount);
console.log("Not Submitted Names:", notSubmittedNames.join(", "));
console.log("Revision Names:", revisionNames.join(", "));
console.log("Class Average Score:", classAverage);