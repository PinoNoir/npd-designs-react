import { createFileRoute } from '@tanstack/react-router';
import { Contact } from '../pages';

export const Route = createFileRoute('/contact')({
  component: ContactComponent,
});

function ContactComponent() {
  return (
    <>
      <Contact />
    </>
  );
}

export default ContactComponent;
