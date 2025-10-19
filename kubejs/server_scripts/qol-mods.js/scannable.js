ServerEvents.recipes(event => {
//greggified by @tobyxlebron
event.shaped('scannable:scanner', [
    'A A',
    'BCB',
    'DBD'
], {
    A: 'gtceu:magnetic_iron_rod',
    B: 'gtceu:fine_copper_wire',
    C: '#gtceu:circuits/ulv',
    D: 'gtceu:tin_plate'
})

event.shaped('scannable:blank_module', [
    'CEC',
    'CBC',
    'DAD'
], {
    A: 'gtceu:gold_plate',
    B: 'gtceu:fine_red_alloy_wire',
    C: 'gtceu:rubber_plate',
    D: 'gtceu:red_alloy_plate',
    E: 'minecraft:green_dye'
})

event.shaped('scannable:common_ores_module', [
    'DDD',
    'BCB',
    'EAE'
], {
    A: 'scannable:blank_module',
    B: 'gtceu:fine_copper_wire',
    C: '#gtceu:circuits/ulv',
    D: 'gtceu:coal_dust',
    E: 'gtceu:iron_plate'
})

event.shaped('scannable:common_ores_module', [
    'DDD',
    'BCB',
    'EAE'
], {
    A: 'scannable:blank_module',
    B: 'gtceu:fine_copper_wire',
    C: '#gtceu:circuits/ulv',
    D: 'gtceu:carbon_dust',
    E: 'gtceu:iron_plate'
})

event.shaped('scannable:common_ores_module', [
    'DDD',
    'BCB',
    'EAE'
], {
    A: 'scannable:blank_module',
    B: 'gtceu:fine_copper_wire',
    C: '#gtceu:circuits/ulv',
    D: 'gtceu:charcoal_dust',
    E: 'gtceu:iron_plate'
})

event.shaped('scannable:fluid_module', [
    'CBC',
    'BEB',
    'DAD'
], {
    A: 'scannable:blank_module',
    B: 'minecraft:bucket',
    C: 'gtceu:bronze_normal_fluid_pipe',
    D: 'gtceu:iron_plate',
    E: '#gtceu:circuits/ulv'
})

event.shaped('scannable:rare_ores_module', [
    'DDD',
    'BCB',
    'EAE'
], {
    A: 'scannable:blank_module',
    B: 'gtceu:fine_annealed_copper_wire',
    C: '#gtceu:circuits/lv',	
    D: 'gtceu:diamond_dust',
    E: 'gtceu:steel_plate'
})

event.shaped('scannable:block_module', [
    'DBD',
    'DCD',
    'EAE'
], {
    A: 'scannable:blank_module',
    B: 'gtceu:mv_sensor',
    C: 'gtceu:item_filter',
    D: 'gtceu:kanthal_singel_wire',
    E: 'gtceu:polyethylene_plate'
})

event.shaped('scannable:range_module', [
    'CBC',
    ' A ',
    ' C '
], {
    A: 'scannable:blank_module',
    B: 'minecraft:ender_pearl',
    C: 'gtceu:magnetic_steel_rod'
})

event.shaped('scannable:chest_module', [
    'CBC',
    ' A ',
    ' D '
], {
    A: 'scannable:blank_module',
    B: 'minecraft:lv_sensor',
    C: 'gtceu:fine_red_alloy_wire',
    D: 'gtceu:bronze_crate'
})
});