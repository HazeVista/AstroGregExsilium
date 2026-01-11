ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    gt.shaped('ad_astra:gravity_normalizer', [
        ' C ',
        'ABA',
        'DED'
    ], {
        A: 'gtceu:gravitation_engine_unit',
        B: 'gtceu:exquisite_sapphire_gem',
        C: '#gtceu:circuits/ev',
        D: 'gtceu:mv_field_generator',
        E: 'gtceu:hv_machine_hull'
    })
    .addMaterialInfo()

    gt.shaped('ad_astra:oxygen_distributor', [
        'CDC',
        'EAE',
        'CBC'
    ], {
        A: 'gtceu:lv_electric_motor',
        B: 'gtceu:ulv_machine_hull',
        C: 'gtceu:steel_plate',
        D: 'gtceu:tin_rotor',
        E: 'gtceu:fluid_filter'
    })
    .addMaterialInfo()

    gt.shaped('gtceu:gravitation_engine_unit', [
        'BDA',
        'DCD',
        'ADB'
    ], {
        A: 'gtceu:mv_emitter',
        B: 'gtceu:manganese_phosphide_single_wire',
        C: '#gtceu:batteries/mv',
        D: 'gtceu:double_aluminium_plate'
    })
    .addMaterialInfo()

    event.shaped('ad_astra:reinforced_door', [
        'ABA',
        'CBC',
        'ABA'
    ], {
        A: 'gtceu:obsidian_plate',
        B: 'gtceu:steel_plate',
        C: 'minecraft:glass_pane'
    })

    event.shaped('ad_astra:iron_sliding_door', [
        'AAA',
        'BAB',
        'AAA'
    ], {
        A: 'gtceu:iron_plate',
        B: 'minecraft:glass_pane'
    })
    
    event.shaped('ad_astra:steel_sliding_door', [
        'AAA',
        'BAB',
        'AAA'
    ], {
        A: 'gtceu:steel_plate',
        B: 'minecraft:glass_pane'
    })

    event.shaped('ad_astra:oxygen_loader', [
        'DCD',
        'BAB',
        'DCD'
    ], {
        A: 'gtceu:ulv_machine_hull',
        B: 'ad_astra:gas_tank',
        C: '#gtceu:circuits/ulv',
        D: 'gtceu:red_alloy_single_cable'
    })
    
    event.shaped('ad_astra:launch_pad', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'gtceu:dense_steel_plate',
        B: '#forge:tools/hammers'
    })

    event.shaped('ad_astra:oxygen_gear', [
        ' A ',
        'BCD',
        'ECE'
    ], {
        A: 'gtceu:iron_rod',
        B: '#forge:tools/hammers',
        C: 'gtceu:iron_plate',
        D: '#forge:tools/wrenches',
        E: 'ad_astra:gas_tank'
    })

    event.shaped('ad_astra:gas_tank', [
        'ABA',
        'ACA',
        'AAA'
    ], {
        A: 'gtceu:iron_plate',
        B: 'gtceu:iron_ring',
        C: '#forge:tools/hammers'
    })
    
    event.shaped('ad_astra:large_gas_tank', [
        'ABA',
        'ACA',
        'AAA'
    ], {
        A: 'gtceu:steel_plate',
        B: 'gtceu:steel_ring',
        C: '#forge:tools/hammers'
    })

    gt.shaped('4x ad_astra:vent', [
        'ABA',
        'ACA',
        'ABA'
    ], {
        A: 'gtceu:iron_rod',
        B: 'gtceu:steel_plate',
        C: '#forge:tools/hammers'
    })
    .addMaterialInfo()

    gt.shaped('ad_astra:etrionic_core', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'gtceu:iron_plate',
        B: 'gtceu:silver_ring',
        C: 'astrogreg:fine_etrium_wire',
        D: 'gtceu:lead_spring'
    })
    .addMaterialInfo()

    gt.shaped('ad_astra:photovoltaic_etrium_cell', [
        'AAA',
        'BBB',
        'CCC'
    ], {
        A: 'gtceu:tempered_glass',
        B: 'ad_astra:etrionic_core',
        C: 'gtceu:double_silver_plate'
    })

    gt.assembler('photovoltaic_etrium_cell')
        .itemInputs('3x gtceu:tempered_glass', '3x ad_astra:etrionic_core', '3x gtceu:double_silver_plate')
        .itemOutputs('ad_astra:photovoltaic_etrium_cell')
        .circuit(30)
        .duration(100)
        .EUt(28)
        .addMaterialInfo(true)
})