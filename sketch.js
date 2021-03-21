
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var treeObj, Obj, groundObject, launcherObject;
var mango1;
var world, boy;
var gameState = "OnSlingShot";
function preload() {
	boy = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1300, 600);
	userEngine = Engine.create();
	userWorld = userEngine.world;

	mango1 = new Mango(1100, 100, 30);
	mango2 = new Mango(1000, 150, 30);
	mango3 = new Mango(900, 200, 30);
	mango4 = new Mango(950, 250, 30);
	mango5 = new Mango(1200, 200, 30);


	stoneObj = new Stone(230, 400);
	treeObj = new Tree(1050, 580);
	groundObject = new Ground(width / 2, 600, width, 20);
	
	launcherObject = new SlingShot( stoneObj.body, { x:250, y: 420 });
	console.log(launcherObject);
	Engine.run(userEngine);

}

function draw() {

	background(230);
	//Add code for displaying text here!
	image(boy, 200, 340, 200, 300);
																													

	treeObj.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();

	launcherObject.display();
	stoneObj.display();
	groundObject.display();

	if(keyDown("space")&&gameState == "Released"){
		launcherObject.attach(stoneObj.body);
		gameState = "OnSlingShot";
	}
}
function mouseDragged(){
	if(gameState == "OnSlingShot"){
		Matter.Body.setPosition(stoneObj.body,{x: mouseX, y: mouseY});
	}
}
function mouseReleased(){
	if(gameState === "OnSlingShot"){
		launcherObject.detach(stoneObj.body);
		gameState = "Released";
		//Matter.Body.setVelocity(stoneObj.body,{x: (420-mouseX)*4, y:(250-mouseY)*4 });
		
	}
}