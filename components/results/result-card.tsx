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
              variant={result.passed ? 'default' : 'destructive'}
              className="font-semibold"
            >
              {result.passed ? 'PASSED' : 'FAILED'}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-1 divide-y md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="p-4">
            <p className="text-sm font-semibold text-muted-foreground">
              Student Details
            </p>
            <Separator className="my-2" />
            <div className="space-y-2">
              <InfoRow label="Name" value={result.studentName} />
              <InfoRow label="Roll Number" value={result.roll} />
              <InfoRow label="Registration" value={result.registration} />
              <InfoRow label="Date of Birth" value={formatDate(result.dob)} />
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm font-semibold text-muted-foreground">
              Parent Details
            </p>
            <Separator className="my-2" />
            <div className="space-y-2">
              <InfoRow label="Father's Name" value={result.fatherName} />
              <InfoRow label="Mother's Name" value={result.motherName} />
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm font-semibold text-muted-foreground">
              Academic Details
            </p>
            <Separator className="my-2" />
            <div className="space-y-2">
              <InfoRow label="Institution" value={result.institutionName} />
              <InfoRow label="Group/Stream" value={result.group} />
              <InfoRow label="Candidate Type" value={result.candidateType} />
              <div>
                <span className="text-base font-bold">GPA: </span>
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
    <div>
      <span className="text-sm font-medium">{label}: </span>
      <span className="text-sm">{value}</span>
    </div>
  );
}