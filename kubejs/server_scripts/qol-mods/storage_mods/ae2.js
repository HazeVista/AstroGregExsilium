ServerEvents.recipes(event => {

    //#region constants & functions



    //#region constants
    const Materials = {
        FUTURA_PLATE: 'astrogreg:futura_alloy_plate',
        FUTURA_FRAME: 'astrogreg:futura_alloy_frame',
        DOUBLE_FUTURA_PLATE: 'astrogreg:double_futura_alloy_plate',
        DENSE_FUTURA_PLATE: 'astrogreg:dense_futura_alloy_plate',
        FUTURA_ROD: 'astrogreg:futura_alloy_rod',
        QUARTZ_GLASS: 'ae2:quartz_glass',
        QUARTZ_VIB_GLASS: 'ae2:quartz_vibrant_glass',
        FLUIX_CABLE: 'ae2:fluix_glass_cable'
    }

    const Processors = {
        LOGIC: 'ae2:logic_processor',
        CALCULATION: 'ae2:calculation_processor',
        ENGINEERING: 'ae2:engineering_processor',
        ACCUMULATION: 'megacells:accumulation_processor'
    }

    const Cores = {
        ANNIHILATION: 'ae2:annihilation_core',
        FORMATION: 'ae2:formation_core'
    }
    //#endregion


    
    //#region functions
    //mixer recipes
    function mixing(id, input1, input2, outputs, duration, eut) {
        event.recipes.gtceu.mixer(id)
            .itemInputs(input1, input2)
            .itemOutputs(outputs)
            .duration(duration)
            .EUt(eut)
    }

    //alloy smelter recipes
    function alloying(id, input1, input2, output, duration, eut) {
        event.recipes.gtceu.alloy_smelter(id)
            .itemInputs(input1, input2)
            .itemOutputs(output)
            .duration(duration)
            .EUt(eut)
    }

    //processor inscription recipes
    function processors(name, plateInput, lens, output, eut) {
            if (eut === undefined) eut = 100
            event.recipes.gtceu.inscription(`inscribe_${name}_processor`)
                .itemInputs(plateInput)
                .inputFluids('gtceu:silicon 144')
                .notConsumable(lens)
                .itemOutputs(`2x ${output}`)
                .duration(300)
                .EUt(eut)
    }

    //storage component inscription recipes
    function storageComponent(config) {
        const recipe = event.recipes.gtceu.inscription(`inscribe_${config.size}`)
        config.inputs.forEach(input => recipe.itemInputs(input))
        recipe.itemOutputs(config.output)
            .duration(300)
            .EUt(config.eut)
    }

    //cell housings
    function cellHousing(plateType, glassType, baseOutput) {
        event.shaped(baseOutput, [
            'ABA',
            'B B',
            'CCC'
        ], {
            A: glassType,
            B: plateType,
            C: Materials.FUTURA_PLATE
        })
    }

    //frame-style recipes
    function frame(output, midBlock) {
        event.shaped(output, [
            'ABA',
            'C C',
            'ABA'
        ], {
            A: Materials.FUTURA_PLATE,
            B: midBlock,
            C: Materials.FLUIX_CABLE
        })
    }

    //buses
    function bus(output, pistonType, core, isImport) {
        const pattern = isImport ? [' B ', 'CAC'] : ['ACA', ' B ']
        event.shaped(output, pattern, {
            A: Materials.FUTURA_PLATE,
            B: pistonType,
            C: core
        })
    }

    //interface style pattern
    function interfaces(output, topBlock) {
        event.shaped(output, [
            'ABA',
            'D C',
            'ABA'
        ], {
            A: Materials.FUTURA_PLATE,
            B: topBlock,
            C: Cores.FORMATION,
            D: Cores.ANNIHILATION
        })
    }

    //matrix casings
    function matrixBlock(output, plateType) {
        event.shaped(`2x ${output}`, [
            'BCB',
            'CAC',
            'BCB'
        ], {
            A: Materials.FUTURA_FRAME,
            B: plateType,
            C: '#ae2:smart_cable'
        })
    }
    //#endregion
    //#endregion



    //#region basic mats & components
    //basic materials
    mixing('mixer_ender_eye_dust', 'gtceu:ender_pearl_dust', 'minecraft:blaze_powder', '2x gtceu:ender_eye_dust', 160, 9)
    mixing('skystone_dust_mixing', 'gtceu:certus_quartz_dust', '3x gtceu:stone_dust', '4x ae2:sky_dust', 160, 120)
    mixing('futura_alloy_mixing', '4x gtceu:stainless_steel_dust', 'ae2:sky_dust', '5x astrogreg:futura_alloy_dust', 200, 450)
    mixing('mix_fluix_pearl_dust', '8x ae2:fluix_dust', 'gtceu:ender_eye_dust', 'astrogreg:fluix_pearl_dust', 240, 480)
        
    event.recipes.gtceu.polarizer('polarize_certus')
        .itemInputs('gtceu:certus_quartz_gem')
        .itemOutputs('ae2:charged_certus_quartz_crystal')
        .duration(150)
        .EUt(400)
    
    event.recipes.gtceu.macerator('macerate_fluix')
        .itemInputs('ae2:fluix_crystal')
        .itemOutputs('ae2:fluix_dust')
        .duration(200)

    event.recipes.gtceu.centrifuge('centrifuge_fluix_pearl_dust')
        .itemInputs('astrogreg:fluix_pearl_dust')
        .itemOutputs('8x ae2:fluix_dust', 'gtceu:ender_eye_dust')
        .duration(240)
        .EUt(120)
    
    event.shaped('ae2:quartz_block', [
        'AA',
        'AA'
    ], {
        A: 'gtceu:certus_quartz_gem'
    })

    //basic components
    event.shaped(Cores.ANNIHILATION, [
        'ABC'
    ], {
        A: 'gtceu:silicon_dioxide_dust',
        B: 'ae2:fluix_dust',
        C: Processors.LOGIC
    })

    event.shaped('ae2:controller', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: Materials.FUTURA_PLATE,
        B: 'ae2:fluix_crystal',
        C: Materials.FUTURA_FRAME
    })

    event.shaped('ae2:energy_acceptor', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: Materials.FUTURA_PLATE,
        B: Materials.QUARTZ_GLASS,
        C: Materials.FUTURA_FRAME
    })
    
    //#endregion



    //#region glass & cables
    alloying('quartz_glass_alloying', '#forge:dusts/certus_quartz', '#forge:glass', Materials.QUARTZ_GLASS, 160, 7)
    alloying('vib_quartz_glass_alloying', Materials.QUARTZ_GLASS, '2x minecraft:glowstone_dust', Materials.QUARTZ_VIB_GLASS, 160, 7)

    event.recipes.gtceu.wiremill('mill_quartz_fiber')
        .itemInputs(Materials.QUARTZ_GLASS)
        .itemOutputs('2x ae2:quartz_fiber')
        .duration(80)
        .EUt(28)

    event.recipes.gtceu.wiremill('mill_fluix')
        .itemInputs('ae2:fluix_crystal')
        .itemOutputs(`4x ${Materials.FLUIX_CABLE}`)
        .duration(160)
        .EUt(28)

    event.recipes.gtceu.chemical_bath('wash_glass_cables')
        .itemInputs('#ae2:glass_cable')
        .inputFluids('minecraft:water 144')
        .itemOutputs(Materials.FLUIX_CABLE)
        .duration(40)
        .EUt(20)
    //#endregion



    //#region cpus
    event.recipes.gtceu.assembler('assemble_cpu')
        .itemInputs(Materials.FUTURA_FRAME, `2x ${Materials.FLUIX_CABLE}`, `2x ${Processors.CALCULATION}`, Processors.LOGIC)
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('ae2:crafting_unit')
        .circuit(1)
        .duration(80)
        .EUt(384)

    event.recipes.gtceu.assembler('assemble_mega_cpu')
        .itemInputs(Materials.FUTURA_FRAME, '2x ae2:crafting_unit', `2x ${Processors.LOGIC}`, Processors.ACCUMULATION)
        .inputFluids('gtceu:soldering_alloy 288')
        .itemOutputs('megacells:mega_crafting_unit')
        .circuit(1)
        .duration(80)
        .EUt(7680)
    //#endregion



    //#region inscription matrix
    event.shaped('gtceu:inscription_matrix', [
        'ADA',
        'CBC',
        'AEA'
    ], {
        A: Materials.FUTURA_PLATE,
        B: 'gtceu:hv_laser_engraver',
        C: 'gtceu:hv_emitter',
        D: 'gtceu:hv_conveyor_module',
        E: '#gtceu:circuits/ev'
    })

    //processor inscription
    const processorRecipes = [
        { name: 'logic', plate: 'gtceu:gold_plate', lens: 'gtceu:yellow_glass_lens', output: Processors.LOGIC },
        { name: 'calc', plate: 'gtceu:certus_quartz_plate', lens: 'gtceu:cyan_glass_lens', output: Processors.CALCULATION },
        { name: 'eng', plate: 'gtceu:diamond_plate', lens: '#forge:lenses/light_blue', output: Processors.ENGINEERING }
    ]

    processorRecipes.forEach(proc => {
        processors(proc.name, proc.plate, proc.lens, proc.output)
    })
    
    event.recipes.gtceu.inscription('inscribe_mega_processor')
        .itemInputs(Processors.LOGIC, Processors.CALCULATION, Processors.ENGINEERING)
        .inputFluids('gtceu:silicon 144', 'gtceu:neon 100')
        .notConsumable('gtceu:black_glass_lens')
        .itemOutputs(`2x ${Processors.ACCUMULATION}`)
        .duration(300)
        .EUt(3200)

    const storageComponents = [
        {
            size: '1k',
            inputs: ['4x gtceu:certus_quartz_gem', '4x minecraft:redstone', Processors.LOGIC],
            output: 'ae2:cell_component_1k',
            eut: 25
        },
        {
            size: '4k',
            inputs: ['3x ae2:cell_component_1k', '4x minecraft:redstone', Processors.CALCULATION, '#gtceu:circuits/lv'],
            output: 'ae2:cell_component_4k',
            eut: 25
        },
        {
            size: '16k',
            inputs: ['3x ae2:cell_component_4k', '4x minecraft:glowstone_dust', Processors.CALCULATION, '#gtceu:circuits/mv'],
            output: 'ae2:cell_component_16k',
            eut: 100
        },
        {
            size: '64k',
            inputs: ['3x ae2:cell_component_16k', '4x minecraft:glowstone_dust', Processors.CALCULATION, '#gtceu:circuits/hv'],
            output: 'ae2:cell_component_64k',
            eut: 400
        },
        {
            size: '256k',
            inputs: ['3x ae2:cell_component_64k', '4x ae2:sky_dust', Processors.CALCULATION, '#gtceu:circuits/ev'],
            output: 'ae2:cell_component_256k',
            eut: 1600
        },
        {
            size: '1m',
            inputs: ['3x ae2:cell_component_256k', '4x ae2:sky_dust', Processors.ACCUMULATION, '#gtceu:circuits/iv'],
            output: 'megacells:cell_component_1m',
            eut: 6400
        },
        {
            size: '4m',
            inputs: ['3x megacells:cell_component_1m', '4x gtceu:ender_pearl_dust', Processors.ACCUMULATION, '#gtceu:circuits/luv'],
            output: 'megacells:cell_component_4m',
            eut: 25600
        },
        {
            size: '16m',
            inputs: ['3x megacells:cell_component_4m', '4x gtceu:ender_pearl_dust', Processors.ACCUMULATION, '#gtceu:circuits/zpm'],
            output: 'megacells:cell_component_16m',
            eut: 102400
        },
        {
            size: '64m',
            inputs: ['3x megacells:cell_component_16m', '4x gtceu:ender_eye_dust', Processors.ACCUMULATION, '#gtceu:circuits/uv'],
            output: 'megacells:cell_component_64m',
            eut: 409600
        },
        {
            size: '256m',
            inputs: ['3x megacells:cell_component_64m', '4x gtceu:ender_eye_dust', Processors.ACCUMULATION, '#gtceu:circuits/uhv'],
            output: 'megacells:cell_component_256m',
            eut: 1638400
        }
    ]

    storageComponents.forEach(storageComponent)
    //#endregion



    //#region cells & cell housings
    cellHousing('item', 'gtceu:iron_plate', Materials.QUARTZ_GLASS, 'ae2:item_cell_housing')
    cellHousing('fluid', 'gtceu:copper_plate', Materials.QUARTZ_GLASS, 'ae2:fluid_cell_housing')

    event.shaped('megacells:mega_item_cell_housing', [
        'CBC',
        'B B',
        'AAA'
    ], {
        A: Materials.DOUBLE_FUTURA_PLATE,
        B: 'gtceu:certus_quartz_plate',
        C: Materials.QUARTZ_VIB_GLASS
    })

    event.shaped('megacells:mega_fluid_cell_housing', [
        'CBC',
        'B B',
        'AAA'
    ], {
        A: Materials.DOUBLE_FUTURA_PLATE,
        B: 'gtceu:gold_plate',
        C: Materials.QUARTZ_VIB_GLASS
    })

    const cellSizes = ['1k', '4k', '16k', '64k', '256k']

    cellSizes.forEach(size => {
        event.shapeless(`ae2:fluid_storage_cell_${size}`, [
            `ae2:cell_component_${size}`,
            'ae2:fluid_cell_housing'
        ])
        
        event.shapeless(`ae2:item_storage_cell_${size}`, [
            `ae2:cell_component_${size}`,
            'ae2:item_cell_housing'
        ])
    })

    // Spatial storage cells
    const spatialCells = [
        { component: 'ae2:spatial_cell_component_2', cell: 'ae2:spatial_storage_cell_2' },
        { component: 'ae2:spatial_cell_component_16', cell: 'ae2:spatial_storage_cell_16' },
        { component: 'ae2:spatial_cell_component_128', cell: 'ae2:spatial_storage_cell_128' }
    ]

    spatialCells.forEach(spatial => {
        event.shapeless(spatial.cell, [spatial.component, 'ae2:item_cell_housing'])
    })
    
    frame('ae2:drive', Processors.ENGINEERING, Materials.FUTURA_PLATE, Materials.FLUIX_CABLE)


    //other cell related
    event.shaped('ae2:chest', [
        'EBE',
        'DCD',
        'AAA'
    ], {
        A: Materials.FUTURA_PLATE,
        B: 'ae2:terminal',
        C: '#forge:chests/wooden',
        D: Materials.FLUIX_CABLE,
        E: Materials.QUARTZ_GLASS
    })

    event.shaped('ae2:io_port', [
        'EEE',
        'DCD',
        'ABA'
    ], {
        A: Materials.FUTURA_PLATE,
        B: Processors.LOGIC,
        C: Materials.FUTURA_FRAME,
        D: 'ae2:drive',
        E: Materials.QUARTZ_GLASS
    })

    event.shaped('megacells:cell_dock', [
        'CBC',
        ' A '
    ], {
        A: Materials.FLUIX_CABLE,
        B: 'gtceu:copper_plate',
        C: Materials.FUTURA_PLATE
    })

        event.shaped('ae2:spatial_io_port', [
        'EEE',
        'DCD',
        'ABA'
    ], {
        A: Materials.FUTURA_PLATE,
        B: Processors.ENGINEERING,
        C: 'ae2:io_port',
        D: Materials.FLUIX_CABLE,
        E: Materials.QUARTZ_GLASS
    })

    event.shaped('ae2:spatial_anchor', [
        'CAC',
        'ADA',
        'CBC'
    ], {
        A: 'ae2:spatial_pylon',
        B: 'ae2:spatial_cell_component_128',
        C: Materials.FLUIX_CABLE,
        D: Materials.FUTURA_FRAME
    })
    //#endregion



    //#region crafting & automation
    event.recipes.gtceu.canner('pattern_canning')
        .itemInputs('#forge:dusts/certus_quartz', '4x gtceu:fluid_cell')
        .inputFluids('gtceu:glowstone 576')
        .itemOutputs('4x ae2:blank_pattern')
        .duration(300)
        .EUt(384)

    bus('ae2:import_bus', 'minecraft:sticky_piston', Cores.ANNIHILATION, true)
    bus('ae2:export_bus', 'minecraft:piston', Cores.FORMATION, false)

    interfaces('ae2:interface', '#forge:glass')
    interfaces('ae2:pattern_provider', 'minecraft:crafting_table')

    event.shapeless('expatternprovider:oversize_interface', ['expatternprovider:ex_interface', Processors.LOGIC, Processors.LOGIC])

    event.shaped('ae2:molecular_assembler', [
        'ADA',
        'BEC',
        'ADA'
    ], {
        A: Materials.FUTURA_PLATE,
        B: Cores.ANNIHILATION,
        C: Cores.FORMATION,
        D: 'minecraft:crafting_table',
        E: Materials.QUARTZ_GLASS
    })

    event.shaped('merequester:requester', [
        'ADA',
        'EBE',
        'ACA'
    ], {
        A: Materials.FUTURA_PLATE,
        B: Materials.FUTURA_FRAME,
        C: Processors.ENGINEERING,
        D: '#ae2:interface',
        E: 'ae2:crafting_accelerator'
    })

    // Assembler matrix blocks
    matrixBlock('expatternprovider:assembler_matrix_wall', 'gtceu:certus_quartz_plate')
    matrixBlock('expatternprovider:assembler_matrix_frame', Materials.FUTURA_PLATE)
    matrixBlock('expatternprovider:assembler_matrix_glass', 'gtceu:glass_plate')  
    //#endregion



    //#region utility
    //machines
    event.shaped('ae2:cell_workbench', [
        'DBD',
        'ACA',
        'AAA'
    ], {
        A: Materials.FUTURA_PLATE,
        B: Processors.CALCULATION,
        C: Materials.FUTURA_FRAME,
        D: Materials.QUARTZ_GLASS
    })

    event.shaped('ae2:condenser', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: Materials.DENSE_FUTURA_PLATE,
        B: Materials.QUARTZ_GLASS,
        C: 'ae2:fluix_dust'
    })

    event.shaped('ae2:semi_dark_monitor', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: Materials.QUARTZ_VIB_GLASS,
        B: '#simplylight:any_lamp_on'
    })

    //networking & p2p
    event.shaped('ae2:me_p2p_tunnel', [
        ' A ',
        'ACA',
        'BBB'
    ], {
        A: Materials.FUTURA_PLATE,
        B: 'ae2:fluix_crystal',
        C: Processors.ENGINEERING
    })

    event.shaped('2x ae2:wireless_receiver', [
        'A C',
        'AB ',
        'BAA'
    ], {
        A: Materials.FUTURA_PLATE,
        B: 'ae2:quartz_fiber',
        C: 'ae2:fluix_pearl'
    })

    //tools
    event.shaped('ae2:charged_staff', [
        '  A',
        ' B ',
        'B  '
    ], {
        A: 'ae2:charged_certus_quartz_crystal',
        B: Materials.FUTURA_ROD
    })

    event.shaped('ae2:entropy_manipulator', [
        ' CD',
        ' AB',
        'A  '
    ], {
        A: Materials.FUTURA_ROD,
        B: Processors.ENGINEERING,
        C: 'ae2:energy_cell',
        D: 'ae2:fluix_crystal'
    })

    event.shaped('expatternprovider:wireless_tool', [
        ' A ',
        'BCB',
        ' B '
    ], {
        A: 'ae2:wireless_receiver',
        B: Materials.FUTURA_PLATE,
        C: Processors.CALCULATION
    })

    event.shaped('ae2:memory_card', [
        'ABB',
        'CCC'
    ], {
        A: '#gtceu:circuits/ulv',
        B: Materials.FUTURA_PLATE,
        C: 'gtceu:gold_bolt'
    })

    event.shaped('ae2netanalyser:network_analyser', [
        'AEA',
        'BCB',
        'DBD'
    ], {
        A: 'gtceu:fine_copper_wire',
        B: Materials.FUTURA_PLATE,
        C: '#gtceu:circuits/ulv',
        D: 'gtceu:iron_screw',
        E: '#forge:tools/screwdrivers'
    })
    //#endregion



    //#region upgrade cards
    const cardRecipes = [
        { output: '2x ae2:basic_card', bolt: 'gtceu:gold_bolt' },
        { output: '2x ae2:advanced_card', bolt: 'gtceu:diamond_bolt' }
    ]

    cardRecipes.forEach(card => {
        event.shaped(card.output, [
            'AAC',
            'BAC',
            'AA '
        ], {
            A: 'gtceu:iron_plate',
            B: Processors.CALCULATION,
            C: card.bolt
        })
    })

    const upgradeCards = [
        { output: 'ae2wtlib:magnet_card', component: 'gtceu:lv_item_magnet' },
        { output: 'ae2:wireless_booster', component: 'gtceu:hv_emitter' },
        { output: 'ae2:capacity_card', component: 'ae2:charged_certus_quartz_crystal'}
    ]

    upgradeCards.forEach(upgrade => {
        event.shapeless(upgrade.output, ['ae2:advanced_card', upgrade.component])
    })

    event.shapeless('pccard:card_programmed_circuit', ['ae2:crafting_card', 'gtceu:programmed_circuit', '#gtceu:circuits/ev'])
    //#endregion
})