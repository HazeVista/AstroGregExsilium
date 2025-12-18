ItemEvents.tooltip(event => {
    //#region multiblocks
    //greenhouses
    event.addAdvanced('gtceu:greenhouse', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Electric Garden!'))
    })
    event.addAdvanced('gtceu:conservatory', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Electric Plantation!'))
        text.add(2, Text.of('§o§7Can parallelize with Parallel Control Hatches'))
    })

    //generators
    event.addAdvanced('gtceu:aether_engine', (item, advanced, text) => {
        text.add(3, Text.of('Converts §3Æther§r into EU'))
    })
    //#endregion

    //#region singleblocks
    
    event.addAdvanced('gtceu:ulv_water_source', (item, advanced, text) => {
        text.add(1, Text.of('§o§7A Great Source of Water!'))
        text.add(2, Text.of('§o§7This machine does not require power to operate.'))
    })

    //mana in
    event.addAdvanced('gtceu:lv_mana_infuser', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Who needs mana pools?'))
    })
    event.addAdvanced('gtceu:mv_mana_infuser', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Who needs mana pools?'))
    })
    event.addAdvanced('gtceu:hv_mana_infuser', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Who needs mana pools?'))
    })
    event.addAdvanced('gtceu:ev_mana_infuser', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Who needs mana pools?'))
    })   
    event.addAdvanced('gtceu:iv_mana_infuser', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Base Botania is for chumps anyways.'))
    })
    event.addAdvanced('gtceu:luv_mana_infuser', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Base Botania is for chumps anyways.'))
    })  
    event.addAdvanced('gtceu:zpm_mana_infuser', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Base Botania is for chumps anyways.'))
    })
    event.addAdvanced('gtceu:uv_mana_infuser', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Mechanized Mana Manipulation Matrix'))
    })

    //manafield simulators
    event.addAdvanced('gtceu:_manafield_simulator', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Produces Mana, Allegedly'))
    })
    event.addAdvanced('gtceu:_manafield_simulator', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Produces Mana, Allegedly'))
    })
    event.addAdvanced('gtceu:_manafield_simulator', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Produces Mana, Allegedly'))
    })
    event.addAdvanced('gtceu:ev_manafield_simulator', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Produces Mana, Allegedly'))
    })
    event.addAdvanced('gtceu:iv_manafield_simulator', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Miniature Mystical Powerhouse'))
    })
    event.addAdvanced('gtceu:luv_manafield_simulator', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Miniature Mystical Powerhouse'))
    })
    event.addAdvanced('gtceu:zpm_manafield_simulator', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Miniature Mystical Powerhouse'))
    })
    event.addAdvanced('gtceu:uv_manafield_simulator', (item, advanced, text) => {
        text.add(1, Text.of('§o§7The Arcane, Reduced to Math'))
    })

    //culinary fabricators
    event.addAdvanced('gtceu:lv_culinary_fabricator', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Chef in a Box'))
    })      
    event.addAdvanced('gtceu:mv_culinary_fabricator', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Chef in a Box'))
    })    
    event.addAdvanced('gtceu:hv_culinary_fabricator', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Chef in a Box'))
    })     
    event.addAdvanced('gtceu:ev_culinary_fabricator', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Chef in a Box'))
    })
    event.addAdvanced('gtceu:iv_culinary_fabricator', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Robotic Restaurant'))
    })     
    event.addAdvanced('gtceu:luv_culinary_fabricator', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Robotic Restaurant'))
    })    
    event.addAdvanced('gtceu:zpm_culinary_fabricator', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Robotic Restaurant'))
    })  
    event.addAdvanced('gtceu:uv_culinary_fabricator', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Sustanance at Scale'))
    })

    //beverage processor
    event.addAdvanced('gtceu:lv_beverage_processor', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Barista in a Box'))
    }) 
    event.addAdvanced('gtceu:mv_beverage_processor', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Barista in a Box'))
    }) 
    event.addAdvanced('gtceu:hv_beverage_processor', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Barista in a Box'))
    }) 
    event.addAdvanced('gtceu:ev_beverage_processor', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Barista in a Box'))
    }) 
    event.addAdvanced('gtceu:iv_beverage_processor', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Robotic Refreshment'))
    }) 
    event.addAdvanced('gtceu:luv_beverage_processor', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Robotic Refreshment'))
    })  
    event.addAdvanced('gtceu:zpm_beverage_processor', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Robotic Refreshment'))
    }) 
    event.addAdvanced('gtceu:uv_beverage_processor', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Hydration at Scale'))
    }) 
    //#endregion

    //#region items with lore
    event.addAdvanced('gtmutils:neutronium_credit', (item, advanced, text) => {
        text.add(Text.of('Coin made out of a confidential, indestructible substance, with a composition only known by the mysterious §4ASTRO Foundation§r'))    
    })

    event.addAdvanced('farmersdelight:bacon_sandwich', (item, advanced, text) => {
        text.add(Text.of('§o§7Mmmmm... Tasty!§r§7 - Ubit3y'))
    })
    //#endregion
    
})