ItemEvents.modification(event => {

    //#region stack size
    event.modify('minecraft:ender_pearl', item => {
        item.maxStackSize = 64
    })
    //#endregion

    //#region foods
    event.modify('delightful:cantaloupe_slice', item => {
        item.foodProperties = food => {
            food
                .hunger(2)
                .saturation(0.3)
        }
    })

    event.modify('create:bar_of_chocolate', item => {
        item.foodProperties = food => {
            food
                .hunger(2)
                .saturation(0.25)
        }
    })

    event.modify('create:chocolate_glazed_berries', item => {
        item.foodProperties = food => {
            food
                .hunger(4)
                .saturation(0.4)
        }
    })

    event.modify('delightful:wrapped_cantaloupe', item => {
        item.foodProperties = food => {
            food
                .hunger(7)
                .saturation(.5)
        }
    })
    
    event.modify('delightful:salmonberries', item => {
        item.foodProperties = food => {
            food
                .hunger(1)
                .saturation(1)
        }
    })
     
    event.modify('delightful:cactus_chunk', item => {
        item.foodProperties = food => {
            food
                .hunger(1)
                .saturation(1)
        }
    })
     
    event.modify('delightful:roasted_acorn', item => {
        item.foodProperties = food => {
            food
                .hunger(2)
                .saturation(0.5)
        }
    })
         
    event.modify('farmersdelight:cooked_rice', item => {
        item.foodProperties = food => {
            food
                .hunger(5)
                .saturation(0.6)
        }
    })
             
    event.modify('create:honeyed_apple', item => {
        item.foodProperties = food => {
            food
                .hunger(4)
                .saturation(1)
        }
    })

    event.modify('delightful:animal_fat', item => {
        item.foodProperties = null
    })

    event.modify('delightful:acorn', item => {
        item.foodProperties = null
    })
    
    event.modify('minecraft:pumpkin_pie', item => {
        item.foodProperties = null
    })
 
    event.modify('delightful:matcha_milkshake', item => {
        item.foodProperties = food => {
            food
                .hunger(6)
                .saturation(0.5)
        }
    })
  
    event.modify('delightful:salmonberry_milkshake', item => {
        item.foodProperties = food => {
            food
                .hunger(6)
                .saturation(0.5)
        }
    })

    event.modify('delightful:matcha_ice_cream', item => {
        item.foodProperties = food => {
            food
                hunger(4)
                .saturation(0.5)
        }
    })

    event.modify('delightful:salmonberry_ice_cream', item => {
        item.foodProperties = food => {
            food
                hunger(4)
                .saturation(0.5)
        }
    })
    //#endregion

    /*
    potential qualities to add:
    item.fireResistant = true
    item.rarity = "UNCOMMON" 
    item.burnTime = 300  (this value is in ticks)
    food.hunger(x) (x/2 = the amount of full hunger thingies restored)
    food.saturation(z) (this one is whacky. final saturation x = (hunger) * (z))
    food.fastToEat()
    */
})