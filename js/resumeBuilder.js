
var bio = {
	"name" : "Jose López",
	"role" : "Software Developer",
	"contacts" : {
		"mobile" : "650-55-55-55-55",
		"email" : "jmlb0003@jemail.com",
		"github" : "https://github.com/Jamargle",
		"twitter" : "https://twitter.com/jmlb0003",
		"linkedin" : "https://es.linkedin.com/in/josemiguellopezbayona",
		"location" : "Cambil"
	},
	"welcomeMessage" : "Welcome to my first Javascript-created page",
	"skills" : ["Java & Swing & Android", "C/C++", "SQL Databases", "UX & UI", "Javascript", "Software Engineering", "awesomeness"],
	"bioPic" : "http://joselopez.hol.es/imagenes/yo.png"
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

	var formattedEmail = addHyperLink(HTMLemail,bio.contacts.email,bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

	var formattedGitHub = addHyperLink(HTMLgithub,bio.contacts.github,"Jamargle");
	$("#topContacts").append(formattedGitHub);
	$("#footerContacts").append(formattedGitHub);

	var formattedTwitter = addHyperLink(HTMLtwitter,bio.contacts.twitter, "@jmlb0003");
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);

	var formattedLinkedIn = addHyperLink(HTMLlinkedIn,bio.contacts.linkedin, "José Miguel López Bayona");
	$("#topContacts").append(formattedLinkedIn);
	$("#footerContacts").append(formattedLinkedIn);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);

	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);



	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}


var work = {
	"jobs": [
		{
			"employer" : "Universidad de Jáen",
			"title" : "UJA Students virtual platform administrator",
			"dates" : "July 2012 - February 2013",
			"description" : "I was who create courses inside the platform and I help with technical support"
		},
		{
			"employer" : "Myself",
			"title" : "Android developer",
			"dates" : "July 2014 - July 2015",
			"description" : "I created PIAR, an Augmented Reality browser for Android devices"
		}
	],
	display() {
		if (work.jobs.length > 0) {
			for (job in work.jobs) {
				//Div para work experiences
				$("#workExperience").append(HTMLworkStart);
				//Unir el employer y el nombre del trabajo
				var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
				var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
				var concattedEmployerTitle = formattedEmployer + formattedTitle;
				$(".work-entry:last").append(concattedEmployerTitle);

				var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
				$(".work-entry:last").append(formattedDates);
				
				var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
				$(".work-entry:last").append(formattedDescription);
			}
		}
	}
}


var projects = {
	"projects": [
		{
			"title" : "PIAR (Augmented Reality)",
			"dates" : "July 2014 - February 2015",
			"description" : "PIAR is an Augmented Reality browser for Android devices",
			"url" : "https://play.google.com/store/apps/details?id=com.jmlb0003.piar",
			"images" : ""
		},
		{
			"title" : "Página personal",
			"dates" : "July 2013 - February 2014",
			"description" : "Personal website like this but by the static way, with HTML5 and CSS only.",
			"url" : "http://joselopez.hol.es",
			"images" : ""
		}
	],
	display() {
		if (projects.projects.length > 0) {
			for (project in projects.projects) {
				$("#projects").append(HTMLprojectStart);

				//var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
				var formattedTitle = addHyperLink(HTMLprojectTitle, projects.projects[project].url, projects.projects[project].title)
				$(".project-entry:last").append(formattedTitle);

				var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
				$(".project-entry:last").append(formattedDates);

				var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
				$(".project-entry:last").append(formattedDescription);

				if (projects.projects[project].images.length > 0) {
					for (image in projects.projects[project].images) {
						var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
						$(".project-entry:last").append(formattedImage);
					}
				}		
			}
		}
	}
}


var education = {
	"schools": [
		{
			"name" : "IES Sierra Mágina",
			"location" : "Huelma, Jaén",
			"degree" : "ESO & Bachillerato",
			"majors" : ["Sciences"],
			"dates" : 2006,
			"url" : ""
		},
		{
			"name" : "Universidad de Jáen",
			"location" : "Jaén",
			"degree" : "Technical engineer",
			"majors" : ["Computer Science"],
			"dates" : 2012,
			"url" : "http://ujaen.es"
		},
		{
			"name" : "Universidad de Jáen",
			"location" : "Jaén",
			"degree" : "Engineer",
			"majors" : ["Computer Science"],
			"dates" : 2015,
			"url" : "http://ujaen.es"
		}
		
	]
	,
	"onlineCourses": [
		{
			"title" : "Analítica web",
			"school" : "Actívate",
			"dates" : 2014,
			"url" : "https://www.google.com/landing/activate"
		},
		{
			"title" : "HTML5, Javascript y node.js para aplicaciones web",
			"school" : "Miriadax.net",
			"dates" : 2015,
			"url" : "https://www.miriadax.net/web/javascript-node-js"
		},
		{
			"title" : "How to use Git and Github",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "https://www.udacity.com/course/ud775"
		},
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "http://www.udacity.com/course/ud804"
		}
	],
	display() {
		if (education.schools.length > 0) {
			$("#education").append(HTMLschoolStart);

			for (school in education.schools) {
				if (!education.schools[school].url) {
					var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
				}else{
					var formattedName = addHyperLink(HTMLschoolName,education.schools[school].url,education.schools[school].name);
				}				
				$(".education-entry:last").append(formattedName);

				var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
				$(".education-entry:last").append(formattedLocation);

				var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
				$(".education-entry:last").append(formattedDegree);

				var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
				$(".education-entry:last").append(formattedDates);
				
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
				$(".education-entry:last").append(formattedMajor);
			}
		}
		
		if (education.onlineCourses.length > 0) {
			$('#education').append(HTMLonlineClasses);

			for (onlineCourse in education.onlineCourses) {
				$('#education').append(HTMLschoolStart);	

				var formattedOnlineTitle = addHyperLink(HTMLonlineTitle,education.onlineCourses[onlineCourse].url, education.onlineCourses[onlineCourse].title);
				//var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[onlineCourse].title);
				$('.education-entry:last').append(formattedOnlineTitle);

				var formattedonlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[onlineCourse].school);
				$('.education-entry:last').append(formattedonlineSchool);

				var formattedonlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[onlineCourse].dates);
				$('.education-entry:last').append(formattedonlineDates);

				//var formattedonlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[onlineCourse].url);
				//$('.education-entry:last').append(formattedonlineURL);
			}
		}		
	}
}


bio.display();
work.display();
projects.display();
education.display();


function addHyperLink(html,url,text){
    if (!text) { 
    	text = url; 
    }
    
    var formattedURL = html.replace("#", url);
    formattedURL = formattedURL.replace("%data%",text);
    
    return formattedURL;
}

function inName() {
  var name = bio.name.trim().split(" ");

  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() +
            name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
