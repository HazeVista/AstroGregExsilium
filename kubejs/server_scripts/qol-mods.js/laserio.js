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

    event.shaped('laserio:laser_connector_advanced', [
            'ABA',
            'CEC',
            'DDD'
        ], {
            A: 'minecraft:ender_eye',
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

    event.shaped('laserio:filter_basic', [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: 'gtceu:iron_rod',
            B: '#c:glass_panes',
            C: 'laserio:logic_chip',

        });
    });