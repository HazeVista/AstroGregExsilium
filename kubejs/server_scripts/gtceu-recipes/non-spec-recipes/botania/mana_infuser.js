ServerEvents.recipes(event => {

const infuser = event.recipes.gtceu.mana_infusion
const purify = event.recipes.gtceu.mana_infusion

//#region no catalyst
    //output, input, mana consumed in mb, duration in ticks, EUt
    const basic_infusions = [
        ['botania:mana_powder', '#forge:stone_dust', 1, 100, 7],
        ['botania:mana_diamond', 'minecraft:diamond', 100, 160, 28],
        ['botania:mana_diamond_block', '#forge:storage_blocks/diamond', 900, 1440, 28],
        ['astrogreg:exquisite_mana_diamond_gem', 'gtceu:exquisite_diamond_gem', 400, 640, 28],
        ['astrogreg:flawless_mana_diamond_gem', 'gtceu:flawless_diamond_gem', 200, 320, 28],
        ['botania:mana_pearl', 'minecraft:ender_pearl', 60, 100, 14],
        ['botania:manaweave_cloth', 'farmersdelight:canvas', 40, 160, 7],
        ['botania:mana_string', 'minecraft:string', 10, 40, 7],
        ['botania:managlass', 'gtceu:tempered_glass', 1, 200, 7],
        ['botania:mana_cookie', '#forge:cookies', 200, 300, 28],
        ['botania:piston_relay', 'minecraft:piston', 150, 300, 28],
        ['botania:grass_seeds', '#forge:grass', 25, 80, 7],
        ['botania:mycelium_seeds', '#forge:mushrooms', 25, 80, 7],
        ['botania:podzol_seeds', 'minecraft:dead_bush', 25, 80, 7]
    ];

    basic_infusions.forEach(([output, input, mana, duration, eu]) => {
        infuser(`infuse_${output.replace(':', '_')}`)
            .itemInputs(input)
            .inputFluids(`manafluid:mana ${mana}`)
            .itemOutputs(output)
            .duration(duration)
            .EUt(eu);
    })

//#endregion



//#region alchemy
    //output, input, mana consumed in mb, duration in ticks
    const alchemy_recipes = [
        ['astrogreg:terrasteel_dust', 'astrogreg:dormant_terrasteel_dust', 10, 150],
        ['minecraft:nether_wart', 'minecraft:blaze_rod', 40, 300],
        ['minecraft:ice', 'minecraft:snow_block', 10, 300],
        ['minecraft:red_sand', 'minecraft:sand', 10, 300],
        ['minecraft:sweet_berries', 'minecraft:apple', 2, 300],
        ['minecraft:glow_berries', 'minecraft:sweet_berries', 2, 300],
        ['minecraft:apple', 'minecraft:glow_berries', 2, 300],
        ['minecraft:cactus', 'minecraft:slime_ball', 12, 300],
        ['minecraft:slime_ball', 'minecraft:cactus', 12, 300]
    ];

    alchemy_recipes.forEach(([output, input, mana, duration, eu]) => {
        infuser(`infused_${output.replace(':', '_')}`)
            .itemInputs(input)
            .notConsumable('botania:alchemy_catalyst')
            .inputFluids(`manafluid:mana ${mana}`)
            .itemOutputs(output)
            .duration(duration)
            .EUt(120);
    })

    //output seed, input seed
    //if you mess with this you have to make sure they cycle properly
    //talk to me (Haze) if you're confused
    const seed_cycle = [
        ['minecraft:melon_seeds', 'minecraft:beetroot_seeds'],
        ['minecraft:pumpkin_seeds', 'minecraft:melon_seeds'],
        ['minecraft:cocoa_beans', 'minecraft:pumpkin_seeds'],
        ['minecraft:wheat_seeds', 'minecraft:cocoa_beans'],
        ['farmersdelight:rice', 'minecraft:wheat_seeds'],
        ['farmersdelight:cabbage_seeds', 'farmersdelight:rice'],
        ['farmersdelight:tomato_seeds', 'farmersdelight:cabbage_seeds'],
        ['farmersdelight:onion', 'farmersdelight:tomato_seeds'],
        ['minecraft:carrot', 'farmersdelight:onion'],
        ['minecraft:potato', 'minecraft:carrot'],
        ['delightful:cantaloupe_seeds', 'minecraft:potato'],
        ['delightful:salmonberry_pips', 'delightful:cantaloupe_seeds'],
        ['minecraft:beetroot_seeds', 'delightful:salmonberry_pips']
    ]

    seed_cycle.forEach(([output, input]) => {
        infuser(`infused_${output.replace(':', '_')}`)
            .itemInputs(input)
            .notConsumable('botania:alchemy_catalyst')
            .inputFluids('manafluid:mana 60')
            .itemOutputs(output)
            .duration(300)
            .EUt(120);
    })
        
    //probably don't mess with this cycle
    const dust_cycle = [
        ['minecraft:redstone', 'minecraft:glowstone_dust'],
        ['minecraft:glowstone_dust', 'minecraft:redstone']
    ]

    dust_cycle.forEach(([output, input]) => {
        infuser(`infused_${output.replace(':', '_')}`)
            .itemInputs(input)
            .notConsumable('botania:alchemy_catalyst')
            .inputFluids('manafluid:mana 2')
            .itemOutputs(output)
            .duration(300)
            .EUt(120);
    })
        
    //output sapling, input sapling
    //if you mess with this you have to make sure they cycle properly
    //talk to me (Haze) if you're confused
    const sapling_cycle = [
        ['minecraft:dark_oak_sapling', 'gtceu:rubber_sapling'],
        ['minecraft:mangrove_propagule', 'minecraft:dark_oak_sapling'],
        ['minecraft:cherry_sapling', 'minecraft:mangrove_propagule'],
        ['minecraft:oak_sapling', 'minecraft:cherry_sapling'],
        ['minecraft:spruce_sapling', 'minecraft:oak_sapling'],
        ['minecraft:birch_sapling', 'minecraft:spruce_sapling'],
        ['minecraft:jungle_sapling', 'minecraft:birch_sapling'],
        ['minecraft:acacia_sapling', 'minecraft:jungle_sapling'],
        ['gtceu:rubber_sapling', 'minecraft:acacia_sapling']
    ];

    sapling_cycle.forEach(([output, input]) => {
        infuser(`infused_${output.replace(':', '_')}`)
            .itemInputs(input)
            .notConsumable('botania:alchemy_catalyst')
            .inputFluids('manafluid:mana 1')
            .itemOutputs(output)
            .duration(300)
            .EUt(120);
    });       

//#endregion



//#region purification
    //output, input (both 8x), duration in ticks, EUt
    const purification = [
        ['8x minecraft:snow_block', 'minecraft:water 8000', [], 1200, 2],
        ['8x minecraft:packed_ice', '8x minecraft:ice', [], 1200, 2],
        ['8x minecraft:blue_ice', '8x minecraft:packed_ice', [], 1200, 2],
        ['8x minecraft:sand', '8x minecraft:soul_sand', [], 1200, 2],
        ['8x minecraft:clay', '8x #minecraft:smelts_to_glass', [], 600, 2],
        ['8x botania:livingwood_log', '8x #minecraft:logs', [], 1200, 2],
        ['8x botania:livingrock', '8x #forge:stone', [], 1200, 2],
        ['8x minecraft:end_stone', '8x minecraft:blackstone', [], 1200, 2],
        ['8x minecraft:obsidian', '8x botania:blaze_block', [], 1200, 2],
        ['8x minecraft:cobblestone', '8x minecraft:netherrack', [], 1200, 2]
    ];

    purification.forEach(([output, input, items, duration, eu]) => {
        const recipe = purify(`pure_${output.replace(/\d+x\s*/, '').replace(':', '_')}`)
            .notConsumable('botania:pure_daisy')
            .itemOutputs(output)
            .duration(duration)
            .EUt(eu);
        
        if (input.includes('minecraft:water')) {
            recipe.inputFluids(input);
        } else {
            recipe.itemInputs(input);
        }
    })
//#endregion



//#region machine recipes


    const tiered_machines = [
        ['lv', 'tin', 'gtceu:tempered_glass'],
        ['mv', 'copper', 'botania:managlass'],
        ['hv', 'gold', 'botania:managlass'],
        ['ev', 'aluminium', 'botania:managlass'],
        ['iv', 'platinum', 'botania:alfglass'],
        ['luv', 'niobium_titanium', 'botania:alfglass'],
        ['zpm', 'vanadium_gallium', 'botania:bifrost_perm'],
        ['uv', 'yttrium_barium_cuprate', 'botania:bifrost_perm']
    ]

    tiered_machines.forEach(([tier, cable, glass]) => {
        event.shaped(`gtceu:${tier}_mana_infuser`, [
            'CAC',
            'BDB',
            'EBF'
        ], {
            A: glass,
            B: `gtceu:${cable}_single_cable`,
            C: `#gtceu:circuits/${tier}`,
            D: `gtceu:${tier}_machine_hull`,
            E: `gtceu:${tier}_electric_pump`,
            F: `gtceu:${tier}_conveyor_module`
        })
    })
//#endregion
})