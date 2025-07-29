import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import styles from './Accordion.module.css';

interface AccordionRootProps {
  children: React.ReactNode;
  className?: string;
  type?: 'single' | 'multiple';
  defaultValue?: string;
  collapsible?: boolean;
}

interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionRoot: React.FC<AccordionRootProps> = ({
  children,
  className,
  type = 'single',
  defaultValue,
  collapsible = true,
}) => {
  if (type === 'single') {
    return (
      <AccordionPrimitive.Root
        className={clsx(styles.root, className)}
        type="single"
        defaultValue={defaultValue}
        collapsible={collapsible}
      >
        {children}
      </AccordionPrimitive.Root>
    );
  }

  return (
    <AccordionPrimitive.Root
      className={clsx(styles.root, className)}
      type="multiple"
      defaultValue={defaultValue ? [defaultValue] : undefined}
    >
      {children}
    </AccordionPrimitive.Root>
  );
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  value,
  className,
}) => (
  <AccordionPrimitive.Item
    className={clsx(styles.item, className)}
    value={value}
  >
    {children}
  </AccordionPrimitive.Item>
);

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionPrimitive.Header className={styles.header}>
    <AccordionPrimitive.Trigger
      className={clsx(styles.trigger, className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon className={styles.chevron} aria-hidden />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, className, ...props }, forwardedRef) => (
  <AccordionPrimitive.Content
    className={clsx(styles.content, className)}
    {...props}
    ref={forwardedRef}
  >
    <div className={styles.contentText}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionTrigger.displayName = 'AccordionTrigger';
AccordionContent.displayName = 'AccordionContent';

export {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
}; 