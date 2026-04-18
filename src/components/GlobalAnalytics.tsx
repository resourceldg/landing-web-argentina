import { useScrollTracking, useEngagementTracking, useUTMCapture } from '../hooks/useAnalytics';

export default function GlobalAnalytics() {
  // Captura UTMs en el primer render para atribuir correctamente las conversiones
  useUTMCapture();
  useScrollTracking();
  useEngagementTracking();

  return null;
}
