
   
class Mars{
    constructor(){
      
        createCanvas(1500,700)
        background(marsBgImg)  

        o2 = createSprite(1300,350,100,100)
        o2.addImage(O2img)
        o2.scale = 0.05

        
        n2 = createSprite(1300,350,100,100)
        n2.addImage(N2img)
        n2.scale = 0.1

        marsSpaceTent = createSprite(1300,350,200,200)
        marsSpaceTent.addImage(marsSpaceTentTabImg)
        marsSpaceTent.scale = 0.1


        marsTablet = createSprite(1300,350,200,200)
        marsTablet.addImage(marsTabletImg)
        

        O2 = createImg("./assets/O2.png")
        O2.position(1230,220)
        O2.size(150,150)
        O2.mouseClicked(this.O2function)

        N2 = createImg("./assets/N2.png")
        N2.position(1180,350)
        N2.size(250,100)
        N2.mouseClicked(this.N2function)

        marsSpaceTentTab = createImg("./assets/mars_spaceTent.png")
        marsSpaceTentTab.position(1230,120)
        marsSpaceTentTab.size(150,150)
        marsSpaceTentTab.mouseClicked(this.marsSpaceTentTabFunction)

   x
        //110,70,100,100
        //110,370,100,100


    
     
     
     
       
        

    }

    play(){
      
      if(gameState == 0){
         this.remake()
      }


    }

     marsSpaceTentTabFunction(){
        marsSpaceTent.position.x = random(200,600)
        marsSpaceTent.position.y = random(200,600)
        marsSpaceTent.scale = 0.25
        houseFunc += 1
    

        
     }

     O2function(){
     

      fill("blue")
      rect(100,100,20,200)

      fill("white")
      rect(100,100,20,O2Bar)   

   
      o2.position.x = 110
      o2.position.y = 70

      if(O2Bar >0){
         O2Bar -= 20
      }

        
     }

     N2function(){
   

      fill("green")
      rect(100,400,20,200)

      fill("white")
      rect(100,400,20,N2bar)

      n2.position.x = 110
      n2.position.y = 370

      if(N2bar >0){
         N2bar -= 20
      }

     }


}

