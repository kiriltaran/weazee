import type { FC } from 'react';

import styles from './Icon.module.scss';

interface IconProps {
  width?: number;
}

const Icon: FC<IconProps> = ({ width, children }) => (
  <div className={styles.icon} style={{ width }}>
    {children}
  </div>
);

export const createIcon = (icon: JSX.Element) => {
  const IconWithProps = (props: IconProps) => <Icon {...props}>{icon}</Icon>;

  return IconWithProps;
};
