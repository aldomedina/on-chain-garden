import Nav from "@/components/Nav";
import Link from "next/link";
import s from "./style.module.scss";

const Dashboard = () => {
  return (
    <div>
      <Nav />
      <div className={s.wrapper}>
        <div className={s.paths}>
          <Link href="/garden/1">julio prado</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
