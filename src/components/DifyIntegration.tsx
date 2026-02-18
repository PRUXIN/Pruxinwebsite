import React, { useEffect } from 'react';

export default function DifyIntegration() {
  useEffect(() => {
    // Load Dify chatbot script
    const script = document.createElement('script');
    script.src = 'https://udify.app/chatbot.js';
    script.async = true;
    script.onload = () => {
      // Initialize Dify chatbot
      if (window.DifyChatbot) {
        window.DifyChatbot.init({
          token: 'YOUR_DIFY_TOKEN_HERE', // Replace with your actual Dify token
          baseUrl: 'https://udify.app',
          // Customization options
          theme: {
            primaryColor: '#5AA1FF',
            backgroundColor: '#ffffff',
            textColor: '#333333',
            borderRadius: '12px',
          },
          // Position and styling
          position: 'bottom-right',
          margin: {
            right: '20px',
            bottom: '20px',
          },
          // Button styling
          button: {
            size: 'large',
            backgroundColor: '#5AA1FF',
            textColor: '#ffffff',
          },
          // Chat window styling
          window: {
            width: '400px',
            height: '600px',
            borderRadius: '16px',
          },
          // Initial message
          welcomeMessage: "Hi! I'm here to help you learn more about Pranav's work and experience. What would you like to know?",
        });
      }
    };
    
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      // Clean up Dify chatbot if it exists
      if (window.DifyChatbot && window.DifyChatbot.destroy) {
        window.DifyChatbot.destroy();
      }
    };
  }, []);

  return null; // Dify handles rendering the chatbot UI
}

// Extend window interface for TypeScript
declare global {
  interface Window {
    DifyChatbot: any;
  }
}