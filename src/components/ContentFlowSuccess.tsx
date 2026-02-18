import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ArrowRight } from 'lucide-react';

interface ContentFlowSuccessProps {
  onNavigateHome: () => void;
}

export default function ContentFlowSuccess({ onNavigateHome }: ContentFlowSuccessProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Hero Section */}
        <div className="text-6xl mb-6">🎉</div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Welcome to ContentFlow!
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Payment Successful - Check Your Email
        </p>

        {/* Message Box */}
        <Card className="p-8 bg-white border border-gray-200 rounded-2xl shadow-lg mb-8">
          <CardContent className="p-0">
            <p className="text-lg text-gray-700 mb-6">
              We've sent your ContentFlow package to your email. You should receive it within 5 minutes.
            </p>
            
            {/* Instructions */}
            <div className="text-left space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Steps:</h3>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <p className="text-gray-600">Check your email inbox (and spam folder)</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <p className="text-gray-600">Open the ContentFlow package link</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <p className="text-gray-600">Make a copy to your Google Drive</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <p className="text-gray-600">Follow the customization guide</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                    5
                  </div>
                  <p className="text-gray-600">Start posting in 2 hours!</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support Section */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
          <p className="text-gray-600 mb-4">
            Questions? Email pranavdesigns2020@gmail.com or DM us @pruxin_studio
          </p>
          
          <div className="flex justify-center space-x-6 text-sm">
            <a 
              href="mailto:pranavdesigns2020@gmail.com?subject=ContentFlow Support"
              className="text-purple-600 hover:text-purple-700 underline transition-colors"
            >
              Email Support
            </a>
            <a 
              href="https://www.instagram.com/pruxin_studio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 underline transition-colors"
            >
              Instagram DM
            </a>
          </div>
        </div>

        {/* Back Button */}
        <Button
          onClick={onNavigateHome}
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Back to Pruxin.com
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}