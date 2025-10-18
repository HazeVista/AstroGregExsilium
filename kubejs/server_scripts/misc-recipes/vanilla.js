 ServerEvents.recipes(event => {
    //LaserIO
     event.shaped('laserio:laser_wrench', [
            'ABA',
            ' C ',
            ' D '
        ], {
            A: 'gtceu:red_alloy_plate',
            B: '#forge:tools/hammers',
            C: 'laserio:logic_chip',
            D: 'gtceu:iron_plate',
        })
        
    event.shaped('minecraft:observer', [
            'AAA',
            'BBC',
            'AAA'
        ], {
            A: 'minecraft:stone',
            B: 'minecraft:redstone',
            C: 'minecraft:ender_pearl',
        })
    
    event.shaped('laserio:logic_chip_raw', [
            'ABA',
            'CDC',
            'ABA'
        ], {
            A: 'minecraft:redstone',
            B: 'minecraft:gold_nugget',
            C: 'minecraft:clay_ball',
            D: 'minecraft:sand',
        })

    event.shaped('laserio:laser_connector_advanced', [
            'ABA',
            'CEC',
            'DDD'
        ], {
            A: 'gtceu:beryllium_plate',
            B: 'minecraft:diamond',
            C: 'minecraft:redstone',
            D: 'gtceu:gold_plate',
            E: 'laserio:laser_connector'
        })

    event.shaped('laserio:card_item', [
            'AEA',
            'DCD',
            'BBB'
        ], {
            A: 'minecraft:redstone',
            B: 'minecraft:gold_nugget',
            C: 'laserio:logic_chip',
            D: 'gtceu:obsidian_plate',
            E: 'gtceu:silver_plate'
        })

    event.shaped('laserio:card_redstone', [
            'AEA',
            'DCD',
            'BBB'
        ], {
            A: 'minecraft:redstone',
            B: 'minecraft:gold_nugget',
            C: 'laserio:logic_chip',
            D: 'gtceu:obsidian_plate',
            E: 'minecraft:redstone_block'
        })

    event.shaped('laserio:card_energy', [
            'AEA',
            'DCD',
            'BBB'
        ], {
            A: 'minecraft:redstone',
            B: 'minecraft:gold_nugget',
            C: 'laserio:logic_chip',
            D: 'minecraft:ender_eye',
            E: 'gtceu:fine_red_alloy_wire'
        })

    event.shaped('laserio:card_fluid', [
            'AEA',
            'DCD',
            'BBB'
        ], {
            A: 'minecraft:redstone',
            B: 'minecraft:gold_nugget',
            C: 'laserio:logic_chip',
            D: 'minecraft:ender_pearl',
            E: 'minecraft:bucket'
        });

    //Vanilla

    event.shaped('minecraft:sticky_piston' [
        'A',
        'B',
        'C'
    ], {
        A: '#gtceu:tools/hammer',
        B: 'gtceu:resin',
        C: 'minecraft:piston'
    });

    event.shaped('minecraft:shears', [
        ' A ',
        'AB '
    ], {
        A: 'gtceu:iron_plate',
        B: '#forge:tools/hammers'
    });

    event.shaped('minecraft:elytra', [
        'BCB',
        'ADA',
        'A A'
    ], {
        A: 'gtceu:polytetrafluoroethylene_plate',
        B: 'gtceu:stainless_steel_gear',
        C: 'gtceu:long_stainless_steel_rod',
        D: '#forge:tools/wrenches'
    });

    event.shaped('travelanchors:travel_staff', [
        '  A',
        ' B ',
        'B  '
    ], {
        A: 'minecraft:ender_pearl',
        B: 'gtceu:steel_rod'
    });

    event.shaped('travelanchors:travel_anchor', [
        'ABA',
        'B B',
        'ABA'
    ], {
        A: 'gtceu:double_steel_plate',
        B: 'minecraft:ender_pearl',
        C: '#gtceu:tools/hammer'
    });

    //quality of life logs
    event.shaped('16x minecraft:stick', [
        'A  ',
        'A  '
    ], {
        A: '#minecraft:logs'
    });

    event.shaped('4x minecraft:chest', [
        'AAA',
        'A A',
        'AAA'
    ], {
        A: '#minecraft:logs'
    });

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

    event.shaped('minecraft:white_dye', [
        'A'
    ], {
        A: 'minecraft:bone_meal'
    });

    event.shaped('waystones:warp_stone', [
    'BCB',
    'CAC',
    'BCB'
], {
    A: 'minecraft:ender_pearl',
    B: 'create:rose_quartz',
    C: 'minecraft:quartz'
})
});