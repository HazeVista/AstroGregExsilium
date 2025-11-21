ServerEvents.recipes(event => {

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

    event.recipes.gtceu.forming_press('form_pie_crust')
      .notConsumable('gtceu:cylinder_casting_mold')
      .itemInputs('5x gtceu:dough', 'minecraft:sugar')
      .itemOutputs('2x farmersdelight:pie_crust')
      .duration(100)
      .EUt(6)

    event.shapeless('8x farmersdelight:sweet_berry_cookie', ['minecraft:sweet_berries', 'gtceu:dough'])
    event.shapeless('8x farmersdelight:honey_cookie', ['minecraft:honey_bottle', 'gtceu:dough']).replaceIngredient('minecraft:honey_bottle', 'minecraft:glass_bottle')

    event.recipes.gtceu.macerator('macerate_grass')
      .itemInputs('#forge:grass')
      .itemOutputs('2x farmersdelight:straw')
      .duration(40)
      .EUt(2)
});