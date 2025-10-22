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

        event.shaped('laserio:laser_node', [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: 'gtceu:iron_plate',
            B: '#c:glass_panes',
            C: 'laserio:laser_connector',
        })

    event.shaped('laserio:laser_connector_advanced', [
            'ABA',
            'CEC',
            'DDD'
        ], {
            A: 'minecraft:ender_pearl',
            B: 'minecraft:diamond',
            C: 'gtceu:fine_red_alloy_wire',
            D: 'gtceu:gold_plate',
            E: 'laserio:laser_connector'
        })

    event.shaped('laserio:laser_connector', [
            ' A ',
            'CBC',
            'DDD'
        ], {
            A: '#forge:glass',
            B: 'laserio:logic_chip',
            C: 'gtceu:fine_red_alloy_wire',
            D: 'gtceu:iron_plate'
        })        

    event.shaped('laserio:filter_count', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'gtceu:iron_rod',
        B: '#c:glass_panes',
        C: 'gtceu:lv_robot_arm',
        D: 'laserio:logic_chip'
    })

    event.shaped('laserio:card_item', [
            'AEA',
            'DCD',
            'BBB'
        ], {
            A: 'gtceu:fine_red_alloy_wire',
            B: 'minecraft:gold_nugget',
            C: 'laserio:logic_chip',
            D: 'minecraft:ender_pearl',
            E: 'gtceu:iron_plate'
        })

    event.shaped('laserio:card_redstone', [
            'AEA',
            'DCD',
            'BBB'
        ], {
            A: 'gtceu:fine_red_alloy_wire',
            B: 'minecraft:gold_nugget',
            C: 'laserio:logic_chip',
            D: 'minecraft:ender_pearl',
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
            D: 'minecraft:ender_pearl',
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

    event.shaped('laserio:filter_basic', [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: 'gtceu:iron_rod',
            B: '#c:glass_panes',
            C: 'laserio:logic_chip',

        });

    event.shaped('laserio:filter_mod', [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'gtceu:iron_rod',
        B: '#c:glass_panes',
        C: '#minecraft:wool',
        D: 'laserio:logic_chip'
    })
    event.shaped('laserio:filter_tag', [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'gtceu:iron_rod',
        B: '#c:glass_panes',
        C: 'minecraft:paper',
        D: 'laserio:logic_chip'
    })
    event.shaped('laserio:filter_nbt', [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: 'gtceu:iron_rod',
        B: '#c:glass_panes',
        C: 'minecraft:book',
        D: 'laserio:logic_chip'
    })

    });