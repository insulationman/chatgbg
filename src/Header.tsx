import SellaLogo from "./assets/logo.svg";

const Header = () => {
  return (
    <div className="flex w-full items-center p-4 gap-2">
      <h1 className="text-2xl font-bold">ChatGBG</h1>
      <span className="ml-auto">En produkt av</span>
      <img src={SellaLogo} alt="Sella" className="w-20" />
    </div>
  );
};

export default Header;
