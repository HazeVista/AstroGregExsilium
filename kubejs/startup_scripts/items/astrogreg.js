StartupEvents.registry('item', event => {

    //id, name, texture, optional tooltip
    const items = [
        { id: 'data_disk', name: 'item.astrogreg.data_disk', texture: 'data_disk', tooltip: 'astrogreg.data_disk.tooltip' },
        { id: 'astrocredit', name: 'item.astrogreg.astrocredit', texture: 'astrocredit', tooltip: 'astrogreg.astrocredit.tooltip' },
        { id: 'compressed_livingclay', name: 'item.astrogreg.compressed_livingclay', texture: 'raw_livingbrick' },
        { id: 'livingbrick', name: 'item.astrogreg.livingbrick', texture: 'livingbrick' },
        { id: 'filter_cartridge', name: 'item.astrogreg.filter_cartridge', texture: 'filter_cartridge', tooltip: 'astrogreg.filter_cartridge.tooltip'},
        { id: 'empty_filter_cartridge', name: 'item.astrogreg.empty_filter_cartridge', texture: 'empty_filter_cartridge', tooltip: 'astrogreg.empty_filter_cartridge.tooltip'},
        { id: 'resin_beads', name: 'item.astrogreg.resin_beads', texture: 'sdvb_beads'},
        { id: 'netherite_carbon_fibers', name: 'item.astrogreg.netherite_carbon_fibers', texture: 'nethercarbon/netherite_carbon_fibers'},
        { id: 'netherite_carbon_fiber_mesh', name: 'item.astrogreg.netherite_carbon_fiber_mesh', texture: 'nethercarbon/netherite_carbon_fiber_mesh'},
        { id: 'netherite_carbon_fiber_plate', name: 'item.astrogreg.netherite_carbon_fiber_plate', texture: 'nethercarbon/netherite_carbon_fiber_plate'},
        { id: 'paradox_circuit_board', name: 'item.astrogreg.paradox_circuit_board', texture: 'paradox_circuits/paradox_circuit_board'},
        { id: 'paradox_printed_circuit_board', name: 'item.astrogreg.paradox_printed_circuit_board', texture: 'paradox_circuits/paradox_printed_circuit_board'},
        { id: 'paradox_processor_chip', name: 'item.astrogreg.paradox_processor_chip', texture: 'paradox_circuits/paradox_processor_chip', tags: 'gtceu:circuits/luv'},
        { id: 'paradox_processor', name: 'item.astrogreg.paradox_processor', texture: 'paradox_circuits/paradox_processor', tags: 'gtceu:circuits/zpm'},
        { id: 'paradox_processor_assembly', name: 'item.astrogreg.paradox_processor_assembly', texture: 'paradox_circuits/paradox_processor_assembly', tags: 'gtceu:circuits/uv'},
        { id: 'paradox_processor_computer', name: 'item.astrogreg.paradox_processor_computer', texture: 'paradox_circuits/paradox_processor_computer', tags: 'gtceu:circuits/uhv'},
        { id: 'paradox_processor_mainframe', name: 'item.astrogreg.paradox_processor_mainframe', texture: 'paradox_circuits/paradox_processor_mainframe', tags: 'gtceu:circuits/uev'},
    ]

    items.forEach(item => {
        let creator = event.create(`astrogreg:${item.id}`)
            .translationKey(item.name)
            .texture(`kubejs:item/gtceu/${item.texture}`)
        
        if (item.tooltip) {
            creator.tooltip(Text.translate(item.tooltip))
        }
        
        if (item.tags) {
            if (Array.isArray(item.tags)) {
                item.tags.forEach(tag => creator.tag(tag))
            } else {
                creator.tag(item.tags)
            }
        }
    })

    //stabilizers
    const tiers = [
        ['lv', 'lv'], 
        ['mv', 'mv'], 
        ['hv', 'hv'], 
        ['ev', 'ev'], 
        ['iv', 'iv'], 
        ['luv', 'luv'], 
        ['zpm', 'zpm'], 
        ['uv', 'uv'], 
        ['uhv', 'uhv']
    ]
    
    tiers.forEach(([tier, key]) => { 

        event.create(`astrogreg:${tier}_stabilizer`)
            .translationKey(`item.astrogreg.${key}_stabilizer`)
            .texture(`kubejs:item/gtceu/arcane_stabilizers/${tier}_arcane_stabilizer`)

    })

})