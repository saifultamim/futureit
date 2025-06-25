export const getPageTitle = (segment) => {
  const titles = {
    home: "EduFutureIT",
    about: "About",
    successStory: "SuccessStory",
    contact: "Contact Us",
    login: "Login",
    course: "Courses",
    spokenEnglish: "Spoken English",
    graphicDesign: "Graphic Design",
    digitalMarketing: "Digital Marketing",
  };

  if (segment === "home") {
    return titles[segment];
  }

  const title = titles[segment] || "";
  return `EduFutureIT | ${title}`;
};
