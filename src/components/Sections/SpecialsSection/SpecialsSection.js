import React from "react";
import "./SpecialsSection.css";
import { useNavigate } from "react-router-dom";
import SpecialCard from "../../Cards/SpecialCard/SpecialCard";
import Button from "../../Button/Button";

const specials = [
  {
    id: 1,
    title: "Greek salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/greek-salad-index-642f292397bbf.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
    price: "$12.99",
  },
  {
    id: 2,
    title: "Bruschetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image:
      "https://www.clarin.com/img/2022/12/22/UwCUEP0SQ_1200x630__1.jpg",
    price: "$ 5.99",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image:
      "https://www.jocooks.com/wp-content/uploads/2014/06/lemon-magic-cake-1-6-1-480x270.jpg",
    price: "$ 5.00",
  },
];

const SpecialsSection = () => {
  const navigate = useNavigate();

  const handleMenu = () => {
    navigate("/");
  };
  return (
    <div className="specials">
      <div className="specials-container">
        <h1 className="specials-title">Specials</h1>
        <Button onClick={handleMenu} >Online Menu</Button>
      </div>

      <div className="specials-list">
        {specials.map((special) => (
          <SpecialCard
            key={special.id}
            title={special.title}
            description={special.description}
            image={special.image}
            price={special.price}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialsSection;