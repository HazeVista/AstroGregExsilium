StartupEvents.registry('item', event => {
    event.create('gtceu:data_disk')
        .displayName('Data Disk')
        .tooltip('§o§7An Ultra-Low Capacity Data Storage')
        .texture('kubejs:item/gtceu/data_disk')

    event.create('gtceu:compressed_livingclay')
        .displayName('Compressed Livingclay')
        .texture('kubejs:item/gtceu/raw_livingbrick')

    event.create('gtceu:livingbrick')
        .displayName('Livingbrick')
        .texture('kubejs:item/gtceu/livingbrick')
    
    event.create('gtceu:grinding_head_damascus_steel')
        .displayName('Damascus Steel Grinding Head')
        .texture('kubejs:item/gtceu/damascus_grinding_head')
           
    event.create('gtceu:grinding_head_diamond')
        .displayName('Diamond Grinding Head')
        .texture('kubejs:item/gtceu/diamond_grinding_head')
                   
    event.create('gtceu:grinding_head_tungsten')
        .displayName('Tungsten Grinding Head')
        .texture('kubejs:item/gtceu/tungsten_grinding_head')
                   
    event.create('gtceu:grinding_head_duranium')
        .displayName('Duranium Grinding Head')
        .texture('kubejs:item/gtceu/duranium_grinding_head')
})