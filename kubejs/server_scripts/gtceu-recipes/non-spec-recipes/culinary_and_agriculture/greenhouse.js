ServerEvents.recipes(event => {
    const greg = event.recipes.gtceu

//#region helpers
function applyNotConsumableItem(recipe, toApply) {
    if (toApply != '') {
        recipe.notConsumable(toApply);
    }
}
function applyItemInput(recipe, toApply) {
    if (toApply != '') {
        recipe.itemInputs(toApply);
    }
}
function applyFluidInput(recipe, toApply) {
    if (toApply != '') {
        recipe.inputFluids(toApply);  
    }    
}
function applyItemOutput(recipe, toApply) {
    if (toApply != '') {
       recipe.itemOutputs(toApply); 
    } 
}
//#endregion



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
        ["minecraft:mangrove_propagule", "minecraft:mangrove_log", "minecraft:mangrove_leaves"]]

trees.forEach((tree) => {
    const sapling = tree[0]
    const log = tree[1]
    const leaf = tree[2]

    let rubber= '';
    if (sapling == 'gtceu:rubber_sapling') {
        rubber = 'gtceu:sticky_resin'
    }

    const GreenHouseHelperTree = (notConsumableItem, Item1, Fluid1, Circuit, Duration, Affix) => {
        
        let RecipeName = sapling;
        if (Affix != '') {
            RecipeName = `${sapling}_${Affix}`;
        }

        const greenhouse_tree_base = greg.greenhouse_trees(RecipeName)
            .notConsumable(sapling)
            .perTick(true)
            .inputFluids('minecraft:water 1')
            .perTick(false)
            .itemOutputs(`16x ${log}`, `4x ${leaf}`, `${sapling}`)
            .circuit(Circuit)
            .duration(Duration)
            .EUt(30)
        
        applyItemOutput(greenhouse_tree_base, rubber);
        applyNotConsumableItem(greenhouse_tree_base, notConsumableItem);
        applyItemInput(greenhouse_tree_base, Item1);
        applyFluidInput(greenhouse_tree_base, Fluid1);
    }

    // GreenHouseHelper(Non Consumable, Consumable Item, Consumable Fluid, Circuit Number, Duration, Name Affix)
    GreenHouseHelperTree('', '', '', 1, 320, '');
    GreenHouseHelperTree('', '4x gtceu:fertilizer', '', 2, 240, 'fertilizer');
    GreenHouseHelperTree('botania:overgrowth_seed', '', '', 3, 240, 'overgrowth');
    GreenHouseHelperTree('', '', 'gtceu:carbon_dioxide 1000', 4, 240, 'carbon_dioxide');
    GreenHouseHelperTree('', '4x gtceu:fertilizer', 'gtceu:carbon_dioxide 1000', 5, 200, 'fertilizer_carbon_dioxide');
    GreenHouseHelperTree('botania:overgrowth_seed', '', 'gtceu:carbon_dioxide 1000', 6, 200, 'overgrowth_carbon_dioxide');
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
        const GreenHouseHelperFlower = (notConsumableItem, Item1, Circuit, Duration, Affix) => {

            let RecipeName = flower;
            if (Affix != '') {
                RecipeName = `${flower}_${Affix}`;
            }
            const greenhouse_flower_base = greg.greenhouse_flowers(RecipeName)
                .notConsumable(flower)
                .perTick(true)
                .inputFluids('minecraft:water 1')
                .perTick(false)
                .itemOutputs(`8x ${flower}`)
                .duration(Duration)
                .EUt(30)
                .circuit(Circuit)
            
            applyNotConsumableItem(greenhouse_flower_base, notConsumableItem);
            applyItemInput(greenhouse_flower_base, Item1);
        }

        // GreenhouseHelperFlower(Not Consumable Item, Item Input, Circuit, Duration, Affix) ## the affix is for the recipe name 
        GreenHouseHelperFlower('', '', 1, 200, '')
        GreenHouseHelperFlower('', 'gtceu:fertilizer', 2, 150, 'fertilizer')
        GreenHouseHelperFlower('botania:overgrowth_seed', '', 3, 150, 'overgrowth')
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
        ['farmersdelight:onion', 'farmersdelight:onion'],
        ['delightful:salmonberry_pips', 'delightful:salmonberries'],
        ['delightful:cantaloupe_seeds', 'delightful:cantaloupe']]

    crops.forEach((crop) => {
        const seed = crop[0]
        const plant = crop[1]

        const GreenHouseHelperCrop = (notConsumableItem, Item1, Circuit, Duration, Affix) => {

            let RecipeName = plant;
            if (Affix != '') {
                RecipeName = `${plant}_${Affix}`;
            }
            const greenhouse_crop_base = greg.greenhouse_crops(RecipeName)
                .notConsumable(seed)
                .perTick(true)
                .inputFluids('minecraft:water 1')
                .perTick(false)
                .itemOutputs(`16x ${plant}`, `${seed}`)
                .duration(Duration)
                .EUt(30)
                .circuit(Circuit)

            applyItemInput(greenhouse_crop_base, Item1);
            applyNotConsumableItem(greenhouse_crop_base, notConsumableItem);
        }

        // GreenhouseHelperCrop(Not Consumable Item, Item Input, Circuit, Duration, Affix) ## the affix is for the recipe name 
        GreenHouseHelperCrop('', '', 1, 800, '')
        GreenHouseHelperCrop('', 'gtceu:fertilizer', 2, 600, 'fertilizer')
        GreenHouseHelperCrop('botania:overgrowth_seed', '', 3, 600, 'overgrowth')
    })
    //#endregion



    //#region controllers
    event.recipes.gtceu.shaped('gtceu:greenhouse', [
        'EBF',
        'DAD',
        'CBG'
    ], {
        A: 'gtceu:lv_machine_hull',
        B: '#gtceu:circuits/lv',
        C: 'gtceu:lv_electric_pump',
        D: 'gtceu:lv_robot_arm',
        E: 'gtceu:steel_axe',
        F: 'gtceu:steel_scythe',
        G: 'gtceu:lv_conveyor_module'
    })
    .addMaterialInfo()

    event.recipes.gtceu.shaped('gtceu:conservatory', [
        'EBF',
        'DAD',
        'CBG'
    ], {
        A: 'gtceu:iv_machine_hull',
        B: '#gtceu:circuits/iv',
        C: 'gtceu:iv_electric_pump',
        D: 'gtceu:iv_robot_arm',
        E: 'gtceu:tungsten_steel_axe',
        F: 'gtceu:tungsten_steel_scythe',
        G: 'gtceu:iv_conveyor_module'
    })
    .addMaterialInfo()

})