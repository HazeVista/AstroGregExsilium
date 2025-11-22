ServerEvents.recipes(event => {
    //replace

    //#region input
    event.replaceInput({input: 'create:copper_sheet'}, 'create:copper_sheet', 'gtceu:copper_plate');
    event.replaceInput({input: 'create:zinc_ingot'}, 'create:zinc_ingot', 'gtceu:zinc_ingot');
    event.replaceInput({input: 'gtceu:energized_steel_ingot'}, 'gtceu:energized_steel_ingot','powah:steel_energized');
    event.replaceInput({input: 'gtceu:energized_steel_block'}, 'gtceu:energized_steel_block','powah:energized_steel_block');
    event.replaceInput({input: 'gtceu:desh_nugget'}, 'gtceu:desh_nugget', 'ad_astra:desh_nugget')
    event.replaceInput({input: 'gtceu:desh_ingot'}, 'gtceu:desh_ingot', 'ad_astra:desh_ingot')
    event.replaceInput({input: 'gtceu:desh_block'}, 'gtceu:desh_block', 'ad_astra:desh_block')
    event.replaceInput({input: 'gtceu:raw_desh'}, 'gtceu:raw_desh', 'ad_astra:raw_desh')
    event.replaceInput({input: 'gtceu:raw_desh_block'}, 'gtceu:raw_desh_block', 'ad_astra:raw_desh_block')
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
    //#endregion
    
    //#region output
    event.replaceOutput({output: 'gtceu:desh_nugget'}, 'gtceu:desh_nugget', 'ad_astra:desh_nugget')
    event.replaceOutput({output: 'gtceu:desh_ingot'}, 'gtceu:desh_ingot', 'ad_astra:desh_ingot')
    event.replaceOutput({output: 'gtceu:desh_block'}, 'gtceu:desh_block', 'ad_astra:desh_block')
    event.replaceOutput({output: 'gtceu:raw_desh'}, 'gtceu:raw_desh', 'ad_astra:raw_desh')
    event.replaceOutput({output: 'gtceu:raw_desh_block'}, 'gtceu:raw_desh_block', 'ad_astra:raw_desh_block')
    event.replaceOutput({output: 'gtceu:energized_steel_ingot'}, 'gtceu:energized_steel_ingot','powah:steel_energized');
    event.replaceOutput({output: 'gtceu:energized_steel_block'}, 'gtceu:energized_steel_block','powah:energized_steel_block');
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
});
