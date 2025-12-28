StartupEvents.registry('item', event => {
    //id, name, texture, optional tooltip
    const items = [
    { id: 'grinding_head_damascus_steel', name: 'Damascus Steel Grinding Head', texture: 'damascus_grinding_head' },
    { id: 'grinding_head_diamond', name: 'Diamond Grinding Head', texture: 'diamond_grinding_head' },
    { id: 'grinding_head_tungsten', name: 'Tungsten Grinding Head', texture: 'tungsten_grinding_head' },
    { id: 'grinding_head_duranium', name: 'Duranium Grinding Head', texture: 'duranium_grinding_head' },
    { id: 'formed_rubber_ingot', name: 'Formed Rubber', texture: 'formed_rubber' },
    { id: 'formed_energized_steel_ingot', name: 'Formed Energized Steel', texture: 'formed_energized_steel' },
    { id: 'sleeve_casting_mold', name: 'Casting Mold (Sleeve)', texture: 'sleeve_casting_mold', tooltip: '§o§7Mold for making Sleeves'},
    { id: 'sleeve_extruder_mold', name: 'Extruder Mold (Sleeve)', texture: 'sleeve_extruder_mold', tooltip: '§o§7Extruder Shape for making Sleeves'}
    ]

    items.forEach(item => {
    let creator = event.create(`gtceu:${item.id}`)
        .displayName(item.name)
        .texture(`kubejs:item/gtceu/${item.texture}`)
    
    if (item.tooltip) {
        creator.tooltip(item.tooltip)
    }
    })
})