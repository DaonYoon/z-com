import React, { ReactNode } from "react";
import styles from '@/app/(beforeLogin)/_component/main.module.css';

export default function Layout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}
