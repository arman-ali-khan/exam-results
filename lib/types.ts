export interface Subject {
  code: string;
  name: string;
  letterGrade: string;
  gradePoint: number;
}

export interface StudentResult {
  studentName: string;
  fatherName: string;
  motherName: string;
  roll: string;
  registration: string;
  board: string;
  examType: string;
  year: string;
  group: string;
  candidateType: string;
  dob: string;
  institutionName: string;
  gpa: number;
  passed: boolean;
  subjects: Subject[];
}

export interface ResultSearchParams {
  roll: string;
  registration: string;
  board: string;
  year: string;
  examType: string;
}