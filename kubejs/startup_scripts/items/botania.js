StartupEvents.registry('item', event => {
    //region lenses
    event.create('botania:terra_lens')
        .translationKey('item.astrogreg.terra_lens')
        .texture('kubejs:item/botania/terra_lens')

    event.create('botania:pixie_lens')
        .translationKey('item.astrogreg.pixie_lens')
        .texture('kubejs:item/botania/pixie_lens')
        
    event.create('botania:gaia_lens')
        .translationKey('item.astrogreg.gaia_lens')
        .texture('kubejs:item/botania/gaia_lens')
    //#endregion


    
    //#region runes
    const runes = [
    'air', 'fire', 'water', 'earth',
    'spring', 'summer', 'autumn', 'winter',
    'mana', 'lust', 'gluttony', 'greed',
    'sloth', 'wrath', 'envy', 'pride',
    'energy', 'space', 'life', 'mercury', 
    'venus', 'gaia', 'mars', 'ceres',
    'jupiter', 'saturn', 'uranus', 
    'neptune', 'gregorious'
    ]

    runes.forEach(rune => {
    event.create(`botania:${rune}_rune`)
        .translationKey(`item.astrogreg.${rune}_rune`)
        .texture(`kubejs:item/botania/rune_${rune}`);
    })
    //#endregion



    //#region glass panes
    event.create('botania:managlass_pane')
        .translationKey('item.astrogreg.managlass_pane')
        .texture('kubejs:item/botania/managlass')

    event.create('botania:alfglass_pane')
        .translationKey('item.astrogreg.alfglass_pane')
        .texture('kubejs:item/botania/alfglass')
    //#endregion
    })