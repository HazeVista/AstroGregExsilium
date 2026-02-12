StartupEvents.registry('item', event => {

    event.create('farmersdelight:raw_pie_crust')
        .translationKey('item.astrogreg.raw_pie_crust')
        .texture('kubejs:item/delight/pie_crust')

    event.create('farmersdelight:apple_slice')
        .translationKey('item.astrogreg.apple_slice')
        .texture('kubejs:item/delight/apple_slice')
        .food(food => {
            food
                .hunger(1)
                .saturation(0.75)
                .fastToEat()
        })
    
    event.create('farmersdelight:tomato_slice')
        .translationKey('item.astrogreg.tomato_slice')
        .texture('kubejs:item/delight/tomato_slice')
                .food(food => {
            food
                .hunger(1)
                .saturation(0.25)
                .fastToEat()
        })

    event.create('farmersdelight:chocolate_cake_slice')
        .translationKey('item.astrogreg.chocolate_cake_slice')
        .texture('kubejs:item/delight/chocolate_cake_slice')
        .food(food => {
            food
                .hunger(2)
                .saturation(0.25)
        })
        
    event.create('farmersdelight:honey_cake_slice')
        .translationKey('item.astrogreg.honey_cake_slice')
        .texture('kubejs:item/delight/honey_cake_slice')
        .food(food => {
            food
                .hunger(2)
                .saturation(0.25)
        })       
    
    event.create('farmersdelight:chocolate_ice_cream')
        .translationKey('item.astrogreg.chocolate_ice_cream')
        .texture('kubejs:item/delight/chocolate_ice_cream')
        .food(food => {
            food
                .hunger(4)
                .saturation(0.5)
                .eaten(ctx => {
                ctx.player.give('minecraft:bowl')
            })
        })

    event.create('farmersdelight:chocolate_milkshake')
        .translationKey('item.astrogreg.chocolate_milkshake')
        .texture('kubejs:item/delight/chocolate_milkshake')
        .food(food => {
            food
                .hunger(6)
                .saturation(0.5)
                .eaten(ctx => {
                    ctx.player.give('minecraft:glass_bottle')
                })
        })
})