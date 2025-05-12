import { MainLayout } from '@/components/layouts/main-layout';
import { SearchForm } from '@/components/search/search-form';

export default function Home() {
  return (
    <MainLayout>
      <div className="flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center px-4 py-12 md:px-6">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Academic Results Portal
            </h1>
            <p className="text-muted-foreground">
              Enter your details to view your examination results
            </p>
          </div>
          <SearchForm />
        </div>
      </div>
    </MainLayout>
  );
}