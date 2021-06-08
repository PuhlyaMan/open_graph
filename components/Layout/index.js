import Link from "next/link";

import style from "./style.module.css";

const Layout = ({ children }) => {
  return (
    <div className={style.wrapper}>
      <nav className={style.navigate}>
        <Link className={style.link} href="/">
          App
        </Link>
        <Link className={style.link} href="/">
          App2
        </Link>
        <Link className={style.link} href="/">
          App3
        </Link>
      </nav>
      <div className={style.content}>{children}</div>
    </div>
  );
};

export default Layout;
