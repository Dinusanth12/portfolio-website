"use client";

import { useEffect, useState } from 'react';

export default function NoJavaScriptWarning() {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    // Check if JavaScript is enabled
    const hasJavaScript = typeof window !== 'undefined';
    
    if (!hasJavaScript) {
      setShowWarning(true);
    }
  }, []);

  if (!showWarning) return null;

  return (
    <div className="fixed inset-0 z-50 bg-red-600 text-white flex items-center justify-center p-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">⚠️ JavaScript Required</h1>
        <p className="text-lg mb-4">
          This website requires JavaScript to function properly. Please enable JavaScript in your browser to continue.
        </p>
        <p className="text-sm opacity-80">
          If you&apos;re using a browser extension that blocks JavaScript, please disable it for this site.
        </p>
      </div>
    </div>
  );
} 