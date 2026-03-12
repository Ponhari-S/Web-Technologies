class Course {
    constructor(courseName, instructor) {
      this.courseName = courseName;
      this.instructor = instructor;
    }
  
    displayCourse() {
      console.log(`Course: ${this.courseName}, Instructor: ${this.instructor}`);
    }
  }
  
  let advancedJS = new Course("Advanced JavaScript", "Prof. Anita");
  advancedJS.displayCourse();
  
  let enrollCourse = new Promise((resolve, reject) => {
    let seatsAvailable = true; 
    
    if (seatsAvailable) {
      resolve("Enrollment Successful");
    } else {
      reject("Course Full");
    }
  });
  
  enrollCourse
    .then(successMessage => console.log(successMessage))
    .catch(errorMessage => console.log(errorMessage));