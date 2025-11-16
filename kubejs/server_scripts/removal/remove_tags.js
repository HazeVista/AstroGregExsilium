//tag removal

//items
ServerEvents.tags('item', event => {
event.removeAllTagsFrom('ad_astra:steel_rod')
event.removeAllTagsFrom('ad_astra:steel_block')
event.removeAllTagsFrom('ad_astra:steel_plate')
event.removeAllTagsFrom('ad_astra:steel_nugget')
event.removeAllTagsFrom('ad_astra:steel_ingot')
event.removeAllTagsFrom('ad_astra:iron_rod')
event.removeAllTagsFrom('ad_astra:iron_plate')
event.removeAllTagsFrom('ad_astra:iron_nugget')
event.removeAllTagsFrom('ad_astra:moon_desh_ore')
event.removeAllTagsFrom('ad_astra:deepslate_desh_ore')
event.removeAllTagsFrom('ad_extendra:raw_plutonium')
event.removeAllTagsFrom('ad_extendra:plutonium_nugget')
event.removeAllTagsFrom('ad_extendra:uraninium_nugget')
event.removeAllTagsFrom('ad_extendra:uraninium_ingot')
event.removeAllTagsFrom('ad_extendra:uraninium_plate')
event.removeAllTagsFrom('ad_extendra:raw_uranium')
event.removeAllTagsFrom('ad_extendra:uranium_ingot')
event.removeAllTagsFrom('ad_extendra:uranium_nugget')
event.removeAllTagsFrom('create:iron_plate')
event.removeAllTagsFrom('create:iron_sheet')
event.removeAllTagsFrom('create:brass_sheet')
event.removeAllTagsFrom('create:copper_sheet')
event.removeAllTagsFrom('create:golden_sheet')
event.removeAllTagsFrom('create:brass_ingot')
event.removeAllTagsFrom('create:brass_nugget')
event.removeAllTagsFrom('create:zinc_nugget')
event.removeAllTagsFrom('create:zinc_ingot')
event.removeAllTagsFrom('create:dough')
event.removeAllTagsFrom('create:red_sand_paper')
event.removeAllTagsFrom('createaddition:zinc_sheet')
event.removeAllTagsFrom('createaddition:zinc_nugget')
event.removeAllTagsFrom('createaddition:electrum_sheet')
event.removeAllTagsFrom('createaddition:electrum_nugget')
event.removeAllTagsFrom('createaddition:electrum_ingot')
event.removeAllTagsFrom('createaddition:copper_rod')
event.removeAllTagsFrom('createaddition:gold_rod')
event.removeAllTagsFrom('createaddition:iron_rod')
event.removeAllTagsFrom('createaddition:electrum_rod')
event.removeAllTagsFrom('createaddition:electrum_block')
event.removeAllTagsFrom('createaddition:brass_rod')
event.removeAllTagsFrom('createaddition:diamond_grit')
event.removeAllTagsFrom('createaddition:diamond_grit_sandpaper')
event.removeAllTagsFrom('farmersdelight:wheat_dough')
event.removeAllTagsFrom('powah:uraninite_raw')
event.removeAllTagsFrom('gtceu:raw_desh')
event.removeAllTagsFrom('gtceu:desh_ingot')
event.removeAllTagsFrom('farmersdelight:golden_knife')
event.removeAllTagsFrom('farmersdelight:netherite_knife')
event.removeAllTagsFrom('farmersdelight:diamond_knife')
event.removeAllTagsFrom('farmersdelight:iron_knife')
event.removeAllTagsFrom('farmersdelight:flint_knife')
});



//blocks
ServerEvents.tags('block', event => {
event.removeAllTagsFrom('ad_extendra:raw_plutonium_block')
event.removeAllTagsFrom('ad_extendra:plutonium_block' )
event.removeAllTagsFrom('ad_extendra:uraninium_bloc')
event.removeAllTagsFrom('ad_extendra:raw_uranium_block')
event.removeAllTagsFrom('createaddition:electrum_block')
event.removeAllTagsFrom('gtceu:raw_desh_block')

});


//fluids
ServerEvents.tags('fluid', event => {
event.removeAllTagsFrom('ad_astra:hydrogen')
event.removeAllTagsFrom('ad_astra:cryo_fuel')
event.removeAllTagsFrom('ad_astra:oxygen')
event.removeAllTagsFrom('ad_astra:oil')
event.removeAllTagsFrom('ad_astra:fuel')

event.remove('create:bottomless/allow', 'minecraft:lava')
event.remove('create:bottomless/allow', 'minecraft:water')
});