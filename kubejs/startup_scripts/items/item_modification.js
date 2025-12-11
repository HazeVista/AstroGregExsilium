ItemEvents.modification(event => {

    event.modify("minecraft:ender_pearl", item => {
        item.maxStackSize = 64
    })
    

    /*
    potential qualities to add:
    item.burnTime = 300
    food.hunger(4)
    food.saturation(200)
    food.fastToEat()
    item.fireResistant = true
    item.rarity = "UNCOMMON"    
    */
})