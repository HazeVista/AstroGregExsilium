StartupEvents.registry('item', event => {

    //id, name, texture, optional tooltip
    const items = [
    { id: 'data_disk', name: 'Data Disk', texture: 'data_disk', tooltip: '§o§7An Ultra-Low Capacity Data Storage' },
    { id: 'astrocredit', name: '§cAstroCredit', texture: 'astrocredit', tooltip: 'Coin made out of a confidential, indestructible substance, with a composition only known by the mysterious §4ASTRO Foundation§r.' },
    { id: 'compressed_livingclay', name: 'Compressed Livingclay', texture: 'raw_livingbrick' },
    { id: 'livingbrick', name: 'Livingbrick', texture: 'livingbrick' },
    { id: 'empty_filter_cartridge', name: '§cAstroTek§r Filter Cartridge (Empty)', texture: 'empty_filter_cartridge', tooltip: '§o§7An empty cartridge that can be filled with S-DVB Beads for use in advanced water filtration systems.'},
    { id: 'filter_cartridge', name: '§cAstroTek§r Filter Cartridge', texture: 'filter_cartridge', tooltip: '§o§7A cartridge for use in advanced water filtration systems.'},
    { id: 'resin_beads', name: 'S-DVB Beads', texture: 'sdvb_beads'}
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