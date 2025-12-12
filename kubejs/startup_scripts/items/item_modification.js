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