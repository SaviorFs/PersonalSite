function showSection(sectionId) {
  var sections = document.querySelectorAll('section');
  sections.forEach(function(section) {
    section.style.display = 'none';
  });

  var section = document.getElementById(sectionId);
  section.style.display = 'block';
}
// Get the education level dropdown element
var educationDropdown = document.getElementById("education-level");

// Get the content sections for college, high school, and courses
var collegeContent = document.getElementById("college-courses");
var highSchoolContent = document.getElementById("high-school-courses");
var trainingContent = document.getElementById("training");

// Add an event listener to the dropdown to show/hide content
educationDropdown.addEventListener("change", function() {
    var selectedOption = educationDropdown.value;
    
    // Hide all content sections
    collegeContent.style.display = "none";
    highSchoolContent.style.display = "none";
    trainingContent.style.display = "none";

    // Show the selected content section based on the dropdown value
    if (selectedOption === "college") {
        collegeContent.style.display = "block";
    } else if (selectedOption === "high-school") {
        highSchoolContent.style.display = "block";
    } else if (selectedOption === "training") {
        trainingContent.style.display = "block";
    }
});


  
  