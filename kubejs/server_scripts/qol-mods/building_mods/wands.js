ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    gt.shaped('constructionwand:stone_wand', [
        '  A',
        ' B ',
        'B  '
    ], {
        A: '#minecraft:stone_tool_materials',
        B: 'gtceu:iron_rod'
    })
    .addMaterialInfo()

    gt.shaped('constructionwand:iron_wand', [
        '  A',
        ' B ',
        'B  '
    ], {
        A: 'gtceu:iron_plate',
        B: 'gtceu:iron_rod'
    })
    .addMaterialInfo()

    gt.shaped('constructionwand:diamond_wand', [
        '  A',
        ' B ',
        'B  '
    ], {
        A: 'gtceu:diamond_plate',
        B: 'gtceu:iron_rod'
    })
    .addMaterialInfo()

    gt.shaped('constructionwand:core_destruction', [
        'AAB',
        'ABA',
        'BAA'
    ], {
        A: 'minecraft:glass_pane',
        B: 'gtceu:red_alloy_plate'
    })
    .addMaterialInfo()

    gt.shaped('constructionwand:core_angel', [
        'AAB',
        'ABA',
        'BAA'
    ], {
        A: 'minecraft:glass_pane',
        B: 'gtceu:gold_plate'
    })
    .addMaterialInfo()

})