"use client";

import { toast } from "sonner";

export function useToast() {
  return {
    toast: {
      message: (message: string) => toast(message),
      success: (message: string) => toast.success(message),
      error: (message: string) => toast.error(message),
      warning: (message: string) => toast.warning(message),
      info: (message: string) => toast.info(message),
    },
  };
}