
import React, { useMemo } from 'react';

interface WordCloudProps {
  data: { text: string; value: number }[];
}

export const WordCloud: React.FC<WordCloudProps> = ({ data }) => {
  const processedData = useMemo(() => {
    if (!data || data.length === 0) return [];
    const maxVal = Math.max(...data.map(d => d.value));
    const minVal = Math.min(...data.map(d => d.value));

    return data.map(item => {
      // Normalize size between a min and max font size
      const percentage = (item.value - minVal) / (maxVal - minVal || 1);
      const fontSize = 1 + percentage * 2; // Font size from 1rem to 3rem
      const opacity = 0.6 + percentage * 0.4; // Opacity from 60% to 100%
      return { ...item, fontSize, opacity };
    }).sort(() => Math.random() - 0.5); // Randomize for better layout
  }, [data]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 p-4">
      {processedData.map(({ text, fontSize, opacity }) => (
        <span
          key={text}
          className="font-bold transition-all duration-300"
          style={{
            fontSize: `${fontSize}rem`,
            lineHeight: `${fontSize * 1.1}rem`,
            opacity,
            color: '#FFFFFF'
          }}
        >
          {text}
        </span>
      ))}
    </div>
  );
};
