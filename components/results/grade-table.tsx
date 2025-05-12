import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Subject } from '@/lib/types';

interface GradeTableProps {
  subjects: Subject[];
}

export function GradeTable({ subjects }: GradeTableProps) {
  // Calculate total GPA
  const totalGradePoints = subjects.reduce((sum, subject) => sum + subject.gradePoint, 0);
  const gpa = subjects.length > 0 ? totalGradePoints / subjects.length : 0;

  return (
    <Card>
      <CardHeader className="bg-primary/5 pb-3">
        <CardTitle className="text-xl">Grade Sheet</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Subject Code</TableHead>
                <TableHead>Subject Name</TableHead>
                <TableHead className="text-center">Letter Grade</TableHead>
                <TableHead className="text-center">Grade Point</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subjects.map((subject) => (
                <TableRow key={subject.code}>
                  <TableCell className="font-medium">{subject.code}</TableCell>
                  <TableCell>{subject.name}</TableCell>
                  <TableCell className="text-center font-semibold">
                    {subject.letterGrade}
                  </TableCell>
                  <TableCell className="text-center">
                    {subject.gradePoint.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-muted/50">
                <TableCell colSpan={2} className="font-semibold text-right">
                  Total GPA
                </TableCell>
                <TableCell className="text-center font-semibold">
                  {getLetterGradeFromGPA(gpa)}
                </TableCell>
                <TableCell className="text-center font-semibold">
                  {gpa.toFixed(2)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

function getLetterGradeFromGPA(gpa: number): string {
  if (gpa >= 5.0) return 'A+';
  if (gpa >= 4.0) return 'A';
  if (gpa >= 3.5) return 'A-';
  if (gpa >= 3.0) return 'B';
  if (gpa >= 2.0) return 'C';
  if (gpa >= 1.0) return 'D';
  return 'F';
}