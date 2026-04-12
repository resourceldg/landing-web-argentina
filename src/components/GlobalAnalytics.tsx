import { useScrollTracking, useEngagementTracking } from '../hooks/useAnalytics';

export default function GlobalAnalytics() {
  useScrollTracking();
  useEngagementTracking();
  
  return null;
}
