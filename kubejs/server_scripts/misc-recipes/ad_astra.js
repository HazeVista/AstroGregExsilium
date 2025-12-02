ServerEvents.recipes(event => {
    event.shaped('ad_astra:gravity_normalizer', [
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

    event.shaped('ad_astra:oxygen_distributor', [
        'CDC',
        'EAE',
        'CBC'
    ], {
        A: 'gtceu:lv_electric_motor',
        B: 'gtceu:lv_machine_hull',
        C: 'gtceu:steel_plate',
        D: 'gtceu:tin_rotor',
        E: 'gtceu:fluid_filter'
    })

    event.shaped('gtceu:gravitation_engine_unit', [
        'BDA',
        'DCD',
        'ADB'
    ], {
        A: 'gtceu:mv_emitter',
        B: 'gtceu:manganese_phosphide_single_wire',
        C: '#gtceu:batteries/mv',
        D: 'gtceu:double_aluminium_plate'
    })

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
    
})