ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu  

    //#region solid casings
    // frame, plate, output casing (and amount), recipe id
    const ageCasings = [
        ['astrogreg:futura_alloy_frame', 'astrogreg:futura_alloy_plate', '2x astrogreg:futura_alloy_casing', 'futura_casing'],
        ['astrogreg:livingbricks', 'gtbotania:manasteel_plate', '2x astrogreg:manasteel_brick_machine_casing', 'manasteel_brick_casing'],
        ['gtbotania:terrasteel_frame', 'gtbotania:terrasteel_plate', '2x astrogreg:solid_terrasteel_machine_casing', 'solid_terrasteel_casing'],
        ['gtceu:steel_turbine_casing', 'gtbotania:elementium_plate', '2x astrogreg:machine_casing_turbine_alfsteel', 'alfsteel_turbine_casing'],
        ['gtceu:ruridit_frame', 'gtceu:dense_netherite_plate', '2x gtceu:atomic_casing', 'atomic_casing'],
        ['gtceu:rhodium_plated_palladium_frame', 'gtceu:rhodium_plated_palladium_plate', '2x astrogreg:machine_casing_pristine_rhodium_plated_palladium', 'rhodium_plated_palladium_casing'],
        ['gtceu:steel_frame', 'gtceu:bronze_plate', '2x gtceu:industrial_steam_casing', 'industrial_steam_casing'],
        ['gtceu:naquadah_alloy_frame', 'gtceu:double_naquadah_alloy_plate', '2x astrogreg:machine_casing_invariant_naquadah_alloy', 'naquadah_alloy_casing'],
        ['gtceu:naquadah_alloy_frame', 'astrogreg:netherite_carbon_fiber_plate', '2x astrogreg:machine_casing_netherite_mesh', 'netherite_mesh_casing'],
        ['gtceu:steel_turbine_casing', 'gtceu:rhodium_plated_palladium_plate', '2x astrogreg:machine_casing_rhodium_plated_palladium', 'rhodium_plated_palladium_turbine_casing'],
        ['gtceu:steel_turbine_casing', 'gtceu:double_naquadah_alloy_plate', '2x astrogreg:machine_casing_turbine_naquadah_alloy', 'naquadah_alloy_turbine_casing'],
        ['gtbotania:elementium_frame', 'gtbotania:elementium_plate', '2x astrogreg:machine_casing_alfsteel', 'alfsteel_machine_casing'],
        ['gtceu:blue_steel_frame', 'gtceu:blue_steel_plate', '2x astrogreg:industrial_blue_steel_casing', 'blue_steel_machine_casing'],
        ['gtceu:black_steel_frame', 'gtceu:black_steel_plate', '2x astrogreg:industrial_black_steel_casing', 'black_steel_machine_casing'],
        ['gtceu:red_steel_frame', 'gtceu:red_steel_plate', '2x astrogreg:industrial_red_steel_casing', 'red_steel_machine_casing'],
        ['gtceu:vanadium_steel_frame', 'gtceu:vanadium_steel_plate', '2x astrogreg:industrial_vanadium_steel_casing', 'vanadium_steel_machine_casing'],
        ['gtceu:cobalt_brass_frame', 'gtceu:cobalt_brass_plate', '2x astrogreg:industrial_cobalt_brass_casing', 'cobalt_brass_machine_casing'],
        ['gtceu:bismuth_bronze_frame', 'gtceu:bismuth_bronze_plate', '2x astrogreg:industrial_bismuth_bronze_casing', 'bismuth_bronze_machine_casing'],
        ['gtceu:ultimet_frame', 'gtceu:ultimet_plate', '2x astrogreg:industrial_ultimet_casing', 'ultimet_machine_casing'],
        ['gtceu:rose_gold_frame', 'gtceu:rose_gold_plate', '2x astrogreg:industrial_rose_gold_casing', 'rose_gold_machine_casing'],
        ['gtceu:stainless_steel_frame', 'gtceu:carbon_fiber_plate', '2x astrogreg:industrial_carbon_fiber_casing', 'carbon_fiber_machine_casing'],
    ]

    ageCasings.forEach((ageCasing) => {

        const frame = ageCasing[0]
        const plate = ageCasing[1]
        const block = ageCasing[2]
        const name = ageCasing[3]

        gt.shaped(block, [
            'ABA',
            'ACA',
            'ADA'
        ], {
            A: plate,
            B: '#forge:tools/hammers',
            C: frame,
            D: '#forge:tools/wrenches'
        })

        gt.assembler(name)
            .itemInputs(`6x ${plate}`, frame)
            .itemOutputs(block)
            .circuit(6)
            .duration(50)
            .EUt(16)
            .addMaterialInfo(true)
    })
    //#endregion



    //#region polymer-coated casings
    // input casing, fluid (and amount), output casing (gets added to astrogreg:)
    const polymerCasings = [
        ['astrogreg:machine_casing_pristine_rhodium_plated_palladium', 'astrogreg:polyamide_imide 432', 'machine_casing_super_inert_pai'],
        ['gtceu:solid_machine_casing', 'gtceu:styrene_butadiene_rubber 216', 'industrial_styrene_butadiene_rubber_casing'],
        ['gtceu:solid_machine_casing', 'gtceu:silicone_rubber 216', 'industrial_silicone_rubber_casing'],
        ['gtceu:solid_machine_casing', 'gtceu:polyvinyl_chloride 216', 'industrial_polyvinyl_chloride_casing'],
    ]

    polymerCasings.forEach(([baseCasing, polymer, id]) => {
        gt.assembler(id)
            .itemInputs(baseCasing)
            .inputFluids(polymer)
            .itemOutputs(`astrogreg:${id}`)
            .circuit(6)
            .duration(50)
            .EUt(16)
            .addMaterialInfo(true)
    })
    //#endregion



    //#region fireboxes
    // id (gets added to _firebox_casing), plate, rod, frame, output casing
    const fireboxCasings = [
        ['manasteel', 'gtbotania:manasteel_plate', 'gtbotania:manasteel_rod', 'gtbotania:manasteel_frame', 'astrogreg:manasteel_firebox_casing'],
        ['terrasteel', 'gtbotania:terrasteel_plate', 'gtbotania:terrasteel_rod', 'gtbotania:terrasteel_frame', 'astrogreg:terrasteel_firebox_casing'],
        ['alfsteel', 'gtbotania:elementium_plate', 'gtbotania:elementium_rod', 'gtbotania:elementium_frame', 'astrogreg:alfsteel_firebox_casing'],
    ]

    fireboxCasings.forEach((casing) => {
        const name = casing[0]
        const plate = casing[1]
        const rod = casing[2]
        const frame = casing[3]
        const output = casing[4]

        gt.shaped(`2x ${output}`, [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: plate,
            B: rod,
            C: frame
        })

        gt.assembler(`${name}_firebox_casing`)
            .itemInputs(`4x ${plate}`, `4x ${rod}`, frame)
            .itemOutputs(`2x ${output}`)
            .circuit(6)
            .duration(50)
            .EUt(16)
            .addMaterialInfo(true)
    })
    //#endregion



    //#region pipe casings
    // plate, pipe, frame, output casing
    const pipeCasings = [
        ['gtbotania:manasteel_plate', 'gtbotania:manasteel_normal_fluid_pipe', 'gtbotania:manasteel_frame', 'astrogreg:manasteel_pipe_casing'],
        ['gtbotania:terrasteel_plate', 'gtbotania:terrasteel_normal_fluid_pipe', 'gtbotania:terrasteel_frame', 'astrogreg:terrasteel_pipe_casing'],
        ['gtbotania:elementium_plate', 'gtbotania:elementium_normal_fluid_pipe', 'gtbotania:elementium_frame', 'astrogreg:alfsteel_pipe_casing'],
        ['gtceu:rhodium_plated_palladium_plate', 'gtceu:rhodium_plated_palladium_normal_fluid_pipe', 'gtceu:rhodium_plated_palladium_frame', 'astrogreg:pipe_casing_rhodium_plated_palladium'],
        ['astrogreg:polyamide_imide_plate', 'astrogreg:polyamide_imide_normal_fluid_pipe', 'astrogreg:polyamide_imide_frame', 'astrogreg:pipe_casing_super_inert_pai'],
        ['gtceu:naquadah_alloy_plate', 'gtceu:naquadah_alloy_normal_fluid_pipe', 'gtceu:naquadah_alloy_frame', 'astrogreg:pipe_casing_invariant_naquadah_alloy']
    ]

    pipeCasings.forEach((casing) => {
        const plate = casing[0]
        const pipe = casing[1]
        const frame = casing[2]
        const output = casing[3]

        gt.shaped(`2x ${output}`, [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: plate,
            B: pipe,
            C: frame
        })
        .addMaterialInfo()
    })
    //#endregion



    //#region gearboxes
    // name, plate, gear, frame, output casing
    const gearboxCasings = [
        ['alfsteel', 'gtbotania:elementium_plate', 'gtbotania:elementium_gear', 'gtbotania:elementium_frame', 'astrogreg:alfsteel_gearbox_casing'],
        ['rhodium_plated_palladium', 'gtceu:rhodium_plated_palladium_plate', 'gtceu:rhodium_plated_palladium_gear', 'gtceu:rhodium_plated_palladium_frame', 'astrogreg:gearbox_casing_rhodium_plated_palladium'],
        ['naquadah_alloy', 'gtceu:naquadah_alloy_plate', 'gtceu:naquadah_alloy_gear', 'gtceu:naquadah_alloy_frame', 'astrogreg:gearbox_casing_invariant_naquadah_alloy'],
    ]

    gearboxCasings.forEach((casing) => {
        const name = casing[0]
        const plate = casing[1]
        const gear = casing[2]
        const frame = casing[3]
        const output = casing[4]

        gt.shaped(`2x ${output}`, [
            'ADA',
            'BCB',
            'AEA'
        ], {
            A: plate,
            B: gear,
            C: frame,
            D: '#forge:tools/hammers',
            E: '#forge:tools/wrenches',
        })

        gt.assembler(`${name}_gearbox_casing`)
            .itemInputs(`4x ${plate}`, `2x ${gear}`, frame)
            .itemOutputs(`2x ${output}`)
            .circuit(4)
            .duration(50)
            .EUt(16)
            .addMaterialInfo(true)
    })
    //#endregion

    //#region intake casings
    // id (gets added to _intake_casing), pipe, rotor, output casing
    const intakeCasings = [
        ['ultimate', 'gtceu:naquadah_alloy_large_fluid_pipe', 'gtceu:naquadah_alloy_rotor', 'astrogreg:machine_casing_invariant_naquadah_alloy', 'astrogreg:machine_casing_ultimate_engine_intake']
    ]

    intakeCasings.forEach((casing) => {
        const name = casing[0]
        const pipe = casing[1]
        const rotor = casing[2]
        const baseCasing = casing[3]
        const output = casing[4]

        gt.shaped(`2x ${output}`, [
            'ADA',
            'BCB',
            'AEA'
        ], {
            A: pipe,
            B: rotor,
            C: baseCasing,
            D: '#forge:tools/hammers',
            E: '#forge:tools/wrenches',
        })

        gt.assembler(`${name}_intake_casing`)
            .itemInputs(`4x ${pipe}`, `2x ${rotor}`, baseCasing)
            .itemOutputs(`2x ${output}`)
            .duration(50)
            .EUt(16)
            .addMaterialInfo(true)
    })
    //#endregion

    //#region unique
    gt.shaped('4x astrogreg:steam_engine_grating', [
        'ABA',
        'ACA',
        'ADA'
    ], {
        A: 'gtceu:bronze_rod',
        B: 'gtceu:bronze_rotor',
        C: 'gtceu:bronze_frame',
        D: '#forge:tools/wrenches'
    })

    gt.assembler('steam_machine_casing')
        .itemInputs('6x gtceu:bronze_rod', 'gtceu:bronze_frame', 'gtceu:bronze_rotor')
        .itemOutputs('4x astrogreg:steam_machine_casing')
        .duration(80)
        .EUt(7)
        .addMaterialInfo(true)
    //#endregion
})