ServerEvents.recipes(event => {

    //#region crushing
    //output first, input
    const crushingRecipes = [
        ['farmersdelight:straw', 'farmersdelight:sandy_shrub'],
        ['2x farmersdelight:straw', 'minecraft:tall_grass'],
        ['farmersdelight:straw', 'minecraft:grass'],
        ['astrogreg:cobbled_asteroid_stone', 'astrogreg:asteroid_stone'],
        ['astrogreg:asteroid_stone', 'astrogreg:hard_asteroid_stone'],
        ['astrogreg:asteroid_gravel', 'astrogreg:cobbled_asteroid_stone']
    ]
    
    crushingRecipes.forEach(([output, input]) => {
        event.recipes.create.crushing(output, input)
    })

    //#endregion



    //#region milling
    //output, input
    const millingRecipes = [
        ['gtceu:cocoa_dust', 'minecraft:cocoa_beans', null],
        ['farmersdelight:straw', 'farmersdelight:sandy_shrub', null],
        ['2x farmersdelight:straw', 'minecraft:tall_grass', null],
        ['farmersdelight:straw', 'minecraft:grass', null],
        ['astrogreg:cobbled_asteroid_stone', 'astrogreg:asteroid_stone', null],
        ['astrogreg:asteroid_stone', 'astrogreg:hard_asteroid_stone', null],
        ['astrogreg:asteroid_gravel', 'astrogreg:cobbled_asteroid_stone', null],
        [['gtceu:wheat_dust', Item.of('farmersdelight:straw').withChance(0.5)], 'minecraft:wheat', null],
        [['minecraft:sand', Item.of('minecraft:flint').withChance(0.2), Item.of('minecraft:clay_ball').withChance(0.1)], 'minecraft:gravel', null],
        [['astrogreg:asteroid_sand', Item.of('minecraft:flint').withChance(0.2), Item.of('minecraft:clay_ball').withChance(0.1)], 'astrogreg:asteroid_gravel', null]
    ]
    
    millingRecipes.forEach(([output, input]) => {
        event.recipes.create.milling(output, input)
    })
    //#endregion



    //#region mixing
    //output, [input array], optional 'lowheated' (for heated recipes)
    const mixingRecipes = [
        ['2x create:andesite_alloy', ['gtceu:iron_dust', 'gtceu:andesite_dust'], 'lowheated'],
        ['2x create:andesite_alloy', ['minecraft:iron_ingot', 'gtceu:andesite_dust'], 'lowheated'],
        ['2x create:andesite_alloy', ['gtceu:iron_dust', 'minecraft:andesite'], 'lowheated'],
        ['2x create:andesite_alloy', ['minecraft:iron_ingot', 'minecraft:andesite'], 'lowheated'],

        ['4x gtceu:bronze_ingot', ['3x minecraft:copper_ingot', 'gtceu:tin_ingot'], 'lowheated'],
        ['4x gtceu:bronze_ingot', ['3x gtceu:copper_dust', 'gtceu:tin_ingot'], 'lowheated'],
        ['4x gtceu:bronze_ingot', ['3x minecraft:copper_ingot', 'gtceu:tin_dust'], 'lowheated'],
        ['4x gtceu:bronze_ingot', ['3x gtceu:copper_dust', 'gtceu:tin_dust'], 'lowheated'],

        ['4x gtceu:brass_ingot', ['3x minecraft:copper_ingot', 'gtceu:zinc_ingot'], 'lowheated'],
        ['4x gtceu:brass_ingot', ['3x gtceu:copper_dust', 'gtceu:zinc_ingot'], 'lowheated'],
        ['4x gtceu:brass_ingot', ['3x minecraft:copper_ingot', 'gtceu:zinc_dust'], 'lowheated'],
        ['4x gtceu:brass_ingot', ['3x gtceu:copper_dust', 'gtceu:zinc_dust'], 'lowheated'],

        ['gtceu:red_alloy_ingot', ['4x minecraft:redstone', 'minecraft:copper_ingot'], 'lowheated'],
        ['gtceu:red_alloy_ingot', ['4x minecraft:redstone', 'gtceu:copper_dust'], 'lowheated'],
        
        ['3x powah:steel_energized', ['gtceu:red_alloy_dust', 'ad_astra:desh_ingot', 'minecraft:iron_ingot'], 'lowheated'],
        ['3x powah:steel_energized', ['gtceu:red_alloy_dust', 'astrogreg:desh_dust', 'minecraft:iron_ingot'], 'lowheated'],
        ['3x powah:steel_energized', ['gtceu:red_alloy_dust', 'astrogreg:desh_dust', 'gtceu:iron_dust'], 'lowheated'],
        ['3x powah:steel_energized', ['gtceu:red_alloy_dust', 'ad_astra:desh_ingot', 'gtceu:iron_dust'], 'lowheated'],
        ['3x powah:steel_energized', ['gtceu:red_alloy_ingot', 'ad_astra:desh_ingot', 'minecraft:iron_ingot'], 'lowheated'],
        ['3x powah:steel_energized', ['gtceu:red_alloy_ingot', 'astrogreg:desh_dust', 'minecraft:iron_ingot'], 'lowheated'],
        ['3x powah:steel_energized', ['gtceu:red_alloy_ingot', 'astrogreg:desh_dust', 'gtceu:iron_dust'], 'lowheated'],
        ['3x powah:steel_energized', ['gtceu:red_alloy_ingot', 'ad_astra:desh_ingot', 'gtceu:iron_dust'], 'lowheated'],
        
        ['2x gtceu:cupronickel_ingot', ['minecraft:copper_ingot', 'gtceu:nickel_ingot'], 'lowheated'],
        ['2x gtceu:cupronickel_ingot', ['gtceu:copper_dust', 'gtceu:nickel_ingot'], 'lowheated'],
        ['2x gtceu:cupronickel_ingot', ['minecraft:copper_ingot', 'gtceu:nickel_dust'], 'lowheated'],
        ['2x gtceu:cupronickel_ingot', ['gtceu:copper_dust', 'gtceu:nickel_dust'], 'lowheated'],
       
        ['2x gtceu:electrum_ingot', ['minecraft:gold_ingot', 'gtceu:silver_ingot'], 'lowheated'],
        ['2x gtceu:electrum_ingot', ['gtceu:gold_dust', 'gtceu:silver_ingot'], 'lowheated'],
        ['2x gtceu:electrum_ingot', ['minecraft:gold_ingot', 'gtceu:silver_dust'], 'lowheated'],
        ['2x gtceu:electrum_ingot', ['gtceu:gold_dust', 'gtceu:silver_dust'], 'lowheated'],
      
        ['gtceu:rubber_ingot', ['3x gtceu:raw_rubber_dust', 'gtceu:sulfur_dust'], 'lowheated'],
       
        ['16x minecraft:glass', ['16x gtceu:quartz_sand_dust', 'gtceu:flint_dust'], 'lowheated'],
       
        ['2x gtceu:coke_oven_brick', ['#minecraft:smelts_to_glass', 'minecraft:clay_ball'], 'lowheated'],
      
        ['minecraft:clay', ['#minecraft:smelts_to_glass', Fluid.of('minecraft:water', 125)], null],
        ['create:pulp', ['gtceu:paper_dust', Fluid.of('minecraft:water', 125)], null]
    ]

        mixingRecipes.forEach(([output, inputs, heat]) => {
        const recipe = event.recipes.create.mixing(output, inputs);
        if (heat) recipe.heatRequirement(heat);
    })
    //#endregion



    //#region create filling
    //output, [Fluid.of(fluid input, amount), input item]
    const fillingRecipes = [
        ['minecraft:clay', [Fluid.of('minecraft:water', 250), '#minecraft:smelts_to_glass']],
        ['gtceu:treated_wood_planks', [Fluid.of('gtceu:creosote', 125), '#minecraft:planks']],
        ['create:chocolate_glazed_berries', [Fluid.of('create:chocolate', 250), 'minecraft:sweet_berries']],
        ['gtceu:dough', [Fluid.of('minecraft:water', 125), 'gtceu:wheat_dust']],
        ['delightful:nut_dough', [Fluid.of('minecraft:water', 125), 'astrogreg:acorn_dust']]
    ]
    
    fillingRecipes.forEach(([output, inputs]) => {
        event.recipes.create.filling(output, inputs)
    })
    //#endregion



    //#region pressing
    //output, input
    const pressingRecipes = [
        ['gtceu:iron_ring', 'gtceu:iron_rod'],
        ['2x gtceu:electrum_foil', 'gtceu:electrum_plate'],
        ['2x gtceu:red_alloy_foil', 'gtceu:red_alloy_plate'],
        ['gtceu:obsidian_plate', 'gtceu:obsidian_dust'],
        ['gtceu:cocoa_dust', 'minecraft:cocoa_beans'],
        ['gtceu:wood_plate', 'gtceu:wood_dust'],
        ['gtceu:treated_wood_plate', 'gtceu:treated_wood_dust'],
        ['minecraft:paper', 'create:pulp'],
        ['gtceu:iron_plate', 'minecraft:iron_ingot'],
        ['gtceu:gold_plate', 'minecraft:gold_ingot'],
        ['gtceu:copper_plate', 'minecraft:copper_ingot'],
        ['gtceu:rubber_plate', 'gtceu:rubber_ingot']
    ]

    pressingRecipes.forEach(([output, input]) => {
        event.recipes.create.pressing(output, input);
    });

    // event.recipes.create.pressing(
    //     ['astrogreg:energized_steel_plate'],
    //     ['powah:steel_energized'])


    // Special rolling recipes
    event.custom({
        type: "createaddition:rolling",
        input: { item: "create:andesite_alloy" },
        result: { item: "create:shaft", count: 4 }
    })

    // event.custom({
    //     type: "createaddition:rolling",
    //     input: { item: "powah:steel_energized" },
    //     result: { item: "astrogreg:energized_steel_rod", count: 2 }
    // })
    //#endregion



    //#region metal processing
    const vanillaMetals = [
        { metal: 'iron', ingot: 'minecraft:iron_ingot'},
        { metal: 'gold', ingot: 'minecraft:gold_ingot'},
        { metal: 'copper', ingot: 'minecraft:copper_ingot'},
        // { metal: 'energized_steel', ingot: 'powah:steel_energized'}
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
    //output (optional array, follow examples below for chanced output), input
    const washingRecipes = [
        [['minecraft:clay_ball', Item.of('minecraft:iron_nugget').withChance(0.5)], 'astrogreg:asteroid_sand'],
        [['minecraft:clay_ball', Item.of('minecraft:gold_nugget').withChance(0.2)], 'minecraft:red_sand'],
        [['minecraft:clay_ball', Item.of('minecraft:clay_ball').withChance(0.5)], 'minecraft:sand']
    ]
    
    washingRecipes.forEach(([output, input]) => {
        event.recipes.create.splashing(output, input)
    })
    //#endregion



    //#region polarizer
    //output, input, power integer in FE
    const polarizerRecipes = [
        ['gtceu:magnetic_iron_rod', 'gtceu:iron_rod', 1792],
        ['gtceu:magnetic_iron_screw', 'gtceu:iron_screw', 448]
    ]
    
    polarizerRecipes.forEach(([output, input, energy]) => {
        event.custom({
            type: "createaddition:charging",
            input: { item: input, count: 1 },
            result: { item: output, count: 1 },
            energy: energy
        })
    })
    //#endregion
    


    //#region power
    event.shapeless('createaddition:small_light_connector', ['create:electron_tube', 'createaddition:connector']);
    event.shapeless('createaddition:portable_energy_interface', ['create:portable_storage_interface', 'createaddition:modular_accumulator']);
    event.shapeless('createaddition:electrum_spool', ['gtceu:fine_electrum_wire', 'createaddition:spool']);
    event.shapeless('createaddition:copper_spool', ['gtceu:fine_copper_wire', 'createaddition:spool']);
    event.shapeless('createaddition:gold_spool', ['gtceu:fine_gold_wire', 'createaddition:spool']);
    event.shapeless('createaddition:tesla_coil', ['createaddition:alternator', 'createaddition:modular_accumulator']);
    event.shapeless('createaddition:large_connector', ['gtceu:copper_rod', 'create:andesite_alloy', 'create:andesite_alloy']);
    event.shapeless('createaddition:connector', ['gtceu:copper_rod', 'create:andesite_alloy']);

    event.shaped('createaddition:alternator', [
        'ACA',
        'BDB',
        'ACA'
    ], {
        A: 'gtceu:steel_plate',
        B: 'gtceu:lv_electric_motor',
        C: 'create:shaft',
        D: 'gtceu:magnetic_steel_rod'
    });

    event.shaped('createaddition:modular_accumulator', [
        'ABA',
        'DCD',
        'ABA'
    ], {
        A: 'gtceu:brass_plate',
        B: 'powah:battery_starter',
        C: 'create:brass_casing',
        D: 'gtceu:red_alloy_plate'
    });

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
    const excavationShapes = {
        'createoreexcavation:drill': [
            'A  ',
            ' B '
        ],
        'createoreexcavation:diamond_drill': [
            'A  ',
            ' B '
        ],
        'createoreexcavation:vein_finder': [
            ' CA',
            ' BC',
            'B  '
        ],
        'createoreexcavation:vein_atlas': [
            'AB'
        ]
    };

    const excavationKeys = {
        'createoreexcavation:drill': {
            A: 'gtceu:iron_drill_head',
            B: 'create:shaft'
        },
        'createoreexcavation:diamond_drill': {
            A: 'gtceu:diamond_drill_head',
            B: 'create:shaft'
        },
        'createoreexcavation:vein_finder': {
            A: 'minecraft:ender_pearl',
            B: 'gtceu:long_wood_rod',
            C: 'gtceu:magnetic_iron_rod'
        },
        'createoreexcavation:vein_atlas': {
            A: 'minecraft:book',
            B: 'minecraft:ender_pearl'
        }
    };

    Object.entries(excavationShapes).forEach(([item, pattern]) => {
        event.shaped(item, pattern, excavationKeys[item]);
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
    //#endregion
})
