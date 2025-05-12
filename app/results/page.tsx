'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { MainLayout } from '@/components/layouts/main-layout';
import { ResultCard } from '@/components/results/result-card';
import { GradeTable } from '@/components/results/grade-table';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { fetchStudentResults } from '@/lib/results-service';
import { StudentResult } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Printer } from 'lucide-react';

export default function ResultsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<StudentResult | null>(null);

  const roll = searchParams.get('roll');
  const registration = searchParams.get('registration');
  const board = searchParams.get('board');
  const year = searchParams.get('year');
  const examType = searchParams.get('examType');

  useEffect(() => {
    const getResults = async () => {
      if (!roll || !registration || !board || !year || !examType) {
        toast({
          title: 'Missing information',
          description: 'Please fill all required fields to view results',
          variant: 'destructive',
        });
        router.push('/');
        return;
      }

      try {
        setLoading(true);
        const data = await fetchStudentResults({
          roll,
          registration,
          board,
          year,
          examType,
        });
        setResult(data);
      } catch (error) {
        toast({
          title: 'Error fetching results',
          description: 'Please check your information and try again',
          variant: 'destructive',
        });
        router.push('/');
      } finally {
        setLoading(false);
      }
    };

    getResults();
  }, [roll, registration, board, year, examType, router, toast]);

  const handlePrint = () => {
    window.print();
  };

  const handleBack = () => {
    router.push('/');
  };

  if (loading) {
    return (
      <MainLayout>
        <div className="container mx-auto max-w-4xl py-8">
          <div className="space-y-8">
            <Skeleton className="h-64 w-full rounded-lg" />
            <Skeleton className="h-80 w-full rounded-lg" />
          </div>
        </div>
      </MainLayout>
    );
  }

  if (!result) {
    return (
      <MainLayout>
        <div className="container mx-auto max-w-4xl py-8 text-center">
          <h2 className="text-2xl font-semibold">Result not found</h2>
          <p className="mt-2 text-muted-foreground">
            We couldn&apos;t find results matching your information.
          </p>
          <Button className="mt-4" onClick={handleBack}>
            Go Back
          </Button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto max-w-4xl py-8">
        <div className="mb-6 flex items-center justify-between print:hidden">
          <Button variant="outline" size="sm" onClick={handleBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <Button variant="outline" size="sm" onClick={handlePrint}>
            <Printer className="mr-2 h-4 w-4" />
            Print Result
          </Button>
        </div>

        <div className="space-y-8">
          <ResultCard result={result} />
          <GradeTable subjects={result.subjects} />
        </div>
      </div>
    </MainLayout>
  );
}