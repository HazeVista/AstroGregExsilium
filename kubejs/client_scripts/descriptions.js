ItemEvents.tooltip(event => {

    event.addAdvanced('gtceu:greenhouse', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Electric Gardening!'))
    })
    event.addAdvanced('gtceu:conservatory', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Electric Plantation!'))
        text.add(2, Text.of('§o§7Can parallelize with Parallel Control Hatches'))
    })

    event.addAdvanced('gtceu:ulv_water_source', (item, advanced, text) => {
        text.add(1, Text.of('§o§7A Great Source of Water!'))
        text.add(2, Text.of('§o§7This machine does not require power to operate.'))
    })

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
        text.add(1, Text.of('§o§7Mystical Mana Mayhem Machine!'))
    })
    // Mana Producer
    event.addAdvanced('gtceu:lv_mana_producer', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Grinding for mana!'))
    })
    event.addAdvanced('gtceu:mv_mana_producer', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Grinding for mana!'))
    })
    event.addAdvanced('gtceu:hv_mana_producer', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Grinding for mana!'))
    })
    event.addAdvanced('gtceu:ev_mana_producer', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Grinding for mana!'))
    })   
    event.addAdvanced('gtceu:iv_mana_producer', (item, advanced, text) => {
        text.add(1, Text.of('§o§7MANA OVERLOAD!!'))
    })
    event.addAdvanced('gtceu:luv_mana_producer', (item, advanced, text) => {
        text.add(1, Text.of('§o§7MANA OVERLOAD!!'))
    })  
    event.addAdvanced('gtceu:zpm_mana_producer', (item, advanced, text) => {
        text.add(1, Text.of('§o§7MANA OVERLOAD!!'))
    })
    event.addAdvanced('gtceu:uv_mana_producer', (item, advanced, text) => {
        text.add(1, Text.of('§o§7Way too much mana to know what to do with'))
    })

    event.addAdvanced('gtceu:aether_engine', (item, advanced, text) => {
        text.add(3, Text.of('Converts §3Æther§r into EU'))
    })

    event.addAdvanced('gtmutils:neutronium_credit', (item, advanced, text) => {
        text.add(Text.of('Coin made out of a confidential, indestructible substance, with a composition only known by the mysterious §4ASTRO Foundation§r'))    
    })
    
})