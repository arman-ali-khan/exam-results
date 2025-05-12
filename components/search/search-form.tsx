'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from '@/lib/recaptcha';
import { useSettings } from '@/hooks/use-settings';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  roll: z
    .string()
    .min(6, {
      message: 'Roll number must be at least 6 characters.',
    })
    .max(10, {
      message: 'Roll number must not exceed 10 characters.',
    }),
  registration: z
    .string()
    .min(6, {
      message: 'Registration number must be at least 6 characters.',
    })
    .max(12, {
      message: 'Registration number must not exceed 12 characters.',
    }),
});

function ReCaptchaSearchForm() {
  const router = useRouter();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    board,
    year,
    examType,
  } = useSettings();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      roll: '',
      registration: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!executeRecaptcha) {
      toast({
        title: 'reCAPTCHA Error',
        description: 'reCAPTCHA has not been loaded properly. Please refresh the page.',
        variant: 'destructive',
      });
      return;
    }

    try {
      setIsSubmitting(true);
      
      // Execute reCAPTCHA
      const token = await executeRecaptcha('form_submit');
      
      if (!token) {
        toast({
          title: 'reCAPTCHA Failed',
          description: 'Please try again later.',
          variant: 'destructive',
        });
        return;
      }

      // Here you would typically verify the token on your server
      // For demo purposes, we'll just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Navigate to results page with query params
      const queryParams = new URLSearchParams({
        roll: values.roll,
        registration: values.registration,
        board: board,
        year: year,
        examType: examType,
      });

      router.push(`/results?${queryParams.toString()}`);
    } catch (error) {
      toast({
        title: 'Submission Error',
        description: 'An error occurred. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="roll"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Roll Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter Roll Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="registration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Registration Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter Registration Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="text-xs text-muted-foreground">
          This site is protected by reCAPTCHA and the Google
          <a
            href="https://policies.google.com/privacy"
            className="mx-1 underline underline-offset-2"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
          and
          <a
            href="https://policies.google.com/terms"
            className="mx-1 underline underline-offset-2"
            target="_blank"
            rel="noreferrer"
          >
            Terms of Service
          </a>
          apply.
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            'View Result'
          )}
        </Button>
      </form>
    </Form>
  );
}

export function SearchForm() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6LftzDYrAAAAAIKj5cntOJ3f4YrehKTJeAjs0bnU"
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head',
      }}
    >
      <ReCaptchaSearchForm />
    </GoogleReCaptchaProvider>
  );
}