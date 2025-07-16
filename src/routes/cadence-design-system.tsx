import { createFileRoute } from '@tanstack/react-router';
import CadenceDesignSystem from '@/pages/projects/cadence-design-system/CadenceDesignSystem';

export const Route = createFileRoute('/cadence-design-system')({
  component: CadenceDesignSystem,
}); 