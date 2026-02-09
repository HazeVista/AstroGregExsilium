ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu
    
    const PASTE = 'powah:dielectric_paste'
    const ROD = 'powah:dielectric_rod'
    const CASING = 'powah:dielectric_casing'

    //#region basic components
    gt.shaped('powah:binding_card', [
        'ABA'
    ], {
        A: ROD, 
        B: 'powah:battery_basic'
    })
    .addMaterialInfo()

    gt.shaped('powah:binding_card_dim', [
        'ABA'
    ], {
        A: 'minecraft:ender_pearl', 
        B: 'powah:binding_card'
    })
    .addMaterialInfo()

    gt.shaped(`2x ${CASING}`, [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: ROD, 
        B: '#gtceu:tools/crafting_wrenches'
    })
    .addMaterialInfo()

    gt.assembler('assembler_dielectric_casing')
        .itemInputs(`4x ${ROD}`)
        .itemOutputs(CASING)
        .circuit(4)
        .duration(64)
        .EUt(7)

    const rodRecipes = [ ['iron', 8], ['steel', 16], ['aluminium', 20], ['stainless_steel', 24], ['titanium', 32] ]

    rodRecipes.forEach(([metal, count]) => {

        gt.shaped(`${count}x ${ROD}`, [
            'ABA',
            'ABA',
            'ABA'
        ], {
            A: PASTE, 
            B: `gtceu:${metal}_rod`
        })
        
    })

    const dusts = [ 'carbon', 'charcoal', 'coal' ]
    const heatSources = [ 'minecraft:blaze_powder', 'minecraft:lava_bucket' ]
    
    dusts.forEach(dust => {
        heatSources.forEach(heat => {
            gt.shaped(`4x ${PASTE}`, [
                'AAA',
                'BBC'
            ], {
                A: `gtceu:${dust}_dust`, 
                B: 'gtceu:clay_dust', 
                C: heat
            })
        })
    })

    dusts.forEach((dust, i) => {

        gt.mixer(`mixing_dielectric_paste${i || ''}`)
            .itemInputs(`3x gtceu:${dust}_dust`, '2x gtceu:clay_dust', 'minecraft:blaze_powder')
            .itemOutputs(`4x ${PASTE}`)
            .duration(200)
            .EUt(20)
        
        gt.mixer(`mixing_dielectric_paste_lava${i || ''}`)
            .itemInputs(`3x gtceu:${dust}_dust`, '2x gtceu:clay_dust')
            .inputFluids('minecraft:lava 100')
            .itemOutputs(`4x ${PASTE}`)
            .duration(200)
            .EUt(20)

    })

    gt.assembler('assembling_thermoelectric_plate')
        .itemInputs('4x gtceu:copper_plate', PASTE)
        .inputFluids('gtceu:blaze 576')
        .itemOutputs('powah:thermoelectric_plate')
        .duration(80)
        .EUt(15)

    gt.vacuum_freezer('cool_carbon_dioxide')
        .notConsumable('gtceu:block_casting_mold')
        .inputFluids('gtceu:carbon_dioxide 1296')
        .itemOutputs('powah:dry_ice')
        .duration(100)
        .EUt(120)
    //#endregion



    //#region capacitors
    const capData = [
        ['gtceu:magnetic_iron_rod', 'gtceu:fine_red_alloy_wire'],
        ['gtceu:magnetic_iron_rod', 'astrogreg:fine_energized_steel_wire'],
        ['gtceu:magnetic_steel_rod', 'astrogreg:fine_blazing_etrium_wire'],
        ['gtceu:magnetic_steel_rod', 'astrogreg:fine_niotic_calorite_wire'],
        ['gtceu:magnetic_neodymium_rod', 'astrogreg:fine_spirited_uranium_wire'],
        ['gtceu:magnetic_neodymium_rod', 'astrogreg:fine__wire']
    ]
    
    const capTiers = [ 'basic', 'hardened', 'blazing', 'niotic', 'spirited', 'nitro' ]
    
    capData.forEach(([rod, wire], i) => {

        gt.shaped(`4x powah:capacitor_${capTiers[i]}`, [
            ' CB',
            'CAC',
            'BC '
        ], {
            A: rod, 
            B: PASTE, 
            C: wire
        })
        .addMaterialInfo()

    })
    //#endregion



    //#region batteries
    gt.shaped('powah:battery_basic', [
        'CAC',
        'ABA',
        'CAC'
    ], {
        A: 'powah:capacitor_basic', 
        B: 'gtceu:lead_single_cable', 
        C: ROD
    })
    .addMaterialInfo()

    const batteryData = [
        ['powah:battery_basic', 'hardened', 'powah:capacitor_hardened', 'gtceu:tin_single_cable'],
        ['powah:battery_hardened', 'blazing', 'powah:capacitor_blazing', 'gtceu:copper_single_cable'],
        ['powah:battery_blazing', 'niotic', 'powah:capacitor_niotic', 'gtceu:gold_single_cable'],
        ['powah:battery_niotic', 'spirited', 'powah:capacitor_spirited', 'gtceu:aluminium_single_cable'],
        ['powah:battery_spirited', 'nitro', 'powah:capacitor_nitro', 'gtceu:platinum_single_cable']
    ]

    batteryData.forEach(([prev, tier, cap, cable]) => {

        gt.shaped(`powah:battery_${tier}`, [
            'BAB',
            'CDC',
            'BAB'
        ], {
            A: prev, 
            B: ROD, 
            C: cap, 
            D: cable
        })
        .addMaterialInfo()

    })
    //#endregion



    //#region player transmitter
    gt.shaped('powah:player_transmitter', [
        ' A ',
        'BCB',
        'BDB'
    ], {
        A: 'minecraft:ender_pearl',
        B: 'gtceu:steel_plate',
        C: 'powah:battery_basic',
        D: CASING
    })
    //#endregion



    //#region generators
    const generators = [ ['basic', 'tin', 'lv'], ['hardened', 'copper', 'mv'], ['blazing', 'gold', 'hv'] ]

    generators.forEach(([powahTier, cable, gtTier]) => {

        gt.shaped(`powah:furnator_${powahTier}`, [
            'ABA',
            'ECE',
            'ADA'
        ], {
            A: `powah:capacitor_${powahTier}`,
            B: `minecraft:furnace`,
            C: CASING,
            D: `gtceu:${gtTier}_machine_hull`,
            E: `gtceu:${cable}_single_cable`
        })
        .addMaterialInfo()

        gt.shaped(`powah:magmator_${powahTier}`, [
            'ABA',
            'ECE',
            'ADA'
        ], {
            A: `powah:capacitor_${powahTier}`,
            B: `powah:thermoelectric_plate`,
            C: CASING,
            D: `gtceu:${gtTier}_machine_hull`,
            E: `gtceu:${cable}_single_cable`
        })
        .addMaterialInfo()

    })
    //#endregion

})