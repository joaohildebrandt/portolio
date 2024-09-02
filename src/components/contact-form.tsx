"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import * as z from "zod";
import { Loader2 } from "lucide-react";
import { useCallback, useEffect } from "react";

const formContactSchema = z.object({
  name: z.string().min(1, {
    message: "Field can't be empty",
  }),
  email: z
    .string()
    .min(1, {
      message: "Field can't be empty",
    })
    .email({
      message: "Is not a valid email",
    }),
  subject: z.string().min(1, {
    message: "Field can't be empty",
  }),
  message: z.string().min(1, {
    message: "Field can't be empty",
  }),
});

type FormContactValues = z.infer<typeof formContactSchema>;

export const ContactForm = () => {
  const form = useForm<FormContactValues>({
    resolver: zodResolver(formContactSchema),
  });

  const onSubmit = async (values: FormContactValues) => {
    // await fetch("api/email", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(values),
    // });

    form.reset({
      email: "",
      message: "",
      name: "",
      subject: "",
    });
  };

  return (
    <Form {...form}>
      <form
        className="grid grid-cols-12 gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="col-span-12 md:col-span-6">
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="col-span-12 md:col-span-6">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="col-span-12">
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="col-span-12">
              <FormLabel>Your message</FormLabel>
              <FormControl>
                <Textarea rows={8} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="col-span-12">
          <Button
            size="lg"
            className="w-full md:w-48"
            type="submit"
            disabled={
              !form.formState.isDirty ||
              !form.formState.isValid ||
              form.formState.isSubmitting
            }
          >
            {form.formState.isSubmitting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Send a message"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};
