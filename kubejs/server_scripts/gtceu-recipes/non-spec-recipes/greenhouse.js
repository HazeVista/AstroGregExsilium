ServerEvents.recipes(event => {
    const greg = event.recipes.gtceu

//#region trees
const trees = [
        ["minecraft:oak_sapling", "minecraft:oak_log", "minecraft:oak_leaves"],
        ["minecraft:dark_oak_sapling", "minecraft:dark_oak_log", "minecraft:dark_oak_leaves"],
        ["minecraft:spruce_sapling", "minecraft:spruce_log", "minecraft:spruce_leaves"],
        ["minecraft:birch_sapling", "minecraft:birch_log", "minecraft:birch_leaves"],
        ["minecraft:acacia_sapling", "minecraft:acacia_log", "minecraft:acacia_leaves"],
        ["minecraft:jungle_sapling", "minecraft:jungle_log", "minecraft:jungle_leaves"],
        ["gtceu:rubber_sapling", "gtceu:rubber_log", "gtceu:rubber_leaves"],
        ["minecraft:cherry_sapling", "minecraft:cherry_log", "minecraft:cherry_leaves"],
        ["minecraft:mangrove_propagule", "minecraft:mangrove_log", "minecraft:mangrove_leaves"]
    ];

trees.forEach((tree) => {
    const sapling = tree[0]
    const log = tree[1]
    const leaf = tree[2]

    //Circuit 1
    if (sapling === "gtceu:rubber_sapling") {
        greg.greenhouse_trees(sapling)
            .notConsumable(sapling)
            .inputFluids("water 1000")
            .itemOutputs(`16x ${log}`, `4x ${leaf}`, `${sapling}`, "gtceu:sticky_resin")
            .duration(320)
            .EUt(30)
            .circuit(1);
    } else {
        greg.greenhouse_trees(sapling)
            .notConsumable(sapling)
            .inputFluids("water 1000")
            .itemOutputs(`16x ${log}`, `4x ${leaf}`, `${sapling}`)
            .duration(320)
            .EUt(30)
            .circuit(1);
    }

    //Circuit 2
    if (sapling === "gtceu:rubber_sapling") {
        greg.greenhouse_trees(`${sapling}_fertilizer`)
            .notConsumable(sapling)
            .itemInputs("4x gtceu:fertilizer")
            .inputFluids("water 1000")
            .itemOutputs(`16x ${log}`, `4x ${leaf}`, `${sapling}`, "gtceu:sticky_resin")
            .duration(240)
            .EUt(30)
            .circuit(2);
    } else {
        greg.greenhouse_trees(`${sapling}_fertilizer`)
            .notConsumable(sapling)
            .itemInputs("4x gtceu:fertilizer")
            .inputFluids("water 1000")
            .itemOutputs(`16x ${log}`, `4x ${leaf}`, `${sapling}`)
            .duration(240)
            .EUt(30)
            .circuit(2);
    }

    //Circuit 3
    if (sapling === "gtceu:rubber_sapling") {
        greg.greenhouse_trees(`${sapling}_overgrowth`)
            .notConsumable(sapling)
            .notConsumable('botania:overgrowth_seed')
            .inputFluids("water 1000")
            .itemOutputs(`16x ${log}`, `4x ${leaf}`, `1x ${sapling}`, "gtceu:sticky_resin")
            .duration(240)
            .EUt(30)
            .circuit(3);
    } else {
        greg.greenhouse_trees(`${sapling}_overgrowth`)
            .notConsumable(sapling)
            .notConsumable('botania:overgrowth_seed')
            .inputFluids("water 1000")
            .itemOutputs(`16x ${log}`, `4x ${leaf}`, `${sapling}`)
            .duration(240)
            .EUt(30)
            .circuit(3);
    }

    //Circuit 4
    if (sapling === "gtceu:rubber_sapling") {
        greg.greenhouse_trees(`${sapling}_carbon_dioxide`)
            .notConsumable(sapling)
            .inputFluids("water 1000", 'gtceu:carbon_dioxide 1000')
            .itemOutputs(`16x ${log}`, `4x ${leaf}`, `${sapling}`, "gtceu:sticky_resin")
            .outputFluids('gtceu:oxygen 2000')
            .duration(240)
            .EUt(30)
            .circuit(4);
    } else {
        greg.greenhouse_trees(`${sapling}_carbon_dioxide`)
            .notConsumable(sapling)
            .inputFluids("water 1000", 'gtceu:carbon_dioxide 1000')
            .itemOutputs(`16x ${log}`, `4x ${leaf}`, `${sapling}`)
            .outputFluids('gtceu:oxygen 2000')
            .duration(240)
            .EUt(30)
            .circuit(4);
    }

    //Circuit 5
    if (sapling === "gtceu:rubber_sapling") {
        greg.greenhouse_trees(`${sapling}_fertilizer_carbon_dioxide`)
            .notConsumable(sapling)
            .inputFluids("water 1000", 'gtceu:carbon_dioxide 1000')
            .itemOutputs(`16x ${log}`, `4x ${leaf}`, `${sapling}`, "gtceu:sticky_resin")
            .outputFluids('gtceu:oxygen 2000')
            .duration(200)
            .EUt(30)
            .circuit(5);
    } else {
        greg.greenhouse_trees(`${sapling}_fertilizer_carbon_dioxide`)
            .notConsumable(sapling)
            .inputFluids("water 1000", 'gtceu:carbon_dioxide 1000')
            .itemOutputs(`16x ${log}`, `4x ${leaf}`, `${sapling}`)
            .outputFluids('gtceu:oxygen 2000')
            .duration(200)
            .EUt(30)
            .circuit(5);
    }

    //Circuit 6
    if (sapling === "gtceu:rubber_sapling") {
        greg.greenhouse_trees(`${sapling}_overgrowth_carbon_dioxide`)
            .notConsumable(sapling)
            .notConsumable('botania:overgrowth_seed')
            .inputFluids("water 1000", 'gtceu:carbon_dioxide 1000')
            .itemOutputs(`16x ${log}`, `4x ${leaf}`, `${sapling}`, "gtceu:sticky_resin")
            .outputFluids('gtceu:oxygen 2000')
            .duration(200)
            .EUt(30)
            .circuit(6);
    } else {
        greg.greenhouse_trees(`${sapling}_overgrowth_carbon_dioxide`)
            .notConsumable(sapling)
            .notConsumable('botania:overgrowth_seed')
            .inputFluids("water 1000", 'gtceu:carbon_dioxide 1000')
            .itemOutputs(`16x ${log}`, `4x ${leaf}`, `${sapling}`)
            .outputFluids('gtceu:oxygen 2000')
            .duration(200)
            .EUt(30)
            .circuit(6);
    }
})
    //#endregion

    //#region flowers
    const flowers = ['minecraft:dandelion', 'minecraft:poppy', 'minecraft:blue_orchid', 'minecraft:allium',
        'minecraft:azure_bluet', 'minecraft:red_tulip', 'minecraft:orange_tulip', 'minecraft:white_tulip', 'minecraft:pink_tulip', 
        'minecraft:oxeye_daisy', 'minecraft:cornflower', 'minecraft:lily_of_the_valley', 'minecraft:wither_rose', 'minecraft:torchflower',
        'botania:blue_mystical_flower', 'botania:light_blue_mystical_flower', 'botania:brown_mystical_flower', 'botania:cyan_mystical_flower', 
        'botania:gray_mystical_flower', 'botania:green_mystical_flower', 'botania:white_mystical_flower', 'botania:yellow_mystical_flower', 
        'botania:light_gray_mystical_flower', 'botania:orange_mystical_flower', 'botania:red_mystical_flower', 'botania:purple_mystical_flower', 
        'botania:magenta_mystical_flower','botania:lime_mystical_flower']

    flowers.forEach((flower) => {
        greg.greenhouse_flowers(flower)
            .notConsumable(flower)
            .inputFluids('water 100')
            .itemOutputs(flower)
            .duration(200)
            .EUt(30)
            .circuit(1)

        greg.greenhouse_flowers(`${flower}_fertilizer`)
            .notConsumable(flower)
            .itemInputs('gtceu:fertilizer')
            .inputFluids('water 100')
            .itemOutputs(flower)
            .duration(150)
            .EUt(30)
            .circuit(2)

        greg.greenhouse_flowers(`${flower}_overgrowth`)
            .notConsumable(flower)
            .notConsumable('botania:overgrowth_seed')
            .inputFluids('water 100')
            .itemOutputs(flower)
            .duration(150)
            .EUt(30)
            .circuit(3)
    })
    //#endregion

    //#region crops
    const crops = [
        ['minecraft:beetroot_seeds', 'minecraft:beetroot'],
        ['minecraft:melon_seeds', 'minecraft:melon'],
        ['minecraft:pumpkin_seeds', 'minecraft:pumpkin'],
        ['minecraft:wheat_seeds', 'minecraft:wheat'],
        ['farmersdelight:cabbage_seeds', 'farmersdelight:cabbage'],
        ['botania:grass_seeds', 'minecraft:grass'],
        ['botania:mycelium_seeds', 'minecraft:brown_mushroom'],
        ['botania:podzol_seeds', 'minecraft:red_mushroom'],
        ['minecraft:sugar_cane', 'minecraft:sugar_cane'],
        ['minecraft:cactus', 'minecraft:cactus'],
        ['minecraft:carrot', 'minecraft:carrot'],
        ['minecraft:potato', 'minecraft:potato'],
        ['minecraft:bamboo', 'minecraft:bamboo'],
        ['minecraft:chorus_fruit', 'minecraft:chorus_fruit'],
        ['minecraft:nether_wart', 'minecraft:nether_wart'],
        ['farmersdelight:tomato_seeds', 'farmersdelight:tomato'],
        ['farmersdelight:rice', 'farmersdelight:rice_panicle'],
        ['farmersdelight:onion', 'farmersdelight:onion']]

    crops.forEach((crop) => {
        const seed = crop[0]
        const plant = crop[1]

        greg.greenhouse_crops(plant)
            .notConsumable(seed)
            .inputFluids('water 1000')
            .itemOutputs(`16x ${plant}`, `${seed}`)
            .duration(800)
            .EUt(30)
            .circuit(1)
        
        greg.greenhouse_crops(`${plant}_fertilizer`)
            .notConsumable(seed)
            .itemInputs('gtceu:fertilizer')
            .inputFluids('water 1000')
            .itemOutputs(`16x ${plant}`, `${seed}`)
            .duration(600)
            .EUt(30)
            .circuit(2)

        greg.greenhouse_crops(`${plant}_overgrowth`)
            .notConsumable(seed)
            .notConsumable('botania:overgrowth_seed')
            .inputFluids('water 1000')
            .itemOutputs(`16x ${plant}`, `${seed}`)
            .duration(600)
            .EUt(30)
            .circuit(3)
    })
    //#endregion

})