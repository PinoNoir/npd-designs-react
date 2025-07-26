import { createFileRoute } from '@tanstack/react-router';
import StrettoGenaiChatbot from '@/pages/projects/stretto-genai-chatbot/StrettoGenaiChatbot';
import { useEffect } from 'react';

export const Route = createFileRoute('/stretto-genai-chatbot')({
  component: StrettoGenaiChatbotComponent,
});

function StrettoGenaiChatbotComponent() {
  useEffect(() => {
    // Ensure page starts at top when navigating to this route
    window.scrollTo(0, 0);
  }, []);

  return <StrettoGenaiChatbot />;
} 