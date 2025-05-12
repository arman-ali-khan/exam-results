import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StudentResult } from '@/lib/types';
import { formatDate } from '@/lib/utils';

interface ResultCardProps {
  result: StudentResult;
}

export function ResultCard({ result }: ResultCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-primary/5 pb-3">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <CardTitle className="text-center text-xl md:text-left">
            Student Information
          </CardTitle>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="font-normal">
              {result.examType}
            </Badge>
            <Badge variant="outline" className="font-normal">
              {result.year}
            </Badge>
            <Badge variant="outline" className="font-normal">
              {result.board}
            </Badge>
            <Badge
              variant={result.passed ? 'success' : 'destructive'}
              className="font-semibold"
            >
              {result.passed ? 'PASSED' : 'FAILED'}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 print:p-2">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 print:grid-cols-3">
          {/* Student Details */}
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950/50">
            <h3 className="mb-2 font-semibold text-black dark:text-blue-300">
              Student Details
            </h3>
            <div className="space-y-2">
              <InfoRow label="Name" value={result.studentName} />
              <InfoRow label="Roll Number" value={result.roll} />
              <InfoRow label="Registration" value={result.registration} />
              <InfoRow label="Date of Birth" value={formatDate(result.dob)} />
            </div>
          </div>

          {/* Parent Details */}
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950/50">
            <h3 className="mb-2 font-semibold text-black dark:text-green-300">
              Parent Details
            </h3>
            <div className="space-y-2">
              <InfoRow label="Father's Name" value={result.fatherName} />
              <InfoRow label="Mother's Name" value={result.motherName} />
            </div>
          </div>

          {/* Academic Details */}
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-950/50">
            <h3 className="mb-2 font-semibold text-black dark:text-purple-300">
              Academic Details
            </h3>
            <div className="space-y-2">
              <InfoRow label="Institution" value={result.institutionName} />
              <InfoRow label="Group/Stream" value={result.group} />
              <InfoRow label="Candidate Type" value={result.candidateType} />
              <div className="mt-2 rounded-md bg-white p-2 dark:bg-black/20">
                <span className="text-base font-bold text-black dark:text-purple-300">
                  GPA:{' '}
                </span>
                <span className="text-base font-semibold">
                  {result.gpa.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-sm">
      <span className="font-medium">{label}: </span>
      <span>{value}</span>
    </div>
  );
}