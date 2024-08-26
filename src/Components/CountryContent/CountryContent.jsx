import "./CountryContent.css";

function CountryContent({ content, image }) {
  return (
    <div className="country-content">
      <img src={image} alt="Country" className="country-image" />
      <p>{content}</p>
    </div>
  );
}

export default CountryContent;
