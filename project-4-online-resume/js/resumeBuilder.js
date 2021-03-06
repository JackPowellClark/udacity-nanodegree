/*jshint esversion: 6 */
var bio = {
  name: "Jack Clark",
  role: "Product Development",
  contacts: {
    mobile: "+447963111196",
    email: "jackpowellclark@gmail.com",
    github: "JackPowellClark",
    location: "London"
  },
  welcomeMessage: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, ratione.",
  skills: ["Front-End Development", "Experiece Design", "Product Management"],
  biopic: "../project-4-online-resume/images/profilePicture.jpg",
};

bio.display = function () {
  $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
  $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
  $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
  $("#header").append(HTMLwelcomeMsg.replace("%data%", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, ratione"));

  let formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  let formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  let formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  let formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

  for (let contactInfo of[formattedMobile, formattedEmail, formattedGithub, formattedLocation]) {
    $("#topContacts").append(contactInfo);
  }

  $("#header").append(HTMLskillsStart);
  for (let skill of bio.skills) {
    let formattedSkill = HTMLskills.replace("%data%", skill);
    $("#skills").append(formattedSkill);
  }

  for (let contactInfo of[formattedMobile, formattedEmail, formattedGithub, formattedLocation]) {
    $("#footerContacts").append(contactInfo);
  }
};

var education = {
  schools: [{
    name: "University of Sussex",
    location: "Distinction",
    degree: "MSc",
    majors: ["Managing Innovation", "Technology Product Management", "Science, Technology and Innovations: Markets, Firms and Policies", "Intellectual Property"],
    dates: "Sep. 2014 — Sep. 2015",
    url: "http://www.sussex.ac.uk/bmec/internal/departments/spru/pgcourses/2014/N1501T",
  }, {
    name: "University of Sussex",
    location: "First Class Honours",
    degree: "BSc",
    majors: ["Further Programming", "Mathematics for Computing", "Models of Computing", "Natural Language Engineering", "Machine Learning", "Acquired Intelligence & Adaptive Behaviour", "Intelligence in Animals and Machines"],
    dates: "Oct. 2011 — Jun. 2014",
    url: "http://www.sussex.ac.uk/ei/internal/coursesandmodules/informatics/ugcourses/2011/WGH41U",
  }],
  onlineCourses: [{
    title: "Front-End Web Developer",
    school: "Udacity",
    dates: "Jul. 2016 — Present",
    url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe1"
  }]
};

education.display = function () {
  for (let school of education.schools) {
    let formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
    let formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);

    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
    $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
    $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));

    for (let major of school.majors) {
      $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", major));
    }
  }

  for (let onlineCourse of education.onlineCourses) {
    let formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title).replace("#", onlineCourse.url);
    let formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);

    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
    $(".education-entry:last").append(HTMLonlineDates.replace("%data%", onlineCourse.dates));
    $(".education-entry:last").append(HTMLonlineURL.replace("%data%", onlineCourse.url).replace("#", onlineCourse.url));
  }
};

var work = {
  jobs: [{
    employer: "Engine Group (Partners Andrews Aldridge)",
    title: "Product Development",
    location: "London",
    dates: "Oct. 2015 — Present",
    description: "Based within the Technology and Innovation Team, this role looks to bridge business, experience design, and engineering; guiding new product ideas from initial concept, to launch."
  }]
};

work.display = function () {
  for (let job of work.jobs) {
    let formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    let formattedTitle = HTMLworkTitle.replace("%data%", job.title);

    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(formattedEmployer + formattedTitle);
    $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
    $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
  }
};

var projects = {
  projects: [{
    title: "Experience Labs @ 60 GPS",
    dates: "Nov. 2016",
    description: "Led the development of a new user testing facility.",
    images: ["../project-4-online-resume/images/project-experience-lab-1.png", "../project-4-online-resume/images/project-experience-lab-2.png"]
  }]
};

projects.display = function () {
  for (let project of projects.projects) {
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));

    for (let image of project.images) {
      $(".project-entry:last").append(HTMLprojectImage.replace("%data%", image));
    }
  }
};

bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);