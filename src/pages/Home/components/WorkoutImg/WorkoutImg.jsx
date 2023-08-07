import React from 'react'
import BackgroundImageDiv from './BackgroundImageDiv';

export default function WorkoutImg() {
  const imageUrl = "https://images.unsplash.com/photo-1522898467493-49726bf28798?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDExMXx8d29ya291dHxlbnwxfHx8fDE2OTA5OTcwMTV8MA&ixlib=rb-4.0.3&q=80&w=1000";
  return (
    <BackgroundImageDiv imageUrl={imageUrl}>
     
    </BackgroundImageDiv>
  )
}
