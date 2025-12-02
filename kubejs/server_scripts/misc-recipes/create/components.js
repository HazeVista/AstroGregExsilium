ServerEvents.recipes(event => {

    //#region shaped recipes
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
    ], {
        A: 'gtceu:treated_wood_planks',
        B: 'create:cogwheel'
    })

    event.shaped('create:large_water_wheel', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'gtceu:treated_wood_planks',
        B: 'create:water_wheel'
    })

    event.shaped('create:fluid_tank', [
        'AAA',
        'B B',
        'AAA'
    ], {
        A: 'gtceu:copper_plate',
        B: '#forge:glass/silica'
    })

    event.shaped('2x create:white_sail', [
        'CAC',
        'BAB',
        'CAC'
    ], {
        A: '#minecraft:wool',
        B: '#forge:rods/wooden',
        C: 'farmersdelight:rope'
    })

    event.shaped('create:andesite_funnel', [
        'ABA',
        'ACA'
    ], {
        A: 'create:andesite_alloy',
        B: 'gtceu:iron_plate',
        C: 'farmersdelight:canvas'
    })

    event.shaped('create:brass_funnel', [
        'ABA',
        'ACA'
    ], {
        A: 'gtceu:brass_plate',
        B: 'create:electron_tube',
        C: 'farmersdelight:canvas'
    })

    event.shaped('create:andesite_tunnel', [
        'ABA',
        'ACA',
        'ACA'
    ], {
        A: 'create:andesite_alloy',
        B: 'gtceu:iron_plate',
        C: 'farmersdelight:canvas'
    })

    event.shaped('create:brass_tunnel', [
        'ABA',
        'ACA',
        'ACA'
    ], {
        A: 'gtceu:brass_plate',
        B: 'create:electron_tube',
        C: 'farmersdelight:canvas'
    })

    event.shaped('create:belt_connector', [
        'AAA',
        'AAA'
    ], {
        A: 'farmersdelight:canvas'
    })

    event.shaped('create:cardboard', [
        'AAA',
        'AAA'
    ], {
        A: 'farmersdelight:tree_bark'
    })

    event.shaped('farmersdelight:rope', [
        'A',
        'A',
        'A'
    ], {
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

    event.shaped('create:wrench', [
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

    event.shapeless('create:speedometer', ['create:gearbox', 'minecraft:compass'])

    //#region Andesite Alloy
    //mostly by @digestlotion
    event.shapeless('2x gtceu:andesite_dust', ['gtceu:stone_dust', 'gtceu:nether_quartz_dust'])
    event.shapeless('2x gtceu:andesite_dust', ['gtceu:stone_dust', 'gtceu:quartz_sand_dust'])
    event.shapeless('2x gtceu:andesite_dust', ['gtceu:asteroid_stone_dust', 'gtceu:nether_quartz_dust'])
    event.shapeless('2x gtceu:andesite_dust', ['gtceu:asteroid_stone_dust', 'gtceu:quartz_sand_dust'])
    event.shapeless('1x gtceu:andesite_alloy_dust', ['gtceu:andesite_dust', 'gtceu:iron_dust'])
    event.shapeless('2x create:shaft', ['create:andesite_alloy', '#forge:tools/files'])
    event.smelting('1x create:andesite_alloy', 'gtceu:andesite_alloy_dust')

    event.shaped('gtceu:andesite_dust', [
        'A',
        'B'
    ], {
        A: 'minecraft:andesite',
        B: '#forge:tools/files'
    })

    event.recipes.gtceu.mixer('mixing_andesite_alloy_dust')
        .itemInputs('gtceu:iron_dust', 'gtceu:andesite_dust')
        .itemOutputs('2x gtceu:andesite_alloy_dust')
        .duration(80)
        .EUt(7)

    event.recipes.gtceu.mixer('mixing_andesite_dust')
        .itemInputs('gtceu:quartz_sand_dust', 'gtceu:asteroid_stone_dust')
        .itemOutputs('2x gtceu:andesite_dust')
        .duration(80)
        .EUt(7)

    event.recipes.gtceu.mixer('mixing_andesite_dust_alt')
        .itemInputs('gtceu:nether_quartz_dust', 'gtceu:asteroid_stone_dust')
        .itemOutputs('2x gtceu:andesite_dust')
        .duration(80)
        .EUt(7)

    event.recipes.gtceu.alloy_smelter('alloying_andesite_alloy')
        .itemInputs('gtceu:iron_dust', 'gtceu:andesite_dust')
        .itemOutputs('2x create:andesite_alloy')
        .duration(120)
        .EUt(15)

    event.recipes.gtceu.alloy_smelter('alloying_andesite_alloy_alt')
        .itemInputs('minecraft:iron_ingot', 'gtceu:andesite_dust')
        .itemOutputs('2x create:andesite_alloy')
        .duration(120)
        .EUt(15)

    event.recipes.gtceu.alloy_smelter('alloying_andesite_alloy_alt1')
        .itemInputs('gtceu:iron_dust', 'minecraft:andesite')
        .itemOutputs('2x create:andesite_alloy')
        .duration(120)
        .EUt(15)

    event.recipes.gtceu.alloy_smelter('alloying_andesite_alloy_alt2')
        .itemInputs('minecraft:iron_ingot', 'minecraft:andesite')
        .itemOutputs('2x create:andesite_alloy')
        .duration(120)
        .EUt(15)

    event.recipes.gtceu.lathe('lathing_shaft')
        .itemInputs('1x create:andesite_alloy')
        .itemOutputs('8x create:shaft')
        .duration(80)
        .EUt(15)

    event.recipes.gtceu.cutter('cutting_shaft')
        .itemInputs('1x create:andesite_alloy')
        .itemOutputs('8x create:shaft')
        .duration(60)
        .EUt(15)

    event.recipes.gtceu.lathe('lathe_polished_rose_quartz')
        .itemInputs('create:rose_quartz')
        .itemOutputs('create:polished_rose_quartz')
        .duration(120)
        .EUt(7)
})