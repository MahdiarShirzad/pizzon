import SpecialtyCard from "./SpecialtyCard";

const OurSpecialty = () => {
  const pizzas = [
    {
      imageSrc: "/assets/images/pizza/Quattro Formaggi Pizza.png",
      title: "پیتزا Quattro Formaggi",
    },
    {
      imageSrc: "/assets/images/pizza/Margherita pizza.png",
      title: "پیتزا Margherita",
    },
    {
      imageSrc: "/assets/images/pizza/Pizza Marinara.png",
      title: "پیتزا Marinara",
    },
  ];

  return (
    <div className="max-w-[1250px] mx-auto py-10">
      <p className="text-center font-semibold text-4xl">تخصص ما</p>
      <p className="text-center text-peach mt-4 text-xl">
        پیتزاهایی با ترکیب طعم و هنر
      </p>
      <div className="flex items-center justify-between mt-8 min-h-[400px]">
        {pizzas.map((pizza, index) => (
          <SpecialtyCard
            key={index}
            imageSrc={pizza.imageSrc}
            title={pizza.title}
          />
        ))}
      </div>
    </div>
  );
};

export default OurSpecialty;
