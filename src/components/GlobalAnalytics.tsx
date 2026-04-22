import { useScrollTracking, useEngagementTracking, useUTMCapture, usePricingVisibility } from '../hooks/useAnalytics';

export default function GlobalAnalytics() {
  useUTMCapture();
  useScrollTracking();
  useEngagementTracking();
  usePricingVisibility();

  return null;
}
