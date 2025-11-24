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
    
})