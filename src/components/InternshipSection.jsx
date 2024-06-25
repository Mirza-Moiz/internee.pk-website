import "react-multi-carousel/lib/styles.css";

import Card from "./Card";

const InternshipSection = ({ cards }) => {
  return (
    <>
      <section className="flex flex-col items-center m-4 sm:mx-32 mt-12 ">
        <h1 className="text-center  text-3xl sm:text-4xl md:text-5xl p-2 text-[#21282E] font-bold">
          Internships every months
        </h1>
        <p className="my-4 text-[#717275]  text-center text-[16px] sm:text-[18px]   md:text-[20px] m-1 w-[100%] md:max-w-[80%]">
          Introducing Internee.pk, the ultimate platform designed to turbocharge
          the IT sector in Pakistan! We recognize the immense potential of
          talented individuals in the country and aim to bridge the gap between
          them and the thriving IT industry. Internee.pk offers a comprehensive
          range of virtual internship opportunities exclusively in the IT field.
        </p>
        <button className="w-40 p-2  my-3 text-white hover:bg-[#58a940cd] rounded-[10px] bg-[#43a724] transition-all duration-300 ease-in-out ">
          <a href="https://internee.pk/web-design.html" target="_blank">
            Browse Internship
          </a>
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 w-full sm:w-[100%] m-auto mt-4">
          {cards.map((card) => (
            <Card key={card.title} title={card.title} image={card.image} />
          ))}
        </div>
      </section>
    </>
  );
};

export default InternshipSection;
