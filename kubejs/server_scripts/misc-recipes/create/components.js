ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    //#region shaped recipes
    gt.shaped('create:precision_mechanism', [
        'ADA',
        'BCB',
        'ABA'
    ], {
        A: 'create:cogwheel',
        B: 'gtceu:brass_screw',
        C: 'gtceu:gold_plate',
        D: '#forge:tools/screwdrivers'
    })
    .addMaterialInfo()

    gt.shaped('createaddition:rolling_mill', [
        'ABA',
        'CBC',
        'CDC'
    ], {
        A: 'gtceu:wrought_iron_plate',
        B: '#create:shafts',
        C: 'create:andesite_alloy',
        D: '#create:gearboxes'
    })
    .addMaterialInfo()

    gt.shaped('create:polished_rose_quartz', [
        'B ',
        ' A'
    ], {
        A: 'create:rose_quartz',
        B: '#forge:tools/files'
    })
    .addMaterialInfo()

    gt.shaped('create:fluid_valve', [
        'A',
        'B'
    ], {
        A: '#create:valve_handles',
        B: 'create:fluid_pipe'
    })
    .addMaterialInfo()

    gt.shaped('create:controller_rail', [
        'AEA',
        'BDB',
        'CFC'
    ], {
        A: 'gtceu:gold_screw',
        B: 'gtceu:iron_rod',
        C: 'gtceu:gold_rod',
        D: 'minecraft:stick',
        E: '#gtceu:circuits/ulv',
        F: '#forge:tools/screwdrivers'
    })
    .addMaterialInfo()

    gt.shaped('create:water_wheel', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'gtceu:treated_wood_planks',
        B: 'create:large_cogwheel'
    })
    .addMaterialInfo()

    gt.shaped('create:large_water_wheel', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'gtceu:treated_wood_planks',
        B: 'create:water_wheel'
    })
    .addMaterialInfo()

    gt.shaped('create:fluid_tank', [
        'AAA',
        'B B',
        'AAA'
    ], {
        A: 'gtceu:copper_plate',
        B: 'gtceu:tempered_glass'
    })
    .addMaterialInfo()

    gt.shaped('create:white_sail', [
        'AB ',
        'BC ',
        '   '
    ], {
        A: '#minecraft:wool',
        B: 'gtceu:treated_wood_rod',
        C: 'farmersdelight:rope'
    })
    .addMaterialInfo()

    gt.shaped('create:white_sail', [
        'AB ',
        'BC ',
        '   '
    ], {
        A: 'farmersdelight:canvas',
        B: 'gtceu:treated_wood_rod',
        C: 'farmersdelight:rope'
    })

    gt.shaped('create:white_sail', [
        'AB ',
        'BC ',
        '   '
    ], {
        A: 'minecraft:leather',
        B: 'gtceu:treated_wood_rod',
        C: 'farmersdelight:rope'
    })

    gt.shaped('create:andesite_funnel', [
        'ABA',
        'ACA'
    ], {
        A: 'create:andesite_alloy',
        B: 'gtceu:iron_plate',
        C: 'farmersdelight:canvas'
    })
    .addMaterialInfo()

    gt.shaped('create:brass_funnel', [
        'ABA',
        'ACA'
    ], {
        A: 'gtceu:brass_plate',
        B: '#gtceu:circuits/ulv',
        C: 'farmersdelight:canvas'
    })
    .addMaterialInfo()

    gt.shaped('create:andesite_tunnel', [
        'ABA',
        'ACA',
        'ACA'
    ], {
        A: 'create:andesite_alloy',
        B: 'gtceu:iron_plate',
        C: 'farmersdelight:canvas'
    })
    .addMaterialInfo()

    gt.shaped('create:brass_tunnel', [
        'ABA',
        'ACA',
        'ACA'
    ], {
        A: 'gtceu:brass_plate',
        B: '#gtceu:circuits/ulv',
        C: 'farmersdelight:canvas'
    })
    .addMaterialInfo()

    gt.shaped('create:belt_connector', [
        'AAA',
        'AAA'
    ], {
        A: 'farmersdelight:canvas'
    })
    .addMaterialInfo()

    gt.shaped('farmersdelight:rope', [
        'A',
        'A',
        'A'
    ], {
        A: 'farmersdelight:straw'
    })
    .addMaterialInfo()

    gt.shaped('create:flywheel', [
        'BBB',
        'BAB',
        'BBB'
    ], {
        A: '#create:shafts',
        B: 'gtceu:brass_plate'
    })
    .addMaterialInfo()

    gt.shaped('create:wrench', [
        'A A',
        ' B ',
        ' C '
    ], {
        A: 'gtceu:brass_plate',
        B: 'create:cogwheel',
        C: '#create:shafts'
    })
    .addMaterialInfo()

    gt.shaped('create:cogwheel', [
        ' C ',
        'BAB'
    ], {
        A: '#create:shafts',
        B: '#minecraft:planks',
        C: '#forge:tools/saws'
    })

    gt.assembler('cogwheel')
        .itemInputs('#create:shafts', '2x #minecraft:planks')
        .itemOutputs('create:cogwheel')
        .circuit(1)
        .duration(40)
        .EUt(2)
        .addMaterialInfo(true)

    gt.shaped('create:large_cogwheel', [
        'CA ',
        'ABA',
        ' A ',
    ], {
        A: '#minecraft:planks',
        B: '#create:shafts',
        C: '#forge:tools/saws'
    })
    
    gt.assembler('large_cogwheel')
        .itemInputs('#create:shafts', '4x #minecraft:planks')
        .itemOutputs('create:large_cogwheel')
        .circuit(2)
        .duration(80)
        .EUt(2)
        .addMaterialInfo(true)

    gt.shaped('create:piston_extension_pole', [
        ' A ',
        'CBD',
        ' A '
    ], {
        A: '#minecraft:planks',
        B: '#create:shafts',
        C: '#forge:tools/saws',
        D: '#forge:tools/files'
    })
    .addMaterialInfo()

    gt.shaped('create:piston_extension_pole', [
        ' A ',
        'DBC',
        ' A '
    ], {
        A: '#minecraft:planks',
        B: '#create:shafts',
        C: '#forge:tools/saws',
        D: '#forge:tools/files'
    })
    .addMaterialInfo()

    gt.shaped('create:spout', [
        'B',
        'A'
    ], {
        A: 'create:fluid_valve',
        B: 'create:fluid_tank'
    })
    .addMaterialInfo()

    gt.shaped('create:whisk', [
        ' A ',
        'BAB',
        'BBB'
    ], {
        A: '#create:shafts',
        B: 'gtceu:wrought_iron_rod'
    })
    .addMaterialInfo()

    gt.shaped('create:mechanical_mixer', [
        ' A ',
        'DCD',
        ' B '
    ], {
        A: 'create:piston_extension_pole',
        B: 'create:whisk',
        C: 'create:large_cogwheel',
        D: '#create:shafts'
    })
    .addMaterialInfo()

    gt.shaped('create:deployer', [
        'A',
        'B',
        'C'
    ], {
        A: '#create:gearboxes',
        B: 'create:piston_extension_pole',
        C: 'create:brass_hand'
    })
    .addMaterialInfo()

    gt.shaped('create:brass_hand', [
        ' A ',
        'CBC',
        ' C '
    ], {
        A: '#create:shafts',
        B: '#gtceu:circuits/ulv',
        C: 'gtceu:brass_plate'
    })
    .addMaterialInfo()

    gt.shaped('create:mechanical_crafter', [
        'ACA',
        ' B '
    ], {
        A: '#gtceu:circuits/ulv',
        B: 'create:brass_casing',
        C: 'create:large_cogwheel'
    })
    .addMaterialInfo()

    gt.shaped('create:millstone', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:stone',
        B: '#forge:smooth_stone',
        C: '#create:gearboxes'
    })
    .addMaterialInfo()

    gt.shaped('create:mechanical_saw', [
        'B',
        'A'
    ], {
        A: '#create:gearboxes',
        B: 'gtceu:wrought_iron_buzz_saw_blade'
    })
    .addMaterialInfo()

    gt.shaped('create:mechanical_press', [
        'A',
        'B',
        'C'
    ], {
        A: 'create:piston_extension_pole',
        B: '#create:gearboxes',
        C: 'gtceu:wrought_iron_block'
    })
    .addMaterialInfo()

    gt.shaped('create:mechanical_plough', [
        'BCB',
        'BCB',
        ' A '
    ], {
        A: 'create:andesite_casing',
        B: '#create:shafts',
        C: 'gtceu:wrought_iron_plate'
    })
    .addMaterialInfo()

    gt.shaped('create:mechanical_drill', [
        'B',
        'A'
    ], {
        A: '#create:gearboxes',
        B: 'gtceu:wrought_iron_drill_head'
    })
    .addMaterialInfo()

    gt.shaped('create:mechanical_harvester', [
        'CDC',
        'BDB',
        ' A '
    ], {
        A: 'create:andesite_casing',
        B: '#create:shafts',
        C: 'gtceu:wrought_iron_gear',
        D: 'gtceu:wrought_iron_rod'
    })
    .addMaterialInfo()

    gt.shaped('create:sticky_mechanical_piston', [
        'C',
        'A',
        'B'
    ], {
        A: 'gtceu:sticky_resin',
        B: 'create:mechanical_piston',
        C: '#forge:tools/hammers'
    })
    .addMaterialInfo()

    gt.shaped('create:sticky_mechanical_piston', [
        'C',
        'A',
        'B'
    ], {
        A: '#forge:slime_ball',
        B: 'create:mechanical_piston',
        C: '#forge:tools/hammers'
    })
    .addMaterialInfo()

    gt.assembler('sticky_mech_piston_slime')
        .itemInputs('#forge:slime_ball', 'minecraft:piston')
        .itemOutputs('create:sticky_mechanical_piston')
        .duration(100)
        .EUt(16)

    gt.assembler('sticky_mech_piston_resin')
        .itemInputs('gtceu:sticky_resin', 'minecraft:piston')
        .itemOutputs('create:sticky_mechanical_piston')
        .duration(100)
        .EUt(16)

    gt.assembler('sticky_mech_piston_glue')
        .itemInputs('minecraft:piston')
        .inputFluids('gtceu:glue 100')
        .itemOutputs('create:sticky_mechanical_piston')
        .duration(100)
        .EUt(16)

    gt.shaped('create:hose_pulley', [
        ' A ',
        'BBB',
        ' C '
    ], {
        A: 'create:copper_casing',
        B: 'gtceu:rubber_plate',
        C: 'create:fluid_pipe'
    })
    .addMaterialInfo()

    gt.shaped('create:elevator_pulley', [
        ' A ',
        'BBB',
        ' C '
    ], {
        A: 'create:brass_casing',
        B: 'minecraft:chain',
        C: '#create:shafts'
    })
    .addMaterialInfo()

    gt.shaped('create:rope_pulley', [
        ' A ',
        'BBB',
        ' C '
    ], {
        A: 'create:andesite_casing',
        B: 'farmersdelight:rope',
        C: '#create:shafts'
    })
    .addMaterialInfo()

    gt.shaped('create:filter', [
        'BAB'
    ], {
        A: 'farmersdelight:canvas',
        B: 'gtceu:iron_foil'
    })
    .addMaterialInfo()
    
    gt.shaped('create:package_filter', [
        'BAB'
    ], {
        A: 'farmersdelight:canvas',
        B: 'gtceu:zinc_foil'
    })
    .addMaterialInfo()
    
    gt.shaped('create:attribute_filter', [
        'BAB'
    ], {
        A: 'farmersdelight:canvas',
        B: 'gtceu:brass_foil'
    })
    .addMaterialInfo()

    gt.shaped('create:filter', [
        'BAB'
    ], {
        A: '#minecraft:wool',
        B: 'gtceu:iron_foil'
    })
    .addMaterialInfo()
    
    gt.shaped('create:package_filter', [
        'BAB'
    ], {
        A: '#minecraft:wool',
        B: 'gtceu:zinc_foil'
    })
    .addMaterialInfo()
    
    gt.shaped('create:attribute_filter', [
        'BAB'
    ], {
        A: '#minecraft:wool',
        B: 'gtceu:brass_foil'
    })
    .addMaterialInfo()

    event.shapeless('create:speedometer', ['#create:gearboxes', 'minecraft:compass'])

    gt.shaped('create:crafter_slot_cover', [
        'A',
        'B'
    ], {
        A: '#gtceu:circuits/ulv',
        B: 'gtceu:brass_plate'
    })    
    .addMaterialInfo()

    gt.shaped('create:super_glue', [
        'AB',
        'CA'
    ], {
        A: 'gtceu:sticky_resin',
        B: 'gtceu:tin_foil',
        C: 'gtceu:tin_ring'
    })

    gt.shaped('create:encased_fan', [
        'A',
        'B'
    ], {
        A: 'create:andesite_casing',
        B: 'gtceu:wrought_iron_rotor'
    })
    .addMaterialInfo()

    gt.shaped('4x create:chute', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'gtceu:wrought_iron_plate',
        B: '#forge:tools/hammers'
    })
    .addMaterialInfo()

    gt.shaped('create:goggles', [
        ' A ',
        'CBC',
        '   '
    ], {
        A: 'farmersdelight:straw',
        B: 'gtceu:gold_plate',
        C: '#forge:glass'
    })

    gt.shaped('8x copycats:copycat_shaft', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#create:shafts',
        B: 'gtceu:zinc_ingot'
    })

    event.shapeless('create_connected:shear_pin', ['#forge:tools/saws', '#create:shafts'])

    event.shapeless('create:encased_chain_drive', ['create:andesite_casing', 'minecraft:chain', 'minecraft:chain'])

    gt.shaped('create_connected:empty_fan_catalyst', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'minecraft:iron_bars',
        B: 'gtceu:brass_rod',
        C: '#forge:tools/wrenches'
    })

    gt.shaped('create_connected:sequenced_pulse_generator', [
        'ABC',
        'DDD'
    ], {
        A: '#gtceu:circuits/ulv',
        B: 'gtceu:brass_plate',
        C: 'minecraft:redstone_torch',
        D: '#forge:stone'
    })
    //#endregion



    //#region Andesite Alloy
    //mostly by @digestlotion
    event.shapeless('2x gtceu:andesite_dust', ['#forge:stone_dusts', 'gtceu:nether_quartz_dust'])
    event.shapeless('2x gtceu:andesite_dust', ['#forge:stone_dusts', 'gtceu:quartz_sand_dust'])
    event.shapeless('1x astrogreg:andesite_alloy_dust', ['gtceu:andesite_dust', 'gtceu:iron_dust'])
    event.shapeless('2x #create:shafts', ['create:andesite_alloy', '#forge:tools/files'])
    event.shapeless('9x create:andesite_alloy', 'create:andesite_alloy_block')
    event.smelting('1x create:andesite_alloy', 'astrogreg:andesite_alloy_dust')

    event.shaped('gtceu:andesite_dust', [
        'A',
        'B'
    ], {
        A: 'minecraft:andesite',
        B: '#forge:tools/files'
    })

    gt.mixer('mixing_andesite_alloy_dust')
        .itemInputs('gtceu:iron_dust', 'gtceu:andesite_dust')
        .itemOutputs('2x astrogreg:andesite_alloy_dust')
        .duration(80)
        .EUt(7)

    gt.mixer('mixing_andesite_dust')
        .itemInputs('gtceu:quartz_sand_dust', '#forge:stone_dusts')
        .itemOutputs('2x gtceu:andesite_dust')
        .duration(80)
        .EUt(7)

    gt.mixer('mixing_andesite_dust_alt')
        .itemInputs('gtceu:nether_quartz_dust', '#forge:stone_dusts')
        .itemOutputs('2x gtceu:andesite_dust')
        .duration(80)
        .EUt(7)

    gt.alloy_smelter('alloying_andesite_alloy')
        .itemInputs('gtceu:iron_dust', 'gtceu:andesite_dust')
        .itemOutputs('2x create:andesite_alloy')
        .duration(120)
        .EUt(15)

    gt.alloy_smelter('alloying_andesite_alloy_alt')
        .itemInputs('minecraft:iron_ingot', 'gtceu:andesite_dust')
        .itemOutputs('2x create:andesite_alloy')
        .duration(120)
        .EUt(15)

    gt.alloy_smelter('alloying_andesite_alloy_alt1')
        .itemInputs('gtceu:iron_dust', 'minecraft:andesite')
        .itemOutputs('2x create:andesite_alloy')
        .duration(120)
        .EUt(15)

    gt.alloy_smelter('alloying_andesite_alloy_alt2')
        .itemInputs('minecraft:iron_ingot', 'minecraft:andesite')
        .itemOutputs('2x create:andesite_alloy')
        .duration(120)
        .EUt(15)

    gt.lathe('lathing_shaft')
        .itemInputs('1x create:andesite_alloy')
        .itemOutputs('8x #create:shafts')
        .duration(120)
        .EUt(7)

    gt.cutter('cutting_shaft')
        .itemInputs('1x create:andesite_alloy')
        .itemOutputs('8x #create:shafts')
        .duration(60)
        .EUt(15)
        .addMaterialInfo(true)

    gt.lathe('lathe_polished_rose_quartz')
        .itemInputs('create:rose_quartz')
        .itemOutputs('create:polished_rose_quartz')
        .duration(120)
        .EUt(7)

    gt.centrifuge('decompose_andesite_alloy')
        .itemInputs('2x astrogreg:andesite_alloy_dust')
        .itemOutputs('gtceu:andesite_dust', 'gtceu:iron_dust')
        .duration(80)
        .EUt(7)
    //#endregion



    //#region multiblock controllers
    gt.shaped('astrogreg:large_kinetic_mixer', [
        'ECE',
        'DAD',
        'EBE'
    ], {
        A: 'astrogreg:machine_casing_kinetic',
        B: 'create:precision_mechanism',
        C: 'create:mechanical_mixer',
        D: 'create:cogwheel',
        E: 'astrogreg:andesite_alloy_plate'
    })
    .addMaterialInfo()

    gt.shaped('astrogreg:kinetic_combustion_engine', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'gtceu:hv_electric_piston',
        B: '#gtceu:circuits/ev',
        C: 'gtceu:hv_electric_motor',
        D: 'gtceu:hv_machine_hull',
        E: 'create:cogwheel',
        F: '#create:shafts'
    })
    .addMaterialInfo()

    gt.shaped('astrogreg:kinetic_concrete_plant', [
      'EDE', 
      'ACA', 
      'ABA'
    ], {
        A: 'gtceu:bronze_normal_fluid_pipe',
        B: 'gtceu:block_casting_mold',
        C: 'create:mechanical_mixer',
        D: '#gtceu:circuits/ulv',
        E: 'gtceu:wrought_iron_rotor'
    })
    .addMaterialInfo()

    gt.shaped('astrogreg:large_kinetic_alternator', [
        'BAB',
        'DCD',
        'EAE'
    ],{
        A: 'create:large_cogwheel',
        B: 'create:cogwheel',
        C: 'astrogreg:machine_casing_kinetic',
        D: 'gtceu:lv_electric_motor',
        E: 'gtceu:red_alloy_double_wire'
    })
    .addMaterialInfo()

    event.recipes.create.mechanical_crafting('astrogreg:large_kinetic_miner', [
        ' AAA ',
        'ABCBA',
        'ADEFA',
        'ABCBA',
        ' AAA '
    ], {
        A: 'gtceu:brass_plate',
        B: 'gtceu:wrought_iron_drill_head',
        C: '#gtceu:circuits/ulv',
        D: 'create:deployer',
        E: 'create:brass_casing',
        F: 'create:brass_funnel'
    })
    //#endregion 
})