ServerEvents.recipes(event => {
    //#region cakes & pies
    event.shaped('2x farmersdelight:raw_pie_crust', [
      '   ',
      'ABA',
      'AAA'
    ], {
      A: '#forge:dough',
      B: 'minecraft:sugar'
    })

    event.smoking('farmersdelight:pie_crust', 'farmersdelight:raw_pie_crust')
    event.smelting('createaddition:cake_base_baked', 'createaddition:cake_base')
    event.smelting('farmersdelight:pie_crust', 'farmersdelight:raw_pie_crust')
    event.campfireCooking('farmersdelight:pie_crust', 'farmersdelight:raw_pie_crust', 1, 160)

    event.shaped('createaddition:cake_base', [
      '   ',
      'ABA',
      'CCC'
    ], {
      A: '#forge:sweetener',
      B: 'minecraft:egg',
      C: '#forge:dough'
    })

    event.shaped('farmersdelight:apple_pie', [
      ' B ',
      'CCC',
      'DAD'
    ], {
      A: 'farmersdelight:pie_crust',
      B: '#forge:dough',
      C: 'farmersdelight:apple_slice',
      D: 'minecraft:sugar'
    })

    event.shaped('farmersdelight:sweet_berry_cheesecake', [
      'AAA',
      'AAA',
      'BCB'
    ], {
      A: 'minecraft:sweet_berries',
      B: 'ad_astra:cheese',
      C: 'farmersdelight:pie_crust'
    })

    event.shaped('delightful:salmonberry_pie', [
      ' A ',
      'BBB',
      'CDC'
    ], {
      A: '#forge:dough',
      B: 'delightful:salmonberries',
      C: 'minecraft:sugar',
      D: 'farmersdelight:pie_crust'
    })

    event.shaped('minecraft:cake', [
      '   ',
      'AAA',
      'BCB'
    ], {
      A: 'farmersdelight:milk_bottle',
      B: 'minecraft:sugar',
      C: 'createaddition:cake_base_baked'
    }).replaceIngredient('farmersdelight:milk_bottle', 'minecraft:glass_bottle')

    event.shaped('createaddition:honey_cake', [
      '   ',
      'AAA',
      'BCB'
    ], {
      A: 'farmersdelight:milk_bottle',
      B: 'minecraft:honey_bottle',
      C: 'createaddition:cake_base_baked'
    }).replaceIngredient('farmersdelight:milk_bottle', 'minecraft:glass_bottle').replaceIngredient('minecraft:honey_bottle', 'minecraft:glass_bottle')

    event.shaped('createaddition:chocolate_cake', [
      '   ',
      'AAA',
      'BCB'
    ], {
      A: 'farmersdelight:milk_bottle',
      B: 'create:bar_of_chocolate',
      C: 'createaddition:cake_base_baked'
    }).replaceIngredient('farmersdelight:milk_bottle', 'minecraft:glass_bottle')

    event.shaped('delightful:baklava', [
      ' A ',
      'BBB',
      'CDC'
    ], {
      A: 'minecraft:honey_bottle',
      B: 'delightful:roasted_acorn',
      C: 'minecraft:sugar',
      D: '#forge:dough'
    }).replaceIngredient('minecraft:honey_bottle', 'minecraft:glass_bottle')
    
    event.recipes.gtceu.forming_press('form_pie_crust')
      .notConsumable('gtceu:cylinder_casting_mold')
      .itemInputs('5x #forge:dough', 'minecraft:sugar')
      .itemOutputs('3x farmersdelight:raw_pie_crust')
      .duration(100)
      .EUt(6)    

    event.recipes.gtceu.forming_press('form_cake_base')
      .notConsumable('gtceu:cylinder_casting_mold')
      .itemInputs('3x #forge:dough', '2x #forge:sweetener', 'minecraft:egg')
      .itemOutputs('2x createaddition:cake_base')
      .duration(100)
      .EUt(6)  
    //#endregion


    
    //#region cookies
    event.shapeless('8x farmersdelight:sweet_berry_cookie', ['#forge:dough', 'minecraft:sweet_berries'])
    event.shapeless('8x farmersdelight:honey_cookie', ['#forge:dough', 'minecraft:honey_bottle']).replaceIngredient('minecraft:honey_bottle', 'minecraft:glass_bottle')
    event.shapeless('8x delightful:glow_jam_cookie', ['#forge:dough', 'delightful:glow_jam_jar']).replaceIngredient('delightful:glow_jam_jar', 'minecraft:glass_bottle')
    event.shapeless('8x minecraft:cookie', ['#forge:dough', 'create:bar_of_chocolate'])

    event.recipes.gtceu.forming_press('form_choco_cookie')
      .notConsumable('gtceu:cylinder_casting_mold')
      .itemInputs('#forge:dough', '2x create:bar_of_chocolate')
      .itemOutputs('12x minecraft:cookie')
      .duration(200)
      .EUt(6)
            
    event.recipes.gtceu.forming_press('form_sugar_cookie')
      .notConsumable('gtceu:cylinder_casting_mold')
      .itemInputs('#forge:dough', '2x #forge:sweetener')
      .itemOutputs('12x farmersdelight:honey_cookie')
      .duration(200)
      .EUt(6)
    
    event.recipes.gtceu.forming_press('form_glow_cookie')
      .notConsumable('gtceu:cylinder_casting_mold')
      .itemInputs('#forge:dough', '2x minecraft:glow_berries')
      .itemOutputs('12x delightful:glow_jam_cookie')
      .duration(200)
      .EUt(6)
      
    event.recipes.gtceu.forming_press('form_berry_cookie')
      .notConsumable('gtceu:cylinder_casting_mold')
      .itemInputs('#forge:dough', '2x minecraft:sweet_berries')
      .itemOutputs('12x farmersdelight:sweet_berry_cookie')
      .duration(200)
      .EUt(6)
    //#endregion



    //#region cutting board
    const cuttingRecipes = [
      { input: "minecraft:apple", output: "farmersdelight:apple_slice", count: 4 },
      { input: "minecraft:pumpkin_pie", output: "delightful:pumpkin_pie_slice", count: 6 },
      { input: "farmersdelight:apple_pie", output: "farmersdelight:apple_pie_slice", count: 6 },
      { input: "farmersdelight:chocolate_pie", output: "farmersdelight:chocolate_pie_slice", count: 6 },
      { input: "farmersdelight:sweet_berry_cheesecake", output: "farmersdelight:sweet_berry_cheesecake_slice", count: 6 },
      { input: "delightful:salmonberry_pie", output: "delightful:salmonberry_pie_slice", count: 6 },
      { input: "delightful:baklava", output: "delightful:baklava_slice", count: 6 },
      { input: "minecraft:cake", output: "farmersdelight:cake_slice", count: 6 },
      { input: "createaddition:chocolate_cake", output: "farmersdelight:chocolate_cake_slice", count: 6 },
      { input: "createaddition:honey_cake", output: "farmersdelight:honey_cake_slice", count: 6 },
      { input: "minecraft:beef", output: "farmersdelight:minced_beef", count: 1},
      { input: "farmersdelight:tomato", output: "farmersdelight:tomato_slice", count: 4}
    ]

  cuttingRecipes.forEach(recipe => {
    event.custom({
      type: "farmersdelight:cutting",
      ingredients: [{ item: recipe.input }],
      tool: { tag: "forge:tools/knives" },
      result: [{ item: recipe.output, count: recipe.count }]
    })
  })

    //#endregion



    //#region wheat, dough, & straw 
    // event.recipes.gtceu.macerator('macerate_to_flour')
    //   .itemInputs('minecraft:wheat')
    //   .itemOutputs('gtceu:wheat_dust')
    //   .chancedOutput('farmersdelight:straw', 5000, 0)
    //   .duration(98)
    //   .EUt(2)                                            These dont work bc of a GT bug where you can't remove recycling recipes

    // event.recipes.gtceu.macerator('macerate_hay_bale')
    //   .itemInputs('minecraft:hay_block')
    //   .itemOutputs('9x gtceu:wheat_dust', '4x farmersdelight:straw')
    //   .chancedOutput('farmersdelight:straw', 5000, 0)
    //   .duration(882)
    //   .EUt(2)

    event.recipes.gtceu.mixer('mix_dough')
      .itemInputs('2x gtceu:wheat_dust')
      .inputFluids('minecraft:water 250')
      .itemOutputs('3x gtceu:dough')
      .duration(200)
      .EUt(7)
    
    event.shaped('8x gtceu:dough', [
      'AAA',
      'ABA',
      'AAA'
    ], {
      A: 'gtceu:wheat_dust',
      B: 'minecraft:water_bucket'
    }).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
  
    event.recipes.gtceu.macerator('macerate_grass')
      .itemInputs('#forge:grass')
      .itemOutputs('2x farmersdelight:straw')
      .duration(40)
      .EUt(2)
    //#endregion



    //#region acorn dough & butter
    event.shaped('8x delightful:nut_dough', [
      'AAA',
      'ABA',
      'AAA'
    ], {
      A: 'astrogreg:acorn_dust',
      B: 'minecraft:water_bucket'
    }).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')

    event.recipes.gtceu.mixer('mix_nut_dough')
      .itemInputs('2x astrogreg:acorn_dust')
      .inputFluids('minecraft:water 250')
      .itemOutputs('3x gtceu:dough')
      .duration(200)
      .EUt(7)

    event.shaped('astrogreg:acorn_dust', [
      'A',
      'B'
    ], {
      A: 'delightful:acorn',
      B: '#forge:tools/mortars'
    })

    event.custom({
      type: "farmersdelight:cutting",
      ingredients: [
        { item: "delightful:acorn" }
      ],
      tool: { tag: "forge:tools/hammers" },
      result: [
        { item: "astrogreg:acorn_dust", count: 1 }
      ]
    })

    event.recipes.gtceu.macerator('macerate_acorn')
      .itemInputs('delightful:acorn')
      .itemOutputs('astrogreg:acorn_dust')
      .duration(98)
      .EUt(2)

    event.recipes.farmersdelight.cooking(
      ['astrogreg:acorn_dust', 'astrogreg:acorn_dust', 'astrogreg:acorn_dust', 'gtceu:salt_dust', 'minecraft:sugar'],
      'delightful:nut_butter_bottle',
      1,
      200,
      'minecraft:glass_bottle'
    )
    //#endregion



    //#region chocolate
    event.recipes.gtceu.fluid_solidifier('solidify_chocolate')
      .notConsumable('gtceu:ingot_casting_mold')
      .inputFluids('create:chocolate 250')
      .itemOutputs('create:bar_of_chocolate')
      .duration(80)
      .EUt(7)

    event.shapeless('4x create:bar_of_chocolate', ['create:chocolate_bucket', 'gtceu:brick_wooden_form']).keepIngredient('gtceu:brick_wooden_form')

    event.recipes.farmersdelight.cooking(
      ['#forge:milk', 'gtceu:cocoa_dust', 'gtceu:cocoa_dust', 'minecraft:sugar'],
      'create:chocolate_bucket',
      1,
      200,
      'minecraft:bucket'
    )

    event.shaped('gtceu:cocoa_dust', [
      'A',
      'B'
    ], {
      A: 'minecraft:cocoa_beans',
      B: '#forge:tools/mortars'
    })

    event.recipes.farmersdelight.cooking(
      ['#forge:milk', 'gtceu:cocoa_dust', 'minecraft:sugar'],
      'farmersdelight:hot_cocoa',
      1,
      200,
      'minecraft:glass_bottle'
    )

    event.recipes.gtceu.mixer('mix_chocolate')
      .itemInputs('2x gtceu:cocoa_dust', 'minecraft:sugar')
      .inputFluids('minecraft:milk 250')
      .outputFluids('create:chocolate 500')
      .duration(200)
      .EUt(7)
    //#endregion



    //#region misc
    event.recipes.gtceu.fluid_solidifier('solidify_cheese')
      .notConsumable('gtceu:ingot_casting_mold')
      .inputFluids('minecraft:milk 125')
      .itemOutputs('ad_astra:cheese')
      .duration(200)
      .EUt(7)

    event.recipes.gtceu.macerator('macerate_leaves')
      .itemInputs('#minecraft:leaves')
      .chancedOutput('delightful:green_tea_leaf', 7500, 0)
      .duration(120)
      .EUt(2)
      
    event.recipes.gtceu.macerator('macerate_tea')
      .itemInputs('delightful:green_tea_leaf')
      .itemOutputs('minecraft:green_dye')
      .chancedOutput('delightful:matcha', 4000, 0)
      .duration(120)
      .EUt(2)

    event.shaped('farmersdelight:roasted_mutton_chops', [
      'DAC',
      'BEB',
      ' F '
    ], {
      A: 'farmersdelight:cooked_mutton_chops',
      B: 'farmersdelight:tomato_slice',
      C: 'minecraft:beetroot',
      D: 'minecraft:carrot',
      E: 'farmersdelight:cooked_rice',
      F: 'minecraft:bowl'
    })

    event.shaped('minecraft:green_dye', [
      'A',
      'B'
    ], {
      A: 'delightful:green_tea_leaf',
      B: '#forge:tools/mortars'
    })
    
    event.shapeless('create:honeyed_apple', ['minecraft:honey_bottle', 'minecraft:apple']).replaceIngredient('minecraft:honey_bottle', 'minecraft:glass_bottle')
    event.shapeless('4x create:chocolate_glazed_berries', ['minecraft:sweet_berries', 'minecraft:sweet_berries', 'minecraft:sweet_berries', 'minecraft:sweet_berries', 'create:chocolate_bucket']).replaceIngredient('create:chocolate_bucket', 'minecraft:bucket')
    //#endregion
})
