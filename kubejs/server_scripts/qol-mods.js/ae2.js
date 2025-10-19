ServerEvents.recipes(event => {
    event.recipes.gtceu.polarizer('polarize_certus')
        .itemInputs('gtceu:certus_quartz_gem')
        .itemOutputs('ae2:charged_certus_quartz_crystal')
        .duration(150)
        .EUt(400)
    
    event.recipes.gtceu.alloy_smelter('quartz_glass_alloying')
        .itemInputs('#forge:dusts/certus_quartz', '#forge:glass')
        .itemOutputs('ae2:quartz_glass')
        .duration(160)
        .EUt(7)

    event.recipes.gtceu.alloy_smelter('vib_quartz_glass_alloying')
        .itemInputs('ae2:quartz_glass', '2x minecraft:glowstone_dust')
        .itemOutputs('ae2:quartz_vibrant_glass')
        .duration(160)
        .EUt(7)

    event.recipes.gtceu.canner('pattern_canning')
        .itemInputs('#forge:dusts/certus_quartz', '4x gtceu:fluid_cell')
        .inputFluids('gtceu:glowstone 576')
        .itemOutputs('4x ae2:blank_pattern')
        .duration(20)
        .EUt(384)

    event.recipes.gtceu.wiremill('mill_quartz_fiber')
        .itemInputs('ae2:quartz_glass')
        .itemOutputs('2x ae2:quartz_fiber')
        .duration(80)
        .EUt(28)

    event.recipes.gtceu.wiremill('mill_fluix')
        .itemInputs('ae2:fluix_crystal')
        .itemOutputs('4x ae2:fluix_glass_cable')
        .duration(160)
        .EUt(28)    

    event.recipes.gtceu.mixer('fluix_pearl_dust')
        .itemInputs('gtceu:ender_pearl_dust', '4x ae2:fluix_dust')
        .itemOutputs('gtceu:fluix_pearl')
        .duration(160)
        .EUt(100)

    event.recipes.gtceu.chemical_bath('wash_cables')
        .itemInputs('#ae2:glass_cable')
        .inputFluids('minecraft:water 144')
        .itemOutputs('ae2:fluix_cable')
        .duration(40)
        .EUt(20)

    
    event.recipes.gtceu.macerator('macerate_fluix')
        .itemInputs('ae2:fluix_crystal')
        .itemOutputs('ae2:fluix_dust')
        .duration(200)

    event.recipes.gtceu.mixer('skystone_dust_mixing')
        .itemInputs('gtceu:certus_quartz_dust', '3x gtceu:stone_dust')
        .itemOutputs('4x ae2:sky_dust')
        .duration(160)
        .EUt(120)

    event.recipes.gtceu.mixer('futura_alloy_mixing')
        .itemInputs('4x gtceu:stainless_steel_dust', 'ae2:sky_dust')
        .itemOutputs('5x gtceu:futura_alloy_dust')
        .duration(200)
        .EUt(450)

    event.shaped('ae2:capacity_card', [
        'AB'
    ],{
        A: 'ae2:charged_certus_quartz_crystal',
        B: 'ae2:basic_card'
    })

    event.shaped('ae2:annihilation_core', [
        'ABC'
    ],{
        A: 'gtceu:silicon_dioxide_dust',
        B: 'ae2:fluix_dust',
        C: 'ae2:logic_processor'
    })

    event.shaped('ae2:drive', [
        'ABA',
        'C C',
        'ABA'
    ],{
        A: 'gtceu:futura_alloy_plate',
        B: 'ae2:engineering_processor',
        C: 'ae2:fluix_glass_cable'
    })

    event.shaped('ae2:import_bus', [
        ' B ',
        'CAC'
    ],{
        A: 'minecraft:sticky_piston',
        B: 'ae2:annihilation_core',
        C: 'gtceu:futura_alloy_plate'
    })

    event.shaped('ae2:export_bus', [
        'ACA',
        ' B '
    ],{
        A: 'gtceu:futura_alloy_plate',
        B: 'minecraft:piston',
        C: 'ae2:formation_core'
    })

    event.shaped('ae2:interface', [
        'ABA',
        'D C',
        'ABA'
    ],{
        A: 'gtceu:futura_alloy_plate',
        B: '#forge:glass',
        C: 'ae2:formation_core',
        D: 'ae2:annihilation_core'
    })

    event.shaped('ae2:pattern_provider', [
        'ABA',
        'D C',
        'ABA'
    ],{
        A: 'gtceu:futura_alloy_plate',
        B: 'minecraft:crafting_table',
        C: 'ae2:formation_core',
        D: 'ae2:annihilation_core'
    })

    event.shaped('ae2:wireless_receiver', [
        'A C',
        'AB ',
        'BAA'
    ],{
        A: 'gtceu:futura_alloy_plate',
        B: 'ae2:quartz_fiber',
        C: 'ae2:fluix_pearl'
    })

    event.shaped('ae2:molecular_assembler', [
        'ADA',
        'BEC',
        'ADA'
    ],{
        A: 'gtceu:futura_alloy_plate',
        B: 'ae2:annihilation_core',
        C: 'ae2:formation_core',
        D: 'minecraft:crafting_table',
        E: 'ae2:quartz_glass'
    })

    event.shaped('ae2:cell_workbench', [
        'DBD',
        'ACA',
        'AAA'
    ],{
        A: 'gtceu:futura_alloy_plate',
        B: 'ae2:calculation_processor',
        C: 'gtceu:futura_alloy_frame',
        D: 'ae2:quartz_glass'
    })

    event.shaped('ae2:controller', [
        'ABA',
        'BCB',
        'ABA'
    ],{
        A: 'gtceu:futura_alloy_plate',
        B: 'ae2:fluix_crystal',
        C: 'gtceu:futura_alloy_frame'
    })

    event.shaped('ae2:energy_acceptor', [
        'ABA',
        'BCB',
        'ABA'
    ],{
        A: 'gtceu:futura_alloy_plate',
        B: 'ae2:quartz_glass',
        C: 'gtceu:futura_alloy_frame'
    })

    event.shaped('ae2:io_port', [
        'EEE',
        'DCD',
        'ABA'
    ],{
        A: 'gtceu:futura_alloy_plate',
        B: 'ae2:logic_processor',
        C: 'gtceu:futura_alloy_frame',
        D: 'ae2:drive',
        E: 'ae2:quartz_glass'
    })

    event.shaped('ae2:chest', [
        'EBE',
        'DCD',
        'AAA'
    ],{
        A: 'gtceu:futura_alloy_plate',
        B: 'ae2:terminal',
        C: '#forge:chests/wooden',
        D: 'ae2:fluix_glass_cable',
        E: 'ae2:quartz_glass'
    })

    event.shaped('ae2:me_p2p_tunnel', [
        ' A ',
        'ACA',
        'BBB'
    ],{
        A: 'gtceu:futura_alloy_plate',
        B: 'ae2:fluix_crystal',
        C: 'ae2:engineering_processor'
    })

    event.shaped('ae2:spatial_io_port', [
        'EEE',
        'DCD',
        'ABA'
    ],{
        A: 'gtceu:futura_alloy_plate',
        B: 'ae2:engineering_processor',
        C: 'ae2:io_port',
        D: 'ae2:fluix_glass_cable',
        E: 'ae2:quartz_glass'
    })

    event.recipes.gtceu.assembler('assemble_cpu')
        .itemInputs('gtceu:futura_alloy_frame', '2x ae2:fluix_glass_cable', '2x ae2:calculation_processor', '1x ae2:logic_processor')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('ae2:crafting_unit')
        .circuit(1)
        .duration(80)
        .EUt(1920)

    event.recipes.gtceu.assembler('assemble_mega_cpu')
        .itemInputs('gtceu:futura_alloy_frame', '2x ae2:crafting_unit', '2x ae2:logic_processor', '1x megacells:accumulation_processor')
        .inputFluids('gtceu:soldering_alloy 288')
        .itemOutputs('megacells:mega_crafting_unit')
        .circuit(1)
        .duration(80)
        .EUt(7680)

    event.shaped('expatternprovider:wireless_tool' , [
        ' A ',
        'BCB',
        ' B '
    ], {
        A: 'ae2:wireless_receiver',
        B: 'gtceu:futura_alloy_plate',
        C: 'ae2:calculation_processor'
    })

    event.shaped('megacells:mega_item_cell_housing', [
        'CBC',
        'B B',
        'AAA'
    ],{
        A: 'gtceu:double_futura_alloy_plate',
        B: 'gtceu:certus_quartz_plate',
        C: 'ae2:quartz_vibrant_glass'
    })

    event.shaped('megacells:mega_fluid_cell_housing', [
        'CBC',
        'B B',
        'AAA'
    ],{
        A: 'gtceu:double_futura_alloy_plate',
        B: 'gtceu:gold_plate',
        C: 'ae2:quartz_vibrant_glass'
    })

    event.recipes.gtceu.mixer('mixer_ender_eye_dust')
        .itemInputs('gtceu:ender_pearl_dust', 'minecraft:blaze_powder')
        .itemOutputs('2x gtceu:ender_eye_dust')
        .duration(160)
        .EUt(9)

    event.recipes.gtceu.inscription('inscribe_logic_processor')
        .itemInputs('gtceu:gold_plate')
        .inputFluids('gtceu:silicon 144')
        .itemOutputs('2x ae2:logic_processor')
        .duration(20)
        .EUt(100)

    event.recipes.gtceu.inscription('inscribe_calc_processor')
        .itemInputs('gtceu:certus_quartz_plate')
        .inputFluids('gtceu:silicon 144')
        .itemOutputs('2x ae2:calculation_processor')
        .duration(20)
        .EUt(100)

    event.recipes.gtceu.inscription('inscribe_eng_processor')
        .itemInputs('gtceu:diamond_plate')
        .inputFluids('gtceu:silicon 144')
        .itemOutputs('2x ae2:engineering_processor')
        .duration(20)
        .EUt(100)
    
    event.recipes.gtceu.inscription('inscribe_mega_processor')
        .itemInputs('ae2:logic_processor', 'ae2:calculation_processor', 'ae2:engineering_processor')
        .inputFluids('gtceu:neon 100')
        .itemOutputs('2x megacells:accumulation_processor')
        .duration(20)
        .EUt(3200)

    event.recipes.gtceu.inscription('inscribe_1k')
        .itemInputs('4x gtceu:certus_quartz_gem', '4x minecraft:redstone', 'ae2:logic_processor')
        .itemOutputs('ae2:cell_component_1k')
        .duration(20)
        .EUt(25)

    event.recipes.gtceu.inscription('inscribe_4k')
        .itemInputs('3x ae2:cell_component_1k', '4x minecraft:redstone', 'ae2:calculation_processor', '#gtceu:circuits/lv')
        .itemOutputs('ae2:cell_component_4k')
        .duration(20)
        .EUt(25)

    event.recipes.gtceu.inscription('inscribe_16k')
        .itemInputs('3x ae2:cell_component_4k', '4x minecraft:glowstone_dust', 'ae2:calculation_processor', '#gtceu:circuits/mv')
        .itemOutputs('ae2:cell_component_16k')
        .duration(20)
        .EUt(100)

    event.recipes.gtceu.inscription('inscribe_64k')
        .itemInputs('3x ae2:cell_component_16k', '4x minecraft:glowstone_dust', 'ae2:calculation_processor', '#gtceu:circuits/hv')
        .itemOutputs('ae2:cell_component_64k')
        .duration(20)
        .EUt(400)

    event.recipes.gtceu.inscription('inscribe_256k')
        .itemInputs('3x ae2:cell_component_64k', '4x ae2:sky_dust', 'ae2:calculation_processor', '#gtceu:circuits/ev')
        .itemOutputs('ae2:cell_component_256k')
        .duration(20)
        .EUt(1600)

    event.recipes.gtceu.inscription('inscribe_1m')
        .itemInputs('3x ae2:cell_component_256k', '4x ae2:sky_dust', 'megacells:accumulation_processor', '#gtceu:circuits/iv')
        .itemOutputs('megacells:cell_component_1m')
        .duration(20)
        .EUt(6400)

    event.recipes.gtceu.inscription('inscribe_4m')
        .itemInputs('3x megacells:cell_component_1m', '4x gtceu:ender_pearl_dust', 'megacells:accumulation_processor', '#gtceu:circuits/luv')
        .itemOutputs('megacells:cell_component_4m')
        .duration(20)
        .EUt(25600)

    event.recipes.gtceu.inscription('inscribe_16m')
        .itemInputs('3x megacells:cell_component_4m', '4x gtceu:ender_pearl_dust', 'megacells:accumulation_processor', '#gtceu:circuits/zpm')
        .itemOutputs('megacells:cell_component_16m')
        .duration(20)
        .EUt(102400)

    event.recipes.gtceu.inscription('inscribe_64m')
        .itemInputs('3x megacells:cell_component_16m', '4x gtceu:ender_eye_dust', 'megacells:accumulation_processor', '#gtceu:circuits/uv')
        .itemOutputs('megacells:cell_component_64m')
        .duration(20)
        .EUt(409600)

    event.recipes.gtceu.inscription('inscribe_256m')
        .itemInputs('3x megacells:cell_component_64m', '4x gtceu:ender_eye_dust', 'megacells:accumulation_processor', '#gtceu:circuits/uhv')
        .itemOutputs('megacells:cell_component_256m')
        .duration(20)
        .EUt(1638400)

    event.recipes.gtceu.assembler('assemble_futura_casings')
        .itemInputs('6x gtceu:futura_alloy_plate', 'gtceu:futura_alloy_frame')
        .itemOutputs('2x kubejs:futura_casing')
        .circuit(6)
        .duration(50)
        .EUt(16)

    event.shaped('2x kubejs:futura_casing', [
        'ACA',
        'ABA',
        'ADA'
    ], {
        A: 'gtceu:futura_alloy_plate',
        B: 'gtceu:futura_alloy_frame',
        C: '#forge:tools/hammers',
        D: '#forge:tools/wrenches'
    });

    event.shaped('merequester:requester', [
        'ADA',
        'EBE',
        'ACA'
    ], {
        A: 'gtceu:futura_alloy_plate',
        B: 'gtceu:futura_alloy_frame',
        C: 'ae2:engineering_processor',
        D: '#ae2:interface',
        E: 'ae2:crafting_accelerator'
    });

    event.shaped('gtceu:inscription_matrix', [
        'ADA',
        'CBC',
        'AEA'
    ], {
        A: 'gtceu:futura_alloy_plate',
        B: 'gtceu:hv_laser_engraver',
        C: 'gtceu:hv_emitter',
        D: 'gtceu:glass_lens',
        E: '#gtceu:circuits/iv'
    });

    event.shaped('ae2:condenser', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'gtceu:dense_futura_alloy_plate',
        B: 'ae2:quartz_glass',
        C: 'ae2:fluix_dust'
    });

});