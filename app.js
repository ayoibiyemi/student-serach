
let students = [ 
  { 
    name: 'Demola Akinpelu',
    course: 'Front End Development',
    results: 'HTML = 100%, CSS = 99%, JavaScript = 100%, Bootstrap = 99%, Wordpress = 100%',
	  gpa: 5.0,
    grade: '1st Class'
    
  },
  {
    name: 'Kunle Afolayan',
    course: 'Back End Development',
    results: 'HTML = 100%, CSS = 99%, JavaScript = 100%, Bootstrap = 99%, Wordpress = 100%',
	  gpa: 5.0,
    grade: '1st Class'
  },
  {
    name: 'Seun Olaofe',
    course: 'Front End Development',
    results: 'HTML = 100%, CSS = 99%, JavaScript = 100%, Bootstrap = 99%, Wordpress = 100%',
	  gpa: 2.2,
    grade: '2nd Class Lower'
  },
  {
    name: 'Femi Odunayo',
    course: 'Backend End Development',
    results: 'HTML = 100%, CSS = 99%, JavaScript = 100%, Bootstrap = 99%, Wordpress = 100%',
	  gpa: 3.9,
    grade: '2nd Class Upper'
  },
  {
    name: 'Segun Okey',
    course: 'Front End Development',
    results: 'HTML = 100%, CSS = 99%, JavaScript = 100%, Bootstrap = 99%, Wordpress = 100%',
  	gpa: 4.5,
    grade: '1st Class'
  }
];


let box = document.querySelector("#searchbox");
let btn = document.querySelector("#searchbtn");

btn.addEventListener("click", ()=>{
  // console.log('search');
  let enterValue = box.value 
  for (let index = 0; index < students.length; index++) {
    if (enterValue === students[index].name) {
      // console.log ("student exist");
      // return document.getElementById("resultDisplay").innerHTML = `<h2> ${students.name}</h2>
      // `;
      return document.getElementById("resultDisplay").innerHTML  = `<div>${students.name}</div>
      <div>${students.course}
      <div>${students.results}
      <div>${students.gpa}
      <div>${students.grade}`;
      
      
    }else{
      // console.log(" student does not exist");
      return document.getElementById("resultDisplay").innerHTML = `No student named ${enterValue} does not exist`;
    }
    
  }
});

 