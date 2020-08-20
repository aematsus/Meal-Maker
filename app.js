const menu ={
  _courses:{
    appetizers:[],
    mains:[],
    desserts:[],
},
get appetizers(){
  return this._courses.appetizers;
},
get mains(){
  return this._courses.mains;
},
get desserts(){
  return this._courses.desserts;
},
set appetizers(appetizers){
   this._courses.appetizers = appetizers;
},
set mains(mains){
   this._courses.mains = mains;
},
set desserts(desserts){
   this._courses.desserts = desserts;
},
get courses() {
  return {
    appetizers: this.appetizers,
    mains:this.mains,
    desserts:this.desserts,
  };
},
addDishToCourse(courseName, dishName, dishPrice){
  const dish = {
    name: dishName,
    price: dishPrice,
  };
  return this._courses[courseName].push(dish);
},
getRandomDishFromCourse(courseName){
  const dishes = this._courses[courseName];
  const randomIndex =  Math.floor(Math.random * dishes.length);
  return dishes[randomIndex];
},
generateRandomMeal(){
  const appetizer = this.getRandomDishFromCourse('appetizers');
  const main = this.getRandomDishFromCourse('mains');
  const dessert = this.getRandomDishFromCourse('desserts');
  const totalPrice = appetizer.price + main.price + dessert.price;
  return `You will be having ${appetizers.name}, ${mains.name}, & ${desserts.name}. Altogether it will be ${totalPrice}. Enjoy!`
},
};
//addDishToCourse(courseName, dishName, dishPrice)
menu.addDishToCourse = ('appetizers', 'calamari', 5.89);
menu.addDishToCourse = ('appetizers', 'kani salad', 4.99);
menu.addDishToCourse = ('appetizers', 'fried pickles', 3.00);
menu.addDishToCourse = ('mains','chicken fettecine alfredo' , 13.50 );
menu.addDishToCourse = ('mains','Sushi Combo C', 16.00 );
menu.addDishToCourse = ('mains','Patty Melt/ Fries', 12.56 );
menu.addDishToCourse = ('desserts', 'blue berry cupcake ice cream' , 5.00);
menu.addDishToCourse = ('desserts', 'canoli w/espresso' , 6.00);
menu.addDishToCourse = ('desserts', 'coffee ice cream', 3.50);
//menu.addDishToCourse = ('desserts', 'Sahara weed brownies', 50.00);
menu.addDishToCourse = ('desserts', 'lemon bars', 4.20);
menu.addDishToCourse = ('desserts', 'cookies n\'cream' , 3.50);
menu.addDishToCourse = ('desserts', 'salted caramel ice cream' , 5.00);
menu.addDishToCourse = ('desserts', 'bananas foster' , 11.00);
menu.addDishToCourse = ('desserts', 'Grasshoper Mint Pie' , 5.00);

let meal = menu.generateRandomMeal();
console.log(meal);
