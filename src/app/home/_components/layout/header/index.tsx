import { headerBaseClass, headerTitleClass } from "./header.styles";

export default function Header() {
  return (
    <header className={headerBaseClass}>
      <h1 className={headerTitleClass}>Frontend Engineer Portfolio</h1>
    </header>
  );
}
