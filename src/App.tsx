import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';

function LoadingFallback() {
  return <div className="min-h-screen bg-[#0A0A0A]" />;
}

export default function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
