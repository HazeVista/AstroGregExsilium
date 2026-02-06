ServerEvents.recipes(event => {

  const gt = event.recipes.gtceu

    //#region misc
    event.shapeless('minecraft:farmland', ['#minecraft:hoe', 'minecraft:dirt'])
    event.shapeless('gtceu:tin_alloy_dust', ['gtceu:iron_dust', 'gtceu:tin_dust'])

    gt.assembler('till_dirt')
      .itemInputs('minecraft:dirt')
      .itemOutputs('minecraft:farmland')
      .duration(20)
      .EUt(1)

    event.shaped('gtceu:rubber_plate', [
      'A',
      'B',
      'B'
    ] , {
      A: '#forge:tools/hammers',
      B: 'gtceu:rubber_ingot'
    })

    gt.shaped('gtceu:ulv_machine_hull', [
      'ABA',
      'CDC'
    ], {
      A: 'gtceu:wood_plate',
      B: 'gtceu:wrought_iron_plate',
      C: 'gtceu:red_alloy_single_cable',
      D: 'gtceu:ulv_machine_casing'
    })
    .addMaterialInfo()

    gt.alloy_smelter('alloy_smelter_rose_quartz')
      .itemInputs('minecraft:quartz', '4x minecraft:redstone')
      .itemOutputs('create:rose_quartz')
      .duration(50)
      .EUt(30)

    event.campfireCooking('minecraft:glass', 'gtceu:glass_dust', 0, 160)
    event.campfireCooking('gtceu:wrought_iron_ingot', 'minecraft:iron_ingot', 0, 160)
    event.campfireCooking('gtceu:tempered_glass', 'minecraft:glass', 0, 600)
    event.campfireCooking('minecraft:paper', 'create:pulp', 0, 200)

    event.smelting('astrogreg:asteroid_stone', 'astrogreg:cobbled_asteroid_stone')
    event.smelting('astrogreg:smooth_asteroid_stone', 'astrogreg:asteroid_stone')
    event.smelting('minecraft:glass', 'gtceu:glass_dust')

    // removed due to being too simple and unrealistic
    // event.shaped('4x create:pulp', [
    // 'AAA',
    // 'ABA',
    // 'AAA'
    // ], {
    // A: 'gtceu:paper_dust',
    // B: 'minecraft:water_bucket'
    // }).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')

    //event.shaped('2x minecraft:paper', [
    //  'AAA'
    //], {
    //  A: 'farmersdelight:tree_bark'
    //});

    event.shaped('3x dustrial_decor:gold_chain', [
      ' A ',
      'BA ',
      ' A '
    ], {
      A: 'gtceu:gold_ring',
      B: '#forge:tools/wrenches'
    })

    gt.assembler('assemble_gold_chain')
        .itemInputs('3x gtceu:gold_ring')
        .itemOutputs('9x dustrial_decor:gold_chain')
        .duration(40)
        .EUt(10)

    gt.mixer('mixing_energized_steel_dust')
        .itemInputs('astrogreg:desh_dust', 'gtceu:iron_dust', 'gtceu:red_alloy_dust')
        .itemOutputs('astrogreg:energized_steel_dust')
        .duration(200)
        .EUt(7)

    event.shaped('gtceu:nether_quartz_dust', [
      'A',
      'B'
    ], {
      A: 'minecraft:nether_quartz',
      B: '#forge:tools/mortars'
    })

    event.shaped('gtceu:paper_dust', [
      'A',
      'B'
    ], {
      A: '#create:pulpifiable',
      B: '#forge:tools/mortars'
    })

    gt.macerator('macerate_paper_dust')
      .itemInputs('#create:pulpifiable')
      .itemOutputs('gtceu:paper_dust')
      .duration(98)
      .EUt(2)

    gt.compressor('compress_pulp')
      .itemInputs('create:pulp')
      .itemOutputs('minecraft:paper')
      .duration(80)
      .EUt(4)
    
    event.recipes.farmersdelight.cooking( 
      ['gtceu:paper_dust', 'gtceu:paper_dust', 
        'gtceu:paper_dust', 'gtceu:paper_dust', 'minecraft:water_bucket'], 
      '4x create:pulp', 
      0, 
      160, 
    )         

    gt.macerator('macerate_meat')
      .itemInputs('#forge:meat')
      .itemOutputs('gtceu:meat_dust')
      .chancedOutput('gtceu:meat_dust', 5000, 0)
      .itemOutputs('gtceu:tiny_bone_dust')
      .duration(102)
      .EUt(2)

    gt.macerator('macerate_meat_small')
      .itemInputs('#forge:meat_small')
      .itemOutputs('gtceu:meat_dust', 'gtceu:tiny_bone_dust')
      .duration(102)
      .EUt(2)    
      
    gt.compressor('compress_plant_ball')
      .itemInputs('8x #forge:crops')
      .itemOutputs('gtceu:plant_ball')
      .duration(300)
      .EUt(2)

    gt.compressor('compress_straw_plant_ball')
      .itemInputs('8x farmersdelight:straw')
      .itemOutputs('gtceu:plant_ball')
      .duration(300)
      .EUt(2)

    gt.shaped('astrogreg:polyamide_imide_ring', [
      'A',
      'B'
    ], {
      A: '#forge:tools/knives',
      B: 'astrogreg:polyamide_imide_plate'
    })
    //#endregion

    

    //#region gt delight
    event.recipes.farmersdelight.cooking(
      ['gtceu:raw_rubber_dust', 'gtceu:raw_rubber_dust', 'gtceu:raw_rubber_dust', 'gtceu:sulfur_dust'],
      'gtceu:formed_rubber_ingot',
      0,
      100,
      'gtceu:brick_wooden_form'
    )

    event.recipes.farmersdelight.cooking(
      ['astrogreg:desh_dust', 'gtceu:iron_dust', 'gtceu:red_alloy_dust'],
      'gtceu:formed_energized_steel_ingot',
      0,
      100,
      'gtceu:brick_wooden_form'
    )

    event.shapeless('gtceu:rubber_ingot', 'gtceu:formed_rubber_ingot').replaceIngredient('gtceu:formed_rubber_ingot', 'gtceu:brick_wooden_form')
    event.shapeless('3x powah:steel_energized', 'gtceu:formed_energized_steel_ingot').replaceIngredient('gtceu:formed_energized_steel_ingot', 'gtceu:brick_wooden_form')

    gt.shaped('farmersdelight:stove', [
      'CCC',
      'A A',
      'ABA'
    ], {
      A: 'gtceu:firebrick',
      B: 'minecraft:campfire',
      C: 'gtceu:wrought_iron_plate'
    })
    .addMaterialInfo()

    gt.shaped('farmersdelight:skillet', [
      ' BB',
      ' BB',
      'A  '
    ], {
      A: 'gtceu:bronze_rod',
      B: 'gtceu:wrought_iron_plate'
    })
    .addMaterialInfo()

    gt.shaped('farmersdelight:cooking_pot', [
      'C C',
      'ABA',
      'AAA'
    ], {
      A: 'gtceu:wrought_iron_plate',
      B: 'minecraft:bucket',
      C: 'gtceu:bronze_rod'
    })
    .addMaterialInfo()
    //#endregion



    //#region water source
    gt.water_source('pump_water')
        .circuit(0)
        .outputFluids(Fluid.of('minecraft:water', 1000))
        .duration(20)
        
    gt.water_source('pump_water_alt')
        .circuit(1)
        .outputFluids(Fluid.of('minecraft:water', 100))
        .duration(2)

    gt.shaped('gtceu:ulv_water_source', [
        'ABA',
        'CDC',
        'ABA'
    ], {
      A: 'gtceu:wrought_iron_plate',
      B: 'gtceu:tempered_glass',
      C: 'minecraft:water_bucket',
      D: 'gtceu:wood_drum'
    })
    .replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
    .addMaterialInfo()
    //#endregion



    //#region stone crushing 
    event.recipes.farmersdelight.cutting('minecraft:cobblestone', '#forge:tools/hammers', 'minecraft:gravel')
    event.recipes.farmersdelight.cutting('astrogreg:cobbled_asteroid_stone', '#forge:tools/pickaxes', 'astrogreg:asteroid_gravel')
    event.recipes.farmersdelight.cutting('astrogreg:asteroid_stone', '#forge:tools/pickaxes', 'astrogreg:cobbled_asteroid_stone')
    event.recipes.farmersdelight.cutting('astrogreg:asteroid_gravel', '#forge:tools/hammers', ['astrogreg:asteroid_sand', Item.of('minecraft:flint').withChance(0.2)])
    event.recipes.farmersdelight.cutting('minecraft:gravel', '#forge:tools/hammers', ['minecraft:sand', Item.of('minecraft:flint').withChance(0.2)])

    gt.forge_hammer('forge_hammer_andesite')
        .itemInputs('minecraft:andesite')
        .itemOutputs('gtceu:andesite_dust')
        .duration(10)
        .EUt(16)

    gt.forge_hammer('forge_hammer_sand')
        .itemInputs('minecraft:gravel')
        .itemOutputs('minecraft:sand')
        .duration(10)
        .EUt(16)  

    gt.forge_hammer('forge_hammer_gravel')
        .itemInputs('minecraft:cobblestone')
        .itemOutputs('minecraft:gravel')
        .duration(10)
        .EUt(16)  

    gt.forge_hammer('forge_hammer_asteroid_sand')
        .itemInputs('astrogreg:asteroid_gravel')
        .itemOutputs('astrogreg:asteroid_sand')
        .duration(10)
        .EUt(16)

    gt.macerator('macerator_asteroid_flint')
        .itemInputs('astrogreg:asteroid_gravel')
        .itemOutputs('astrogreg:asteroid_stone_dust')
        .chancedOutput('minecraft:flint', 3300, 0)
        .duration(400)
        .EUt(2)

    gt.macerator('macerator_flint')
        .itemInputs('minecraft:gravel')
        .itemOutputs('gtceu:stone_dust')
        .chancedOutput('minecraft:flint', 3300, 0)
        .duration(400)
        .EUt(2)

    gt.forge_hammer('forge_hammer_asteroid_gravel')
        .itemInputs('astrogreg:cobbled_asteroid_stone')
        .itemOutputs('astrogreg:asteroid_gravel')
        .duration(10)
        .EUt(16)

    gt.forge_hammer('forge_hammer_asteroid_cobble')
        .itemInputs('astrogreg:asteroid_stone')
        .itemOutputs('astrogreg:cobbled_asteroid_stone')
        .duration(10)
        .EUt(16)

    gt.forge_hammer('forge_hammer_asteroid_stone')
        .itemInputs('astrogreg:hard_asteroid_stone')
        .itemOutputs('astrogreg:asteroid_stone')
        .duration(10)
        .EUt(16)

    gt.macerator('macerator_asteroid_dust')
        .itemInputs('astrogreg:hard_asteroid_stone')
        .itemOutputs('astrogreg:asteroid_stone_dust')
        .duration(98)
        .EUt(2)

    gt.macerator('macerator_asteroid_dust_1')
        .itemInputs('astrogreg:asteroid_stone')
        .itemOutputs('astrogreg:asteroid_stone_dust')
        .duration(98)
        .EUt(2)

    gt.macerator('macerator_asteroid_dust_2')
        .itemInputs('astrogreg:smooth_asteroid_stone')
        .itemOutputs('astrogreg:asteroid_stone_dust')
        .duration(98)
        .EUt(2)

    gt.macerator('macerator_asteroid_dust_3')
        .itemInputs('astrogreg:cobbled_asteroid_stone')
        .itemOutputs('astrogreg:asteroid_stone_dust')
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
    
    event.shaped('astrogreg:asteroid_gravel', [
      'A',
      'B'
    ], {
      A: '#forge:tools/hammers',
      B: 'astrogreg:cobbled_asteroid_stone'
    })    

    event.shaped('astrogreg:asteroid_sand', [
      'A',
      'B'
    ], {
      A: '#forge:tools/hammers',
      B: 'astrogreg:asteroid_gravel'
    }) 

    event.shaped('astrogreg:hard_asteroid_stone', [
      'AA ',
      'AA '
    ], {
      A: 'astrogreg:asteroid_stone'
    })

    gt.rock_breaker('rock_dupe_asteroid_hard')
      .notConsumable('astrogreg:hard_asteroid_stone')
      .itemOutputs('astrogreg:hard_asteroid_stone')
      .adjacentFluids('minecraft:water', 'minecraft:lava')
      .duration(16)
      .EUt(7)

    gt.rock_breaker('rock_dupe_asteroid_cobble')
      .notConsumable('astrogreg:cobbled_asteroid_stone')
      .itemOutputs('astrogreg:cobbled_asteroid_stone')
      .adjacentFluids('minecraft:water', 'minecraft:lava')
      .duration(16)
      .EUt(7)

    gt.rock_breaker('rock_dupe_asteroid_stone')
      .notConsumable('astrogreg:asteroid_stone')
      .itemOutputs('astrogreg:asteroid_stone')      
      .adjacentFluids('minecraft:water', 'minecraft:lava')
      .duration(16)
      .EUt(7)

    gt.shaped('astrogreg:coke_oven', [
      'ABA',
      'BCB',
      'ABA'
    ], {
      A: 'gtceu:coke_oven_bricks',
      B: 'gtceu:iron_plate',
      C: '#forge:tools/wrenches'
    })
    .addMaterialInfo()
    //#endregion

      

    //#region clay & bricks
    event.recipes.botania.pure_daisy('minecraft:clay', '#minecraft:smelts_to_glass', 75)

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
      B: '#minecraft:smelts_to_glass'
    }).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')

    event.recipes.create.pressing('gtceu:compressed_fireclay', 'gtceu:fireclay_dust')
    event.recipes.create.pressing('astrogreg:compressed_livingclay', 'astrogreg:livingclay_dust')
    event.recipes.create.pressing('gtceu:compressed_clay', 'minecraft:clay_ball')

    event.recipes.farmersdelight.cutting('#minecraft:smelts_to_glass', '#forge:tools/shovels', ['minecraft:clay_ball', 'minecraft:clay_ball'])

    event.campfireCooking('minecraft:brick', 'gtceu:compressed_clay', 0, 80)
    event.campfireCooking('gtceu:firebrick', 'gtceu:compressed_fireclay', 0, 80)
    event.campfireCooking('astrogreg:livingbrick', 'astrogreg:compressed_livingclay', 0, 80)
    event.campfireCooking('gtceu:coke_oven_brick', 'gtceu:compressed_coke_clay', 0, 80)

    event.shaped('8x gtceu:compressed_clay', [
      'AAA',
      'ABA',
      'AAA'
    ], {
      A: 'minecraft:clay_ball',
      B: 'gtceu:brick_wooden_form'
    }).keepIngredient('gtceu:brick_wooden_form')

    gt.compressor('compress_clay_ball')
      .itemInputs('minecraft:clay_ball')
      .itemOutputs('gtceu:compressed_clay')
      .duration(80)
      .EUt(4)
    
    gt.compressor('compress_clay_dust')
      .itemInputs('gtceu:clay_dust')
      .itemOutputs('gtceu:compressed_clay')
      .duration(80)
      .EUt(4)

    gt.macerator('macerate_livingrock')
      .itemInputs('botania:livingrock')
      .itemOutputs('astrogreg:livingrock_dust')
      .duration(98)
      .EUt(2)

    gt.macerator('macerate_livingbrick')
      .itemInputs('astrogreg:livingbrick')
      .itemOutputs('astrogreg:livingclay_dust')
      .duration(98)
      .EUt(2)
      
    gt.macerator('macerate_livingbrick_alt')
      .itemInputs('astrogreg:livingbricks')
      .itemOutputs('4x astrogreg:livingclay_dust')
      .duration(98)
      .EUt(2)
      
    gt.macerator('macerate_livingbrick_alt1')
      .itemInputs('astrogreg:compressed_livingclay')
      .itemOutputs('astrogreg:livingclay_dust')
      .duration(98)
      .EUt(2)

    gt.compressor('compress_livingbrick')
      .itemInputs('astrogreg:livingclay_dust')
      .itemOutputs('astrogreg:compressed_livingclay')
      .duration(80)
      .EUt(4)
    
    event.shaped('astrogreg:livingrock_dust', [
      'A',
      'B'
    ], {
      A: 'botania:livingrock',
      B: '#forge:tools/mortars'
    })

    event.shapeless('2x astrogreg:livingclay_dust', ['astrogreg:livingrock_dust', 'gtceu:clay_dust'])

    event.shaped('astrogreg:livingbricks', [
      'AA',
      'AA'
    ], {
      A: 'astrogreg:livingbrick'
    })

    event.shaped('8x astrogreg:compressed_livingclay', [
      'AAA',
      'ABA',
      'AAA'
    ], {
      A: 'astrogreg:livingclay_dust',
      B: 'gtceu:brick_wooden_form'
    }).keepIngredient('gtceu:brick_wooden_form')

    gt.extractor('extract_livingbricks')
      .itemInputs('astrogreg:livingbricks')
      .itemOutputs('4x astrogreg:livingbrick')
      .duration(300)
      .EUt(2)

    gt.compressor('compress_livingbricks')
      .itemInputs('4x astrogreg:livingbrick')
      .itemOutputs('astrogreg:livingbricks')
      .duration(300)
      .EUt(2)

    gt.alloy_smelter('smelt_livingbrick')
      .itemInputs('astrogreg:livingrock_dust', 'gtceu:clay_dust')
      .itemOutputs('2x astrogreg:livingbrick')
      .duration(150)
      .EUt(7)

    event.smelting('astrogreg:livingbrick', 'astrogreg:compressed_livingclay')
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

    gt.extractor('extract_lava_from_stone')
      .itemInputs('#minecraft:stone_crafting_materials')
      .outputFluids('minecraft:lava 250')
      .duration(80)
      .EUt(2)

    event.recipes.create.mixing(Fluid.of('minecraft:lava', 250), '#minecraft:stone_crafting_materials').heatRequirement('lowheated')
    //#endregion

    

    //#region damascus steel
    gt.primitive_blast_furnace('dam_steel_charcoal')
        .itemInputs('gtceu:steel_ingot', 'minecraft:charcoal')
        .itemOutputs('gtceu:damascus_steel_ingot', 'gtceu:tiny_dark_ash_dust')
        .duration(1200)

    gt.primitive_blast_furnace('dam_steel_coal')
        .itemInputs('gtceu:steel_ingot', 'minecraft:coal')
        .itemOutputs('gtceu:damascus_steel_ingot', 'gtceu:tiny_dark_ash_dust')
        .duration(1200)

    gt.primitive_blast_furnace('dam_steel_coke')
        .itemInputs('gtceu:steel_ingot', 'gtceu:coke_gem')
        .itemOutputs('gtceu:damascus_steel_ingot', 'gtceu:tiny_dark_ash_dust')
        .duration(900)

    gt.primitive_blast_furnace('dam_steel_charcoal_dust')
        .itemInputs('gtceu:steel_ingot', 'gtceu:charcoal_dust')
        .itemOutputs('gtceu:damascus_steel_ingot', 'gtceu:tiny_dark_ash_dust')
        .duration(1200)

    gt.primitive_blast_furnace('dam_steel_coal_dust')
        .itemInputs('gtceu:steel_ingot', 'gtceu:coal_dust')
        .itemOutputs('gtceu:damascus_steel_ingot', 'gtceu:tiny_dark_ash_dust')
        .duration(1200)

    gt.primitive_blast_furnace('dam_steel_coke_dust')
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

    gt.cutter('cut_planks')
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

    gt.cutter('cut_planks_treated')
      .itemInputs('gtceu:treated_wood_planks')
      .itemOutputs('2x gtceu:treated_wood_plate')
      .duration(200)
      .EUt(2)

    //#endregion



    //#region mortars
    const botMetals = [
      ['botania:manasteel_ingot', 'manasteel'], 
      ['botania:elementium_ingot', 'elementium'], 
      ['botania:terrasteel_ingot', 'terrasteel'], 
      ['botanicadds:gaiasteel_ingot', 'gaiasteel']
    ]

    botMetals.forEach(([id, metal]) => {
      gt.shaped(`gtbotania:${metal}_mortar`, [
        ' A ',
        'BAB',
        'BBB'
      ], {
        A: id,
        B: '#forge:stone'
      })
    })
    //#endregion
})