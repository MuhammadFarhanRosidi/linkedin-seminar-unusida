"use client";
import React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-red-50 flex items-center justify-center p-8">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
            <h1 className="text-2xl font-bold text-red-600 mb-4">
              Something went wrong
            </h1>
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Error Details:</h2>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
                {this.state.error?.message}
              </pre>
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Stack Trace:</h2>
              <pre className="bg-gray-100 p-4 rounded text-xs overflow-auto max-h-40">
                {this.state.error?.stack}
              </pre>
            </div>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
