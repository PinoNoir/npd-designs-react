import React from 'react';
import * as Switch from '@radix-ui/react-switch';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import styles from './ToggleGroup.module.css';

interface ToggleProps {
  value: string;
  onValueChange: (value: string) => void;
}

const Toggle: React.FC<ToggleProps> = ({ onValueChange, value }) => {
  const isChecked = value === 'right';

  const handleToggle = (checked: boolean) => {
    onValueChange(checked ? 'right' : 'left');
  };

  return (
    <Switch.Root
      className={styles.switchRoot}
      checked={isChecked}
      onCheckedChange={handleToggle}
    >
      <Switch.Thumb className={styles.switchThumb}>
        {isChecked ? <MoonIcon /> : <SunIcon />}
      </Switch.Thumb>
    </Switch.Root>
  );
};

export default Toggle;
