import React from 'react';
import { Hero } from './Hero';
import { LeadCapture } from './LeadCapture';
import { SocialProof } from './SocialProof';
import { VideoDemo } from './VideoDemo';
import { Benefits } from './Benefits';
import { HowItWorks } from './HowItWorks';
import { Features } from './Features';
import { Pricing } from './Pricing';
import { FAQ } from './FAQ';
import { EmotionalClose } from './EmotionalClose';
import { WithoutWith } from './WithoutWith';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <LeadCapture />
      <SocialProof />
      <VideoDemo />
      <WithoutWith />
      <Benefits />
      <HowItWorks />
      <Features />
      <Pricing />
      <FAQ />
      <EmotionalClose />
    </>
  );
};