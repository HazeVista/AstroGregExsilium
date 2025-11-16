ServerEvents.recipes(event => {

    event.shaped('constructionwand:stone_wand', [
        '  A',
        ' B ',
        'B  '
    ], {
        A: '#minecraft:stone_tool_materials',
        B: 'gtceu:iron_rod'
    })

    event.shaped('constructionwand:iron_wand', [
        '  A',
        ' B ',
        'B  '
    ], {
        A: 'gtceu:iron_plate',
        B: 'gtceu:iron_rod'
    })

    event.shaped('constructionwand:diamond_wand', [
        '  A',
        ' B ',
        'B  '
    ], {
        A: 'gtceu:diamond_plate',
        B: 'gtceu:iron_rod'
    })

    event.shaped('constructionwand:core_destruction', [
        'AAB',
        'ABA',
        'BAA'
    ], {
        A: 'minecraft:glass_pane',
        B: 'gtceu:red_alloy_plate'
    })

    event.shaped('constructionwand:core_angel', [
        'AAB',
        'ABA',
        'BAA'
    ], {
        A: 'minecraft:glass_pane',
        B: 'gtceu:gold_plate'
    })

})