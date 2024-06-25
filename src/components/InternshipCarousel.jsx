import Carousel from "react-multi-carousel";
import InternshipCard from "./InternshipCard";

const InternshipCarousel = ({ internshipCards }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 4,
    },
    laptop: {
      breakpoint: { max: 1400, min: 1100 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1100, min: 840 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 840, min: 0 },
      items: 1,
    },
  };
  return (
    <div className=" flex flex-col  justify-center w-full bg-[#43a724] py-8 px-8 rounded-xl">
      <Carousel
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl p-2 text-[#21282E] font-bold">
            Get Internship In Your Favourite Domain 🙌. Almost 30+{" "}
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl p-2 text-[#21282E] font-bold">
            Internships Are Open, Go & Grab Your Seats Now and secure your
            future👨🏼‍💻
          </h1>
        </div>
        {/* Items to map */}
        {internshipCards.map((card) => (
          <InternshipCard
            key={card.title}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </Carousel>

      <h1 className="mt-8 text-center text-1xl sm:text-2xl md:text-3xl lg:text-4xl text-white mx-auto ">
        Learn skills,<b> Market will be yours.</b>
      </h1>
    </div>
  );
};

export default InternshipCarousel;
