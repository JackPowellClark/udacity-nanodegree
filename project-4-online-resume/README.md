# Project Details

1. In this project you will store your resume data in four javaScript objects according to the
  schema given below. As is often the case when leveraging an API, the objects must follow the
  schema exactly. All properties must be present and have real or fake values. The names must match
  those in the schema (note that object and property names are case-sensitive). All property values
  should be of the data-type given for the property in the schema. For example if the data-type is
  given as an array, it is not acceptable to use a string as a value for that property.

2. Once you've created your javaScript objects, you will write the code needed to display all of the
   resume data contained within these objects in your resume.

3. All of the HTML code needed to build the resume is stored in **js/helper.js** variables. The
variable names indicate their function. You will replace substrings in these variable string values
such as **%data%** and **#** with the data in your javaScript objects, and append or prepend the
formatted result to your resume in the appropriate location.

### By the end:
Your resume will look something like this:

![](http://i.imgur.com/pWU1Xbl.png)

### Your process:
The resume has four distinct sections: work, education, projects and a header with biographical
information. You’ll need to build four JavaScript objects, each one representing a different resume
section. The objects that you create (including property names and the data types of their values)
need to follow the schema below exactly. All properties should be included and contain a value of
the type specified unless the property is marked 'optional'. Property values may contain real or
fake data.

* `bio` contains

           name : string
           role : string
           contacts : an object with
                 mobile: string
                 email: string
                 github: string
                 twitter: string (optional)
                 location: string
           welcomeMessage: string
           skills: array of strings
           biopic: string url
           display: function taking no parameter

* `education` contains

           schools: array of objects with
                name: string
                location: string
                degree: string
                majors: array of strings
                dates: string (works with a hyphen between them)
                url: string
           onlineCourses: array of objects with
                title: string
                school: string
                dates: string (works with a hyphen between them)
                url: string
           display: function taking no parameter

* `work` contain

           jobs: array of objects with
                employer: string
                title: string
                location: string
                dates: string (Can be 'in progress')
                description: string
           display: function taking no parameter

* `projects` contains

           projects: array of objects with
                 title: string
                 dates: string (works with a hyphen between them)
                 description: string
                 images: array with string urls
           display: function taking no parameters