ServerEvents.recipes(event => {

    const earlyStabilizers = [
        ['lv', 'steel', 'tin', 'tin', 'gtceu:quartzite_gem'],
        ['mv', 'aluminium', 'steel', 'copper', 'gtceu:exquisite_emerald_gem'],
        ['hv', 'stainless_steel', 'stainless_steel', 'gold', 'minecraft:ender_eye'],
        ['ev', 'titanium', 'ultimet', 'aluminium', 'gtceu:quantum_eye'],
        ['iv', 'tungsten_steel', 'tungsten_carbide', 'platinum', 'minecraft:nether_star']
    ]    

    const stationStabilizers = [
        ['zpm', 'naquadah_alloy', 'osmiridium', 'duranium' , '64x gtceu:fine_uranium_rhodium_dinaquadide_wire', '4x gtceu:vanadium_gallium_single_cable', 'gtceu:quantum_star', 'luv', 12, 56000, 'gtceu:data_stick',  24000, 7680, 1],
        ['uv', 'tritanium', 'tritanium', 'tritanium', '64x gtceu:fine_enriched_naquadah_trinium_europium_duranide_wire', '4x gtceu:yttrium_barium_cuprate_single_cable', 'gtceu:gravi_star', 'zpm', 48, 112000, 'gtceu:data_orb', 96000, 30720, 2],
        ['uhv', 'neutronium', 'neutronium', 'neutronium', '64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '4x gtceu:europium_single_cable', 'gtceu:gravi_star', 'uv', 144, 224000, 'gtceu:data_module', 384000, 122880, 4]
    ]

    earlyStabilizers.forEach(([tier, basemetal, sleeve, cable, tip]) => {

        event.recipes.gtceu.shaped(`astrogreg:${tier}_stabilizer`, [
            'EBD',
            'BCB',
            'ABE'
        ], {
            A: `gtceu:${tier}_electric_motor`,
            B: `gtceu:${basemetal}_plate`,
            C: `gtceu:${sleeve}_sleeve`,
            D: tip,
            E: `gtceu:${cable}_single_cable`
        })
        .addMaterialInfo()

        event.recipes.gtceu.assembler(`${tier}_stabilizer`)
            .itemInputs(`4x gtceu:${basemetal}_plate`, `gtceu:${tier}_electric_motor`, `gtceu:${sleeve}_sleeve`, tip, `2x gtceu:${cable}_single_cable`)
            .itemOutputs(`astrogreg:${tier}_stabilizer`)
            .circuit(1)
            .duration(100)
            .EUt(16)
            .addMaterialInfo(true)

    })

    event.recipes.gtceu.assembly_line('luv_stabilizer')
        .itemInputs('gtceu:hsss_frame')
        .itemInputs('4x gtceu:hsss_plate')
        .itemInputs('2x gtceu:luv_electric_motor')
        .itemInputs('gtceu:luv_sensor')
        .itemInputs('gtceu:luv_emitter')
        .itemInputs('2x gtceu:hsss_sleeve')
        .itemInputs('64x gtceu:fine_indium_tin_barium_titanium_cuprate_wire')
        .itemInputs('64x gtceu:fine_indium_tin_barium_titanium_cuprate_wire')
        .itemInputs('4x gtceu:niobium_titanium_single_cable')
        .itemInputs('gtceu:quantum_star')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('astrogreg:luv_stabilizer')
        .duration(600)
        .EUt(6000)
        ["scannerResearch(java.util.function.UnaryOperator)"]
        (b => b
            .researchStack("astrogreg:iv_stabilizer")
            .duration(1200)
            .EUt(1920)
        )

    stationStabilizers.forEach(([tier, basemetal, secondarymetal, sleeve, wire, cable, star, lasttier, cwut, totalcwu, storage, EU, researchEU, multiplier]) => {
        
        let recipe = event.recipes.gtceu.assembly_line(`${tier}_stabilizer`)
            .itemInputs(`gtceu:${basemetal}_frame`)
            .itemInputs(`4x gtceu:${secondarymetal}_plate`)
            .itemInputs(`2x gtceu:${tier}_electric_motor`)
            .itemInputs(`gtceu:${tier}_sensor`)
            .itemInputs(`gtceu:${tier}_emitter`)
            .itemInputs(`2x gtceu:${sleeve}_sleeve`)
            .itemInputs(wire)
            .itemInputs(wire)
            .itemInputs(cable)
            .itemInputs(star)
            .inputFluids(Fluid.of('gtceu:soldering_alloy', 288 * multiplier))
                
            if (tier === 'uv') {
                recipe.inputFluids(Fluid.of('gtceu:naquadria', 576))
            }

            if (tier === 'uhv') {
                recipe.inputFluids(Fluid.of('gtceu:neutronium', 144))
            }

            recipe.itemOutputs(`astrogreg:${tier}_stabilizer`)
            .duration(600)
            .EUt(EU)
            .addMaterialInfo(true)
            .stationResearch(
                researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of(`astrogreg:${lasttier}_stabilizer`))
                .dataStack(storage)
                .CWUt(cwut, totalcwu)
                .EUt(researchEU)
            )

    })


})