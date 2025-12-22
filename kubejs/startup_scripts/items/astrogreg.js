StartupEvents.registry('item', event => {

    //id, name, texture, optional tooltip
    const items = [
    { id: 'data_disk', name: 'Data Disk', texture: 'data_disk', tooltip: '§o§7An Ultra-Low Capacity Data Storage' },
    { id: 'astrocredit', name: '§cAstroCredit', texture: 'astrocredit', tooltip: 'Coin made out of a confidential, indestructible substance, with a composition only known by the mysterious §4ASTRO Foundation§r' },
    { id: 'compressed_livingclay', name: 'Compressed Livingclay', texture: 'raw_livingbrick' },
    { id: 'livingbrick', name: 'Livingbrick', texture: 'livingbrick' }
    ]

    items.forEach(item => {
    let creator = event.create(`astrogreg:${item.id}`)
        .displayName(item.name)
        .texture(`kubejs:item/gtceu/${item.texture}`)
    
    if (item.tooltip) {
        creator.tooltip(item.tooltip)
    }
    })
})