ServerEvents.recipes(event => {

    //#region energized_steel
    event.shaped('powah:energized_steel_block', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'powah:steel_energized'
    })

    event.shapeless('9x powah:steel_energized', 'powah:energized_steel_block')
    event.shapeless('9x astrogreg:energized_steel_nugget', 'powah:steel_energized')
    //#endregion



    //#region etrium
    event.shaped('ad_astra:etrium_block', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'ad_astra:etrium_ingot'
    })

    event.shaped('ad_astra:etrium_ingot', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'ad_astra:etrium_nugget'
    })

    event.shapeless('9x ad_astra:etrium_nugget', 'ad_astra:etrium_ingot')
    event.shapeless('9x ad_astra:etrium_ingot', 'ad_astra:etrium_block')

    event.shaped('64x ad_astra:etrium_panel', [
        'ABA',
        'BBB',
        'ABA'
    ], {
        A: 'astrogreg:etrium_plate',
        B: 'ad_astra:etrium_ingot'
    })
    
    event.shaped('64x ad_astra:encased_etrium_block', [
        'BBB',
        'AAA',
        'BBB'
    ], {
        A: 'astrogreg:etrium_plate',
        B: 'gtceu:steel_plate'
    })
    
    event.shaped('64x ad_astra:etrium_factory_block', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'astrogreg:etrium_plate',
        B: 'ad_astra:etrium_ingot'
    })
    
    event.shaped('64x ad_astra:etrium_plateblock', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'astrogreg:etrium_plate',
        B: 'gtceu:steel_rod'
    })
    //#endregion


    //#region botania metals
    
    //#endregion
})