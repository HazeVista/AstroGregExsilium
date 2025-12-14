
//#region items

ServerEvents.tags('item', event => {



    //#region remove item tags
    const itemsToStrip = [
        'ad_astra:steel_rod', 'ad_astra:steel_block', 'ad_astra:steel_plate',
        'ad_astra:steel_nugget', 'ad_astra:steel_ingot', 'ad_astra:iron_rod',
        'ad_astra:iron_plate', 'ad_astra:iron_nugget', 'ad_astra:moon_desh_ore',
        'ad_astra:deepslate_desh_ore', 'ad_extendra:raw_plutonium',
        'ad_extendra:plutonium_nugget', 'ad_extendra:uraninium_nugget',
        'ad_extendra:uraninium_ingot', 'ad_extendra:uraninium_plate',
        'ad_extendra:raw_uranium', 'ad_extendra:uranium_ingot',
        'ad_extendra:uranium_nugget', 'gtceu:skystone_dust',
        'create:iron_plate', 'create:iron_sheet', 'create:brass_sheet',
        'create:copper_sheet', 'create:golden_sheet', 'create:brass_ingot',
        'create:brass_nugget', 'create:zinc_nugget', 'create:zinc_ingot',
        'create:dough', 'create:red_sand_paper', 'createaddition:zinc_sheet',
        'createaddition:zinc_nugget', 'createaddition:electrum_sheet',
        'createaddition:electrum_nugget', 'createaddition:electrum_ingot',
        'createaddition:copper_rod', 'createaddition:gold_rod',
        'createaddition:iron_rod', 'createaddition:electrum_rod',
        'createaddition:electrum_block', 'createaddition:brass_rod',
        'createaddition:diamond_grit', 'createaddition:diamond_grit_sandpaper',
        'farmersdelight:wheat_dough', 'powah:uraninite_raw',
        'ae2:ender_dust', 'powah:crystal_niotic',
        'powah:crystal_spirited', 'powah:crystal_blazing',
        'powah:crystal_nitro', 'ad_extendra:glacian_sapling',
        'create:blaze_cake', 'create:creative_blaze_cake',
        'create:blaze_cake_base', 'createaddition:cake_base',
        'createaddition:cake_base_baked', 'create:builders_tea',
        'createaddition:bioethanol_bucket', 'botania:mana_glass',
        'botania:elf_glass', 'botania:mana_glass_pane',
        'botania:elf_glass_pane', 'gtceu:wood_plate',
        'gtceu:treated_wood_plate', 'ae2:certus_quartz_crystal',
        'botania:bifrost_perm', 'create:powdered_obsidian',
        'create:sturdy_sheet', 'ad_extendra:uranium_plate',
        'ad_extendra:plutonium_ingot', 'ad_extendra:neptunium_ingot',
        'ad_astra:wrench', 'powah:wrench', 'ad_extendra:neptunium_nugget',
        'ad_extendra:plutonium_block', 'ad_extendra:neptunium_block',
        'ae2:certus_quartz_dust', 'ad_extendra:juperium_ingot',
        'ad_extendra:juperium_plate', 'ad_extendra:saturlyte_ingot',
        'ad_extendra:saturlyte_plate', 'delightful:source_berry_cookie',
        'astrogreg:small_sky_stone_dust', 'astrogreg:tiny_sky_stone_dust',
        'expandedae:dual_cell_housing', 'expandedae:mega_dual_cell_housing'
    ]

        //wildcard removals
        event.removeAllTagsFrom(/farmersdelight:.*_knife/)
        event.removeAllTagsFrom(/botania:rune_.*/)
        event.removeAllTagsFrom(/delightful:.*_knife/)

    //#endregion
    


    //#region add item tags
    const itemTagAdditions = {
        'botania:elvenwood': 
            ['botanicadds:elvenwood', 'botanicadds:elvenwood_log'],

        'minecraft:logs_that_burn': 
            ['botanicadds:elvenwood', 'botanicadds:elvenwood_log'],

        'minecraft:logs': 
            ['botanicadds:elvenwood', 'botanicadds:elvenwood_log'],

        'forge:lenses': 
            ['botania:lens_normal', 'botania:terra_lens', 'botania:pixie_lens', 'botania:gaia_lens'],
            
        'forge:rods/wooden': 
            ['botania:livingwood_twig'],

        'botania:runes': 
            ['botania:air_rune', 'botania:fire_rune', 'botania:water_rune',
            'botania:earth_rune', 'botania:spring_rune', 'botania:summer_rune',
            'botania:autumn_rune', 'botania:winter_rune', 'botania:mana_rune',
            'botania:lust_rune', 'botania:gluttony_rune', 'botania:greed_rune',
            'botania:sloth_rune', 'botania:wrath_rune', 'botania:envy_rune',
            'botania:pride_rune', 'botania:energy_rune', 'botania:space_rune',
            'botania:life_rune', 'botania:gaia_rune'],

        'forge:grass': 
            ['minecraft:grass', 'farmersdelight:sandy_shrub', 'minecraft:tall_grass'],

        'forge:fruit_slice': 
            ['minecraft:melon_slice', 'farmersdelight:melon_slice', 'farmersdelight:apple_slice'],

        'forge:fruits':
            ['farmersdelight:apple_slice'],
            
        'forge:fruits/sweet':
            ['farmersdelight:apple_slice'],
        
        'c:glass_panes': 
            ['botania:managlass_pane'],
            
        'trashcans:trash_cans': 
            ['trashcans:liquid_trash_can', 'trashcans:energy_trash_can',
            'trashcans:item_trash_can', 'trashcans:ultimate_trash_can'],

        'create:pulpifiable': 
            ['farmersdelight:tree_bark'],

        'forge:meat': 
            ['minecraft:beef', 'minecraft:chicken', 'minecraft:mutton',
            'minecraft:porkchop', 'minecraft:rabbit', 'delightful:raw_goat'],

        'forge:meat_small': ['farmersdelight:minced_beef', 'farmersdelight:chicken_cuts',
            'farmersdelight:bacon', 'farmersdelight:cod_slice',
            'farmersdelight:salmon_slice', 'farmersdelight:mutton_chops'],

        'forge:sweetener': ['minecraft:sugar']
    }
    //#endregion

    //modular circuits
    const tiers = ['ulv', 'lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv', 'uhv'];
    tiers.forEach(tier => {event.add(`gtceu:circuits/${tier}`, `astrogreg:${tier}_modular_circuit`)})

    //helpers
    itemsToStrip.forEach(item => event.removeAllTagsFrom(item))

    Object.entries(itemTagAdditions).forEach(([tag, items]) => {items.forEach(item => event.add(tag, item))})

})
//#endregion



