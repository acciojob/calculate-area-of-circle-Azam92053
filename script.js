 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:"); 
            // write you code here and display the result to the user
			let r = +radius;
			let areaOfCircle = (22/7) * r * r;
			 alert("The area of the circle with radius " + r + " is " + areaOfCircle.toFixed(2));
           
}
calculateArea();
