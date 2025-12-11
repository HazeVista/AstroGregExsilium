ServerEvents.recipes(event => {
    //replace

    //#region input
    event.replaceInput({input: 'create:copper_sheet'}, 'create:copper_sheet', 'gtceu:copper_plate');
    event.replaceInput({input: 'create:zinc_ingot'}, 'create:zinc_ingot', 'gtceu:zinc_ingot');
    event.replaceInput({}, 'botania:redstone_root', 'gtceu:red_alloy_dust')
    event.replaceInput({}, 'ad_astra:steel_rod', 'gtceu:steel_rod')
    event.replaceInput({}, 'ad_astra:iron_rod', 'gtceu:iron_rod')
    event.replaceInput({}, 'minecraft:gravel', '#forge:gravel')
    event.replaceInput({}, 'minecraft:sand', '#forge:sand')
    event.replaceInput({input: 'gtceu:manasteel_ingot'}, 'gtceu:manasteel_ingot','botania:manasteel_ingot');
    event.replaceInput({input: 'gtceu:manasteel_block'}, 'gtceu:manasteel_block','botania:manasteel_block');
    event.replaceInput({input: 'gtceu:manasteel_nugget'}, 'gtceu:manasteel_nugget','botania:manasteel_nugget');
    event.replaceInput({input: 'gtceu:terrasteel_ingot'}, 'gtceu:terrasteel_ingot','botania:terrasteel_ingot');
    event.replaceInput({input: 'gtceu:terrasteel_block'}, 'gtceu:terrasteel_block','botania:terrasteel_block');
    event.replaceInput({input: 'gtceu:terrasteel_nugget'}, 'gtceu:terrasteel_nugget','botania:terrasteel_nugget');
    event.replaceInput({input: 'gtceu:gaiasteel_ingot'}, 'gtceu:gaiasteel_ingot','botanicadds:gaiasteel_ingot');
    event.replaceInput({input: 'gtceu:gaiasteel_block'}, 'gtceu:gaiasteel_block','botanicadds:gaiasteel_block');
    event.replaceInput({input: 'gtceu:gaiasteel_nugget'}, 'gtceu:gaiasteel_nugget','botanicadds:gaiasteel_nugget');
    event.replaceInput({input: 'gtceu:elementium_ingot'}, 'gtceu:elementium_ingot','botania:elementium_ingot');
    event.replaceInput({input: 'gtceu:elementium_block'}, 'gtceu:elementium_block','botania:elementium_block');
    event.replaceInput({input: 'gtceu:elementium_nugget'}, 'gtceu:elementium_nugget','botania:elementium_nugget');
    event.replaceInput({input: 'gtceu:mana_diamond_gem',}, 'gtceu:mana_diamond_gem', 'botania:mana_diamond');
    event.replaceInput({input: 'gtceu:mana_diamond_block',}, 'gtceu:mana_diamond_block', 'botania:mana_diamond_block');
    event.replaceInput({input: 'gtceu:dragonstone_gem'}, 'gtceu:dragonstone_gem', 'botania:dragonstone')
    event.replaceInput({input: 'gtceu:dragonstone_block'}, 'gtceu:dragonstone_block', 'botania:dragonstone_block')
    event.replaceInput({input: 'botania:rune_fire'}, 'botania:rune_fire', 'botania:fire_rune')
    event.replaceInput({input: 'botania:rune_water'}, 'botania:rune_water', 'botania:water_rune')
    event.replaceInput({input: 'botania:rune_air'}, 'botania:rune_air', 'botania:air_rune')
    event.replaceInput({input: 'botania:rune_earth'}, 'botania:rune_earth', 'botania:earth_rune')
    event.replaceInput({input: 'botania:rune_spring'}, 'botania:rune_spring', 'botania:spring_rune')
    event.replaceInput({input: 'botania:rune_summer'}, 'botania:rune_summer', 'botania:summer_rune')
    event.replaceInput({input: 'botania:rune_autumn'}, 'botania:rune_autumn', 'botania:autumn_rune')
    event.replaceInput({input: 'botania:rune_winter'}, 'botania:rune_winter', 'botania:winter_rune')
    event.replaceInput({input: 'botania:rune_mana'}, 'botania:rune_mana', 'botania:mana_rune')
    event.replaceInput({input: 'botania:rune_greed'}, 'botania:rune_greed', 'botania:greed_rune')
    event.replaceInput({input: 'botania:rune_wrath'}, 'botania:rune_wrath', 'botania:wrath_rune')
    event.replaceInput({input: 'botania:rune_pride'}, 'botania:rune_pride', 'botania:pride_rune')
    event.replaceInput({input: 'botania:rune_lust'}, 'botania:rune_lust', 'botania:lust_rune')
    event.replaceInput({input: 'botania:rune_sloth'}, 'botania:rune_sloth', 'botania:sloth_rune')
    event.replaceInput({input: 'botania:rune_gluttony'}, 'botania:rune_gluttony', 'botania:gluttony_rune')
    event.replaceInput({input: 'botania:rune_envy'}, 'botania:rune_envy', 'botania:envy_rune')
    event.replaceInput({output: 'minecraft:brick'}, 'minecraft:clay_ball', 'gtceu:compressed_clay')
    event.replaceInput({input: 'ae2:certus_quartz_crystal'}, 'ae2:certus_quartz_crystal', 'gtceu:certus_quartz_gem')
    event.replaceInput({output: /gtceu:lv_.*/}, 'minecraft:diamond', 'gtceu:grinding_head_damascus_steel')
    event.replaceInput({output: /gtceu:mv_.*/}, 'minecraft:diamond', 'gtceu:grinding_head_damascus_steel')
    event.replaceInput({output: /gtceu:zpm_.*/}, 'gtceu:tungsten_grinding_head', 'gtceu:grinding_head_duranium')
    event.replaceInput({output: /gtceu:uv_.*/}, 'gtceu:tungsten_grinding_head', 'gtceu:grinding_head_duranium')
    event.replaceInput({}, 'gtceu:diamond_grinding_head', 'gtceu:grinding_head_diamond')
    event.replaceInput({}, 'gtceu:tungsten_grinding_head', 'gtceu:grinding_head_tungsten')
    event.replaceInput({}, 'botania:mana_glass', 'botania:managlass')
    event.replaceInput({}, 'botania:elf_glass', 'botania:alfglass')
    event.replaceInput({}, 'ad_extendra:saturlyte_ingot', 'astrogreg:saturlyte_ingot')
    event.replaceInput({}, 'ad_extendra:juperium_ingot', 'astrogreg:juperium_ingot')
    // event.replaceInput({input: ''}, '', '')

    //#endregion
    
    //#region output
    event.replaceOutput({output: 'gtceu:manasteel_ingot'}, 'gtceu:manasteel_ingot','botania:manasteel_ingot');
    event.replaceOutput({output: 'gtceu:manasteel_block'}, 'gtceu:manasteel_block','botania:manasteel_block');
    event.replaceOutput({output: 'gtceu:manasteel_nugget'}, 'gtceu:manasteel_nugget','botania:manasteel_nugget');
    event.replaceOutput({output: 'gtceu:terrasteel_ingot'}, 'gtceu:terrasteel_ingot','botania:terrasteel_ingot');
    event.replaceOutput({output: 'gtceu:terrasteel_block'}, 'gtceu:terrasteel_block','botania:terrasteel_block');
    event.replaceOutput({output: 'gtceu:terrasteel_nugget'}, 'gtceu:terrasteel_nugget','botania:terrasteel_nugget');
    event.replaceOutput({output: 'gtceu:gaiasteel_ingot'}, 'gtceu:gaiasteel_ingot','botanicadds:gaiasteel_ingot');
    event.replaceOutput({output: 'gtceu:gaiasteel_block'}, 'gtceu:gaiasteel_block','botanicadds:gaiasteel_block');
    event.replaceOutput({output: 'gtceu:gaiasteel_nugget'}, 'gtceu:gaiasteel_nugget','botanicadds:gaiasteel_nugget');
    event.replaceOutput({output: 'gtceu:elementium_ingot'}, 'gtceu:elementium_ingot','botania:elementium_ingot');
    event.replaceOutput({output: 'gtceu:elementium_block'}, 'gtceu:elementium_block','botania:elementium_block');
    event.replaceOutput({output: 'gtceu:elementium_nugget'}, 'gtceu:elementium_nugget','botania:elementium_nugget');
    event.replaceOutput({output: 'gtceu:mana_diamond_block',}, 'gtceu:mana_diamond_block', 'botania:mana_diamond_block')
    event.replaceOutput({output: 'gtceu:mana_diamond_gem',}, 'gtceu:mana_diamond_gem', 'botania:mana_diamond');
    event.replaceOutput({output: 'gtceu:dragonstone_gem'}, 'gtceu:dragonstone_gem', 'botania:dragonstone')
    event.replaceOutput({output: 'gtceu:dragonstone_block'}, 'gtceu:dragonstone_block', 'botania:dragonstone_block')
    event.replaceOutput({output: 'ae2:certus_quartz_crystal'}, 'ae2:certus_quartz_crystal', 'gtceu:certus_quartz_gem')
    event.replaceOutput({}, 'ad_extendra:saturlyte_ingot', 'astrogreg:saturlyte_ingot')
    event.replaceOutput({}, 'ad_extendra:juperium_ingot', 'astrogreg:juperium_ingot')
    // event.replaceOutput({output: ''}, '', '')
});
