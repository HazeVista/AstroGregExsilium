ServerEvents.recipes(event => {
    //shaped recipes
    event.shaped('create:precision_mechanism', [
        'ADA',
        'BCB',
        'ABA'
    ], {
        A: 'create:cogwheel',
        B: 'gtceu:brass_screw',
        C: 'gtceu:gold_plate',
        D: '#forge:tools/screwdrivers'
    })

    event.shaped('createaddition:rolling_mill', [
        'ABA',
        'CBC',
        'CDC'
     ], {
        A: 'gtceu:wrought_iron_plate',
        B: 'create:shaft',
        C: 'create:andesite_alloy',
        D: 'create:gearbox'
     })

    event.shaped('create:polished_rose_quartz', [
        'B ',
        ' A'
    ], {
        A: 'create:rose_quartz',
        B: '#forge:tools/files'
    })

    event.shaped('create:fluid_valve', [
        'A',
        'B'
    ], {
        A: '#create:valve_handles',
        B: 'create:fluid_pipe'
    })

    event.shaped('create:controller_rail', [
        'AEA',
        'BDB',
        'CFC'
    ], {
        A: 'gtceu:gold_screw',
        B: 'gtceu:iron_rod',
        C: 'gtceu:gold_rod',
        D: 'minecraft:stick',
        E: 'create:electron_tube',
        F: '#forge:tools/screwdrivers'
    })

    event.shaped('create:water_wheel', [
        'AAA',
        'ABA',
        'AAA'
    ],{
        A: 'gtceu:treated_wood_planks',
        B: 'create:cogwheel'
    })

    event.shaped('create:large_water_wheel', [
        'AAA',
        'ABA',
        'AAA'
    ],{
        A: 'gtceu:treated_wood_planks',
        B: 'create:water_wheel'
    })

    event.shaped('create:fluid_tank', [
        'AAA',
        'B B',
        'AAA'
    ],{
        A: 'gtceu:copper_plate',
        B: '#forge:glass/silica'
    })

    event.shaped('2x create:white_sail', [
        'CAC',
        'BAB',
        'CAC'
    ],{
        A: '#minecraft:wool',
        B: '#forge:rods/wooden',
        C: 'farmersdelight:rope'
    })

    event.shaped('create:andesite_funnel', [
        'ABA',
        'ACA'
    ],{
        A: 'create:andesite_alloy',
        B: 'gtceu:iron_plate',
        C: 'farmersdelight:canvas'
    })
    
    event.shaped('create:brass_funnel', [
        'ABA',
        'ACA'
    ],{
        A: 'gtceu:brass_plate',
        B: 'create:electron_tube',
        C: 'farmersdelight:canvas'
    })

    event.shaped('create:andesite_tunnel', [
        'ABA',
        'ACA',
        'ACA'
    ],{
        A: 'create:andesite_alloy',
        B: 'gtceu:iron_plate',
        C: 'farmersdelight:canvas'
    })
    
    event.shaped('create:brass_tunnel', [
        'ABA',
        'ACA',
        'ACA'
    ],{
        A: 'gtceu:brass_plate',
        B: 'create:electron_tube',
        C: 'farmersdelight:canvas'
    })

    event.shaped('create:belt_connector', [
        'AAA',
        'AAA'
    ],{
        A: 'farmersdelight:canvas'
    })  

    event.shaped('create:cardboard', [
        'AAA',
        'AAA'
    ],{
        A: 'farmersdelight:tree_bark'
    })   

    event.shaped('farmersdelight:rope', [
        'A',
        'A',
        'A'
    ],{
        A: 'farmersdelight:straw'
    })

    event.shaped('create:flywheel', [
        'BBB',
        'BAB',
        'BBB'
    ], {
        A: 'create:shaft',
        B: 'gtceu:brass_plate'
    })

    event.shaped('create:wrench',[
        'A A',
        ' B ',
        ' C '
    ], {
        A: 'gtceu:brass_plate',
        B: 'create:cogwheel',
        C: 'create:shaft'
    })

    event.shaped('create:cogwheel', [
        ' C ',
        'BAB'
    ], {
        A: 'create:shaft',
        B: '#minecraft:planks',
        C: '#forge:tools/saws'
    })

    event.shaped('create:large_cogwheel', [
        'CA ',
        'ABA',
        ' A ',
    ], {
        A: '#minecraft:planks',
        B: 'create:shaft',
        C: '#forge:tools/saws'
    })

    event.shaped('create:piston_extension_pole', [
        ' A ',
        'CBD',
        ' A '
    ], {
        A: '#minecraft:planks',
        B: 'create:shaft',
        C: '#forge:tools/saws',
        D: '#forge:tools/files'
    })
    
    event.shaped('create:piston_extension_pole', [
        ' A ',
        'DBC',
        ' A '
    ], {
        A: '#minecraft:planks',
        B: 'create:shaft',
        C: '#forge:tools/saws',
        D: '#forge:tools/files'
    })

    event.shaped('create:spout', [
        'B',
        'A'
    ], {
        A: 'create:fluid_valve',
        B: 'create:fluid_tank'
    })

    event.shaped('create:whisk', [
        ' A ',
        'BAB',
        'BBB'
    ], {
        A: 'create:shaft',
        B: 'gtceu:wrought_iron_rod'
    })
    
    event.shaped('create:mechanical_mixer', [ 
        ' A ',
        'DCD',
        ' B '
    ], {
        A: 'create:piston_extension_pole',
        B: 'create:whisk',
        C: 'create:large_cogwheel',
        D: 'create:shaft'
    })

    event.shaped('create:deployer', [
        'A',
        'B',
        'C'
    ], {
        A: 'create:gearbox',
        B: 'create:piston_extension_pole',
        C: 'create:brass_hand'
    })

    event.shaped('create:brass_hand', [
        ' A ',
        'CBC',
        ' C '
    ], {
        A: 'create:shaft',
        B: 'create:electron_tube',
        C: 'gtceu:brass_plate'
    })

    event.shaped('create:mechanical_crafter', [
        'ACA',
        ' B '
    ], {
        A: 'create:electron_tube',
        B: 'create:brass_casing',
        C: 'create:large_cogwheel'
    })

    event.shaped('create:millstone', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'minecraft:stone',
        B: 'minecraft:smooth_stone',
        C: 'create:gearbox'
    })

    event.shaped('create:mechanical_saw', [
        'B',
        'A'
    ], {
        A: 'create:gearbox',
        B: 'gtceu:wrought_iron_buzz_saw_blade'
    })

    event.shaped('create:mechanical_press', [
        'A',
        'B',
        'C'
    ], {
        A: 'create:piston_extension_pole',
        B: 'create:gearbox',
        C: 'gtceu:wrought_iron_block'
    })

    event.shaped('create:mechanical_plough', [
        'BCB',
        'BCB',
        ' A '
    ], {
        A: 'create:andesite_casing',
        B: 'create:shaft',
        C: 'gtceu:wrought_iron_plate'
    })

    event.shaped('create:mechanical_drill', [
        'B',
        'A'
    ], {
        A: 'create:gearbox',
        B: 'gtceu:wrought_iron_drill_head'
    })

    event.shaped('create:mechanical_harvester', [
        'CDC',
        'BDB',
        ' A '
    ], {
        A: 'create:andesite_casing',
        B: 'create:shaft',
        C: 'gtceu:wrought_iron_gear',
        D: 'gtceu:wrought_iron_rod'
    })

    event.shaped('create:sticky_mechanical_piston', [
        'A',
        'B'
    ], {
        A: 'gtceu:sticky_resin',
        B: 'create:mechanical_piston'
    })

    event.recipes.create.mechanical_crafting('create:steam_engine', [
        'A',
        'C',
        'A',
        'B'
    ], {
        A: 'create:piston_extension_pole',
        B: 'create:fluid_valve',
        C: 'gtceu:brass_plate'
    })

    event.shaped('create:hose_pulley', [
        ' A ',
        'BBB',
        ' C '
    ], {
        A: 'create:copper_casing',
        B: 'gtceu:rubber_plate',
        C: 'create:fluid_pipe'
    })

    event.shaped('create:elevator_pulley', [
        ' A ',
        'BBB',
        ' C '
    ], {
        A: 'create:brass_casing',
        B: 'minecraft:chain',
        C: 'create:shaft'
    })

    event.shaped('create:rope_pulley', [
        ' A ',
        'BBB',
        ' C '
    ], {
        A: 'create:andesite_casing',
        B: 'farmersdelight:rope',
        C: 'create:shaft'
    })

    event.recipes.create.crushing('farmersdelight:straw', 'farmersdelight:sandy_shrub')
    event.recipes.create.crushing('2x farmersdelight:straw', 'minecraft:tall_grass')
    event.recipes.create.crushing('farmersdelight:straw', 'minecraft:grass')
    event.recipes.create.crushing('kubejs:cobbled_asteroid_stone', 'kubejs:asteroid_stone')
    event.recipes.create.crushing('kubejs:asteroid_stone', 'kubejs:hard_asteroid_stone')
    event.recipes.create.crushing('kubejs:asteroid_gravel', 'kubejs:cobbled_asteroid_stone')

    event.recipes.create.milling('farmersdelight:straw', 'farmersdelight:sandy_shrub')
    event.recipes.create.milling('2x farmersdelight:straw', 'minecraft:tall_grass')
    event.recipes.create.milling('farmersdelight:straw', 'minecraft:grass')
    event.recipes.create.milling('kubejs:cobbled_asteroid_stone', 'kubejs:asteroid_stone')
    event.recipes.create.milling('kubejs:asteroid_stone', 'kubejs:hard_asteroid_stone')
    event.recipes.create.milling('kubejs:asteroid_gravel', 'kubejs:cobbled_asteroid_stone')
    event.recipes.create.milling(['minecraft:sand', Item.of('minecraft:flint').withChance(0.2), Item.of('minecraft:clay_ball').withChance(0.1)], 'minecraft:gravel')
    event.recipes.create.milling(['kubejs:asteroid_sand', Item.of('minecraft:flint').withChance(0.2), Item.of('minecraft:clay_ball').withChance(0.1)], 'kubejs:asteroid_gravel')

    event.shapeless('create:speedometer', [`create:gearbox`,`minecraft:compass`])

    // Andesite Alloy mostly by @digestlotion
    event.shapeless('2x gtceu:andesite_dust', ['gtceu:stone_dust', 'gtceu:nether_quartz_dust'])
    event.shapeless('2x gtceu:andesite_dust', ['gtceu:stone_dust', 'gtceu:quartz_sand_dust'])
    event.shapeless('1x gtceu:andesite_alloy_dust', ['gtceu:andesite_dust', 'gtceu:iron_dust'])
    event.shapeless('2x create:shaft', ['create:andesite_alloy', '#forge:tools/files'])
    event.smelting('1x create:andesite_alloy', 'gtceu:andesite_alloy_dust')

    event.recipes.gtceu.mixer('mixing_andesite_alloy_dust')
        .itemInputs('gtceu:iron_dust', 'gtceu:andesite_dust')
        .itemOutputs('2x gtceu:andesite_alloy_dust')
        .duration(80)
        .EUt(7)

    event.recipes.gtceu.alloy_smelter('alloying_andesite_alloy')
        .itemInputs('gtceu:iron_dust', 'gtceu:andesite_dust')
        .itemOutputs('2x create:andesite_alloy')
        .duration(120)
        .EUt(15)

    event.recipes.gtceu.alloy_smelter('alloying_andesite_alloy_alt')
        .itemInputs( 'minecraft:iron_ingot', 'gtceu:andesite_dust')
        .itemOutputs('2x create:andesite_alloy')
        .duration(120)
        .EUt(15)

    event.recipes.gtceu.alloy_smelter('alloying_andesite_alloy_alt1')
        .itemInputs( 'gtceu:iron_dust', 'minecraft:andesite')
        .itemOutputs('2x create:andesite_alloy')
        .duration(120)
        .EUt(15)
        
    event.recipes.gtceu.alloy_smelter('alloying_andesite_alloy_alt2')
        .itemInputs('minecraft:iron_ingot', 'minecraft:andesite')
        .itemOutputs('2x create:andesite_alloy')
        .duration(120)
        .EUt(15)

    event.recipes.gtceu.lathe(`lathing_shaft`)
        .itemInputs('1x create:andesite_alloy')
        .itemOutputs('8x create:shaft')
        .duration(80)
        .EUt(15)

    event.recipes.gtceu.cutter(`cutting_shaft`)
        .itemInputs('1x create:andesite_alloy')
        .itemOutputs('8x create:shaft')
        .duration(60)
        .EUt(15)

    event.recipes.gtceu.lathe('lathe_polished_rose_quartz')
        .itemInputs('create:rose_quartz')
        .itemOutputs('create:polished_rose_quartz')
        .duration(120)
        .EUt(7)

    // create mixing by @digestlotion
    event.recipes.create.mixing('2x create:andesite_alloy', ['gtceu:iron_dust', 'gtceu:andesite_dust']).heatRequirement('lowheated')
    event.recipes.create.mixing('2x create:andesite_alloy', ['minecraft:iron_ingot', 'gtceu:andesite_dust']).heatRequirement('lowheated')
    event.recipes.create.mixing('2x create:andesite_alloy', ['gtceu:iron_dust', 'minecraft:andesite']).heatRequirement('lowheated')
    event.recipes.create.mixing('2x create:andesite_alloy', ['minecraft:iron_ingot', 'minecraft:andesite']).heatRequirement('lowheated')
        
    event.recipes.create.mixing('4x gtceu:bronze_ingot', ['3x minecraft:copper_ingot', 'gtceu:tin_ingot']).heatRequirement('lowheated')
    event.recipes.create.mixing('4x gtceu:bronze_ingot', ['3x gtceu:copper_dust', 'gtceu:tin_ingot']).heatRequirement('lowheated')
    event.recipes.create.mixing('4x gtceu:bronze_ingot', ['3x minecraft:copper_ingot', 'gtceu:tin_dust']).heatRequirement('lowheated')
    event.recipes.create.mixing('4x gtceu:bronze_ingot', ['3x gtceu:copper_dust', 'gtceu:tin_dust']).heatRequirement('lowheated')

    event.recipes.create.mixing('4x gtceu:brass_ingot', ['3x minecraft:copper_ingot', 'gtceu:zinc_ingot']).heatRequirement('lowheated')
    event.recipes.create.mixing('4x gtceu:brass_ingot', ['3x gtceu:copper_dust', 'gtceu:zinc_ingot']).heatRequirement('lowheated')
    event.recipes.create.mixing('4x gtceu:brass_ingot', ['3x minecraft:copper_ingot', 'gtceu:zinc_dust']).heatRequirement('lowheated')
    event.recipes.create.mixing('4x gtceu:brass_ingot', ['3x gtceu:copper_dust', 'gtceu:zinc_dust']).heatRequirement('lowheated')

    event.recipes.create.mixing('1x gtceu:red_alloy_ingot', ['4x minecraft:redstone', 'minecraft:copper_ingot']).heatRequirement('lowheated')
    event.recipes.create.mixing('1x gtceu:red_alloy_ingot', ['4x minecraft:redstone', 'gtceu:copper_dust']).heatRequirement('lowheated')

    event.recipes.create.mixing('3x powah:steel_energized', ['gtceu:red_alloy_dust', 'ad_astra:desh_ingot', 'minecraft:iron_ingot']).heatRequirement('lowheated')
    event.recipes.create.mixing('3x powah:steel_energized', ['gtceu:red_alloy_dust', 'gtceu:desh_dust', 'minecraft:iron_ingot']).heatRequirement('lowheated')
    event.recipes.create.mixing('3x powah:steel_energized', ['gtceu:red_alloy_dust', 'gtceu:desh_dust', 'gtceu:iron_dust']).heatRequirement('lowheated')
    event.recipes.create.mixing('3x powah:steel_energized', ['gtceu:red_alloy_dust', 'ad_astra:desh_ingot', 'gtceu:iron_dust']).heatRequirement('lowheated')
    event.recipes.create.mixing('3x powah:steel_energized', ['gtceu:red_alloy_ingot', 'ad_astra:desh_ingot', 'minecraft:iron_ingot']).heatRequirement('lowheated')                  
    event.recipes.create.mixing('3x powah:steel_energized', ['gtceu:red_alloy_ingot', 'gtceu:desh_dust', 'minecraft:iron_ingot']).heatRequirement('lowheated')
    event.recipes.create.mixing('3x powah:steel_energized', ['gtceu:red_alloy_ingot', 'gtceu:desh_dust', 'gtceu:iron_dust']).heatRequirement('lowheated')
    event.recipes.create.mixing('3x powah:steel_energized', ['gtceu:red_alloy_ingot', 'ad_astra:desh_ingot', 'gtceu:iron_dust']).heatRequirement('lowheated')

    event.recipes.create.mixing('2x gtceu:cupronickel_ingot', ['minecraft:copper_ingot', 'gtceu:nickel_ingot']).heatRequirement('lowheated')
    event.recipes.create.mixing('2x gtceu:cupronickel_ingot', ['gtceu:copper_dust', 'gtceu:nickel_ingot']).heatRequirement('lowheated')
    event.recipes.create.mixing('2x gtceu:cupronickel_ingot', ['minecraft:copper_ingot', 'gtceu:nickel_dust']).heatRequirement('lowheated')
    event.recipes.create.mixing('2x gtceu:cupronickel_ingot', ['gtceu:copper_dust', 'gtceu:nickel_dust']).heatRequirement('lowheated')

    event.recipes.create.mixing('2x gtceu:electrum_ingot', ['minecraft:gold_ingot', 'gtceu:silver_ingot']).heatRequirement('lowheated')
    event.recipes.create.mixing('2x gtceu:electrum_ingot', ['gtceu:gold_dust', 'gtceu:silver_ingot']).heatRequirement('lowheated')
    event.recipes.create.mixing('2x gtceu:electrum_ingot', ['minecraft:gold_ingot', 'gtceu:silver_dust']).heatRequirement('lowheated')
    event.recipes.create.mixing('2x gtceu:electrum_ingot', ['gtceu:gold_dust', 'gtceu:silver_dust']).heatRequirement('lowheated')

    event.recipes.create.mixing('1x gtceu:rubber_ingot', ['3x gtceu:raw_rubber_dust', 'gtceu:sulfur_dust']).heatRequirement('lowheated')
    event.recipes.create.mixing('16x minecraft:glass', ['16x gtceu:quartz_sand_dust', 'gtceu:flint_dust']).heatRequirement('lowheated')
    
    event.recipes.create.mixing('2x gtceu:coke_oven_brick', ['#forge:sand', 'minecraft:clay_ball']).heatRequirement('lowheated')

    event.recipes.create.mixing('minecraft:clay', ['#forge:sand', Fluid.of('minecraft:water', 125)])


    //create filling
    event.recipes.create.filling('minecraft:clay', [Fluid.of('minecraft:water', 125), '#forge:sand'])
    event.recipes.create.filling('gtceu:treated_wood_planks', [Fluid.of('gtceu:creosote', 125), '#minecraft:planks'])


    //create press
    event.recipes.create.pressing(
        [`gtceu:iron_plate`],
        [`minecraft:iron_ingot`])

    event.recipes.create.pressing(
        [`gtceu:gold_plate`],
        [`minecraft:gold_ingot`])
    
    event.recipes.create.pressing(
        [`gtceu:copper_plate`],
        [`minecraft:copper_ingot`])

    event.recipes.create.pressing(
        [`gtceu:energized_steel_plate`],
        [`powah:steel_energized`])

    const platemetals = ['wrought_iron', 'tin', 'bronze', 'potin', 'lead', 'cupronickel', 'silver', 'zinc',
                        'brass', 'invar', 'red_alloy', 'electrum', 'rubber']

    function pressingplates(metalinput) {

        event.recipes.create.pressing(
            [`gtceu:${metalinput}_plate`],
            [`gtceu:${metalinput}_ingot`])

    }
    
    platemetals.forEach(pressingplates)

    //create crafts & additions
    //polarizer
    event.custom({
        type: "createaddition:charging",
        input: {
            item: "gtceu:iron_rod",
            count: 1
        },
        result: {
            item: "gtceu:magnetic_iron_rod",
            count: 1
        },
        energy: 1792
    })

    event.custom({
        type: "createaddition:charging",
        input: {
            item: "gtceu:iron_screw",
            count: 1
        },
        result: {
            item: "gtceu:magnetic_iron_screw",
            count: 1
        },
        energy: 448
    })

    //rolling (primitive lathe)
    event.custom({type: "createaddition:rolling",
        input: {item: "create:andesite_alloy"},
        result: {item: "create:shaft", count: 4}})
    
    event.custom({type:"createaddition:rolling",
        input: {item : `minecraft:iron_ingot`},
        result: {item: `gtceu:iron_rod`, count: 2}})

    event.custom({type:"createaddition:rolling",
        input: {item : `minecraft:gold_ingot`},
        result: {item: `gtceu:gold_rod`, count: 2}})

    event.custom({type:"createaddition:rolling",
        input: {item : `minecraft:copper_ingot`},
        result: {item: `gtceu:copper_rod`, count: 2}})

    event.custom({type:"createaddition:rolling",
        input: {item : `powah:steel_energized`},
        result: {item: `gtceu:energized_steel_rod`, count: 2}})


    const rollermetals = ['wrought_iron', 'tin', 'bronze', 'potin', 'lead', 'cupronickel', 'brass', 'invar', 'red_alloy', 'electrum']

    function rollerrods(metalinput) {

    event.custom({type:"createaddition:rolling",
        input: {item : `gtceu:${metalinput}_ingot`},
        result: {item: `gtceu:${metalinput}_rod`, count: 2}})

    }       
    rollermetals.forEach(rollerrods)

    const earlymetals = ['wrought_iron', 'tin', 'bronze', 'potin', 'lead', 'cupronickel', 'brass', 'invar', 'red_alloy', 'electrum', 'iron', 'gold', 'copper', 'energized_steel']

    function earlymetalwork(metalinput) {

    event.recipes.create.pressing(`2x gtceu:${metalinput}_foil`, `gtceu:${metalinput}_plate`)
	event.recipes.create.pressing(`gtceu:${metalinput}_ring`, `gtceu:${metalinput}_rod`)
	event.recipes.create.cutting(`gtceu:${metalinput}_screw`, `gtceu:${metalinput}_bolt`)

	event.custom({type: "createaddition:rolling",
        input: {item: `gtceu:${metalinput}_bolt`},
        result: {item: `gtceu:${metalinput}_screw`}})
    };
    earlymetals.forEach(earlymetalwork)


    //shaped power recipes
    event.shapeless('createaddition:small_light_connector', 
            ['create:electron_tube', 
            'createaddition:connector'])

    event.shapeless('createaddition:portable_energy_interface', 
            ['create:portable_storage_interface', 
            'createaddition:modular_accumulator'])

    event.shapeless('createaddition:electrum_spool', 
            ['gtceu:fine_electrum_wire', 
            'createaddition:spool'])

    event.shapeless('createaddition:copper_spool', 
            ['gtceu:fine_copper_wire', 
            'createaddition:spool'])

    event.shapeless('createaddition:gold_spool', 
            ['gtceu:fine_gold_wire', 
            'createaddition:spool'])
    
    event.shapeless('createaddition:tesla_coil',
            ['createaddition:alternator',
            'createaddition:modular_accumulator'])

    event.shapeless('createaddition:large_connector',
            ['gtceu:copper_rod',
            'create:andesite_alloy',
            'create:andesite_alloy'])

    event.shapeless('createaddition:connector',
            ['gtceu:copper_rod',
            'create:andesite_alloy',])

    event.shaped('createaddition:alternator', [
        'ACA',
        'BDB',
        'ACA'
    ], {
        A: 'gtceu:steel_plate',
        B: 'gtceu:lv_electric_motor',
        C: 'create:shaft',
        D: 'gtceu:magnetic_steel_rod'
    })

    event.shaped('createaddition:modular_accumulator', [
        'ABA',
        'DCD',
        'ABA'
    ], {
        A: 'gtceu:brass_plate',
        B: 'powah:battery_starter',
        C: 'create:brass_casing',
        D: 'gtceu:red_alloy_plate'
    })

    event.shaped('createaddition:electric_motor', [
        'ACA',
        'BDB',
        'ACA'
    ], {
        A: 'gtceu:brass_plate',
        B: 'gtceu:lv_electric_motor',
        C: 'create:shaft',
        D: 'gtceu:magnetic_steel_rod'
    })

    //create ore excavation
    event.shaped('createoreexcavation:drill', [
        'A  ',
        ' B '
    ], {
        A: 'gtceu:iron_drill_head',
        B: 'create:shaft'
    })

    event.shaped('createoreexcavation:diamond_drill', [
        'A  ',
        ' B '
    ], {
        A: 'gtceu:diamond_drill_head',
        B: 'create:shaft'
    })

    event.recipes.create.mechanical_crafting('createoreexcavation:drilling_machine', [
        ' AAA ',
        'ABCBA',
        'ADEFA',
        'ABCBA',
        ' AAA '
    ], {
        A: 'gtceu:brass_plate',
        B: 'gtceu:wrought_iron_drill_head',
        C: 'create:electron_tube',
        D: 'create:deployer',
        E: 'create:brass_casing',
        F: 'create:brass_funnel'
    })

    event.recipes.create.mechanical_crafting('createoreexcavation:extractor', [
        ' AAA ',
        'ABCBA',
        'ADEFA',
        'ABCBA',
        ' AAA '
    ], {
        A: 'gtceu:brass_plate',
        B: 'gtceu:wrought_iron_drill_head',
        C: 'create:electron_tube',
        D: 'create:deployer',
        E: 'create:fluid_tank',
        F: 'create:fluid_valve'
    })

    event.shaped('createoreexcavation:vein_finder', [
        ' CA',
        ' BC',
        'B  '
    ], {
        A: 'minecraft:ender_pearl',
        B: 'gtceu:long_wood_rod',
        C: 'gtceu:magnetic_iron_rod'
    })

    event.shaped('createoreexcavation:vein_atlas', [
        'AB'
    ], {
        A: 'minecraft:book',
        B: 'minecraft:ender_pearl'
    })
});