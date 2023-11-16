interface Props {
  onClick?: () => void;
}

export default function HamburgerIcon({ onClick }: Props) {
  return (
    <div className="hamburger-icon" onClick={onClick}>
      <div />
      <div />
      <div />
    </div>
  );
}
