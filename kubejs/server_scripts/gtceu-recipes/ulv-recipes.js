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

  event.campfireCooking('gtceu:glass_dust', 'minecraft:glass', 0, 160)
  event.campfireCooking('minecraft:iron_ingot', 'gtceu:wrought_iron_ingot', 0, 160)

  event.recipes.farmersdelight.cooking(
    ['3x gtceu:raw_rubber_pulp', 'gtceu:sulfur_dust'],
    'gtceu:rubber_ingot',
    0,
    320,
    'gtceu:brick_wooden_form'
    );

  event.recipes.farmersdelight.cooking(
    ['gtceu:desh_dust', 'gtceu:iron_dust', 'gtceu:red_alloy_dust'],
    '3x powah:energized_steel',
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
      'A'
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

    event.recipes.gtceu.mixer('mixing_energized_steel_dust')
        .itemInputs('gtceu:desh_dust', 'gtceu:iron_dust', 'gtceu:red_alloy_dust')
        .itemOutputs('gtceu:energized_steel_dust')
        .duration(200)
        .EUt(7)

});