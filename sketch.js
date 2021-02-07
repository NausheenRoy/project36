//Create variables here 
var  dog, happyDog;
var feed,addFood;
var database;
var foodObj
var foodS, foodStock;

function preload()
{
  dogImg = loadImage("dogImg.png");
  dogImg1 = loadImage("dogImg1.png");
  milk = loadImage("images/Milk.png");
	//load images here
}

function setup() {
  createCanvas(500,500);

 foodObj=new Food();
  
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.4;
  
  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
    
  feed = createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food")
addFood.position(800,95);
addFood.mousePreesed(addFoods);


    
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);






drawSprites();
    
  }


  //add styles here
  strokeWeight()
  stroke("red");

  text("Food Remaining:" + foodS, 250,480);
}



 
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS)
}

function feedDog(){
  dog.addImage(dogImg1)
  foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  database.ref('/').update({
    Food : foodObj.getFoodStock()
  }

  )
}

function addFoods(){
  foods ++;
  database.ref('/').update({
    Food:foodS
  }

  )
}

function writeStock (x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food: x 
  })
}

