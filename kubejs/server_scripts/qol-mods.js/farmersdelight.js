ServerEvents.recipes(event => {
    //#region baked goods
    event.shaped('farmersdelight:pie_crust', [
      '   ',
      'ABA',
      'AAA'
    ], {
      A: 'gtceu:dough',
      B: 'minecraft:sugar'
    })

    event.shaped('minecraft:pumpkin_pie', [
      'ABA',
      'ACA'
    ], {
      A: 'farmersdelight:pumpkin_slice',
      B: 'minecraft:sugar',
      C: 'farmersdelight:pie_crust'
    })

    event.shaped('createaddition:honey_cake', [
      'AAA',
      'BCB',
      ' D '
    ], {
      A: 'minecraft:milk_bucket',
      B: 'minecraft:honey_bottle',
      C: 'minecraft:egg',
      D: 'gtceu:dough'
    }).replaceIngredient('minecraft:milk_bucket', 'minecraft:bucket').replaceIngredient('minecraft:honey_bottle', 'minecraft:glass_bottle')

    event.shaped('createaddition:chocolate_cake', [
      'AAA',
      'BCB',
      ' D '
    ], {
      A: 'minecraft:milk_bucket',
      B: 'minecraft:cocoa_beans',
      C: 'minecraft:egg',
      D: 'gtceu:dough'
    }).replaceIngredient('minecraft:milk_bucket', 'minecraft:bucket')
    
    event.recipes.gtceu.forming_press('form_pie_crust')
      .notConsumable('gtceu:cylinder_casting_mold')
      .itemInputs('5x gtceu:dough', 'minecraft:sugar')
      .itemOutputs('2x farmersdelight:pie_crust')
      .duration(100)
      .EUt(6)

    event.shapeless('create:honeyed_apple', ['minecraft:honey_bottle', 'minecraft:apple']).replaceIngredient('minecraft:honey_bottle', 'minecraft:glass_bottle')
    event.shapeless('4x create:chocolate_glazed_berries', ['minecraft:sweet_berries', 'minecraft:sweet_berries', 'minecraft:sweet_berries', 'minecraft:sweet_berries', 'minecraft:cocoa_beans', 'farmersdelight:milk_bottle']).replaceIngredient('farmersdelight:milk_bottle', 'minecraft:glass_bottle')
    event.shapeless('8x farmersdelight:sweet_berry_cookie', ['minecraft:sweet_berries', 'gtceu:dough'])
    event.shapeless('8x farmersdelight:honey_cookie', ['minecraft:honey_bottle', 'gtceu:dough']).replaceIngredient('minecraft:honey_bottle', 'minecraft:glass_bottle')
    //#endregion

    //#region wheat & straw
    event.recipes.gtceu.macerator('macerate_wheat_to_flour')
      .itemInputs('minecraft:wheat')
      .itemOutputs('gtceu:wheat_dust')
      .chancedOutput('farmersdelight:straw', 5000, 0)
      .duration(98)
      .EUt(2)

    event.recipes.gtceu.macerator('macerate_hay_bale')
      .itemInputs('minecraft:hay_block')
      .itemOutputs('9x gtceu:wheat_dust', '4x farmersdelight:straw')
      .chancedOutput('farmersdelight:straw', 5000, 0)
      .duration(882)
      .EUt(2)

    event.recipes.gtceu.mixer('mix_dough')
      .itemInputs('2x gtceu:wheat_dust')
      .inputFluids('minecraft:water 250')
      .itemOutputs('3x gtceu:dough')
      .duration(200)
      .EUt(7)
    
    event.shaped('gtceu:dough', [
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

    
});
