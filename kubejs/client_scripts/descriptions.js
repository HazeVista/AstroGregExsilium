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
    //unique
    event.addAdvanced('gtceu:ulv_water_source', (item, advanced, text) => {
        text.add(1, Text.of('§o§7A Great Source of Water!'))
        text.add(2, Text.of('§o§7This machine does not require power to operate.'))
    })

    /*
    *   Singleblock Tooltip Builder
    *   how to use:
    *       
    *   'machine_name': {
    *       'lv,mv,hv,ev': '§o§7Blah blah blah something witty',
    *       'iv,luv,zpm': '§o§7Something witty and cool',
    *       'uv': '§o§7This tooltip has aura'
    *   }
    */
    const machineTooltips = {
        'mana_infuser': {
            'lv,mv,hv,ev': '§o§7Who needs mana pools?',
            'iv,luv,zpm': '§o§7Base Botania is for chumps anyways.',
            'uv': '§o§7Mechanized Mana Manipulation Matrix'
        },
        'manafield_simulator': {
            'lv,mv,hv,ev': '§o§7Produces Mana, Allegedly',
            'iv,luv,zpm': '§o§7Miniature Mystical Powerhouse',
            'uv': '§o§7The Arcane, Reduced to Math'
        },
        'culinary_fabricator': {
            'lv,mv,hv,ev': '§o§7Chef in a Box',
            'iv,luv,zpm': '§o§7Robotic Restaurant',
            'uv': '§o§7Sustanance at Scale'
        },
        'beverage_processor': {
            'lv,mv,hv,ev': '§o§7Barista in a Box',
            'iv,luv,zpm': '§o§7Robotic Refreshment',
            'uv': '§o§7Hydration at Scale'
        }
    }

    //
    Object.entries(machineTooltips).forEach(([machine, tierGroups]) => {
        Object.entries(tierGroups).forEach(([tiers, tooltip]) => {
            tiers.split(',').forEach(tier => {
                event.addAdvanced(`gtceu:${tier}_${machine}`, (item, advanced, text) => {
                    text.add(1, Text.of(tooltip));
                })
            })
        })
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