ServerEvents.recipes(event => {

    event.shaped('farmersdelight:pie_crust', [
      '   ',
      'ABA',
      'AAA'
    ], {
      A: 'gtceu:dough',
      B: 'minecraft:sugar'
    })

    event.shapeless('8x farmersdelight:sweet_berry_cookie', ['minecraft:sweet_berries', 'gtceu:dough'])
    event.shapeless('8x farmersdelight:honey_cookie', ['minecraft:honey_bottle', 'gtceu:dough']).replaceIngredient('minecraft:honey_bottle', 'minecraft:glass_bottle')
});