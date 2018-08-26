
var bio = {
	"name" : "Vivekananthan Dhanasekaran",
	"role" : "Software Developer",
	"contacts" : {
		"mobile" : "9940135998",
		"email" : "vivekmit06@gmail.com",
		"github" : "https://github.com/vdhanasekaran",		
		"linkedin" : "https://www.linkedin.com/in/vivekananthan-dhanasekaran-612b2714",
		"location" : "Chennai"
	},
	"welcomeMessage" : "Full Stack Professional with Five (6+) years of experience in analysis, design, testing and deployment",
	"skills" : [".NET", "C#", "MVC", "WebAPI", "Javascript", "Dependency injection Design pattern", "Unit Testing","Azure PaaS - App Service, WebJob, Storage Account", "SQL Server","Test Driven Development"],
	"bioPic" : "https://scontent.fmaa1-1.fna.fbcdn.net/v/t1.0-9/39218_1235887197583_4704317_n.jpg?_nc_cat=0&oh=7f8c90319cc1c1aefd480abe78a5dffd&oe=5BF30E0B"
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

	var formattedGitHub = addHyperLink(HTMLgithub,bio.contacts.github,"vdhanasekaran");
	$("#topContacts").append(formattedGitHub);
	$("#footerContacts").append(formattedGitHub);

	var formattedLinkedIn = addHyperLink(HTMLlinkedIn,bio.contacts.linkedin, "Vivekananthan");
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
			"employer" : "Prophoenix Corporation",
			"title" : "Application Developer",
			"dates" : "Nov 2016 - Present",
			"description" : "Enhancing product framework by including new feature and I help with technical support"
		},
		{
			"employer" : "Accenture",
			"title" : "Application Developer",
			"dates" : "Feb 2013 - Nov 2016",
			"description" : "Creating WCF and WebAPI for integating Banking product with third-party service"
		},
		{
			"employer" : "HCL",
			"title" : "Application Developer",
			"dates" : "Nov 2010 - Jan 2013",
			"description" : "Migrating VB applications to WPF application"
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
			"title" : "Bill Pay API",
			"dates" : "Mar 2013 - July 2013",
			"description" : "Creating integration API using WebAPI for communicating with third-party to support online bill pay and deplo to Azure PaaS (App Service)",
			"Design Patterns" : "Dependency Injection",
			"Approach" : "Test-Driven development",
			".NET Framework version" : "4.0",
			"Language" : "C#",
			"Authentication" : "OAuth using Azure Active Directory"
		},
		{
			"title" : "Inventory API",
			"dates" : "Apr 2016 - Nov 2016",
			"description" : "Inventory API using ASP.NET WebAPI to fetch and update car details , schedule appointment for a website",
			"Approach" : "Test-Driven development",
			".NET Framework version" : "4.0",
			"Language" : "C#",
			"Authentication" : "OAuth using Azure Active Directory"
		},
		{
			"title" : "Image Processing",
			"dates" : "Apr 2016 - Nov 2016",
			"description" : "Listen to queue for incoming images and insert into database using Azure WebJobs and Storage account",
			"Approach" : "Test-Driven development",
			".NET Framework version" : "4.0",
			"Language" : "C#"
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

				if (projects.projects[project].images != null && projects.projects[project].images != undefined && projects.projects[project].images.length > 0) {
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
			"name" : "Anna University",
			"location" : "Chennai",
			"degree" : "Bachelor of Engineering",
			"majors" : ["Computer Science"],
			"dates" : 2010			
		},
		{
			"name" : "Ideal Higher Secondary School",
			"location" : "Anthiyur",
			"degree" : "Higher Secondary",
			"majors" : ["Biology"],
			"dates" : 2006			
		},
		{
			"name" : "St.Mary's and SSM school",
			"location" : "Bhavani",
			"degree" : "SSLC",
			"majors" : ["Biology"],
			"dates" : "2004"			
		}
		
	]
	,
	"onlineCourses": [
		{
			"title" : "Web Development",
			"school" : "Udacity",
			"dates" : 2018,
			"url" : "https://www.youtube.com/playlist?list=PLAwxTw4SYaPlLXUhUNt1wINWrrH9axjcI"
		},				
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"dates" : 2018,
			"url" : "https://www.youtube.com/playlist?list=PLAwxTw4SYaPmtf5v3hefG5seVynUtV9T8"
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

//$("#main").append(internationalizeButton);

//$("#mapDiv").append(googleMap);
