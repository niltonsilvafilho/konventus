import { Button } from "./button";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between m-5">
      <p className="font-anton text-[62px]">KONVENTUS</p>
      <div className="flex align-center justify-center gap-2">
        <Button variant="ghost">Consultoria</Button>
        <Button variant="ghost">Engenharia de Software</Button>
        <Button variant="ghost">Agro</Button>
        <Button variant="ghost">Engenharia Naval</Button>
        <Button variant="ghost" className="bg-yellow-400 text-black">
          Quero Investir
        </Button>
      </div>
    </div>
  );
};
export default Header;
