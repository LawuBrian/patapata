"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
  rememberMe: z.boolean().default(false).optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface AuthFormSplitScreenProps {
  logo: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  onSubmit: (data: FormValues) => Promise<void>;
  forgotPasswordHref: string;
  createAccountHref: string;
}

export function AuthFormSplitScreen({
  logo,
  title,
  description,
  imageSrc,
  imageAlt,
  onSubmit,
  forgotPasswordHref,
  createAccountHref,
}: AuthFormSplitScreenProps) {
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "", rememberMe: false },
  });

  const handleFormSubmit = async (data: FormValues) => {
    setIsLoading(true);
    try {
      await onSubmit(data);
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };

  return (
    <div className="relative flex min-h-screen w-full flex-col md:flex-row">
      {/* Left Panel — Form */}
      <div className="flex w-full flex-col items-center justify-center bg-cream p-8 md:w-1/2 md:p-16">
        <div className="w-full max-w-md">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.div variants={itemVariants} className="mb-2">
              {logo}
            </motion.div>
            <motion.div variants={itemVariants}>
              <h1 className="text-2xl font-clarendon text-charcoal tracking-tight">{title}</h1>
              <p className="text-sm text-stone font-light mt-1">{description}</p>
            </motion.div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-4">
                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-bebas tracking-[0.2em] uppercase text-charcoal">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="email@example.com"
                            {...field}
                            disabled={isLoading}
                            className="text-base bg-card border-charcoal/20 focus:border-amber focus-visible:ring-amber/30 rounded-sm"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-bebas tracking-[0.2em] uppercase text-charcoal">
                          Password
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="••••••••••••"
                            {...field}
                            disabled={isLoading}
                            className="text-base bg-card border-charcoal/20 focus:border-amber focus-visible:ring-amber/30 rounded-sm"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-center justify-between">
                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            disabled={isLoading}
                            className="border-charcoal/30 data-[state=checked]:bg-amber data-[state=checked]:border-amber"
                          />
                        </FormControl>
                        <FormLabel className="font-normal text-stone text-sm">Remember Me</FormLabel>
                      </FormItem>
                    )}
                  />
                  <a
                    href={forgotPasswordHref}
                    className="text-sm text-amber hover:text-amber-dark transition-colors"
                  >
                    Forgot Password?
                  </a>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 bg-amber hover:bg-amber-light disabled:opacity-60 text-charcoal font-bebas tracking-[0.25em] uppercase text-sm rounded-sm transition-colors duration-500 flex items-center justify-center gap-2"
                  >
                    {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
                    Sign In
                  </button>
                </motion.div>
              </form>
            </Form>

            <motion.p variants={itemVariants} className="text-center text-sm text-stone font-light">
              Don&apos;t have an account?{" "}
              <a href={createAccountHref} className="font-semibold text-charcoal hover:text-amber transition-colors">
                Create one here
              </a>
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Right Panel — Image */}
      <div className="relative hidden w-1/2 md:block">
        <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
      </div>
    </div>
  );
}
