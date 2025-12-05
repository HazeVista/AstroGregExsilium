ServerEvents.recipes(event => {
    //need to add ways to get lava. bucket + stone in farmers, extractor stone for steam age, create basin with stone too

    //#region misc
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
    event.campfireCooking('gtceu:tempered_glass', 'minecraft:glass', 0, 600)

    event.smelting('gtceu:asteroid_stone', 'gtceu:cobbled_asteroid_stone')
    event.smelting('gtceu:smooth_asteroid_stone', 'gtceu:asteroid_stone')
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

    // event.shaped('gtceu:desh_plate', [
    //   'A',
    //   'B',
    //   'B'
    // ], {
    //   A: '#forge:tools/hammers',
    //   B: 'ad_astra:desh_ingot'
    // })

    event.shaped('3x dustrial_decor:gold_chain', [
      ' A ',
      'BA ',
      ' A '
    ], {
      A: 'gtceu:gold_ring',
      B: '#forge:tools/wrenches'
    })

    event.recipes.gtceu.assembler('assemble_gold_chain')
        .itemInputs('3x gtceu:gold_ring')
        .itemOutputs('9x dustrial_decor:gold_chain')
        .duration(40)
        .EUt(10)

    event.recipes.gtceu.mixer('mixing_energized_steel_dust')
        .itemInputs('astrogreg:desh_dust', 'gtceu:iron_dust', 'gtceu:red_alloy_dust')
        .itemOutputs('gtceu:energized_steel_dust')
        .duration(200)
        .EUt(7)

    event.shaped('gtceu:nether_quartz_dust', [
      'A',
      'B'
    ], {
      A: 'minecraft:nether_quartz',
      B: '#forge:tools/mortars'
    })
    //#endregion



    //#region water source
    event.recipes.gtceu.water_source('pump_water')
        .circuit(0)
        .outputFluids(Fluid.of('minecraft:water', 1000))
        .duration(20)
        
    event.recipes.gtceu.water_source('pump_water_alt')
        .circuit(1)
        .outputFluids(Fluid.of('minecraft:water', 100))
        .duration(2)

    event.shaped('gtceu:ulv_water_source', [
        'ABA',
        'CDC',
        'ABA'
    ], {
      A: 'gtceu:wrought_iron_plate',
      B: 'gtceu:tempered_glass',
      C: 'minecraft:water_bucket',
      D: 'gtceu:wood_drum'
    }).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
    //#endregion



    //#region stone crushing 
    event.recipes.farmersdelight.cutting('minecraft:cobblestone', '#forge:tools/hammers', 'minecraft:gravel')
    event.recipes.farmersdelight.cutting('gtceu:cobbled_asteroid_stone', '#forge:tools/pickaxes', 'gtceu:asteroid_gravel')
    event.recipes.farmersdelight.cutting('gtceu:asteroid_stone', '#forge:tools/pickaxes', 'gtceu:cobbled_asteroid_stone')
    event.recipes.farmersdelight.cutting('gtceu:asteroid_gravel', '#forge:tools/hammers', ['gtceu:asteroid_sand', Item.of('minecraft:flint').withChance(0.2)])
    event.recipes.farmersdelight.cutting('minecraft:gravel', '#forge:tools/hammers', ['minecraft:sand', Item.of('minecraft:flint').withChance(0.2)])

    event.recipes.gtceu.forge_hammer('forge_hammer_andesite')
        .itemInputs('minecraft:andesite')
        .itemOutputs('gtceu:andesite_dust')
        .duration(10)
        .EUt(16)

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
        .itemInputs('gtceu:asteroid_gravel')
        .itemOutputs('gtceu:asteroid_sand')
        .duration(10)
        .EUt(16)

    event.recipes.gtceu.macerator('macerator_asteroid_flint')
        .itemInputs('gtceu:asteroid_gravel')
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
        .itemInputs('gtceu:cobbled_asteroid_stone')
        .itemOutputs('gtceu:asteroid_gravel')
        .duration(10)
        .EUt(16)

    event.recipes.gtceu.forge_hammer('forge_hammer_asteroid_cobble')
        .itemInputs('gtceu:asteroid_stone')
        .itemOutputs('gtceu:cobbled_asteroid_stone')
        .duration(10)
        .EUt(16)

    event.recipes.gtceu.forge_hammer('forge_hammer_asteroid_stone')
        .itemInputs('gtceu:hard_asteroid_stone')
        .itemOutputs('gtceu:asteroid_stone')
        .duration(10)
        .EUt(16)

    event.recipes.gtceu.macerator('macerator_asteroid_dust')
        .itemInputs('gtceu:hard_asteroid_stone')
        .itemOutputs('gtceu:asteroid_stone_dust')
        .duration(98)
        .EUt(2)

    event.recipes.gtceu.macerator('macerator_asteroid_dust_1')
        .itemInputs('gtceu:asteroid_stone')
        .itemOutputs('gtceu:asteroid_stone_dust')
        .duration(98)
        .EUt(2)

    event.recipes.gtceu.macerator('macerator_asteroid_dust_2')
        .itemInputs('gtceu:smooth_asteroid_stone')
        .itemOutputs('gtceu:asteroid_stone_dust')
        .duration(98)
        .EUt(2)

    event.recipes.gtceu.macerator('macerator_asteroid_dust_3')
        .itemInputs('gtceu:cobbled_asteroid_stone')
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
    
    event.shaped('gtceu:asteroid_gravel', [
      'A',
      'B'
    ], {
      A: '#forge:tools/hammers',
      B: 'gtceu:cobbled_asteroid_stone'
    })    

    event.shaped('gtceu:asteroid_sand', [
      'A',
      'B'
    ], {
      A: '#forge:tools/hammers',
      B: 'gtceu:asteroid_gravel'
    }) 

    event.shaped('gtceu:hard_asteroid_stone', [
      'AA ',
      'AA '
    ], {
      A: 'gtceu:asteroid_stone'
    })

    event.recipes.gtceu.rock_breaker('rock_dupe_asteroid_hard')
      .notConsumable('gtceu:hard_asteroid_stone')
      .itemOutputs('gtceu:hard_asteroid_stone')
      .adjacentFluids('minecraft:water', 'minecraft:lava')
      .duration(16)
      .EUt(7)

    event.recipes.gtceu.rock_breaker('rock_dupe_asteroid_cobble')
      .notConsumable('gtceu:cobbled_asteroid_stone')
      .itemOutputs('gtceu:cobbled_asteroid_stone')
      .adjacentFluids('minecraft:water', 'minecraft:lava')
      .duration(16)
      .EUt(7)

    event.recipes.gtceu.rock_breaker('rock_dupe_asteroid_stone')
      .notConsumable('gtceu:asteroid_stone')
      .itemOutputs('gtceu:asteroid_stone')      
      .adjacentFluids('minecraft:water', 'minecraft:lava')
      .duration(16)
      .EUt(7)
    //#endregion

      

    //#region clay, fireclay, coke
    event.recipes.botania.pure_daisy('minecraft:clay', '#forge:sand', 75)

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
    event.recipes.create.pressing('gtceu:compressed_livingclay', 'gtceu:livingclay_dust')
    event.recipes.create.pressing('gtceu:compressed_clay', 'minecraft:clay_ball')

    event.recipes.farmersdelight.cutting('#forge:sand', '#forge:tools/shovels', ['minecraft:clay_ball', 'minecraft:clay_ball'])

    event.campfireCooking('minecraft:brick', 'gtceu:compressed_clay', 0, 80)
    event.campfireCooking('gtceu:firebrick', 'gtceu:compressed_fireclay', 0, 80)
    event.campfireCooking('gtceu:livingbrick', 'gtceu:compressed_livingclay', 0, 80)
    event.campfireCooking('gtceu:coke_oven_brick', 'gtceu:compressed_coke_clay', 0, 80)

    event.shaped('8x gtceu:compressed_clay', [
      'AAA',
      'ABA',
      'AAA'
    ], {
      A: 'minecraft:clay_ball',
      B: 'gtceu:brick_wooden_form'
    }).keepIngredient('gtceu:brick_wooden_form')

    event.recipes.gtceu.compressor('compress_clay_ball')
      .itemInputs('minecraft:clay_ball')
      .itemOutputs('gtceu:compressed_clay')
      .duration(80)
      .EUt(4)
    
    event.recipes.gtceu.compressor('compress_clay_dust')
      .itemInputs('gtceu:clay_dust')
      .itemOutputs('gtceu:compressed_clay')
      .duration(80)
      .EUt(4)

    event.recipes.gtceu.macerator('macerate_livingrock')
      .itemInputs('botania:livingrock')
      .itemOutputs('gtceu:livingrock_dust')
      .duration(98)
      .EUt(2)

    event.recipes.gtceu.macerator('macerate_livingbrick')
      .itemInputs('gtceu:livingbrick')
      .itemOutputs('gtceu:livingclay_dust')
      .duration(98)
      .EUt(2)
      
    event.recipes.gtceu.macerator('macerate_livingbrick_alt')
      .itemInputs('gtceu:livingbricks')
      .itemOutputs('4x gtceu:livingclay_dust')
      .duration(98)
      .EUt(2)
      
    event.recipes.gtceu.macerator('macerate_livingbrick_alt1')
      .itemInputs('gtceu:compressed_livingclay')
      .itemOutputs('gtceu:livingclay_dust')
      .duration(98)
      .EUt(2)

    event.recipes.gtceu.compressor('compress_livingbrick')
      .itemInputs('gtceu:livingclay_dust')
      .itemOutputs('gtceu:compressed_livingclay')
      .duration(80)
      .EUt(4)
    
    event.shaped('gtceu:livingrock_dust', [
      'A',
      'B'
    ], {
      A: 'botania:livingrock',
      B: '#forge:tools/mortars'
    })

    event.shapeless('2x gtceu:livingclay_dust', ['gtceu:livingrock_dust', 'gtceu:clay_dust'])

    event.shaped('gtceu:livingbricks', [
      'AA',
      'AA'
    ], {
      A: 'gtceu:livingbrick'
    })

    event.shaped('8x gtceu:compressed_livingclay', [
      'AAA',
      'ABA',
      'AAA'
    ], {
      A: 'gtceu:livingclay_dust',
      B: 'gtceu:brick_wooden_form'
    }).keepIngredient('gtceu:brick_wooden_form')

    event.recipes.gtceu.extractor('extract_livingbricks')
      .itemInputs('gtceu:livingbricks')
      .itemOutputs('4x gtceu:livingbrick')
      .duration(300)
      .EUt(2)

    event.smelting('gtceu:livingbrick', 'gtceu:compressed_livingclay')
    //#endregion



    //#region lava
    event.recipes.farmersdelight.cooking(
      ['#minecraft:stone_crafting_materials', '#minecraft:stone_crafting_materials', 
        '#minecraft:stone_crafting_materials', '#minecraft:stone_crafting_materials'],
      'minecraft:lava_bucket',
      0,
      160,
      'minecraft:bucket'
    )

    event.recipes.gtceu.extractor('extract_lava_from_stone')
      .itemInputs('#minecraft:stone_crafting_materials')
      .outputFluids('minecraft:lava 250')
      .duration(80)
      .EUt(2)

    event.recipes.create.mixing(Fluid.of('minecraft:lava', 250), '#minecraft:stone_crafting_materials').heatRequirement('lowheated')
    //#endregion

    

    //#region damascus steel
    event.recipes.gtceu.primitive_blast_furnace('dam_steel_charcoal')
        .itemInputs('gtceu:steel_ingot', 'minecraft:charcoal')
        .itemOutputs('gtceu:damascus_steel_ingot', 'gtceu:tiny_dark_ash_dust')
        .duration(1200)

    event.recipes.gtceu.primitive_blast_furnace('dam_steel_coal')
        .itemInputs('gtceu:steel_ingot', 'minecraft:coal')
        .itemOutputs('gtceu:damascus_steel_ingot', 'gtceu:tiny_dark_ash_dust')
        .duration(1200)

    event.recipes.gtceu.primitive_blast_furnace('dam_steel_coke')
        .itemInputs('gtceu:steel_ingot', 'gtceu:coke_gem')
        .itemOutputs('gtceu:damascus_steel_ingot', 'gtceu:tiny_dark_ash_dust')
        .duration(900)

    event.recipes.gtceu.primitive_blast_furnace('dam_steel_charcoal_dust')
        .itemInputs('gtceu:steel_ingot', 'gtceu:charcoal_dust')
        .itemOutputs('gtceu:damascus_steel_ingot', 'gtceu:tiny_dark_ash_dust')
        .duration(1200)

    event.recipes.gtceu.primitive_blast_furnace('dam_steel_coal_dust')
        .itemInputs('gtceu:steel_ingot', 'gtceu:coal_dust')
        .itemOutputs('gtceu:damascus_steel_ingot', 'gtceu:tiny_dark_ash_dust')
        .duration(1200)

    event.recipes.gtceu.primitive_blast_furnace('dam_steel_coke_dust')
        .itemInputs('gtceu:steel_ingot', 'gtceu:coke_dust')
        .itemOutputs('gtceu:damascus_steel_ingot', 'gtceu:tiny_dark_ash_dust')
        .duration(900)

    //#endregion



    //#region wood plates

    event.shaped('2x gtceu:wood_plate', [
      'AB'
    ], {
      A: '#forge:tools/saws',
      B: '#minecraft:planks'
    })

    event.recipes.gtceu.cutter('cut_planks')
      .itemInputs('#minecraft:planks')
      .itemOutputs('2x gtceu:wood_plate')
      .duration(200)
      .EUt(2)

    event.shaped('2x gtceu:treated_wood_plate', [
      'AB'
    ], {
      A: '#forge:tools/saws',
      B: 'gtceu:treated_wood_planks'
    })

    event.recipes.gtceu.cutter('cut_planks_treated')
      .itemInputs('gtceu:treated_wood_planks')
      .itemOutputs('2x gtceu:treated_wood_plate')
      .duration(200)
      .EUt(2)

    //#endregion
});