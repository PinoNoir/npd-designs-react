import React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import styles from './ToggleGroup.module.css';

interface ToggleProps {
  value: string;
  onValueChange: (value: string) => void;
}

const Toggle: React.FC<ToggleProps> = ({ onValueChange, value }) => {
  return (
    <ToggleGroupPrimitive.Root
      className={styles.toggleGroup}
      type='single'
      value={value}
      onValueChange={onValueChange}
    >
      <ToggleGroupPrimitive.Item value='left' className={styles.toggleItem}>
        <SunIcon />
      </ToggleGroupPrimitive.Item>
      <ToggleGroupPrimitive.Item value='right' className={styles.toggleItem}>
        <MoonIcon />
      </ToggleGroupPrimitive.Item>
    </ToggleGroupPrimitive.Root>
  );
};

export default Toggle;
