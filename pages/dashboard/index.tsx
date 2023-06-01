import Nav from "@/components/Nav";
import Link from "next/link";
import s from "./style.module.scss";

const Dashboard = () => {
  return (
    <div>
      <Nav />
      <div className={s.wrapper}>
        <div className={s.paths}>
          <Link href="/garden/1">garden</Link>
          <div className={s.separator} />
          <Link href="/new-garden">new garden</Link>
          <div className={s.separator} />
          <Link href="/new-asset">new asset</Link>
          <div className={s.separator} />
          <Link href="/asset">asset</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
