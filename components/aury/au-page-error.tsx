import React from "react";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/base/button";

export const AUPageError = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-6 text-center">
      {/* Error Image */}
      <div className="mb-6">
        <div className="w-32 h-32 bg-aury-100 rounded-full flex items-center justify-center">
          <svg
            className="w-16 h-16 text-aury-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
      </div>

      {/* Error Content */}
      <h2 className="text-xl font-semibold text-foreground mb-2">
        Something went wrong
      </h2>
      <p className="text-sm text-muted-foreground mb-6 max-w-md">
        An unexpected error occurred. Please try again later.
      </p>

      {/* Reload Button */}
      <Button
        variant="default"
        onClick={handleReload}
        className="flex items-center gap-2"
      >
        <RefreshCw className="h-4 w-4" />
        Reload Page
      </Button>
    </div>
  );
};
