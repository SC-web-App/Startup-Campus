"use client";
import { useState } from "react";

export const GlobalFounders = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      founderImg: "/Founders-img/outsidee-founder.png",
      alt: "outsidee-founder",
      name: "OUTSIDEE",
      founder: "Tochukwu Ifeanyi",
      description:
        "Outsidee is an app revolutionizing entertainment and leisure. It connects users with top destinations and activities while helping vendors expand their reach. Our platform offers personalized recommendations and accurate search tools, aiming to enhance outdoor adventures and foster meaningful connections.",
      twitterLink: "",
      instagramLink: "",
      linkedInLink: "",
      websiteLink: "",
    },
    {
      id: 2,
      founderImg: "/Founders-img/interna-founder.png",
      alt: "interna-founder",
      name: "INTERNA",
      founder: "Hanif Adedotun",
      description:
        "Interna is a solution designed to provide internship opportunities to every student, equip them with professional tools",
      twitterLink: "",
      instagramLink: "",
      linkedInLink: "",
      websiteLink: "",
    },
    {
      id: 3,
      founderImg: "/Founders-img/profile.png",
      alt: "nadir-founder",
      name: "NADIR",
      founder: "John Doe",
      description:
        "Nadir is a volunteering platform that connect individuals with opportunities to serve their communities",
      twitterLink: "",
      instagramLink: "",
      linkedInLink: "",
      websiteLink: "",
    },
  ];

  const activateFoundersToggler = () => {
    const foundersTogglers = document.querySelectorAll(".founders-toggler");
    foundersTogglers.forEach((toggler) => toggler.classList.remove("active"));
    return foundersTogglers;
  };

  const goToNext = () => {
    const foundersTogglers = activateFoundersToggler();
    foundersTogglers[currentIndex !== 2 ? currentIndex + 1 : 0].classList.add(
      "active"
    );
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrev = () => {
    const foundersTogglers = activateFoundersToggler();
    foundersTogglers[currentIndex !== 0 ? currentIndex - 1 : 2].classList.add(
      "active"
    );
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const handleToggler = (e: React.MouseEvent<HTMLDivElement>) => {
    const foundersTogglers = document.querySelectorAll(".founders-toggler");
    const clicked = (e.target as HTMLElement).closest(
      ".founders-toggler"
    ) as HTMLElement;
    const id = clicked.id;

    setCurrentIndex(Number(id));

    foundersTogglers.forEach((toggler) => toggler.classList.remove("active"));
    clicked?.classList.add("active");
  };

  return (
    <section className=" founders-section sm:px-20 sm:py-10 px-6 py-1">
      <h2 className="text-2xl font-bold founders-header text-center mb-8">
        Discover Startups affliated with our programs
      </h2>

      <div
        onClick={handleToggler}
        className="founders-togglers flex gap-12  mb-3 justify-center"
      >
        <button id="0" className=" founders-toggler w-48 active">
          <img
            src="/Founders-img/outsidee-logo.png"
            alt="outsidee logo"
            className="mb-3"
          />
          <div className="w-full h-1 bg-gray-400"></div>
        </button>
        <button id="1" className="founders-toggler w-48 ">
          <img
            src="/Founders-img/interna-logo.png"
            alt="outsidee logo"
            className="mb-3"
          />
          <div className="w-full h-1 bg-gray-400"></div>
        </button>
        <button id="2" className="founders-toggler w-48 ">
          <img
            src="/Founders-img/nadir-logo.png"
            alt="outsidee logo"
            className="mb-3"
          />
          <div className="w-full h-1 bg-gray-400"></div>
        </button>
      </div>
      <div className="slider relative overflow-hidden  ">
        <div
          className="slider-wrapper flex transition-all ease duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide) => (
            <article
              className="founders-article flex flex-col px-10 p-4 items-center text-center box-border min-w-full "
              key={slide.id}
            >
              <h4 className="text-3xl font-bold mb-3 slide-in">{slide.name}</h4>
              <img
                src={slide.founderImg}
                alt={slide.alt}
                className="w-24 rounded-full mb-3 slide-in"
              />
              <p className="mb-4 slide-in">{slide.description}</p>
              <ul className="flex text-lg mb-4">
                <li className="mr-4">2020: Featured in Forbes</li>
                <li>2019: Founded</li>
              </ul>
              <h4 className="font-bold text-lg mb-4 slide-in">
                Founders: {slide.founder}
              </h4>
              <div className="flex mb-4 gap-4 items-center">
                <a href={slide.twitterLink}>
                  <img
                    src="/Founders-img/twitter-logo.svg"
                    alt="twitter link"
                    className="w-5"
                  />
                </a>
                <a href={slide.instagramLink}>
                  <img
                    src="/Founders-img/instagram-logo.svg"
                    alt="instagram link"
                    className="w-5"
                  />
                </a>
                <a href={slide.linkedInLink}>
                  <img
                    src="/Founders-img/linked-in-logo.svg"
                    alt="linked-in link"
                    className="w-5"
                  />
                </a>
                <a href={slide.websiteLink} className="flex items-center gap-1">
                  <p className="underline">visit website</p>
                  <img
                    src="/Founders-img/visit-logo.png"
                    alt="visit website"
                    className="w-4"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

        <button
          onClick={goToPrev}
          className="slider__btn slider__btn--left absolute left-0 top-1/2 w-10"
        >
          <img src="/Founders-img/left-arrow.svg" alt="" className="w-full" />
        </button>
        <button
          onClick={goToNext}
          className="slider__btn slider__btn--right absolute right-0 top-1/2 w-10"
        >
          <img src="/Founders-img/right-arrow.svg" alt="" className="w-full" />
        </button>
      </div>
    </section>
  );
};
