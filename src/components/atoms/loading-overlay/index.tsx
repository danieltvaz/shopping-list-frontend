import "./styles.css";

import logo from "../../../assets/logo.png";

type LoadingOverlayProps = {
  active: boolean;
};

export default function LoadingOverlay({ active }: LoadingOverlayProps) {
  if (active)
    return (
      <div className="loading-overlay__wrapper">
        <div className="loading-overlay_inner_wrapper">
          <img src={logo} alt="shopping list" style={{ width: "12rem" }} />
          <p>Carregando</p>
        </div>
      </div>
    );
  return <></>;
}
