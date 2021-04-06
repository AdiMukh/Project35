//Create variables here
var dog, dogImg;
var happyDog;
var database;
var foodS, foodStock = 20;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);

  var foodRef = database.ref('food');
  foodRef.on("value",function(data){
    foodStock = data.val();
    console.log(foodStock);
  });
  
  dog = createSprite(250,250, 0, 0);
  dog.addImage(dogImg);
  dog.scale = 0.3
}


function draw() {  
  background("green")
  drawSprites();

  textSize(20);
  text("Food remaining: "+ foodStock, 300,50);      

  //add styles here
  if(keyDown(UP_ARROW)){
      dog.addImage(happyDog);
      foodStock = foodStock-1;
      if(foodStock>0)
      {
      foodStock = foodStock-1;
      var foodRef = database.ref('/');
      foodRef.update({
        food:foodStock
      });
    }

  
  }
  else{
    dog.addImage(dogImg);
    }

  dog.display()

}






