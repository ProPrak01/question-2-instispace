function filter_by_college(students, college) {

  return students.filter(student => student.college === college);

}

fetch('https://example.comhttps://1qy9d2uuyg.execute-api.ap-northeast-1.amazonaws.com/default/Students-API/api/students')
  .then(response => response.json())
  .then(students => {
    students.sort((a, b) => a.name.localeCompare(b.name));
    console.log(students);
    const iitMadras_Students = filter_by_College(students, 'IIT Madras');
    console.log(iitMadras_Students);
  })
