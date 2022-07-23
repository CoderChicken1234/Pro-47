var bg, bgImg, marsBgImg
var spaceShipImg, spaceShip
var venus;
var mars, marsImg;
var acid_planet;
var Kepler232b;
var gameState = 0;
var marsObject, venusObject, keplerObject, acidObject;
var marsTablet, marsTabletImg, marsSpaceTentTab, marsSpaceTentTabImg;
var marsSpaceTent;
var O2, O2img
var o2
var O2Bar = 200
var N2, N2img,  n2;
var man, manImg, man2
var exitButtonMars;
var N2bar = 200
var venusBgImg
var volcanos, volcanaosImg;
var volcanosez
var exitButtonVenus
var volcanoGroup
var volcanoGyserGroup, volcanoGyser, volcanoGyserImg;
var freezGun, freezGunImg;
var houseFunc = 0



function preload(){
bgImg = loadImage("./assets/Space BG.png")
spaceShipImg = loadImage("./assets/SpaceShip.png")
marsImg = loadImage("./assets/Mars.png")
marsBgImg = loadImage("./assets/MarsBg.png")
marsTabletImg = loadImage("./assets/Mars_tablet.png")
marsSpaceTentTabImg = loadImage("./assets/mars_spaceTent.png")
O2img = loadImage("./assets/O2.png")
N2img = loadImage("./assets/N2.png")
venusBgImg = loadImage("./assets/VenusBg.png")
volcanaosImg = loadImage("./assets/Volcanas.png")
volcanoGyserImg = loadImage("./assets/VolcanoGeyser.png")
freezGunImg = loadImage("./assets/Ice gun.png")

}

function setup(){
createCanvas(1500,700);
background(bgImg)

if(gameState == 0){
  
spaceShip = createSprite(750,300,200,200)
spaceShip.addImage("spaceShip",spaceShipImg)
spaceShip.scale = 0.3


mars = createImg('./assets/Mars.png',"mars")
mars.position(600,0)
mars.size(250,250)
mars.mouseClicked(marsFunc)

acid_planet = createImg('./assets/Acid_planet.png',"Acid")
acid_planet.position(550,380)
acid_planet.size(350,350)
acid_planet.mouseClicked(acidPlanetFunc)


}

  





  exitButtonMars = createImg('./assets/Exit Button.png' )
  exitButtonMars.position(10,10)
   exitButtonMars.size(50,50)
  exitButtonMars.mouseClicked(exitGame)





}

function draw() {







  
 drawSprites(); 
 

}



function exitGame(){
  gameState = 0
  background(bgImg)
  exitButtonMars.hide()

  spaceShip = createSprite(750,350,200,200)
spaceShip.addImage("spaceShip",spaceShipImg)
spaceShip.scale = 0.3



mars = createImg('./assets/Mars.png',"mars")
mars.position(1150,0)
mars.size(250,250)
mars.mouseClicked(marsFunc)

acid_planet = createImg('./assets/Acid_planet.png',"Acid")
acid_planet.position(1150,380)
acid_planet.size(350,350)
acid_planet.mouseClicked(acidPlanetFunc)



freezGun.hide()
volcanoGroup.removeSprites()

O2.hide()
N2.hide()

marsSpaceTentTab.hide()

marsTablet.remove()
marsSpaceTent.remove()
o2.remove()
n2.remove()

}








function marsFunc(){
  gameState = 1

  acid_planet.hide()
  
  mars.hide()
  spaceShip.remove()
  exitButtonMars.show()

  if(gameState == 1){
      marsObject = new Mars()
      marsObject.play()
  }
}

function acidPlanetFunc(){
  gameState = 4
  exitButtonMars.show()

if(gameState == 4){
    acidObject = new acidPlanet()
    acidObject.play()
}
}
