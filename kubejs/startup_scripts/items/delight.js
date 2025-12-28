StartupEvents.registry('item', event => {

    event.create('farmersdelight:raw_pie_crust')
        .displayName('Pie Crust')
        .texture('kubejs:item/delight/pie_crust')

    event.create('farmersdelight:apple_slice')
        .displayName('Apple Slice')
        .texture('kubejs:item/delight/apple_slice')
        .food(food => {
            food
                .hunger(1)
                .saturation(0.75)
                .fastToEat()
        })
    
    event.create('farmersdelight:tomato_slice')
        .displayName('Tomato Slice')
        .texture('kubejs:item/delight/tomato_slice')
                .food(food => {
            food
                .hunger(1)
                .saturation(0.25)
                .fastToEat()
        })

    event.create('farmersdelight:chocolate_cake_slice')
        .displayName('Chocolate Cake Slice')
        .texture('kubejs:item/delight/chocolate_cake_slice')
        .food(food => {
            food
                .hunger(2)
                .saturation(0.25)
        })
        
    event.create('farmersdelight:honey_cake_slice')
        .displayName('Honey Cake Slice')
        .texture('kubejs:item/delight/honey_cake_slice')
        .food(food => {
            food
                .hunger(2)
                .saturation(0.25)
        })       
    
    event.create('farmersdelight:chocolate_ice_cream')
        .displayName('Chocolate Ice Cream')
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
        .displayName('Chocolate Milkshake')
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