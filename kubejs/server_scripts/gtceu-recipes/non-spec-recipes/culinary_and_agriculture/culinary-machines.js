ServerEvents.tags('item', event => {
    event.add('forge:dumpling_meats', ['minecraft:brown_mushroom', '#forge:raw_beef', '#forge:raw_pork', '#forge:raw_chicken'])
    event.add('forge:mushroom_rice_vegetables', ['minecraft:carrot', 'minecraft:potato'])
    event.add('forge:marshmallow_base', ['#forge:eggs', 'minecraft:slime_ball', 'delightful:animal_fat'])
    event.add('forge:dog_food_base', ['delightful:animal_fat', 'minecraft:rotten_flesh'])
})

const ApplyIngredient = global.applyItemInput;
ServerEvents.recipes(event => {

    //#region culinary recipes
    // STR Output Item, OBJ Input Items {manual: [STR], minecraft: [STR], farmersdelight: [STR], delightful: [STR]}, INT time in seconds (optional, default 10s)
    const CULINARIES = [ 
        {output: '2x farmersdelight:dumplings', input: {manual: ['#forge:dough', '#forge:dumpling_meats'], farmersdelight: ['cabbage_leaf', 'onion']}},
        {output: 'farmersdelight:cooked_rice', input: {farmersdelight: ['rice']}, time: 5}, 
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
        {output: '2x delightful:marshmallow_stick', input: {manual: ['#forge:marshmallow_base'], minecraft: ['sugar', 'sugar', 'stick']}}, 
        {output: 'delightful:stuffed_cantaloupe_block', input: {manual: ['#minecraft:fox_food', '#forge:seeds', '#forge:cooked_mutton'], farmersdelight: ['rice', 'onion'], delightful: ['cantaloupe']}, time: 20}, 
        {output: 'farmersdelight:dog_food', input: {manual: ['#forge:dog_food_base', '#farmersdelight:wolf_prey'], minecraft: ['bone_meal', 'bowl'], farmersdelight: ['rice']}},
        {output: 'farmersdelight:squid_ink_pasta', input: {manual: ['#forge:raw_fishes'], minecraft: ['ink_sac', 'bowl'], farmersdelight: ['raw_pasta', 'tomato']}}
    ] // just remove the inputs to disable the recipe
    // const BEVARAGES = [

    // ]
    let IterationCounter = {};
    CULINARIES.forEach(recipe => {
        if (Object.getOwnPropertyNames(recipe.input).length == 0) { return }
        let RecipeInputs = {manual: recipe.input.manual || [''], minecraft: recipe.input.minecraft || [''], farmersdelight: recipe.input.farmersdelight || [''], delightful: recipe.input.delightful || ['']}
        let RecipeName = recipe.output.split(":")[1]
        IterationCounter[RecipeName] = (IterationCounter[RecipeName] || 0) + 1
        RecipeName = IterationCounter[RecipeName] > 1 ? `${RecipeName}_${IterationCounter[RecipeName]}` : RecipeName
        let RecipeBase = event.recipes.gtceu.culinary_fabrication(RecipeName)
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
