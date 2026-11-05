"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle2, AlertCircle } from "lucide-react";
import Button from "@/components/ui/Button";

const WaitlistForm = ({ buttonText }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Waitlist lead registered:", data);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="p-6 rounded-xl bg-gold/10 border border-gold/30 text-center space-y-2">
        <div className="flex justify-center">
          <CheckCircle2 className="w-8 h-8 text-gold" />
        </div>
        <h4 className="text-ivory font-semibold text-lg">
          You are on the list!
        </h4>
        <p className="text-stone text-xs sm:text-sm">
          We will notify you as soon as early access opens.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md mx-auto"
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <input
            type="email"
            placeholder="Enter your email address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            })}
            className={`w-full px-4 py-3.5 rounded-lg bg-obsidian-light border text-ivory text-sm placeholder-stone/60 focus:outline-none focus:ring-2 transition-all ${
              errors.email
                ? "border-crimson-alert focus:ring-crimson-alert/40"
                : "border-stone/20 focus:border-gold focus:ring-gold/40"
            }`}
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="whitespace-nowrap"
        >
          {isSubmitting ? "Joining..." : buttonText}
        </Button>
      </div>

      {errors.email && (
        <div className="flex items-center gap-1.5 text-crimson-alert text-xs text-left px-1">
          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
          <span>{errors.email.message}</span>
        </div>
      )}
    </form>
  );
};

export default WaitlistForm;
