import GardenScene from "@/3D/scenes/GardenScene";
import { useRouter } from "next/router";
import s from "./style.module.scss";
import classNames from "classnames";
import { outward } from "@/styles/fonts";

const Garden = () => {
  const { query } = useRouter();

  return (
    <div className={s.wrapper}>
      {/* <div className={classNames(outward.className, s.title)}>SOLIDS</div> */}
      <GardenScene />
    </div>
  );
};

export default Garden;
