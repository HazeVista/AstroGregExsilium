ServerEvents.recipes(event => {
    //Vanilla
    event.shaped('minecraft:sticky_piston', [
        'A',
        'B',
        'C'
    ], {
        A: '#forge:tools/hammers',
        B: 'gtceu:sticky_resin',
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
        D: '#gtceu:tools/crafting_wrenches'
    });
        
    event.shaped('minecraft:observer', [
            'AAA',
            'BBC',
            'AAA'
        ], {
            A: 'minecraft:stone',
            B: 'minecraft:redstone',
            C: 'minecraft:ender_pearl',
        })
    
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
        C: '#forge:tools/hammers'
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

    event.shaped('minecraft:white_dye', [
        'A'
    ], {
        A: 'minecraft:bone_meal'
    });
});