import * as React from "react";
import './header.scss';
import styles from './test.module.scss';

interface HeaderProps {
  name: string;
  X: number;
  Y: number;
}

const Header = ({ name, X, Y }: HeaderProps): JSX.Element => {
  return (
    <div className="header">
      header
      <div className={styles['header']}>test</div>
      <div>{name}</div>
      <div>{X}</div>
      <div>{Y}</div>
    </div>
  );
}

export default Header;
