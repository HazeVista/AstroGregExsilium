ServerEvents.tags('item', event => {
    event.add('forge:dumpling_meats', ['minecraft:brown_mushroom', '#forge:raw_beef', '#forge:raw_pork', '#forge:raw_chicken'])
    event.add('forge:mushroom_rice_vegetables', ['minecraft:carrot', 'minecraft:potato'])
    event.add('forge:marshmallow_base', ['#forge:eggs', '#forge:slime_ball', 'delightful:animal_fat'])
    event.add('forge:dog_food_base', ['delightful:animal_fat', 'minecraft:rotten_flesh'])
    event.add('forge:wolf_prey', ['#forge:raw_meat'])
})

const ApplyIngredient = global.applyItemInput;
const ApplyLiquid = global.applyFluidInput;
ServerEvents.recipes(event => {
    //#region culinary recipes
    // STR Output Item, OBJ Input Items {manual: [STR], minecraft: [STR], farmersdelight: [STR], delightful: [STR]}, INT time in seconds (optional, default 10s)
    const CULINARIES = [ 
        {output: '2x farmersdelight:dumplings', input: {manual: ['#forge:dough', '#forge:dumpling_meats'], farmersdelight: ['cabbage_leaf', 'onion']}},
        {output: 'farmersdelight:cooked_rice', input: {farmersdelight: ['rice'], minecraft: ['bowl']}, time: 5}, 
        {output: 'farmersdelight:mushroom_rice', input: {manual: ['#forge:mushroom_rice_vegetables'], minecraft: ['brown_mushroom', 'red_mushroom', 'bowl'], farmersdelight: ['rice']}}, 
        {output: 'farmersdelight:fried_rice', input: {manual: ['#forge:eggs'], minecraft: ['carrot', 'bowl'], farmersdelight: ['rice', 'onion']}}, 
        {output: 'delightful:cactus_chili', input: {manual:['#forge:raw_pork', '#forge:vegetables'], minecraft: ['blaze_powder', 'bowl'], farmersdelight: ['tomato_sauce'], delightful: ['cactus_flesh']}}, 
        {output: 'farmersdelight:stuffed_pumpkin_block', input: {manual: ['#minecraft:fox_food', '#forge:vegetables'], minecraft: ['potato', 'pumpkin'], farmersdelight: ['rice', 'onion']}, time: 20}, 
        {output: 'farmersdelight:pasta_with_meatballs', input: {minecraft: ['bowl'], farmersdelight: ['minced_beef', 'raw_pasta', 'tomato_sauce']}}, 
        //{output: '9x delightful:matcha_gummy', input: {minecraft: ['kelp', 'sugar', 'honey_block'], delightful: ['matcha']}},
        //{output: '9x delightful:salmonberry_gummy', input: {minecraft: ['kelp', 'sugar', 'honey_block'], delightful: ['salmonberries']}}, 
        {output: 'farmersdelight:ratatouille', input: {manual: ['#forge:vegetables'], minecraft: ['beetroot', 'bowl'], farmersdelight: ['tomato', 'onion']}}, 
        {output: 'farmersdelight:pasta_with_mutton_chop', input: {manual: ['#forge:raw_mutton'], minecraft: ['bowl'], farmersdelight: ['raw_pasta', 'tomato_sauce']}}, 
        {output: 'delightful:rock_candy', input: {manual: ['#minecraft:fox_food', 'create:rose_quartz'], minecraft: ['sugar', 'stick']}}, 
        {output: 'farmersdelight:vegetable_noodles', input: {manual: ['#forge:crops/cabbage', '#forge:vegetables'], minecraft: ['carrot', 'brown_mushroom', 'bowl'], farmersdelight: ['raw_pasta']}}, 
        {output: 'farmersdelight:cabbage_rolls', input: {manual: ['#forge:crops/cabbage', '#farmersdelight:cabbage_roll_ingredients']}, time: 5}, 
        {output: '2x delightful:marshmallow_stick', input: {manual: ['#forge:marshmallow_base'], minecraft: ['sugar', 'sugar', 'stick', 'stick']}}, 
        {output: 'delightful:stuffed_cantaloupe_block', input: {manual: ['#minecraft:fox_food', '#forge:seeds', '#forge:cooked_mutton'], farmersdelight: ['rice', 'onion'], delightful: ['cantaloupe']}, time: 20}, 
        {output: 'farmersdelight:dog_food', input: {manual: ['#forge:dog_food_base', '#forge:wolf_prey'], minecraft: ['bone_meal', 'bowl'], farmersdelight: ['rice']}},
        {output: 'farmersdelight:squid_ink_pasta', input: {manual: ['#forge:raw_fishes'], minecraft: ['ink_sac', 'bowl'], farmersdelight: ['raw_pasta', 'tomato']}}
    ] 
    
    // STR Output Item, OBJ Input Items {manual: [STR], minecraft: [STR], farmersdelight: [STR], delightful: [STR]}, INT time in seconds (optional, default 10s)
    let IterationCounter = {};
    const BEVERAGES = [
        {output: '2x farmersdelight:hot_cocoa', input: {manual: ['gtceu:cocoa_dust', '2x minecraft:glass_bottle'], minecraft: ['sugar'], liquids: ['minecraft:milk']}, time: 40},
        {output: '2x farmersdelight:apple_cider', input: {manual: ['3x minecraft:apple', '2x minecraft:glass_bottle'], minecraft: ['sugar'], liquids: ['minecraft:water 500']}, time: 40},
        {output: '2x farmersdelight:melon_juice', input: {manual: ['6x minecraft:melon_slice', '2x minecraft:glass_bottle'], minecraft: ['sugar'], liquids: ['minecraft:water 500']}},
        {output: '2x farmersdelight:melon_juice', input: {manual: ['2x minecraft:glass_bottle'], minecraft: ['sugar'], delightful: ['mini_melon'], liquids: ['minecraft:water 500']}},
        {output: '2x farmersdelight:chocolate_milkshake', input: {manual: ['2x minecraft:glass_bottle', 'gtceu:ice_dust'], minecraft: ['sugar'], liquids: ['minecraft:milk 1500', 'create:chocolate 500']}},
        {output: '2x delightful:matcha_latte', input: {delightful: ['matcha'], liquids: ['create:honey 500', 'minecraft:milk 1000']}, time: 20},
        {output: '2x delightful:berry_matcha_latte', input: {manual: ['2x delightful:matcha_latte', '#minecraft:fox_food', 'gtceu:ice_dust']}},
        {output: '2x delightful:jam_jar', input: {manual: ['2x minecraft:glass_bottle', '4x #forge:fruits', '3x minecraft:sugar']}},
        {output: '2x delightful:glow_jam_jar', input: {manual: ['2x minecraft:glass_bottle', '4x minecraft:glow_berries', '4x minecraft:sugar']}},
        {output: '2x delightful:nut_butter_bottle', input: {manual: ['2x minecraft:glass_bottle', '3x astrogreg:acorn_dust'], minecraft: ['sugar'], liquids: ['minecraft:water 500']}},
        {output: '2x delightful:matcha_milkshake', input: {manual: ['2x minecraft:glass_bottle', 'gtceu:ice_dust', '2x delightful:matcha'], minecraft: ['sugar'], liquids: ['minecraft:milk 1500']}},
        {output: '2x delightful:salmonberry_milkshake', input: {manual: ['2x minecraft:glass_bottle', 'gtceu:ice_dust', '2x delightful:salmonberries'], minecraft: ['sugar'], liquids: ['minecraft:milk 1500']}}
    ]
    BEVERAGES.forEach(recipe => {
        if (Object.getOwnPropertyNames(recipe.input).length == 0) { return }
        let RecipeInputs = {manual: recipe.input.manual || [''], minecraft: recipe.input.minecraft || [''], farmersdelight: recipe.input.farmersdelight || [''], delightful: recipe.input.delightful || [''], liquids: recipe.input.liquids || ['']}
        let RecipeName = recipe.output.split(":")[1]
        IterationCounter[RecipeName] = (IterationCounter[RecipeName] || 0) + 1
        RecipeName = IterationCounter[RecipeName] > 1 ? `${RecipeName}_${IterationCounter[RecipeName]}` : RecipeName
        let RecipeBase = event.recipes.gtceu.beverage_processor(RecipeName)
            .itemOutputs(recipe.output)
            .EUt(GTValues.VHA[GTValues.LV])
            .duration(recipe.time * 20 || 200)
        RecipeInputs.manual.forEach(inputs => {console.log(inputs);ApplyIngredient(RecipeBase, inputs)})
        RecipeInputs.farmersdelight.forEach(inputs => {ApplyIngredient(RecipeBase, inputs, 'farmersdelight')})
        RecipeInputs.minecraft.forEach(inputs => {ApplyIngredient(RecipeBase, inputs, 'minecraft')})
        RecipeInputs.delightful.forEach(inputs => {ApplyIngredient(RecipeBase, inputs, 'delightful')})
        RecipeInputs.liquids.forEach(inputs => {ApplyLiquid(RecipeBase, inputs)})
    })
    IterationCounter = {};
    CULINARIES.forEach(recipe => {
        if (Object.getOwnPropertyNames(recipe.input).length == 0) { return }
        let RecipeInputs = {manual: recipe.input.manual || [''], minecraft: recipe.input.minecraft || [''], farmersdelight: recipe.input.farmersdelight || [''], delightful: recipe.input.delightful || ['']}
        let RecipeName = recipe.output.split(":")[1]
        IterationCounter[RecipeName] = (IterationCounter[RecipeName] || 0) + 1
        RecipeName = IterationCounter[RecipeName] > 1 ? `${RecipeName}_${IterationCounter[RecipeName]}` : RecipeName
        let RecipeBase = event.recipes.gtceu.culinary_fabricator(RecipeName)
            .itemOutputs(recipe.output)
            .EUt(GTValues.VHA[GTValues.LV])
            .duration(recipe.time * 20 || 200)
        RecipeInputs.manual.forEach(inputs => {console.log(inputs);ApplyIngredient(RecipeBase, inputs)})
        RecipeInputs.farmersdelight.forEach(inputs => {ApplyIngredient(RecipeBase, inputs, 'farmersdelight')})
        RecipeInputs.minecraft.forEach(inputs => {ApplyIngredient(RecipeBase, inputs, 'minecraft')})
        RecipeInputs.delightful.forEach(inputs => {ApplyIngredient(RecipeBase, inputs, 'delightful')})
    })
    
    //#endregion


    //#region machine recipes
    const tieredParts = [
        ['lv', 'cobalt_brass', 'tin', '#forge:glass'],
        ['mv', 'vanadium_steel', 'copper', '#forge:glass'],
        ['hv', 'red_steel', 'gold', 'gtceu:tempered_glass'],
        ['ev', 'ultimet', 'aluminium', 'gtceu:tempered_glass'],
        ['iv', 'tungsten_carbide', 'platinum', 'gtceu:laminated_glass'],
        ['luv', 'hsse', 'niobium_titanium', 'gtceu:laminated_glass'],
        ['zpm', 'naquadah_alloy', 'vanadium_gallium', 'gtceu:fusion_glass'],
        ['uv', 'duranium', 'yttrium_barium_cuprate', 'gtceu:fusion_glass']
    ]

    tieredParts.forEach(([tier, buzzsaw, cable, glass]) => {
        event.recipes.gtceu.shaped(`gtceu:${tier}_beverage_processor`, [
            'FCF',
            'BDB',
            'EAG'
        ], {
            A: `#gtceu:circuits/${tier}`,
            B: `gtceu:${cable}_single_cable`,
            C: `gtceu:${buzzsaw}_buzz_saw_blade`,    
            D: `gtceu:${tier}_machine_hull`,
            E: `gtceu:${tier}_electric_pump`,
            F: glass,
            G: `gtceu:${tier}_conveyor_module`
        })
        .addMaterialInfo()
    })

    tieredParts.forEach(([tier, knife, cable, glass]) => {
        event.recipes.gtceu.shaped(`gtceu:${tier}_culinary_fabricator`, [
            'CBC',
            'AFA',
            'DED'
        ], {
            A: `gtceu:${tier}_conveyor_module`,
            B: `gtceu:${knife}_butchery_knife`,
            C: `gtceu:${tier}_robot_arm`,
            D: `gtceu:${cable}_single_cable`,
            E:  glass,
            F: `gtceu:${tier}_machine_hull`,
        })
        .addMaterialInfo()
    })
    //#endregion
})
