ServerEvents.recipes(event => {

  event.shaped('gtceu:rubber_plate', [
    'A',
    'B',
    'B'
  ] , {
    A: '#forge:tools/hammers',
    B: 'gtceu:rubber_ingot'
  })

  event.recipes.gtceu.alloy_smelter('alloy_smelter_rose_quartz')
    .itemInputs('minecraft:quartz', '4x minecraft:redstone')
    .itemOutputs('create:rose_quartz')
    .duration(50)
    .EUt(30)

  event.campfireCooking('minecraft:glass', 'gtceu:glass_dust', 0, 160)
  event.campfireCooking('gtceu:wrought_iron_ingot', 'minecraft:iron_ingot', 0, 160)

  event.smelting('kubejs:asteroid_stone', 'kubejs:cobbled_asteroid_stone')
  event.smelting('kubejs:polished_asteroid_stone', 'kubejs:asteroid_stone')
  event.smelting('minecraft:glass', 'gtceu:glass_dust')


  event.recipes.farmersdelight.cooking(
    ['gtceu:raw_rubber_dust', 'gtceu:raw_rubber_dust', 'gtceu:raw_rubber_dust', 'gtceu:sulfur_dust'],
    'gtceu:rubber_ingot',
    0,
    320,
    'gtceu:brick_wooden_form'
    );

  event.recipes.farmersdelight.cooking(
    ['gtceu:desh_dust', 'gtceu:iron_dust', 'gtceu:red_alloy_dust'],
    '3x powah:steel_energized',
    0,
    200,
    'gtceu:brick_wooden_form'
    );

    event.shaped('farmersdelight:stove', [
      'CCC',
      'A A',
      'ABA'
    ], {
      A: 'minecraft:bricks',
      B: 'minecraft:campfire',
      C: 'gtceu:wrought_iron_plate'
    });

    event.shaped('farmersdelight:skillet', [
      ' BB',
      ' BB',
      'A  '
    ], {
      A: 'gtceu:bronze_rod',
      B: 'gtceu:wrought_iron_plate'
    });

    event.shaped('farmersdelight:cooking_pot', [
      'C C',
      'ABA',
      'AAA'
    ], {
      A: 'gtceu:wrought_iron_plate',
      B: 'minecraft:bucket',
      C: 'gtceu:bronze_rod'
    });

    event.shaped('2x minecraft:paper', [
      'AAA'
    ], {
      A: 'farmersdelight:tree_bark'
    });

    event.shaped('ad_astra:desh_plate', [
      'A',
      'B',
      'B'
    ], {
      A: '#forge:tools/hammers',
      B: 'ad_astra:desh_ingot'
    })

    event.recipes.gtceu.mixer('mixing_energized_steel_dust')
        .itemInputs('gtceu:desh_dust', 'gtceu:iron_dust', 'gtceu:red_alloy_dust')
        .itemOutputs('gtceu:energized_steel_dust')
        .duration(200)
        .EUt(7)

    event.recipes.gtceu.forge_hammer('forge_hammer_sand')
        .itemInputs('minecraft:gravel')
        .itemOutputs('minecraft:sand')
        .duration(10)
        .EUt(16)  

    event.recipes.gtceu.forge_hammer('forge_hammer_asteroid_sand')
        .itemInputs('kubejs:asteroid_gravel')
        .itemOutputs('kubejs:asteroid_sand')
        .duration(10)
        .EUt(16)

    event.recipes.gtceu.forge_hammer('forge_hammer_asteroid_gravel')
        .itemInputs('kubejs:cobbled_asteroid_stone')
        .itemOutputs('kubejs:asteroid_gravel')
        .duration(10)
        .EUt(16)

    event.recipes.gtceu.forge_hammer('forge_hammer_asteroid_cobble')
        .itemInputs('kubejs:asteroid_stone')
        .itemOutputs('kubejs:cobbled_asteroid_stone')
        .duration(10)
        .EUt(16)

    event.recipes.gtceu.forge_hammer('forge_hammer_asteroid_stone')
        .itemInputs('kubejs:hard_asteroid_stone')
        .itemOutputs('kubejs:asteroid_stone')
        .duration(10)
        .EUt(16)
});