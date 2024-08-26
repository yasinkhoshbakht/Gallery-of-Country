import "./CountryButton.css";

function CountryButton({ id, name, isActive, onClick }) {
  return (
    <button
      className={`country-button ${isActive ? "active" : ""}`}
      onClick={onClick}
      id={id}
    >
      {name}
    </button>
  );
}

export default CountryButton;
