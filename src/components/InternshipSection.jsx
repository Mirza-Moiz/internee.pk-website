import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Icon from "../assets/images/icon.jpg";
import InternshipCard from "./InternshipCard";
import Card from "./Card";

const InternshipSection = () => {
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

  const internshipCards = [
    {
      title: "Frontend Internship",
      description:
        "Choosing Internee.pk means more than just learning to code. It's about career advancement and propelling your journey towards becoming aproficient frontend developer. We believe in sculpting future tech leaders, and with us, you                        become part of a vibrant community committed to                          excellence.                          ",
      image: "./images/frontend.webp",
    },
    {
      title: "Cloud Computing internship",
      description:
        "Internee.pk for your Cloud Computing journey? We offer a comprehensive curriculum crafted by industry experts, ensuring you grasp the intricacies of cloud platforms and services. ",
      image: "./images/cloud.webp",
    },
    {
      title: "Graphic Designing Internship",
      description:
        "What sets our Graphic Designing internship apart? It's the perfect blend of theory and hands-on practice. You'll not only grasp the principles of design but also dive into real-world projects that challenge and enhance your creative skills.",
      image: "./images/graphics.webp",
    },
    {
      title: "Backend Internship",
      description:
        "Backend internship? It's not just about learning; it's about crafting scalable solutions that power the digital landscape. Throughout he nternship, you'll engage in hands-on rojects, tackling real-world challenges longside seasoned developers who are assionate about mentoring the next generation.",
      image: "./images/BackendDevelopment.webp",
    },
    {
      title: "Video Editing Internship",
      description:
        "It's not just about splicing clips; it's abou understanding the nuances of pacing, rhythm, and visual aesthetics. Throughout the internship, you'll work on diverse projects, refining your skills under the guidance of experienced professionals passionate about visual storytelling.",
      image: "./images/portrait-woman.webp",
    },
    {
      title: "Mobile App Internship ",
      description:
        "Our internship goes beyond coding; it's about understanding user behavior, mastering UI/UX principles, and creating apps that leave a lasting impression. Whether you're a seasoned coder or a budding developer, our program is tailored to nurture your skills and broaden your understanding of app architecture.",
      image: "./images/mobile-app.webp",
    },
    {
      title: "Chatbot Development Internship",
      description:
        " Our program is designed for enthusiasts eager to explore natural language processing, machine learning, and the art of crafting intelligent conversational agents. From understanding user intents to deploying chatbots in real-world scenarios, you'll gain hands-on experience with cutting-edge technologies.",
      image: "./images/chatbot.webp",
    },
    {
      title: " Digital Marketing Internship ",
      description:
        "Internee.pk offers a comprehensive Digital Marketing internship that goes beyond textbooks. Gain practical experience in social media management, content creation, SEO optimization, and analytics. Work on real projects, refine your skills, and make a tangible impact. ",
      image: "./images/marketing.webp",
    },
    {
      title: "Cyber Security Internship ",
      description:
        "We believe in nurturing talent that can tackle evolving cyber threats. Our interns don't just learn; they engage with cutting-edge technologies, analyze vulnerabilities, and develop robust security strategies. ",
      image: "./images/cyber.webp",
    },
    {
      title: "Backend Internship ",
      description:
        "Backend internship? It's not just about learning. it's about crafting scalable solutions that power the digital landscape. Throughout the internship, you'll engage in hands-on projects, tackling real-world challenges alongside seasoned developers who are passionate about mentoring the next generation. ",
      image: "./images/BackendDevelopment.webp",
    },
    {
      title: "Technical Writing Internship",
      description:
        "We understand the importance of effective communication in the tech world. Our Technical Writing Internship offers a unique blend of hands-on experience in translating technical jargon into clear, concise, and engaging content.",
      image: "./images/technical-writing.webp",
    },
  ];

  const cards = [
    {
      title: "Backend Development",
      image: "./images/BackendDevelopment.webp",
    },
    {
      title: "App Development Internship",
      image: "./images/mobile-app.webp",
    },
    {
      title: "Graphic Design",
      image: "./images/graphics.webp",
    },
    {
      title: "Chatbot Development",
      image: "./images/chatbot.webp",
    },
    {
      title: "Data Analytics",
      image: "./images/analysis.webp",
    },
    {
      title: "Figma Internship",
      image: "./images/figma.png",
    },
  ];
  return (
    <>
      <section className="flex flex-col items-center m-4 sm:mx-32 mt-12 ">
        <div className="flex items-center justify-center h-24 w-24 rounded-full shadow-md">
          <img
            className="h-11 sm:h-14 md:h-16 w-auto m-2"
            src={Icon}
            alt="Internee.pk icon"
          />
        </div>
        <h1 className="text-center  text-3xl sm:text-4xl md:text-5xl p-2 text-[#21282E] font-bold">
          Who is internee.pk?
        </h1>
        <p className="my-4 text-[#717275]  text-center text-[16px] sm:text-[18px]   md:text-[20px] m-1 w-[100%] md:max-w-[80%]">
          The ultimate platform designed to turbocharge the IT sector in
          Pakistan! We recognize the immense potential of talented individuals
          in the country and aim to bridge the gap between them and the thriving
          IT industry. Internee.pk offers a comprehensive range of virtual
          internship opportunities exclusively in the IT field.
        </p>
        <span className="font-bold text-[#43a724] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] m-4 mb-10 w-[100%] md:max-w-[80%] text-center">
          👇 Click Below and grab your internship now 👇
        </span>
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
      </section>
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
