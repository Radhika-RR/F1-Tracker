import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { WordCloud } from '../components/WordCloud';
import { getSentimentData } from '../services/mockApi';
import type { SentimentData } from '../types';

const COLORS = { Positive: '#10B981', Neutral: '#6B7280', Negative: '#EF4444' };

// Helper function to simulate sentiment analysis on a list of texts from an uploaded file
const analyzeUploadedData = (texts: string[]): SentimentData => {
  const keywords = {
    positive: ['amazing', 'great', 'incredible', 'masterful', 'love', 'pace', 'fast', 'fantastic', 'yes'],
    negative: ['crash', 'bad', 'terrible', 'unbelievable', 'questionable', 'slow', 'mistake', 'disaster'],
  };

  const sentiments: ('Positive' | 'Negative' | 'Neutral')[] = texts.map(text => {
    const lowerText = text.toLowerCase();
    if (keywords.positive.some(kw => lowerText.includes(kw))) return 'Positive';
    if (keywords.negative.some(kw => lowerText.includes(kw))) return 'Negative';
    return 'Neutral';
  });

  const distribution = [
    { name: 'Positive', value: sentiments.filter(s => s === 'Positive').length },
    { name: 'Neutral', value: sentiments.filter(s => s === 'Neutral').length },
    { name: 'Negative', value: sentiments.filter(s => s === 'Negative').length },
  ];

  const samples = texts.slice(0, 5).map((text, i) => ({
    text,
    sentiment: sentiments[i],
  }));

  const stopWords = new Set(['the', 'a', 'an', 'is', 'are', 'was', 'were', 'in', 'on', 'at', 'to', 'for', 'of', 'and', 'or', 'but', 'it', 'i', 'you', 'he', 'she', 'we', 'they', 'f1', 's', 't']);
  const wordCounts: { [key: string]: number } = {};
  texts.forEach(text => {
    text.toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/).forEach(word => {
      if (word && !stopWords.has(word)) {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
      }
    });
  });

  const wordCloud = Object.entries(wordCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 30)
    .map(([text, value]) => ({ text, value }));
  
  const timeline = [];
  const totalItems = sentiments.length;
  if (totalItems > 0) {
      const numChunks = 5;
      const chunkSize = Math.ceil(totalItems / numChunks);
      for (let i = 0; i < numChunks; i++) {
          const chunk = sentiments.slice(i * chunkSize, (i + 1) * chunkSize);
          if (chunk.length > 0) {
              timeline.push({
                  date: `Segment ${i + 1}`,
                  positive: chunk.filter(s => s === 'Positive').length,
                  negative: chunk.filter(s => s === 'Negative').length,
                  neutral: chunk.filter(s => s === 'Neutral').length,
              });
          }
      }
  }

  return { distribution, samples, wordCloud, timeline };
};


export const SentimentAnalyzerPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<SentimentData | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setFileName(null);
    const result = await getSentimentData();
    setData(result);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setIsLoading(true);

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        let texts: string[] = [];

        if (file.type === 'application/json') {
          const jsonData = JSON.parse(content);
          if (Array.isArray(jsonData)) {
            texts = jsonData.map(item => (typeof item === 'object' && item.text ? item.text : typeof item === 'string' ? item : '')).filter(Boolean);
          }
        } else if (file.type === 'text/csv' || file.name.endsWith('.csv')) {
          texts = content.split('\n').map(row => row.split(',')[0].trim()).filter(Boolean);
           if (texts.length > 0) texts.shift(); // Assume header row and remove it
        } else {
            alert('Unsupported file type. Please upload a valid CSV or JSON file.');
            setIsLoading(false);
            return;
        }

        if (texts.length === 0) {
            alert('No valid text entries found in the file.');
            setIsLoading(false);
            return;
        }

        const analyzedData = analyzeUploadedData(texts);
        setData(analyzedData);

      } catch (error) {
        console.error("Error processing file:", error);
        alert('Failed to process the file. Please ensure it is correctly formatted.');
      } finally {
        setIsLoading(false);
      }
    };
    
    reader.onerror = () => {
        alert('Failed to read the file.');
        setIsLoading(false);
    }
    
    reader.readAsText(file);
    event.target.value = ''; // Reset input to allow re-uploading the same file
  };

  const SentimentBadge: React.FC<{ sentiment: 'Positive' | 'Negative' | 'Neutral' }> = ({ sentiment }) => {
    const color = sentiment === 'Positive' ? 'bg-green-500/20 text-green-400' :
                  sentiment === 'Negative' ? 'bg-red-500/20 text-red-400' :
                  'bg-gray-500/20 text-gray-400';
    return <span className={`px-2 py-1 text-xs font-bold rounded-full ${color}`}>{sentiment}</span>
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="text-center">
            <div className="w-16 h-16 border-4 border-f1-red border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-4 text-gray-300">Analyzing fan sentiment...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return <p>No data available.</p>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold">Fan Sentiment Dashboard</h1>
          <p className="text-gray-400">{fileName ? `Analysis of custom dataset: ${fileName}` : 'Analysis of fan comments and social media posts.'}</p>
        </div>
        <div className="flex items-center gap-4">
            <Button onClick={fetchData} className="w-auto">Default Data</Button>
            <label htmlFor="file-upload" className="cursor-pointer w-auto px-6 py-3 bg-f1-light-dark text-white font-bold rounded-md hover:bg-gray-700 transition-all duration-300 border border-gray-600">
                Upload Data
            </label>
            <input id="file-upload" type="file" className="hidden" accept=".csv,.json" onChange={handleFileChange} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <h2 className="text-xl font-bold mb-4">Overall Sentiment</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={data.distribution} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                {data.distribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[entry.name as keyof typeof COLORS]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #4B5563' }} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Card>
        <Card className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-4">Sentiment Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.timeline}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
              <XAxis dataKey="date" stroke="#9CA3B0" />
              <YAxis stroke="#9CA3B0" />
              <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #4B5563' }} />
              <Legend />
              <Line type="monotone" dataKey="positive" stroke={COLORS.Positive} strokeWidth={2} name="Positive" />
              <Line type="monotone" dataKey="neutral" stroke={COLORS.Neutral} strokeWidth={2} name="Neutral" />
              <Line type="monotone" dataKey="negative" stroke={COLORS.Negative} strokeWidth={2} name="Negative" />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
            <h2 className="text-xl font-bold mb-4">Trending Topics Word Cloud</h2>
            <div className="min-h-[300px] flex items-center justify-center">
                <WordCloud data={data.wordCloud} />
            </div>
        </Card>
        <Card>
            <h2 className="text-xl font-bold mb-4">Sample Comments</h2>
            <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                {data.samples.map((sample, index) => (
                    <div key={index} className="p-3 bg-f1-dark rounded-md border border-gray-700">
                        <p className="text-gray-300 mb-2">"{sample.text}"</p>
                        <SentimentBadge sentiment={sample.sentiment} />
                    </div>
                ))}
            </div>
        </Card>
      </div>
    </div>
  );
};
