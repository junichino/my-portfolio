import { track } from '@vercel/analytics';

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: Record<string, string> }) => void;
  }
}

type PortfolioEvent =
  | 'language_changed'
  | 'contact_email_click'
  | 'github_click'
  | 'linkedin_click';

type EventProps = Record<string, string>;

export function trackPortfolioEvent(eventName: PortfolioEvent, props: EventProps = {}) {
  const safeProps = sanitizeProps(props);

  track(eventName, safeProps);

  if (typeof window !== 'undefined' && typeof window.plausible === 'function') {
    window.plausible(eventName, { props: safeProps });
  }
}

function sanitizeProps(props: EventProps) {
  return Object.fromEntries(
    Object.entries(props).filter(([key, value]) => key.length <= 40 && value.length <= 80),
  );
}
