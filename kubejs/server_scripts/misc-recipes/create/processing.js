ServerEvents.recipes(event => {

    //#region crushing
    event.recipes.create.crushing('farmersdelight:straw', 'farmersdelight:sandy_shrub')
    event.recipes.create.crushing('2x farmersdelight:straw', 'minecraft:tall_grass')
    event.recipes.create.crushing('farmersdelight:straw', 'minecraft:grass')
    event.recipes.create.crushing('gtceu:cobbled_asteroid_stone', 'gtceu:asteroid_stone')
    event.recipes.create.crushing('gtceu:asteroid_stone', 'gtceu:hard_asteroid_stone')
    event.recipes.create.crushing('gtceu:asteroid_gravel', 'gtceu:cobbled_asteroid_stone')
    //#endregion

    //#region milling
    event.recipes.create.milling('farmersdelight:straw', 'farmersdelight:sandy_shrub')
    event.recipes.create.milling('2x farmersdelight:straw', 'minecraft:tall_grass')
    event.recipes.create.milling('farmersdelight:straw', 'minecraft:grass')
    event.recipes.create.milling('gtceu:cobbled_asteroid_stone', 'gtceu:asteroid_stone')
    event.recipes.create.milling('gtceu:asteroid_stone', 'gtceu:hard_asteroid_stone')
    event.recipes.create.milling('gtceu:asteroid_gravel', 'gtceu:cobbled_asteroid_stone')
    event.recipes.create.milling(['gtceu:wheat_dust', Item.of('farmersdelight:straw').withChance(0.5)], 'minecraft:wheat')
    event.recipes.create.milling(['minecraft:sand', Item.of('minecraft:flint').withChance(0.2), Item.of('minecraft:clay_ball').withChance(0.1)], 'minecraft:gravel')
    event.recipes.create.milling(['gtceu:asteroid_sand', Item.of('minecraft:flint').withChance(0.2), Item.of('minecraft:clay_ball').withChance(0.1)], 'gtceu:asteroid_gravel')
    //#endregion

    //#region mixing
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
    event.recipes.create.mixing('3x powah:steel_energized', ['gtceu:red_alloy_dust', 'astrogreg:desh_dust', 'minecraft:iron_ingot']).heatRequirement('lowheated')
    event.recipes.create.mixing('3x powah:steel_energized', ['gtceu:red_alloy_dust', 'astrogreg:desh_dust', 'gtceu:iron_dust']).heatRequirement('lowheated')
    event.recipes.create.mixing('3x powah:steel_energized', ['gtceu:red_alloy_dust', 'ad_astra:desh_ingot', 'gtceu:iron_dust']).heatRequirement('lowheated')
    event.recipes.create.mixing('3x powah:steel_energized', ['gtceu:red_alloy_ingot', 'ad_astra:desh_ingot', 'minecraft:iron_ingot']).heatRequirement('lowheated')
    event.recipes.create.mixing('3x powah:steel_energized', ['gtceu:red_alloy_ingot', 'astrogreg:desh_dust', 'minecraft:iron_ingot']).heatRequirement('lowheated')
    event.recipes.create.mixing('3x powah:steel_energized', ['gtceu:red_alloy_ingot', 'astrogreg:desh_dust', 'gtceu:iron_dust']).heatRequirement('lowheated')
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
    event.recipes.create.mixing('create:pulp', ['gtceu:paper_dust', Fluid.of('minecraft:water', 125)])
    //#endregion

    //#region create filling
    event.recipes.create.filling('minecraft:clay', [Fluid.of('minecraft:water', 250), '#forge:sand'])
    event.recipes.create.filling('gtceu:treated_wood_planks', [Fluid.of('gtceu:creosote', 125), '#minecraft:planks'])
    event.recipes.create.filling('gtceu:dough', [Fluid.of('minecraft:water', 125), 'gtceu:wheat_dust'])
    //#endregion

    //#region other metal work
    event.recipes.create.pressing('gtceu:iron_ring', 'gtceu:iron_rod')
    event.recipes.create.pressing('2x gtceu:electrum_foil', 'gtceu:electrum_plate')
    event.recipes.create.pressing('2x gtceu:red_alloy_foil', 'gtceu:red_alloy_plate')

    event.recipes.create.pressing(
        ['gtceu:obsidian_plate'],
        ['gtceu:obsidian_dust'])

    event.recipes.create.pressing(
        ['gtceu:wood_plate'],
        ['gtceu:wood_dust'])
        
    event.recipes.create.pressing(
        ['gtceu:treated_wood_plate'],
        ['gtceu:treated_wood_dust'])
    
    event.recipes.create.pressing(
        ['minecraft:paper'],
        ['create:pulp'])

    event.recipes.create.pressing(
        ['gtceu:iron_plate'],
        ['minecraft:iron_ingot'])

    event.recipes.create.pressing(
        ['gtceu:gold_plate'],
        ['minecraft:gold_ingot'])

    event.recipes.create.pressing(
        ['gtceu:copper_plate'],
        ['minecraft:copper_ingot'])

    event.recipes.create.pressing(
        ['gtceu:energized_steel_plate'],
        ['powah:steel_energized'])

    event.recipes.create.pressing(
        ['gtceu:rubber_plate'],
        ['gtceu:rubber_ingot'])

    // Special rolling recipes
    event.custom({
        type: "createaddition:rolling",
        input: { item: "create:andesite_alloy" },
        result: { item: "create:shaft", count: 4 }
    })

    event.custom({
        type: "createaddition:rolling",
        input: { item: "powah:steel_energized" },
        result: { item: "gtceu:energized_steel_rod", count: 2 }
    })
    //#endregion

    //#region metal processing
    const vanillaMetals = [
        { metal: 'iron', ingot: 'minecraft:iron_ingot'},
        { metal: 'gold', ingot: 'minecraft:gold_ingot'},
        { metal: 'copper', ingot: 'minecraft:copper_ingot'},
        { metal: 'energized_steel', ingot: 'powah:steel_energized'}
    ]

    const gtceuMetals = ['steel', 'wrought_iron', 'tin', 'bronze', 'potin', 'lead', 
        'nickel', 'silver', 'zinc', 'brass', 'invar', 'red_alloy', 'electrum']

    function processmetals(config) {
        const metal = config.metal
        const ingot = config.ingot || `gtceu:${metal}_ingot`
        const rod = config.rod || `gtceu:${metal}_rod`
        const plate = config.plate || `gtceu:${metal}_plate`
        const foil = config.foil || `gtceu:${metal}_foil`
        const ring = config.ring || `gtceu:${metal}_ring`
        const screw = config.screw || `gtceu:${metal}_screw`
        const bolt = config.bolt || `gtceu:${metal}_bolt`

        // INGOT to ROD
        event.custom({
            type: "createaddition:rolling",
            input: { item: ingot },
            result: { item: rod, count: 2 }
        })
        // INGOT to PLATE
        event.recipes.create.pressing(plate, ingot)

        // PLATE to FOIL
        event.custom({
            type: "create:pressing",
            ingredients: [{ item: plate }],
            results: [{ item: foil, count: 2 }]
        })

        // ROD to RING
        event.custom({
            type: "create:pressing",
            ingredients: [{ item: rod }],
            results: [{ item: ring }]
        })

        // BOLT to SCREW
        event.custom({
            type: "createaddition:rolling",
            input: { item: bolt },
            result: { item: screw }
        })
    }

    vanillaMetals.forEach(processmetals)
    gtceuMetals.forEach(metal => processmetals({ metal: metal}))
    //#endregion

    //#region create washing
    event.recipes.create.splashing(['minecraft:clay_ball', Item.of('minecraft:iron_nugget').withChance(0.5)], 'gtceu:asteroid_sand')
    event.recipes.create.splashing(['minecraft:clay_ball', Item.of('minecraft:gold_nugget').withChance(0.2)], 'minecraft:red_sand')
    event.recipes.create.splashing(['minecraft:clay_ball', Item.of('minecraft:clay_ball').withChance(0.5)], 'minecraft:sand')
    //#endregion

    //#region polarizer
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
    //#endregion
    
    //#region power
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
            'create:andesite_alloy'])

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
    //#endregion

    //#region create ore excavation
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
    //#endregion
})
