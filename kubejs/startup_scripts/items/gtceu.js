StartupEvents.registry('item', event => {
    //id, name, texture, optional tooltip
    const items = [
    { id: 'grinding_head_damascus_steel', name: 'item.astrogreg.grinding_head_damascus_steel', texture: 'damascus_grinding_head' },
    { id: 'grinding_head_diamond', name: 'item.astrogreg.grinding_head_diamond', texture: 'diamond_grinding_head' },
    { id: 'grinding_head_tungsten', name: 'item.astrogreg.grinding_head_tungsten', texture: 'tungsten_grinding_head' },
    { id: 'grinding_head_duranium', name: 'item.astrogreg.grinding_head_duranium', texture: 'duranium_grinding_head' },
    { id: 'formed_rubber_ingot', name: 'item.astrogreg.formed_rubber_ingot', texture: 'formed_rubber' },
    { id: 'formed_energized_steel_ingot', name: 'item.astrogreg.formed_energized_steel_ingot', texture: 'formed_energized_steel' },
    { id: 'sleeve_casting_mold', name: 'item.astrogreg.sleeve_casting_mold', texture: 'sleeve_casting_mold', tooltip: 'astrogreg.sleeve_casting_mold.tooltip'},
    { id: 'sleeve_extruder_mold', name: 'item.astrogreg.sleeve_extruder_mold', texture: 'sleeve_extruder_mold', tooltip: 'astrogreg.sleeve_extruder_mold.tooltip'},
    { id: 'uhv_voltage_coil', name: 'item.astrogreg.uhv_voltage_coil', texture: 'uhv_voltage_coil'}
    ]

    items.forEach(item => {
    let creator = event.create(`gtceu:${item.id}`)
        .translationKey(item.name)
        .texture(`kubejs:item/gtceu/${item.texture}`)
    
    if (item.tooltip) {
        creator.tooltip(Text.translate(item.tooltip))
    }
    })
})