//#region blocks
ServerEvents.tags('block', event => {



    //#region remove block tags
    const blocksToStrip = [
        'ad_extendra:raw_plutonium_block', 'ad_extendra:plutonium_block',
        'ad_extendra:uraninium_block', 'ad_extendra:raw_uranium_block',
        'createaddition:electrum_block'
    ]
    //#endregion



    //#region add block tags
    const blockTagAdditions = {
        
    }
    //#endregion 



    //helpers
    blocksToStrip.forEach(block => event.removeAllTagsFrom(block))
    
    Object.entries(blockTagAdditions).forEach(([tag, items]) => {
        items.forEach(item => event.add(tag, item))
    })

})
//#endregion



//#region fluids
ServerEvents.tags('fluid', event => {



    //#region remove fluid tags
    const fluidsToStrip = [
        'ad_astra:hydrogen', 'ad_astra:cryo_fuel', 'ad_astra:oxygen',
        'ad_astra:oil', 'ad_astra:fuel', 'createaddition:bioethanol',
        'createaddition:seed_oil'
    ]



    //#region remove single fluid tag
    const fluidTagRemovals = {
        'create:bottomless/allow':
            ['minecraft:lava', 'minecraft:water']
    }
    //#endregion
    //#endregion



    //#region add fluid tags
    const fluidTagAdditions = [

    ]
    //#endregion 


    
    //helpers
    fluidsToStrip.forEach(fluid => event.removeAllTagsFrom(fluid));

    Object.entries(fluidTagAdditions).forEach(([tag, items]) => {items.forEach(item => event.add(tag, item))})
    Object.entries(fluidTagRemovals).forEach(([tag, items]) => {items.forEach(item => event.remove(tag, item))})

})
//#endregion