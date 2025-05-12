import { ResultSearchParams, StudentResult } from './types';

// Mock database of results
const MOCK_RESULTS: StudentResult[] = [
  {
    studentName: 'John Doe',
    fatherName: 'Richard Doe',
    motherName: 'Jane Doe',
    roll: '123456',
    registration: '987654',
    board: 'dhaka',
    examType: 'ssc',
    year: '2023',
    group: 'Science',
    candidateType: 'Regular',
    dob: '2005-05-15',
    institutionName: 'City College',
    gpa: 4.75,
    passed: true,
    subjects: [
      {
        code: '101',
        name: 'Bangla',
        letterGrade: 'A+',
        gradePoint: 5.0,
      },
      {
        code: '107',
        name: 'English',
        letterGrade: 'A',
        gradePoint: 4.0,
      },
      {
        code: '109',
        name: 'Mathematics',
        letterGrade: 'A+',
        gradePoint: 5.0,
      },
      {
        code: '111',
        name: 'Physics',
        letterGrade: 'A',
        gradePoint: 4.0,
      },
      {
        code: '112',
        name: 'Chemistry',
        letterGrade: 'A+',
        gradePoint: 5.0,
      },
      {
        code: '113',
        name: 'Biology',
        letterGrade: 'A+',
        gradePoint: 5.0,
      },
      {
        code: '114',
        name: 'Higher Mathematics',
        letterGrade: 'A-',
        gradePoint: 3.5,
      },
      {
        code: '151',
        name: 'Religion',
        letterGrade: 'A+',
        gradePoint: 5.0,
      },
    ],
  },
  {
    studentName: 'Sarah Ahmed',
    fatherName: 'Mohammed Ahmed',
    motherName: 'Fatima Ahmed',
    roll: '654321',
    registration: '123987',
    board: 'rajshahi',
    examType: 'hsc',
    year: '2022',
    group: 'Commerce',
    candidateType: 'Regular',
    dob: '2004-08-22',
    institutionName: 'Rajshahi College',
    gpa: 4.50,
    passed: true,
    subjects: [
      {
        code: '101',
        name: 'Bangla',
        letterGrade: 'A',
        gradePoint: 4.0,
      },
      {
        code: '107',
        name: 'English',
        letterGrade: 'A+',
        gradePoint: 5.0,
      },
      {
        code: '109',
        name: 'Mathematics',
        letterGrade: 'A',
        gradePoint: 4.0,
      },
      {
        code: '253',
        name: 'Accounting',
        letterGrade: 'A+',
        gradePoint: 5.0,
      },
      {
        code: '277',
        name: 'Business Studies',
        letterGrade: 'A+',
        gradePoint: 5.0,
      },
      {
        code: '239',
        name: 'Finance',
        letterGrade: 'A-',
        gradePoint: 3.5,
      },
      {
        code: '151',
        name: 'Religion',
        letterGrade: 'A',
        gradePoint: 4.0,
      },
    ],
  },
  {
    studentName: 'Rahima Khatun',
    fatherName: 'Abdul Karim',
    motherName: 'Amena Begum',
    roll: '789012',
    registration: '456789',
    board: 'sylhet',
    examType: 'ssc',
    year: '2023',
    group: 'Humanities',
    candidateType: 'Regular',
    dob: '2006-03-10',
    institutionName: 'Sylhet Girls School',
    gpa: 4.25,
    passed: true,
    subjects: [
      {
        code: '101',
        name: 'Bangla',
        letterGrade: 'A+',
        gradePoint: 5.0,
      },
      {
        code: '107',
        name: 'English',
        letterGrade: 'A',
        gradePoint: 4.0,
      },
      {
        code: '109',
        name: 'Mathematics',
        letterGrade: 'B',
        gradePoint: 3.0,
      },
      {
        code: '301',
        name: 'History',
        letterGrade: 'A+',
        gradePoint: 5.0,
      },
      {
        code: '302',
        name: 'Geography',
        letterGrade: 'A',
        gradePoint: 4.0,
      },
      {
        code: '303',
        name: 'Civics',
        letterGrade: 'A+',
        gradePoint: 5.0,
      },
      {
        code: '151',
        name: 'Religion',
        letterGrade: 'A-',
        gradePoint: 3.5,
      },
    ],
  },
  {
    studentName: 'Mohammad Karim',
    fatherName: 'Nurul Islam',
    motherName: 'Shahana Begum',
    roll: '345678',
    registration: '890123',
    board: 'chittagong',
    examType: 'hsc',
    year: '2021',
    group: 'Science',
    candidateType: 'Regular',
    dob: '2003-12-05',
    institutionName: 'Chittagong College',
    gpa: 3.75,
    passed: true,
    subjects: [
      {
        code: '101',
        name: 'Bangla',
        letterGrade: 'A-',
        gradePoint: 3.5,
      },
      {
        code: '107',
        name: 'English',
        letterGrade: 'B',
        gradePoint: 3.0,
      },
      {
        code: '109',
        name: 'Mathematics',
        letterGrade: 'A',
        gradePoint: 4.0,
      },
      {
        code: '111',
        name: 'Physics',
        letterGrade: 'A',
        gradePoint: 4.0,
      },
      {
        code: '112',
        name: 'Chemistry',
        letterGrade: 'B',
        gradePoint: 3.0,
      },
      {
        code: '113',
        name: 'Biology',
        letterGrade: 'A',
        gradePoint: 4.0,
      },
      {
        code: '151',
        name: 'Religion',
        letterGrade: 'A+',
        gradePoint: 5.0,
      },
    ],
  },
  {
    studentName: 'Nusrat Jahan',
    fatherName: 'Kamal Uddin',
    motherName: 'Nasreen Akter',
    roll: '901234',
    registration: '567890',
    board: 'dhaka',
    examType: 'ssc',
    year: '2023',
    group: 'Science',
    candidateType: 'Regular',
    dob: '2006-07-20',
    institutionName: 'Viqarunnisa Noon School',
    gpa: 5.00,
    passed: true,
    subjects: [
      {
        code: '101',
        name: 'Bangla',
        letterGrade: 'A+',
        gradePoint: 5.0,
      },
      {
        code: '107',
        name: 'English',
        letterGrade: 'A+',
        gradePoint: 5.0,
      },
      {
        code: '109',
        name: 'Mathematics',
        letterGrade: 'A+',
        gradePoint: 5.0,
      },
      {
        code: '111',
        name: 'Physics',
        letterGrade: 'A+',
        gradePoint: 5.0,
      },
      {
        code: '112',
        name: 'Chemistry',
        letterGrade: 'A+',
        gradePoint: 5.0,
      },
      {
        code: '113',
        name: 'Biology',
        letterGrade: 'A+',
        gradePoint: 5.0,
      },
      {
        code: '114',
        name: 'Higher Mathematics',
        letterGrade: 'A+',
        gradePoint: 5.0,
      },
      {
        code: '151',
        name: 'Religion',
        letterGrade: 'A+',
        gradePoint: 5.0,
      },
    ],
  },
  {
    studentName: 'Abdul Kader',
    fatherName: 'Mohammad Ali',
    motherName: 'Rabeya Begum',
    roll: '432109',
    registration: '678901',
    board: 'jessore',
    examType: 'hsc',
    year: '2022',
    group: 'Commerce',
    candidateType: 'Irregular',
    dob: '2003-09-15',
    institutionName: 'Jessore Commerce College',
    gpa: 2.75,
    passed: true,
    subjects: [
      {
        code: '101',
        name: 'Bangla',
        letterGrade: 'B',
        gradePoint: 3.0,
      },
      {
        code: '107',
        name: 'English',
        letterGrade: 'C',
        gradePoint: 2.0,
      },
      {
        code: '109',
        name: 'Mathematics',
        letterGrade: 'D',
        gradePoint: 1.0,
      },
      {
        code: '253',
        name: 'Accounting',
        letterGrade: 'B',
        gradePoint: 3.0,
      },
      {
        code: '277',
        name: 'Business Studies',
        letterGrade: 'C',
        gradePoint: 2.0,
      },
      {
        code: '239',
        name: 'Finance',
        letterGrade: 'B',
        gradePoint: 3.0,
      },
      {
        code: '151',
        name: 'Religion',
        letterGrade: 'A',
        gradePoint: 4.0,
      },
    ],
  },
  {
    studentName: 'Tasnim Rahman',
    fatherName: 'Zahirul Rahman',
    motherName: 'Farzana Akter',
    roll: '567890',
    registration: '345678',
    board: 'dhaka',
    examType: 'ssc',
    year: '2023',
    group: 'Science',
    candidateType: 'Regular',
    dob: '2006-11-30',
    institutionName: 'Ideal School & College',
    gpa: 1.86,
    passed: false,
    subjects: [
      {
        code: '101',
        name: 'Bangla',
        letterGrade: 'C',
        gradePoint: 2.0,
      },
      {
        code: '107',
        name: 'English',
        letterGrade: 'F',
        gradePoint: 0.0,
      },
      {
        code: '109',
        name: 'Mathematics',
        letterGrade: 'D',
        gradePoint: 1.0,
      },
      {
        code: '111',
        name: 'Physics',
        letterGrade: 'C',
        gradePoint: 2.0,
      },
      {
        code: '112',
        name: 'Chemistry',
        letterGrade: 'D',
        gradePoint: 1.0,
      },
      {
        code: '113',
        name: 'Biology',
        letterGrade: 'F',
        gradePoint: 0.0,
      },
      {
        code: '151',
        name: 'Religion',
        letterGrade: 'B',
        gradePoint: 3.0,
      },
    ],
  },
];

// Simulate API request with a delay
export async function fetchStudentResults(params: ResultSearchParams): Promise<StudentResult> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Find matching result
  const result = MOCK_RESULTS.find(
    (r) =>
      r.roll === params.roll &&
      r.registration === params.registration &&
      r.board === params.board &&
      r.year === params.year &&
      r.examType === params.examType,
  );

  if (!result) {
    throw new Error('Result not found');
  }

  return result;
}