


const swapi = new SwapiService();

// swapi.getAllPeople().then((people) => {
//     people.forEach((p) => {
//      console.log(p.name);  
//     }); 
// });  //вывод списка всех персонажей

swapi.getPerson(3).then((p) => {
    console.log(p.name);
});      //вывод одного персонажа
