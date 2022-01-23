import React from 'react';
import TrendImage from './GiphImage'

export default function TrendGiphs({trendData}) {
  // console.log(trendData);
  return (
      <div>
        {trendData && trendData.map(giph => (
          <TrendImage key={giph.id} giph={giph} />
        ))}
      </div>
  );
}
