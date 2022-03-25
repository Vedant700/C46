var bg, bg_image;
var bob, bob_img;
var invisibleGround;
var lion, lion_img, bear, bear_img, elephant, elephant_img, fox, fox_img, snake, snake_img, tiger, tiger_img;
var animalsGroup;

function preload() {
    bg_image = loadImage("bg.jpg");

    // =====PLAYING CHARACTER=====
    bob_img = loadAnimation("bob_1.png", "bob_2.png");

    // =====NON-PLAYING CHARACTERS=====
    lion_img = loadAnimation("lion.png", "lion2.png");
    bear_img = loadAnimation("snake.png", "snake2.png");
    elephant_img = loadAnimation("elephant.png", "elephant2.png");
    fox_img = loadAnimation("fox.png", "fox2.png");
    snake_img = loadAnimation("snake.png", "snake2.png");
    tiger_img = loadAnimation("tiger.png", "tiger2.png");


}

function setup() {
    createCanvas(1200, 700);
    bg = createSprite(900, 380);
    bg.addImage(bg_image);
    bg.scale = 0.257;
    // if scale decrease, then other values such as image length increases

    bob = createSprite(100, 600);
    bob.addAnimation("moving", bob_img);
    bob.scale = 0.5;

    invisibleGround = createSprite(0, 670, 2400, 20);
    invisibleGround.visible = false;

    /* lion = createSprite();
     lion.addAnimation("moving", lion_img);
 
     bear = createSprite();
     bear.addAnimation("moving", bear_img);
 
     elephant = createSprite();
     elephant.addAnimation("moving", elephant_img);
 
     fox = createSprite();
     fox.addAnimation("moving", fox_img);
 
     snake = createSprite();
     snake.addAnimation("moving", snake_img);
 
     tiger = createSprite();
     tiger.addAnimation("moving", tiger_img);*/

    // animalsGroup = new Group();


}

function draw() {
    background(0);

    bg.velocityX = -8;

    if (bg.x < 370) {
        bg.x = bg.width / 8;
    }

    if (keyDown("space")) {
        bob.velocityY = -13;
    }

    bob.velocityY = bob.velocityY + 0.5;

    bob.collide(invisibleGround)

    spawnAnimals();

    drawSprites();
}

function spawnAnimals() {
    if (frameCount % 60 === 0) {
        animals = createSprite(1100, 600, 35, 55);
        animals.velocityX = -6;
        var rand = Math.round(random(1, 6));
        switch (rand) {
            case 1: animals.addAnimation("running", lion_img);
                break;
            case 2: animals.addAnimation(bear_img);
                break;
            case 3: animals.addAnimation(elephant_img);
                break;
            case 4: animals.addAnimation(fox_img);
                break;
            case 5: animals.addAnimation(snake_img);
                break;
            case 6: animals.addAnimation(tiger_img);
                break;
            default: break;
        }
        animals.scale = 0.5;
        animals.lifetime = 100;
        // animalsGroup.add(animals);
    }
}