'use server';

import { z } from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string(),
});

type ContactFormState = {
  success: boolean;
  message?: string;
};

export async function submitContactForm(
  data: z.infer<typeof formSchema>
): Promise<ContactFormState> {
  const parsedData = formSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      success: false,
      message: 'Invalid form data.',
    };
  }

  // In a real application, you would handle the form data here,
  // e.g., send an email, save to a database, etc.
  console.log('New contact form submission:', parsedData.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    success: true,
    message: 'Form submitted successfully!',
  };
}
