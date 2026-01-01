StartupEvents.registry('item', event => {

    //id, name, texture, optional tooltip
    const items = [
        { id: 'data_disk', name: 'Data Disk', texture: 'data_disk', tooltip: '§o§7An Ultra-Low Capacity Data Storage' },
        { id: 'astrocredit', name: '§cAstroCredit', texture: 'astrocredit', tooltip: 'Coin made out of a confidential, indestructible substance, with a composition only known by the mysterious §4ASTRO Foundation§r.' },
        { id: 'compressed_livingclay', name: 'Compressed Livingclay', texture: 'raw_livingbrick' },
        { id: 'livingbrick', name: 'Livingbrick', texture: 'livingbrick' },
        { id: 'filter_cartridge', name: '§cAstroTek§r Filter Cartridge', texture: 'filter_cartridge', tooltip: '§o§7A cartridge for use in advanced water filtration systems.'},
        { id: 'empty_filter_cartridge', name: '§cAstroTek§r Filter Cartridge (Empty)', texture: 'empty_filter_cartridge', tooltip: '§o§7An empty cartridge that can be filled with S-DVB Beads for use in advanced water filtration systems.'},
        { id: 'resin_beads', name: 'S-DVB Resin Beads', texture: 'sdvb_beads'},
        { id: 'paradox_circuit_board', name: '§cAstroTek§r CogniBoard', texture: 'paradox_circuits/paradox_circuit_board'},
        { id: 'paradox_printed_circuit_board', name: '§cAstroTek§r Printed CogniBoard', texture: 'paradox_circuits/paradox_printed_circuit_board'},
        { id: 'paradox_processor_chip', name: 'Paradox Processor Chip', texture: 'paradox_circuits/paradox_processor_chip', tags: 'gtceu:circuits/luv'},
        { id: 'paradox_processor', name: 'Paradox Processor', texture: 'paradox_circuits/paradox_processor', tags: 'gtceu:circuits/zpm'},
        { id: 'paradox_processor_assembly', name: 'Paradox Processor Assembly', texture: 'paradox_circuits/paradox_processor_assembly', tags: 'gtceu:circuits/uv'},
        { id: 'paradox_processor_computer', name: 'Paradox Processor Computer', texture: 'paradox_circuits/paradox_processor_computer', tags: 'gtceu:circuits/uhv'},
        { id: 'paradox_processor_mainframe', name: 'Paradox Processor Mainframe', texture: 'paradox_circuits/paradox_processor_mainframe', tags: 'gtceu:circuits/uev'},
    ]

    items.forEach(item => {
        let creator = event.create(`astrogreg:${item.id}`)
            .displayName(item.name)
            .texture(`kubejs:item/gtceu/${item.texture}`)
        
        if (item.tooltip) {
            creator.tooltip(item.tooltip)
        }
        
        if (item.tags) {
            if (Array.isArray(item.tags)) {
                item.tags.forEach(tag => creator.tag(tag))
            } else {
                creator.tag(item.tags)
            }
        }
    })
})