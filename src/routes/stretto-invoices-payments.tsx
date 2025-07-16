import { createFileRoute } from '@tanstack/react-router';
import StrettoInvoicesPayments from '../pages/projects/stretto-invoices-payments/StrettoInvoicesPayments';

export const Route = createFileRoute('/stretto-invoices-payments')({
  component: StrettoInvoicesPayments,
}); 