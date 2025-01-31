import { FeatureSteps } from "@/components/feature-section"

const features = [
  { 
    step: 'Step 1', 
    title: 'Understand Mental Health',
    content: 'Learn the importance of mental well-being and break the stigma around it.', 
    image: 'https://images.unsplash.com/photo-1620147461831-a97b99ade1d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVudGFsJTIwaGVhbHRofGVufDB8fDB8fHww' 
  },
  { 
    step: 'Step 2',
    title: 'Access Educational Resources',
    content: 'Explore articles, videos, and expert insights to expand your knowledge.',
    image: 'https://images.unsplash.com/photo-1699347914988-c61ec13c99c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWR1Y2F0aW9uYWwlMjByZXNvdXJjZXN8ZW58MHx8MHx8fDA%3D'
  },
  { 
    step: 'Step 3',
    title: 'Get Support & Take Action',
    content: 'Connect with mental health professionals and supportive communities.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop'
  },
]

export function FeatureStepsDemo() {
  return (
      <FeatureSteps 
        features={features}
        title="Your Path to Mental Wellness"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
      />
  )
}
