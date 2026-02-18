import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Copy, Plus, Trash2 } from 'lucide-react';

interface Recommendation {
  name: string;
  title: string;
  company: string;
  content: string;
}

export function RecommendationExtractor() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [currentRec, setCurrentRec] = useState<Recommendation>({
    name: '',
    title: '',
    company: '',
    content: ''
  });

  const addRecommendation = () => {
    if (currentRec.name && currentRec.content) {
      setRecommendations([...recommendations, currentRec]);
      setCurrentRec({ name: '', title: '', company: '', content: '' });
    }
  };

  const removeRecommendation = (index: number) => {
    setRecommendations(recommendations.filter((_, i) => i !== index));
  };

  const generateCode = () => {
    const code = `const recommendations = [
${recommendations.map(rec => `  {
    name: "${rec.name}",
    title: "${rec.title}",
    company: "${rec.company}",
    content: "${rec.content.replace(/"/g, '\\"')}"
  }`).join(',\n')}
];`;
    
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>LinkedIn Recommendations Extractor</CardTitle>
          <p className="text-gray-600">
            Manually add your LinkedIn recommendations here to generate code for your website.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={currentRec.name}
                onChange={(e) => setCurrentRec({...currentRec, name: e.target.value})}
                placeholder="John Doe"
              />
            </div>
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={currentRec.title}
                onChange={(e) => setCurrentRec({...currentRec, title: e.target.value})}
                placeholder="Senior Product Manager"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              value={currentRec.company}
              onChange={(e) => setCurrentRec({...currentRec, company: e.target.value})}
              placeholder="Tech Company Inc."
            />
          </div>
          
          <div>
            <Label htmlFor="content">Recommendation Content</Label>
            <Textarea
              id="content"
              value={currentRec.content}
              onChange={(e) => setCurrentRec({...currentRec, content: e.target.value})}
              placeholder="Paste the full recommendation text here..."
              rows={4}
            />
          </div>
          
          <Button onClick={addRecommendation} disabled={!currentRec.name || !currentRec.content}>
            <Plus className="w-4 h-4 mr-2" />
            Add Recommendation
          </Button>
          
          {recommendations.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Added Recommendations ({recommendations.length})</h3>
              {recommendations.map((rec, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-medium">{rec.name}</div>
                        <div className="text-sm text-gray-600">{rec.title}</div>
                        <div className="text-sm text-gray-500">{rec.company}</div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeRecommendation(index)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-gray-700 italic">"{rec.content}"</p>
                  </CardContent>
                </Card>
              ))}
              
              <Button onClick={generateCode} className="w-full">
                <Copy className="w-4 h-4 mr-2" />
                Generate & Copy Code
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}