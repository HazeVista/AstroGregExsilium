ServerEvents.recipes(event => {
    //replace

    //input
    event.replaceInput({input: 'create:copper_sheet'}, 'create:copper_sheet', 'gtceu:copper_plate');
    event.replaceInput({input: 'create:zinc_ingot'}, 'create:zinc_ingot', 'gtceu:zinc_ingot');
    event.replaceOutput({output: 'gtceu:energized_steel_ingot'}, 'gtceu:energized_steel_ingot','powah:steel_energized');
    event.replaceInput({input: 'gtceu:energized_steel_ingot'}, 'gtceu:energized_steel_ingot','powah:steel_energized');
    event.replaceOutput({output: 'gtceu:energized_steel_block'}, 'gtceu:energized_steel_block','powah:energized_steel_block');
    event.replaceInput({input: 'gtceu:energized_steel_block'}, 'gtceu:energized_steel_block','powah:energized_steel_block');
    event.replaceInput({input: 'gtceu:desh_nugget'}, 'gtceu:desh_nugget', 'ad_astra:desh_nugget')
    event.replaceInput({input: 'gtceu:desh_ingot'}, 'gtceu:desh_ingot', 'ad_astra:desh_ingot')
    event.replaceInput({input: 'gtceu:desh_block'}, 'gtceu:desh_block', 'ad_astra:desh_block')
    event.replaceInput({input: 'gtceu:steel_rod'}, 'gtceu:steel_rod', 'ad_astra:steel_rod')
    event.replaceInput({input: 'gtceu:iron_rod'}, 'gtceu:iron_rod', 'ad_astra:iron_rod')
    event.replaceInput({input: 'gtceu:raw_desh'}, 'gtceu:raw_desh', 'ad_astra:raw_desh')
    event.replaceInput({input: 'gtceu:raw_desh_block'}, 'gtceu:raw_desh_block', 'ad_astra:raw_desh_block')

    //output
    event.replaceOutput({output: 'gtceu:desh_nugget'}, 'gtceu:desh_nugget', 'ad_astra:desh_nugget')
    event.replaceOutput({output: 'gtceu:desh_ingot'}, 'gtceu:desh_ingot', 'ad_astra:desh_ingot')
    event.replaceOutput({output: 'gtceu:desh_block'}, 'gtceu:desh_block', 'ad_astra:desh_block')
    event.replaceOutput({output: 'gtceu:raw_desh'}, 'gtceu:raw_desh', 'ad_astra:raw_desh')
    event.replaceOutput({output: 'gtceu:raw_desh_block'}, 'gtceu:raw_desh_block', 'ad_astra:raw_desh_block')

});
