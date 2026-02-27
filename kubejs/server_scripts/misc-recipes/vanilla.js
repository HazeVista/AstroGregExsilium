ServerEvents.recipes(event => {
    //#region vanilla tweaks
    event.shaped('minecraft:shears', [
        'AB ',
        'BC '
    ], {
        A: '#forge:tools/hammers',
        B: 'gtceu:iron_plate',
        C: '#forge:tools/files'
    })

    event.shaped('minecraft:sticky_piston', [
        'A',
        'B',
        'C'
    ], {
        A: '#forge:tools/hammers',
        B: 'gtceu:sticky_resin',
        C: 'minecraft:piston'
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
   
    event.shaped('minecraft:white_dye', [
        'A',
        'B'
    ], {
        A: 'minecraft:bone_meal',
        B: '#forge:tools/mortars'
    })

    event.shapeless('gtceu:magnetic_iron_screw', ['gtceu:iron_screw', 'minecraft:redstone', 'minecraft:redstone'])

    event.shaped('minecraft:compass', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'gtceu:iron_plate',
        B: 'gtceu:magnetic_iron_screw'
    })

    event.shaped('minecraft:item_frame', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#forge:rods/wooden',
        B: 'farmersdelight:canvas'
    })

    event.shaped('framedblocks:framed_item_frame', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'framedblocks:framed_cube',
        B: 'create:cardboard'
    })

    event.shaped('framedblocks:framed_item_frame', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'framedblocks:framed_cube',
        B: 'farmersdelight:canvas'
    })

    event.shaped('minecraft:glow_item_frame', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#forge:rods/wooden',
        B: 'botania:manaweave_cloth'
    })

    event.shaped('framedblocks:framed_glowing_item_frame', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'framedblocks:framed_cube',
        B: 'botania:manaweave_cloth'
    })

    event.shaped('minecraft:crossbow', [
        'ABA',
        'CDC',
        ' A '
    ], {
        A: 'gtceu:treated_wood_rod',
        B: 'gtceu:iron_ring',
        C: 'minecraft:string',
        D: 'minecraft:tripwire_hook'
    })

    event.recipes.gtceu.assembler('crossbow')
        .itemInputs('2x minecraft:string', '3x gtceu:treated_wood_rod', 'minecraft:tripwire_hook', 'gtceu:iron_ring')
        .itemOutputs('minecraft:crossbow')
        .circuit(11)
        .duration(100)
        .EUt(2)
    //#endregion



    //#region quality of life logs
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

    event.shaped('minecraft:clock', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'gtceu:gold_plate',
        B: 'minecraft:redstone'
    })

    event.shapeless('minecraft:coarse_dirt', ['minecraft:dirt', '#forge:gravel'])
    //#endregion

    //#region armor
    const armorTypes = [['minecraft:golden', 'gtceu:gold_plate'], 
                        ['minecraft:diamond',  'gtceu:diamond_plate'],
                        ['minecraft:iron',  'gtceu:iron_plate'],
                        ['botania:manasteel',  'gtbotania:manasteel_plate'],
                        ['botania:elementium',  'gtbotania:elementium_plate']]

    armorTypes.forEach(armorRecipe)

    function armorRecipe(armor) {
        const piece = armor[0]
        const plate = armor[1]

        event.shaped(`${piece}_helmet`, [
            'AAA',
            'ABA',
            '   '
        ], {
            A: plate,
            B: '#forge:tools/hammers'
        })

        event.shaped(`${piece}_chestplate`, [
            'ABA',
            'AAA',
            'AAA'
        ], {
            A: plate,
            B: '#forge:tools/hammers'
        })
        
        event.shaped(`${piece}_leggings`, [
            'AAA',
            'ABA',
            'A A'
        ], {
            A: plate,
            B: '#forge:tools/hammers'
        })

        
        event.shaped(`${piece}_boots`, [
            '   ',
            'A A',
            'ABA'
        ], {
            A: plate,
            B: '#forge:tools/hammers'
        })
    }
});