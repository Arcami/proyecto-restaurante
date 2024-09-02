import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryCard from "./CategoryCard";

export default function CategoryCardList() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: true,
    pauseOnHover: true,
  };

  const foodCategory = [
    { text: "Mexicana", emoji: "🌮" },
    { text: "Italiana", emoji: "🍝" },
    { text: "China", emoji: "🥡" },
    { text: "Japonesa", emoji: "🍣" },
    { text: "India", emoji: "🍛" },
    { text: "Mediterránea", emoji: "🍇" },
    { text: "Tailandesa", emoji: "🍜" },
    { text: "Americana", emoji: "🍔" },
    { text: "Francesa", emoji: "🥖" },
    { text: "Turca", emoji: "🥙" },
    { text: "Vietnamita", emoji: "🍲" },
    { text: "Española", emoji: "🥘" },
    { text: "Coreana", emoji: "🍗" },
    { text: "Libanesa", emoji: "🥙" },
    { text: "Griega", emoji: "🥗" },
    { text: "Vegetariana", emoji: "🥕" },
    { text: "Vegana", emoji: "🌱" },
    { text: "Marisco", emoji: "🦐" },
    { text: "Barbacoa", emoji: "🍖" },
    { text: "Fusión", emoji: "🌟" },
  ];

  return (
    <div className="category-card-list-component">
      <div className="container">
        <h2>¿Qué te apetece comer hoy? 😋</h2>
      </div>

      <div className="container categories-carousel">
        <div className="slider-container">
          <Slider {...settings}>
            {foodCategory.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
