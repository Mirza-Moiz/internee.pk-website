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
    <div className=" flex flex-col  justify-center w-[95%] md-w-[90%] bg-[#43a724] py-8 px-8 mx-auto rounded-xl">
      <Carousel
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        <div className="flex flex-col items-center justify-center text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl p-2 mb-4 font-bold">
            Get Internship In Your Favourite Domain 🙌. Almost 30+{" "}
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl p-2 my-4 font-bold">
            Internships Are Open, Go & Grab Your Seats Now and secure your
            future👨🏼‍💻
          </h2>
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

      <h2 className="mt-8 text-center text-1xl sm:text-2xl md:text-3xl lg:text-4xl text-white mx-auto ">
        Learn skills,<b> Market will be yours.</b>
      </h2>
    </div>
  );
};

export default InternshipCarousel;
