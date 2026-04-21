ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

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
    const botMetals = [
        ['manasteel', 'botania'], 
        ['terrasteel', 'botania'], 
        ['elementium', 'botania'], 
        ['gaiasteel', 'botanicadds'],
        ['gaiaforged_naquadah', 'gtbotania']
    ]

    botMetals.forEach(([metal, mod]) => {

        gt.shaped(`gtbotania:${metal}_rod`, [
            'A ',
            ' B'
        ], {
            A: '#forge:tools/files',
            B: `${mod}:${metal}_ingot`
        })

        gt.lathe(`lathe_${metal}_ingot_to_rod`)
            .itemInputs(`${mod}:${metal}_ingot`)
            .itemOutputs(`2x gtbotania:${metal}_rod`)
            .duration(100)
            .EUt(16)

        gt.extruder(`extrude_${metal}_ingot_to_rod`)
            .notConsumable(`gtceu:rod_extruder_mold`)
            .itemInputs(`${mod}:${metal}_ingot`)
            .itemOutputs(`2x gtbotania:${metal}_rod`)
            .duration(100)
            .EUt(42)

        gt.cutter(`cut_long_${metal}_rod_to_rod`)
            .itemInputs(`gtbotania:long_${metal}_rod`)
            .itemOutputs(`2x gtbotania:${metal}_rod`)
            .duration(50)
            .EUt(4)

        gt.shaped(`gtbotania:long_${metal}_rod`, [
            'ABA'
        ], {
            A: `gtbotania:${metal}_rod`,
            B: '#forge:tools/hammers'
        })

        gt.forge_hammer(`forge_hammer_${metal}_rod_to_long_rod`)
            .itemInputs(`2x gtbotania:${metal}_rod`)
            .itemOutputs(`gtbotania:long_${metal}_rod`)
            .duration(60)
            .EUt(16)

    })
    //#endregion
})