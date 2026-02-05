ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu.assembler

    const tieredParts = [
        ['ev', 'titanium', 'ultimet', 'aluminium', 'uranium_triplatinum', 'platinum', 'gtceu:quantum_eye', 1500],
        ['iv', 'tungsten_steel', 'tungsten_carbide', 'tungsten', 'samarium_iron_arsenic_oxide', 'iridium', 'gtceu:quantum_star', 6000]
    ]

    const rubbers = [
        ['gtceu:styrene_butadiene_rubber', 'styrene_butadiene_rubber'],
        ['gtceu:silicone_rubber', 'silicone_rubber']
    ]

    tieredParts.forEach(([tier, metal1, metal2, cable, wire, metal3, tip, EU]) => {

        rubbers.forEach(([rubberItem, rubberType]) => {
            
            gt(`${tier}_electric_pump_${rubberType}`)
                .itemInputs(`gtceu:${tier}_electric_motor`, `gtceu:${metal1}_plate`, `gtceu:${metal1}_normal_fluid_pipe`, 
                    `2x gtceu:${metal1}_screw`, `gtceu:${metal1}_rotor`, `4x ${rubberItem}_ring`, `2x gtceu:${cable}_single_cable`)
                .inputFluids('gtceu:soldering_alloy 144')
                .itemOutputs(`gtceu:${tier}_electric_pump`)
                .duration(100)
                .EUt(EU)
                .addMaterialInfo(true)

            gt(`${tier}_conveyor_module_${rubberType}`)
                .itemInputs(`2x gtceu:${tier}_electric_motor`, `2x gtceu:${metal2}_sleeve`, 
                    `8x gtceu:${metal2}_round`, `2x gtceu:${cable}_single_cable`)
                .inputFluids(`${rubberItem} 864`)
                .itemOutputs(`gtceu:${tier}_conveyor_module`)
                .duration(100)
                .EUt(EU)
                .addMaterialInfo(true)

        })
            
        gt(`${tier}_electric_piston`)
            .itemInputs(`gtceu:${tier}_electric_motor`, `4x gtceu:${metal1}_plate`, `2x gtceu:${metal1}_rod`, 
                `8x gtceu:${metal2}_round`, `2x gtceu:small_${metal1}_gear`, `2x gtceu:${cable}_single_cable`)
            .inputFluids('gtceu:soldering_alloy 144')
            .itemOutputs(`gtceu:${tier}_electric_piston`)
            .duration(100)
            .EUt(EU)
            .addMaterialInfo(true)

        gt(`${tier}_robot_arm`)
            .itemInputs(`gtceu:${tier}_electric_piston`, `2x gtceu:${tier}_electric_motor`, `2x gtceu:${metal1}_rod`,
                `gtceu:${metal1}_gear`, `2x gtceu:small_${metal1}_gear`, `#gtceu:circuits/${tier}`, `gtceu:${cable}_single_cable`)
            .inputFluids('gtceu:soldering_alloy 144')
            .itemOutputs(`gtceu:${tier}_robot_arm`)
            .duration(100)
            .EUt(EU)
            .addMaterialInfo(true)

        gt(`${tier}_emitter`)
            .itemInputs(`gtceu:${tier}_electric_motor`, `4x gtceu:${metal3}_rod`, `2x gtceu:${cable}_single_cable`, 
                `32x gtceu:${metal3}_foil`, `2x #gtceu:circuits/${tier}`, tip)
            .inputFluids('gtceu:soldering_alloy 144')
            .itemOutputs(`gtceu:${tier}_emitter`)
            .duration(100)
            .EUt(EU)
            .addMaterialInfo(true)

        gt(`${tier}_sensor`)
            .itemInputs(`gtceu:${tier}_electric_motor`, `4x gtceu:${metal1}_plate`, `2x #gtceu:circuits/${tier}`, 
                `gtceu:${metal3}_rod`, `2x gtceu:${cable}_single_cable`, `32x gtceu:${metal3}_foil`, tip)
            .inputFluids('gtceu:soldering_alloy 144')
            .itemOutputs(`gtceu:${tier}_sensor`)
            .duration(100)
            .EUt(EU)
            .addMaterialInfo(true)

        gt(`${tier}_field_generator`)
            .itemInputs(`6x gtceu:${metal1}_plate`, `2x #gtceu:circuits/${tier}`, `64x gtceu:fine_${wire}_wire`, tip, `4x gtceu:${cable}_single_cable`)
            .inputFluids('gtceu:soldering_alloy 144')
            .itemOutputs(`gtceu:${tier}_field_generator`)
            .duration(100)
            .EUt(EU)
            .addMaterialInfo(true)

    })

    // processing cores
    const processingCores = [
        ['hv', 'red_steel', 'graphene', 480],
        ['ev', 'ultimet', 'platinum', 1920],
        ['iv', 'tungsten_carbide', 'hssg', 7680]
    ]

    processingCores.forEach(([tier, material1, material2, EU]) => {
        gt(`${tier}_industrial_processing_core`)
            .itemInputs(`gtceu:${tier}_machine_hull`, `2x gtceu:${tier}_robot_arm`, `4x gtceu:${material1}_gear`, `16x gtceu:${material2}_foil`)
            .inputFluids(`gtceu:soldering_alloy 144`)
            .itemOutputs(`astrogreg:${tier}_industrial_processing_core`)
            .duration(400)
            .EUt(EU)
            .addMaterialInfo(true)
    })
    
})