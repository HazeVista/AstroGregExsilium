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
        
})