import { useState } from "react";
import CountryButton from "../CountryButton/CountryButton";
import CountryContent from "../CountryContent/CountryContent";
import "./CountryTabs.css";

let countryData = [
  {
    id: 1,
    name: "ایران",
    content:
      "ایران کشوری با تاریخ و فرهنگ غنی است. جاذبه‌های گردشگری شامل تخت جمشید، کاشان و شیراز می‌باشد.",
    image: "/src/assets/iran.jpg",
  },
  {
    id: 2,
    name: "فرانسه",
    content:
      "فرانسه به خاطر برج ایفل و موزه لوور مشهور است. پاریس، نیکا و بوردو از مقاصد برجسته گردشگری این کشور هستند.",
    image: "/src/assets/france.jpg",
  },
  {
    id: 3,
    name: "آلمان",
    content:
      "آلمان با تاریخچه فرهنگی و علمی خود شناخته می‌شود. برلین، مونیخ و فرانکفورت از مقاصد برجسته گردشگری آن هستند.",
    image: "/src/assets/germany.jpg",
  },
  {
    id: 4,
    name: "چین",
    content:
      "چین به خاطر دیوار بزرگ چین و شهر ممنوعه معروف است. پکن، شانگهای و گوانگژو از مقاصد گردشگری این کشور هستند.",
    image: "/src/assets/china.jpg",
  },
  {
    id: 5,
    name: "ترکیه",
    content:
      "ترکیه با تاریخچه غنی و سواحل زیبایش شناخته می‌شود. استانبول، آنکارا و ازمیر از مقاصد گردشگری این کشور هستند.",
    image: "/src/assets/turkey.jpg",
  },
];

function CountryTabs() {
  let [activeCountryID, setActiveCountryID] = useState(1);
  let handleClick = (id) => {
    setActiveCountryID(id);
  };

  return (
    <div className="country-tabs">
      {countryData.map((country) => (
        <CountryButton
          key={country.id}
          id={country.id}
          name={country.name}
          isActive={activeCountryID === country.id}
          onClick={() => handleClick(country.id)}
        />
      ))}
      <hr />
      <CountryContent
        content={
          countryData.find((country) => country.id === activeCountryID)?.content
        }
        image={
          countryData.find((country) => country.id === activeCountryID)?.image
        }
      />
    </div>
  );
}

export default CountryTabs;
