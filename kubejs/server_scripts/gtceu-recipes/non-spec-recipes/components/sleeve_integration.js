ServerEvents.recipes(event => {

    //#region molding
    event.recipes.gtceu.shaped('gtceu:sleeve_casting_mold', [
        '  B',
        '   ',
        'A  '
    ], {
        A: 'gtceu:empty_mold',
        B: '#forge:tools/hammers'
    })
    .addMaterialInfo()

    event.recipes.gtceu.shaped('gtceu:sleeve_extruder_mold', [
        '  B',
        '   ',
        'A  '
    ], {
        A: 'gtceu:empty_mold',
        B: '#forge:tools/wire_cutters'
    })

    event.recipes.gtceu.forming_press(`sleeve_casting_mold`)
        .notConsumable('gtceu:sleeve_casting_mold')
        .itemInputs('gtceu:empty_mold')
        .itemOutputs('gtceu:sleeve_casting_mold')
        .duration(120)
        .EUt(22)
        
    event.recipes.gtceu.forming_press(`sleeve_forming_mold`)
        .notConsumable('gtceu:sleeve_casting_mold')
        .itemInputs('gtceu:empty_mold')
        .itemOutputs('gtceu:sleeve_casting_mold')
        .duration(120)
        .EUt(22)

    const sleeveTypes = [
        ['tin', 118],
        ['steel', 112],
        ['stainless_steel', 110],
        ['ultimet', 122],
        ['tungsten_carbide', 194],
        ['netherite', 196],
        ['duranium', 300],
        ['tritanium', 594],
        ['neutronium', 2000]
    ]

    sleeveTypes.forEach(([material, mass]) => {

        event.recipes.gtceu.fluid_solidifier(`${material}_sleeve`)
            .notConsumable('gtceu:sleeve_casting_mold')
            .inputFluids(`gtceu:${material} 288`)
            .itemOutputs(`gtceu:${material}_sleeve`)
            .duration(mass * 3 / 2)
            .EUt(42)

        const ingotMaterial = material === 'netherite' ? 'minecraft:netherite_ingot' : `gtceu:${material}_ingot`;
    
        event.recipes.gtceu.extruder(`${material}_sleeve`)
            .notConsumable('gtceu:sleeve_extruder_mold')
            .itemInputs(`2x ${ingotMaterial}`)
            .itemOutputs(`gtceu:${material}_sleeve`)
            .duration(mass * 3 / 2)
            .EUt(42)

    })
    //#endregion



    //#region grinding heads
    const grindingParts = [
        ['gtceu:damascus_steel_plate', 'gtceu:double_steel_plate', 'gtceu:steel_sleeve', 'gtceu:grinding_head_damascus_steel'],
        ['gtceu:diamond_dust', 'gtceu:double_steel_plate', 'gtceu:stainless_steel_sleeve', 'gtceu:grinding_head_diamond'],
        ['gtceu:tungsten_plate', 'gtceu:double_tungsten_steel_plate', 'gtceu:tungsten_carbide_sleeve', 'gtceu:grinding_head_tungsten'],
        ['gtceu:duranium_plate', 'gtceu:double_naquadah_alloy_plate', 'gtceu:duranium_sleeve', 'gtceu:grinding_head_duranium']
    ]

    grindingParts.forEach(grindingHeads)

    function grindingHeads(heads) {
            const plate = heads[0]
            const double = heads[1]
            const sleeve = heads[2]
            const head = heads[3]

        event.recipes.gtceu.shaped(head, [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: plate,
            B: double,
            C: sleeve
        })
        .addMaterialInfo()
        .id(head)
    }
    //#endregion



    //#region motors
    const motorParts = [
        ['tin_single', 'copper_single', 'iron', 'iron', 'tin', 'lv'],
        ['tin_single', 'copper_single', 'steel', 'steel', 'tin', 'lv'],
        ['copper_single', 'cupronickel_double', 'aluminium', 'steel', 'steel', 'mv'],
        ['silver_double', 'electrum_double', 'stainless_steel', 'steel', 'stainless_steel', 'hv']
    ]

    motorParts.forEach(([cable, wire, rod, magrod, sleeve, tier]) => {

        event.recipes.gtceu.shaped(`gtceu:${tier}_electric_motor`, [
            'ABC',
            'BDB',
            'EBA'
        ], {
            A: `gtceu:${cable}_cable`,
            B: `gtceu:${wire}_wire`,
            C: `gtceu:${sleeve}_sleeve`,
            D: `gtceu:magnetic_${magrod}_rod`,
            E: `gtceu:${rod}_rod`
        })
        .addMaterialInfo()
        .id(`${tier}_motor_from_${rod}_rod`)
        
        event.recipes.gtceu.assembler(`${tier}_motor_from_${rod}_rod`)
            .itemInputs(`gtceu:${rod}_rod`, `gtceu:magnetic_${magrod}_rod`, `gtceu:${sleeve}_sleeve`, `2x gtceu:${cable}_cable`, `4x gtceu:${wire}_wire`)
            .itemOutputs(`gtceu:${tier}_electric_motor`)
            .duration(100)
            .EUt(30)
            .addMaterialInfo(true)
    })

    const assemblerMotors = [
        ['aluminium_double', 'kanthal', 'titanium', 'neodymium', 'ultimet', 'ev', 1500],
        ['tungsten_double', 'graphene', 'tungsten_steel', 'neodymium', 'tungsten_carbide', 'iv', 6000]
    ]

    assemblerMotors.forEach(([cable, wire, rod, magrod, sleevemetal, tier, EU]) => {

        event.recipes.gtceu.assembler(`${tier}_motor`)
            .itemInputs(`gtceu:magnetic_${magrod}_rod`, `gtceu:${rod}_rod`, `gtceu:${sleevemetal}_sleeve`, 
                `4x gtceu:${sleevemetal}_round`, `32x gtceu:fine_${wire}_wire`, `2x gtceu:${cable}_cable`)
            .inputFluids('gtceu:soldering_alloy 144')
            .itemOutputs(`gtceu:${tier}_electric_motor`)
            .duration(100)
            .EUt(EU)

    })

    event.remove({ id: "gtceu:assembly_line/electric_motor_luv" })
    event.remove({ id: "gtceu:assembly_line/electric_motor_zpm" })
    event.remove({ id: "gtceu:assembly_line/electric_motor_uv" })
    event.remove({ id: "gtceu:scanner/1x_gtceu_iv_electric_motor" })
    event.remove({ id: "gtceu:scanner/1x_gtceu_luv_electric_motor" })
    event.remove({ id: "gtceu:research_station/1x_gtceu_luv_electric_motor" })

    event.recipes.gtceu.assembly_line(`luv_electric_motor`)
        .itemInputs('gtceu:long_magnetic_samarium_rod', '2x gtceu:long_hsss_rod', '2x gtceu:netherite_sleeve', 
            '2x gtceu:hsss_ring', '4x gtceu:netherite_round', '64x gtceu:fine_ruridit_wire', '2x gtceu:niobium_titanium_single_cable')
        .inputFluids('gtceu:soldering_alloy 144', 'gtceu:lubricant 250')
        .itemOutputs(`gtceu:luv_electric_motor`)               
        .duration(600)
        .EUt(6000)
        ["scannerResearch(java.util.function.UnaryOperator)"]
        (b => b
            .researchStack("gtceu:iv_electric_motor")
            .duration(900)
            .EUt(1920)
        )
        .addMaterialInfo(true)

    event.recipes.gtceu.assembly_line(`zpm_electric_motor`)
        .itemInputs('gtceu:long_magnetic_samarium_rod')
        .itemInputs('4x gtceu:long_osmiridium_rod')
        .itemInputs('4x gtceu:duranium_sleeve')
        .itemInputs('4x gtceu:osmiridium_ring')
        .itemInputs('8x gtceu:osmiridium_round') 
        .itemInputs('64x gtceu:fine_osmiridium_wire') 
        .itemInputs('32x gtceu:fine_osmiridium_wire') 
        .itemInputs('2x gtceu:vanadium_gallium_single_cable')
        .inputFluids('gtceu:soldering_alloy 288')
        .inputFluids('gtceu:lubricant 500')
        .itemOutputs(`gtceu:zpm_electric_motor`)
        .duration(600)
        .EUt(24000)
        ['scannerResearch(java.util.function.UnaryOperator)']
        (b => b
            .researchStack("gtceu:luv_electric_motor")
            .duration(1200)
            .EUt(7680)
        )
        .addMaterialInfo(true)

    event.recipes.gtceu.assembly_line(`uv_electric_motor`)
        .itemInputs('gtceu:long_magnetic_samarium_rod') 
        .itemInputs('4x gtceu:long_tritanium_rod') 
        .itemInputs('4x gtceu:tritanium_sleeve') 
        .itemInputs('4x gtceu:tritanium_ring') 
        .itemInputs('8x gtceu:tritanium_round') 
        .itemInputs('64x gtceu:fine_americium_wire') 
        .itemInputs('64x gtceu:fine_americium_wire') 
        .itemInputs('2x gtceu:yttrium_barium_cuprate_single_cable' )
        .inputFluids('gtceu:soldering_alloy 576') 
        .inputFluids('gtceu:lubricant 1000') 
        .inputFluids('gtceu:naquadria 576')
        .itemOutputs(`gtceu:uv_electric_motor`)                
        .duration(600)
        .EUt(96000)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of(`gtceu:zpm_electric_motor`))
                .dataStack('gtceu:data_orb')
                .CWUt(32, 96000)
                .EUt(122880)
        )
        .addMaterialInfo(true)
    //#endregion



    //#region drill heads
    const drillHeads = ['blue_steel', 'vanadium_steel', 'titanium', 'wrought_iron', 'neutronium', 'duranium', 'damascus_steel', 
        'bronze', 'rose_gold', 'naquadah_alloy', 'stainless_steel', 'iron', 'steel', 'tungsten_carbide', 'invar', 'diamond', 
        'netherite', 'sterling_silver', 'hsse', 'aluminium', 'ultimet', 'red_steel', 'cobalt_brass', 'tungsten_steel']

    drillHeads.forEach(head)

    function head(material) {
        
        event.recipes.gtceu.shaped(`gtceu:${material}_drill_head`, [
            'CCE',
            'ABC',
            'DAC'
        ], {
            A: 'gtceu:steel_plate',
            B: 'gtceu:steel_sleeve',
            C: `gtceu:${material}_plate`,
            D: '#forge:tools/hammers',
            E: '#forge:tools/files'
        })
        .id(`${material}_drill_head`)
        .addMaterialInfo()

    }

    //#endregion



    //#region rocket engines
    event.recipes.gtceu.assembly_line('luv_rocket_engine')
        .itemInputs('2x gtceu:hsss_frame')
        .itemInputs('2x gtceu:luv_field_generator')
        .itemInputs('16x gtceu:luv_electric_motor')
        .itemInputs('16x gtceu:double_hsss_plate')
        .itemInputs('4x gtceu:long_hsss_rod')
        .itemInputs('8x gtceu:netherite_sleeve')
        .itemInputs('2x gtceu:hsss_gear')
        .itemInputs('4x gtceu:small_hsss_gear')
        .itemInputs('gtceu:hsss_rotor')
        .itemInputs('8x gtceu:hsss_screw')
        .itemInputs('8x gtceu:hsss_ring')
        .itemInputs('16x gtceu:netherite_round')
        .itemInputs('#gtceu:circuits/zpm')
        .itemInputs('2x #gtceu:circuits/luv')
        .itemInputs('32x gtceu:fine_ruridit_wire')
        .itemInputs('4x gtceu:niobium_titanium_single_cable')
        .inputFluids('gtceu:soldering_alloy 1152')
        .inputFluids('gtceu:lubricant 1000')
        .itemOutputs('astrogreg:luv_rocket_engine')
        .duration(1200)
        .EUt(6000)
        .addMaterialInfo(true)
        ["scannerResearch(java.util.function.UnaryOperator)"]
        (b => b
            .researchStack("astrogreg:iv_rocket_engine")
            .duration(1800)
            .EUt(1920)
        )

    event.recipes.gtceu.assembly_line('zpm_rocket_engine')
        .itemInputs('2x gtceu:naquadah_alloy_frame')
        .itemInputs('2x gtceu:zpm_field_generator')
        .itemInputs('32x gtceu:zpm_electric_motor')
        .itemInputs('16x gtceu:double_naquadah_alloy_plate')
        .itemInputs('4x gtceu:long_osmiridium_rod')
        .itemInputs('8x gtceu:duranium_sleeve')
        .itemInputs('2x gtceu:osmiridium_gear')
        .itemInputs('4x gtceu:small_osmiridium_gear')
        .itemInputs('gtceu:osmiridium_rotor')
        .itemInputs('8x gtceu:osmiridium_screw')
        .itemInputs('8x gtceu:osmiridium_ring')
        .itemInputs('16x gtceu:osmiridium_round')
        .itemInputs('2x #gtceu:circuits/uv')
        .itemInputs('4x #gtceu:circuits/zpm')
        .itemInputs('48x gtceu:fine_naquadria_wire')
        .itemInputs('4x gtceu:vanadium_gallium_single_cable')
        .inputFluids('gtceu:soldering_alloy 2304')
        .inputFluids('gtceu:lubricant 2000')
        .itemOutputs('astrogreg:zpm_rocket_engine')
        .duration(1200)
        .EUt(24000)
        .addMaterialInfo(true)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of(`astrogreg:luv_rocket_engine `))
                .dataStack('gtceu:data_orb')
                .CWUt(8, 64000)
                .EUt(30720)
        )

    event.recipes.gtceu.assembly_line('uv_rocket_engine')
        .itemInputs('2x gtceu:tritanium_frame')
        .itemInputs('2x gtceu:uv_field_generator')
        .itemInputs('64x gtceu:uv_electric_motor')
        .itemInputs('16x gtceu:double_tritanium_plate')
        .itemInputs('4x gtceu:long_tritanium_rod')
        .itemInputs('8x gtceu:tritanium_sleeve')
        .itemInputs('2x gtceu:tritanium_gear')
        .itemInputs('4x gtceu:small_tritanium_gear')
        .itemInputs('gtceu:tritanium_rotor')
        .itemInputs('8x gtceu:tritanium_screw')
        .itemInputs('8x gtceu:tritanium_ring')
        .itemInputs('16x gtceu:tritanium_round')
        .itemInputs('4x #gtceu:circuits/uhv')
        .itemInputs('8x #gtceu:circuits/uv')
        .itemInputs('64x gtceu:fine_europium_wire')
        .itemInputs('4x gtceu:vanadium_gallium_single_cable')
        .inputFluids('gtceu:soldering_alloy 4608')
        .inputFluids('gtceu:lubricant 4000')
        .inputFluids('gtceu:naquadria 1152')
        .itemOutputs('astrogreg:uv_rocket_engine')
        .duration(1200)
        .EUt(96000)
        .addMaterialInfo(true)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of(`astrogreg:zpm_rocket_engine`))
                .dataStack('gtceu:data_module')
                .CWUt(48, 256000)
                .EUt(122880)
        )
    //#endregion

})