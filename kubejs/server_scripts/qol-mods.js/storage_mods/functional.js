ServerEvents.recipes(event => {
    event.shaped('functionalstorage:oak_1', [
        'A'
    ], {
        A: 'functionalstorage:oak_1'
    });

    event.shaped('functionalstorage:oak_2', [
        'A'
    ], {
        A: 'functionalstorage:oak_2'
    });

    event.shaped('functionalstorage:oak_4', [
        'A'
    ], {
        A: 'functionalstorage:oak_4'
    });

    event.shaped('functionalstorage:copper_upgrade', [
        'BBB',
        'ACA',
        'BBB'
    ], {
        A: '#gtceu:circuits/ulv',
        B: 'gtceu:copper_plate',
        C: '#functionalstorage:drawer'
    })

    event.shaped('2x functionalstorage:copper_upgrade', [
        'BBB',
        'ACA',
        'BBB'
    ], {
        A: '#gtceu:circuits/lv',
        B: 'gtceu:copper_plate',
        C: '#functionalstorage:drawer'
    })

    event.shaped('4x functionalstorage:copper_upgrade', [
        'BBB',
        'ACA',
        'BBB'
    ], {
        A: '#gtceu:circuits/mv',
        B: 'gtceu:copper_plate',
        C: '#functionalstorage:drawer'
    })

    event.shaped('functionalstorage:void_upgrade', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'ender_pearl',
        B: '#functionalstorage:drawer'
    })
    
    event.shaped('functionalstorage:fluid_1', [
        'BBB',
        'BAB',
        'BBB'
    ], {
        A: 'gtceu:steel_large_fluid_pipe',
        B: 'gtceu:steel_plate'
    })

    event.shaped('functionalstorage:fluid_1', [
        'A'
    ], {
        A: 'functionalstorage:fluid_1'
    })

    event.shaped('functionalstorage:storage_controller', [
        'CBC',
        'BAB',
        'CBC'
    ], {
        A: 'gtceu:lv_emitter',
        B: 'minecraft:smooth_stone',
        C: 'gtceu:iron_plate'
    })

    event.shaped('functionalstorage:configuration_tool', [
        'AAB',
        'ACB',
        'ADA'
    ], { 
        A:'gtceu:iron_plate',
        B:'gtceu:fine_red_alloy_wire',
        C:'#functionalstorage:drawer',
        D:'minecraft:redstone'
    });    

    event.shaped('functionalstorage:linking_tool', [
        'AAB',
        'ACB',
        'ADA'
    ], { 
        A:'gtceu:iron_plate',
        B:'gtceu:fine_red_alloy_wire',
        C:'#functionalstorage:drawer',
        D:'gtceu:quartzite_gem'
    }); 

    event.shapeless('functionalstorage:iron_downgrade', ['gtceu:double_iron_plate', '#functionalstorage:drawer'])
});