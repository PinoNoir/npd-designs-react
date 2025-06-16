import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDown } from 'lucide-react';
import styles from './Dropdown.module.css';

interface DropdownItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  align?: 'start' | 'center' | 'end';
  side?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
}

const Dropdown = ({
  trigger,
  items,
  align = 'end',
  side = 'bottom',
  className,
}: DropdownProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={`${styles.trigger} ${className || ''}`}>
          {trigger}
          <ChevronDown className={styles.icon} size={16} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={styles.content}
          sideOffset={5}
          align={align}
          side={side}
        >
          {items.map((item, index) => (
            <DropdownMenu.Item
              key={index}
              className={styles.item}
              onClick={item.onClick}
            >
              {item.href ? (
                <a href={item.href} className={styles.link}>
                  {item.label}
                </a>
              ) : (
                item.label
              )}
            </DropdownMenu.Item>
          ))}
          <DropdownMenu.Arrow className={styles.arrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown; 