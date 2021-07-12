import * as React from "react";
import './header.scss';
import styles from './test.module.scss';

const Header = (props) => {
  return (
    <div className="header">
      header
      <div className={styles['header']}>test</div>
    </div>
  );
}

export default Header;
