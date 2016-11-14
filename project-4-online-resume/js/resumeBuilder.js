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
  skills: ["Front-End Development", "Experiece Design", "Product Management"],
  bioPic: "../project-4-online-resume/images/fry.jpg",
  welcomeMessage: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, ratione."
};

var education = {
  schools: [
    {
      name: "University of Sussex",
      subject: "Technology and Innovation Management",
      degree: "MSc",
      result: "Distinction",
      date: "Sep. 2014 — Sep. 2015",
      modules: ["Managing Innovation", "Science, Technology and Innovation: Markets, Firms and Policies",
        "Information and Communication Technologies: Policy and Strategy", "Managing Intellectual Property",
        "Technology Management Project", "Introduction to Statistical Research Methods"]
    },
    {
      name: "University of Sussex",
      subject: "Computer Science (specialism in Music Informatics)",
      degree: "BSc",
      result: "First Class Honours",
      date: "Oct. 2011 — Jun. 2014",
      modules: ["Further Programming", "Machine Learning", "Acquired Intelligence and Adaptive Behaviour",
        "Web Computing", "Natural Language Engineering", "Databases", "Technology-Enhanced Learning Environments",
        "Intelligence in Animals and Machines", "Generative Creativity"]
    }
  ],
  onlineCourses: [
    {
      school: "Udacity",
      title: "Front-End Web Developer",
      dates: "Jul. 2016 — Present"
    }
  ]
};

var work = {
  jobs: [
    {
      employer: "The Engine Group (Partners Andrews Aldridge)",
      title: "Product Development",
      date: "Oct. 2015 – Present",
      location: "London",
      description: `Based within the Technology and Innovation Team, this role looks to bridge business, experience design, and engineering; guiding new product ideas from initial concept, to launch.`
    }
  ]
};

var projects = {
  projects: [
    {
      title: "Experience Lab (Website)",
      dates: "Nov. 2016",
      description: "Tasked with X, Y, Z."
    }
  ]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile );
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email );
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github );
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location );
var formattedPhoto = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, ratione");


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedPhoto);
$("#header").append(formattedWelcome);

for(contactInfo of [formattedMobile, formattedEmail, formattedGithub, formattedLocation]) {
  $("#topContacts").append(contactInfo);
};

$("#header").append(HTMLskillsStart);

for(skill of bio.skills) {
  let formattedSkill = HTMLskills.replace("%data%", skill);
  $("#skills").append(formattedSkill);
};

for (job of work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle);
  $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.date));
  $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
  $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
}

// $('#mapDiv').append(googleMap);
// https://github.com/bennythejudge/frontend-nanodegree-resume/blob/master/js/resumeBuilder.js