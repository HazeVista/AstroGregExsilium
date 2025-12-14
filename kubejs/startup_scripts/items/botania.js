StartupEvents.registry('item', event => {
    //region lenses
    event.create('botania:terra_lens')
        .displayName('Terra Lens')
        .texture('kubejs:item/botania/terra_lens')

    event.create('botania:pixie_lens')
        .displayName('Pixie Lens')
        .texture('kubejs:item/botania/pixie_lens')
        
    event.create('botania:gaia_lens')
        .displayName('Gaia Lens')
        .texture('kubejs:item/botania/gaia_lens')
    //#endregion


    
    //#region runes
    const runes = [
    'air', 'fire', 'water', 'earth',
    'spring', 'summer', 'autumn', 'winter',
    'mana', 'lust', 'gluttony', 'greed',
    'sloth', 'wrath', 'envy', 'pride',
    'energy', 'space', 'life', 'gaia'
    ]

    runes.forEach(rune => {
    event.create(`botania:${rune}_rune`)
        .displayName(`Rune of ${rune.charAt(0).toUpperCase() + rune.slice(1)}`)
        .texture(`kubejs:item/botania/rune_${rune}`);
    })
    //#endregion



    //#region glass panes
    event.create('botania:managlass_pane')
        .displayName('Mana Glass Pane')
        .texture('kubejs:item/botania/managlass')

    event.create('botania:alfglass_pane')
        .displayName('Elven Glass Pane')
        .texture('kubejs:item/botania/alfglass')
    //#endregion
    })
