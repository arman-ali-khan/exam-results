'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

// Context to store and access the recaptcha methods
interface ReCaptchaContextProps {
  executeRecaptcha?: (action: string) => Promise<string>;
}

const ReCaptchaContext = createContext<ReCaptchaContextProps>({});

// Hook to use reCAPTCHA within components
export const useGoogleReCaptcha = () => useContext(ReCaptchaContext);

// Props for the provider component
interface GoogleReCaptchaProviderProps {
  reCaptchaKey: string;
  children: React.ReactNode;
  scriptProps?: {
    async?: boolean;
    defer?: boolean;
    appendTo?: 'head' | 'body';
    nonce?: string;
  };
}

export function GoogleReCaptchaProvider({
  reCaptchaKey,
  children,
  scriptProps = {},
}: GoogleReCaptchaProviderProps) {
  const [grecaptcha, setGrecaptcha] = useState<any>(null);

  useEffect(() => {
    // Store the recaptcha in window for access
    if (typeof window === 'undefined') return;

    // Define the window recaptcha callback
    window.onRecaptchaLoad = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          setGrecaptcha(window.grecaptcha);
        });
      }
    };

    // Check if we already have the script loaded
    if (!document.querySelector('#google-recaptcha-script')) {
      // If not, load it
      const script = document.createElement('script');
      script.id = 'google-recaptcha-script';
      script.src = `https://www.google.com/recaptcha/api.js?render=${reCaptchaKey}&onload=onRecaptchaLoad`;
      script.async = scriptProps.async ?? true;
      script.defer = scriptProps.defer ?? true;

      const target = scriptProps.appendTo === 'body' ? document.body : document.head;
      target.appendChild(script);
    } else if (window.grecaptcha) {
      // If script is already loaded and grecaptcha is available
      window.grecaptcha.ready(() => {
        setGrecaptcha(window.grecaptcha);
      });
    }

    return () => {
      // Cleanup - remove the callback
      if (typeof window !== 'undefined') {
        window.onRecaptchaLoad = undefined;
      }
    };
  }, [reCaptchaKey, scriptProps]);

  // Execute recaptcha and get a token
  const executeRecaptcha = async (action: string): Promise<string> => {
    if (!grecaptcha) {
      throw new Error('ReCAPTCHA has not been loaded');
    }

    try {
      const token = await grecaptcha.execute(reCaptchaKey, { action });
      return token;
    } catch (error) {
      console.error('ReCAPTCHA execution error:', error);
      throw error;
    }
  };

  return (
    <ReCaptchaContext.Provider value={{ executeRecaptcha }}>
      {children}
    </ReCaptchaContext.Provider>
  );
}

// Extend Window interface to add our recaptcha-related properties
declare global {
  interface Window {
    onRecaptchaLoad?: () => void;
    grecaptcha?: any;
  }
}