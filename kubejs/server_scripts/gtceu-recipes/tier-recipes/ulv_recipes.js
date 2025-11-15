ServerEvents.recipes(event => {

  event.shaped('minecraft:shears', [
    'AB ',
    'BC '
  ], {
    A: '#forge:tools/hammers',
    B: 'gtceu:iron_plate',
    C: '#forge:tools/files'
  })

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
  event.smelting('kubejs:smooth_asteroid_stone', 'kubejs:asteroid_stone')
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


    //stone crushing recipes    
    event.recipes.farmersdelight.cutting('minecraft:cobblestone', '#forge:tools/hammers', 'minecraft:gravel')
    event.recipes.farmersdelight.cutting('kubejs:cobbled_asteroid_stone', '#forge:tools/pickaxes', 'kubejs:asteroid_gravel')
    event.recipes.farmersdelight.cutting('kubejs:asteroid_stone', '#forge:tools/pickaxes', 'kubejs:cobbled_asteroid_stone')
    event.recipes.farmersdelight.cutting('kubejs:asteroid_gravel', '#forge:tools/hammers', ['kubejs:asteroid_sand', Item.of('minecraft:flint').withChance(0.2)])
    event.recipes.farmersdelight.cutting('minecraft:gravel', '#forge:tools/hammers', ['minecraft:sand', Item.of('minecraft:flint').withChance(0.2)])

    event.recipes.gtceu.forge_hammer('forge_hammer_sand')
        .itemInputs('minecraft:gravel')
        .itemOutputs('minecraft:sand')
        .duration(10)
        .EUt(16)  

    event.recipes.gtceu.forge_hammer('forge_hammer_gravel')
        .itemInputs('minecraft:cobblestone')
        .itemOutputs('minecraft:gravel')
        .duration(10)
        .EUt(16)  

    event.recipes.gtceu.forge_hammer('forge_hammer_asteroid_sand')
        .itemInputs('kubejs:asteroid_gravel')
        .itemOutputs('kubejs:asteroid_sand')
        .duration(10)
        .EUt(16)

    event.recipes.gtceu.macerator('macerator_asteroid_flint')
        .itemInputs('kubejs:asteroid_gravel')
        .itemOutputs('gtceu:asteroid_stone_dust')
        .chancedOutput('minecraft:flint', 3300, 0)
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.macerator('macerator_flint')
        .itemInputs('minecraft:gravel')
        .itemOutputs('gtceu:stone_dust')
        .chancedOutput('minecraft:flint', 3300, 0)
        .duration(400)
        .EUt(2)

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

    event.recipes.gtceu.macerator('macerator_asteroid_dust')
        .itemInputs('kubejs:hard_asteroid_stone')
        .itemOutputs('gtceu:asteroid_stone_dust')
        .duration(98)
        .EUt(2)

    event.recipes.gtceu.macerator('macerator_asteroid_dust_1')
        .itemInputs('kubejs:asteroid_stone')
        .itemOutputs('gtceu:asteroid_stone_dust')
        .duration(98)
        .EUt(2)

    event.recipes.gtceu.macerator('macerator_asteroid_dust_2')
        .itemInputs('kubejs:smooth_asteroid_stone')
        .itemOutputs('gtceu:asteroid_stone_dust')
        .duration(98)
        .EUt(2)

    event.recipes.gtceu.macerator('macerator_asteroid_dust_3')
        .itemInputs('kubejs:cobbled_asteroid_stone')
        .itemOutputs('gtceu:asteroid_stone_dust')
        .duration(98)
        .EUt(2)

    event.shaped('minecraft:gravel', [
      'A',
      'B'
    ], {
      A: '#forge:tools/hammers',
      B: 'minecraft:cobblestone'
    })    

    event.shaped('minecraft:sand', [
      'A',
      'B'
    ], {
      A: '#forge:tools/hammers',
      B: 'minecraft:gravel'
    })  
    
    event.shaped('kubejs:asteroid_gravel', [
      'A',
      'B'
    ], {
      A: '#forge:tools/hammers',
      B: 'kubejs:cobbled_asteroid_stone'
    })    

    event.shaped('kubejs:asteroid_sand', [
      'A',
      'B'
    ], {
      A: '#forge:tools/hammers',
      B: 'kubejs:asteroid_gravel'
    }) 

    event.shaped('kubejs:hard_asteroid_stone', [
      'AA ',
      'AA '
    ], {
      A: 'kubejs:asteroid_stone'
    })

    event.recipes.gtceu.rock_breaker('rock_dupe_asteroid_hard')
      .notConsumable('kubejs:hard_asteroid_stone')
      .itemOutputs('kubejs:hard_asteroid_stone')
      .adjacentFluids('minecraft:water', 'minecraft:lava')
      .duration(16)
      .EUt(7)

    event.recipes.gtceu.rock_breaker('rock_dupe_asteroid_cobble')
      .notConsumable('kubejs:cobbled_asteroid_stone')
      .itemOutputs('kubejs:cobbled_asteroid_stone')
      .adjacentFluids('minecraft:water', 'minecraft:lava')
      .duration(16)
      .EUt(7)

    event.recipes.gtceu.rock_breaker('rock_dupe_asteroid_stone')
      .notConsumable('kubejs:asteroid_stone')
      .itemOutputs('kubejs:asteroid_stone')      
      .adjacentFluids('minecraft:water', 'minecraft:lava')
      .duration(16)
      .EUt(7)


    //clay, fireclay, and coke brick recipes
    event.shaped(Item.of('8x gtceu:compressed_fireclay'), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        'A': 'gtceu:fireclay_dust',
        'B': 'gtceu:brick_wooden_form'
    }).keepIngredient('gtceu:brick_wooden_form')

    event.shaped('4x minecraft:clay', [
      'BBB',
      'BAB',
      'BBB'
    ], {
      A: 'minecraft:water_bucket',
      B: '#forge:sand'
    }).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')

    event.recipes.create.pressing('gtceu:compressed_fireclay', 'gtceu:fireclay_dust')

    event.recipes.farmersdelight.cutting('#forge:sand', '#forge:tools/shovels', ['minecraft:clay_ball', 'minecraft:clay_ball'])

    event.campfireCooking('minecraft:brick', 'minecraft:clay_ball', 0, 80)
    event.campfireCooking('gtceu:firebrick', 'gtceu:compressed_fireclay', 0, 80)
    event.campfireCooking('gtceu:coke_oven_brick', 'gtceu:compressed_coke_clay', 0, 80)

});