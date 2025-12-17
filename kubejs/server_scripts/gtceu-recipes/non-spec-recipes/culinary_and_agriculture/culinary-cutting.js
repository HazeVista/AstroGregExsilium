ServerEvents.recipes(event => {

    //#region food cutting
    //cut_ + recipe id, input item id, output item id array, duration: x, EUt: x
    const culinaryCutting = [
      { id: 'minced_beef', input: 'minecraft:beef', outputs: ['farmersdelight:minced_beef'], duration: 80, EUt: 2 },
      { id: 'brown_mushroom', input: 'farmersdelight:brown_mushroom_colony', outputs: ['5x minecraft:brown_mushroom'], duration: 80, EUt: 2 },
      { id: 'porkchop', input: 'farmersdelight:ham', outputs: ['2x minecraft:porkchop', 'minecraft:bone'], duration: 100, EUt: 4 },
      { id: 'cake_slice', input: 'minecraft:cake', outputs: ['6x farmersdelight:cake_slice'], duration: 80, EUt: 2 },
      { id: 'apple_slice', input: 'minecraft:apple', outputs: ['4x farmersdelight:apple_slice'], duration: 80, EUt: 2 },
      { id: 'chocolate_cake_slice', input: 'createaddition:chocolate_cake', outputs: ['6x farmersdelight:chocolate_cake_slice'], duration: 80, EUt: 2 },
      { id: 'honey_cake_slice', input: 'createaddition:honey_cake', outputs: ['6x farmersdelight:honey_cake_slice'], duration: 80, EUt: 2 },
      { id: 'cooked_mutton_chops', input: 'minecraft:cooked_mutton', outputs: ['2x farmersdelight:cooked_mutton_chops'], duration: 80, EUt: 2 },
      { id: 'salmon_slice', input: 'minecraft:salmon', outputs: ['2x farmersdelight:salmon_slice', 'minecraft:bone_meal'], duration: 70, EUt: 3 },
      { id: 'cooked_porkchop', input: 'farmersdelight:smoked_ham', outputs: ['2x minecraft:cooked_porkchop', 'minecraft:bone'], duration: 100, EUt: 4 },
      { id: 'chicken_cuts', input: 'minecraft:chicken', outputs: ['2x farmersdelight:chicken_cuts', 'minecraft:bone_meal'], duration: 70, EUt: 3 },
      { id: 'cooked_cod_slice', input: 'minecraft:cooked_cod', outputs: ['2x farmersdelight:cooked_cod_slice', 'minecraft:bone_meal'], duration: 70, EUt: 3 },
      { id: 'raw_pasta', input: '#forge:dough', outputs: ['farmersdelight:raw_pasta'], duration: 80, EUt: 2 },
      { id: 'kelp_roll_slice', input: 'farmersdelight:kelp_roll', outputs: ['3x farmersdelight:kelp_roll_slice'], duration: 80, EUt: 2 },
      { id: 'pumpkin_slice', input: 'minecraft:pumpkin', outputs: ['4x farmersdelight:pumpkin_slice'], duration: 100, EUt: 2 },
      { id: 'apple_pie_slice', input: 'farmersdelight:apple_pie', outputs: ['6x farmersdelight:apple_pie_slice'], duration: 80, EUt: 2 },
      { id: 'sweet_berry_cheesecake_slice', input: 'farmersdelight:sweet_berry_cheesecake', outputs: ['6x farmersdelight:sweet_berry_cheesecake_slice'], duration: 80, EUt: 2 },
      { id: 'rice', input: 'farmersdelight:rice_panicle', outputs: ['farmersdelight:rice', 'farmersdelight:straw'], duration: 80, EUt: 2 },
      { id: 'chocolate_pie_slice', input: 'farmersdelight:chocolate_pie', outputs: ['6x farmersdelight:chocolate_pie_slice'], duration: 80, EUt: 2 },
      { id: 'mutton_chops', input: 'minecraft:mutton', outputs: ['2x farmersdelight:mutton_chops'], duration: 80, EUt: 2 },
      { id: 'red_mushroom', input: 'farmersdelight:red_mushroom_colony', outputs: ['5x minecraft:red_mushroom'], duration: 80, EUt: 2 },
      { id: 'cooked_salmon_slice', input: 'minecraft:cooked_salmon', outputs: ['2x farmersdelight:cooked_salmon_slice', 'minecraft:bone_meal'], duration: 70, EUt: 3 },
      { id: 'bacon', input: 'minecraft:porkchop', outputs: ['2x farmersdelight:bacon'], duration: 80, EUt: 2 },
      { id: 'cabbage_leaf', input: 'farmersdelight:cabbage', outputs: ['2x farmersdelight:cabbage_leaf'], duration: 80, EUt: 2 },
      { id: 'cod_slice', input: 'minecraft:cod', outputs: ['2x farmersdelight:cod_slice', 'minecraft:bone_meal'], duration: 70, EUt: 3 },
      { id: 'cooked_chicken_cuts', input: 'minecraft:cooked_chicken', outputs: ['2x farmersdelight:cooked_chicken_cuts', 'minecraft:bone_meal'], duration: 70, EUt: 3 },
      { id: 'pumpkin_pie_slice', input: 'minecraft:pumpkin_pie', outputs: ['6x delightful:pumpkin_pie_slice'], duration: 100, EUt: 2 },
      { id: 'baklava_slice', input: 'delightful:baklava', outputs: ['6x delightful:baklava_slice'], duration: 100, EUt: 2 },
      { id: 'salmonberry_pie_slice', input: 'delightful:salmonberry_pie', outputs: ['6x delightful:salmonberry_pie_slice'], duration: 100, EUt: 2 },
      { id: 'melon_slice_alt', input: 'minecraft:melon', outputs: ['8x minecraft:melon_slice'], duration: 100, EUt: 2 },
      { id: 'melon_slice_alt2', input: 'delightful:mini_melon', outputs: ['4x minecraft:melon_slice'], duration: 80, EUt: 2 },
      { id: 'cantaloupe_slice', input: 'delightful:cantaloupe', outputs: ['4x delightful:cantaloupe_slice'], duration: 80, EUt: 2 },
      { id: 'cactus_flesh', input: 'minecraft:cactus', outputs: ['2x delightful:cactus_flesh'], duration: 80, EUt: 2},
      { id: 'tomato_slice', input: 'farmersdelight:tomato', outputs: ['4x farmersdelight:tomato_slice'], duration: 80, EUt: 2}
    ]

    culinaryCutting.forEach(recipe => {
      let cutter = event.recipes.gtceu.cutter(`cut_${recipe.id}`)
        .itemInputs(recipe.input)
        .itemOutputs(recipe.outputs)
        .duration(recipe.duration)
        .EUt(recipe.EUt)
    })
    //#endregion
    
})