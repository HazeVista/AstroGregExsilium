ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    //#region fungiculture
    const fungiCirc1 = [
        'minecraft:red_mushroom',
        'minecraft:brown_mushroom',
        'minecraft:crimson_fungus',
        'minecraft:warped_fungus',
        'ad_extendra:aeronos_mushroom',
        'ad_extendra:strophar_mushroom'
    ]

    const oxygenTrue = ['minecraft:red_mushroom', 'minecraft:brown_mushroom']

    fungiCirc1.forEach(function(mushroom) {
        var needsOxygen = oxygenTrue.indexOf(mushroom) !== -1

        AstroRecipeSchemaBindings.isOxygenated(
            gt.fungiculture_mushrooms(mushroom)
                .itemInputs(mushroom, '2x gtceu:wood_dust')
                .perTick(true)
                .chancedFluidInput('minecraft:water 1', 1000, 0)
                .perTick(false)
                .itemOutputs('16x ' + mushroom)
                .circuit(1)
                .duration(600)
                .EUt(15),
            needsOxygen
        )
    })

    const fungiCirc2 = [
        ['minecraft:crimson_fungus', 'minecraft:crimson_stem', 'minecraft:crimson_hyphae', false],
        ['minecraft:warped_fungus', 'minecraft:warped_stem', 'minecraft:warped_hyphae', false],
        ['minecraft:red_mushroom', 'minecraft:mushroom_stem', 'minecraft:red_mushroom_block', true],
        ['minecraft:brown_mushroom', 'minecraft:mushroom_stem', 'minecraft:brown_mushroom_block', true],
        ['ad_extendra:aeronos_mushroom', 'ad_astra:aeronos_stem', 'ad_astra:aeronos_cap', false],
        ['ad_extendra:strophar_mushroom', 'ad_astra:strophar_stem', 'ad_astra:strophar_cap', false]
    ]

    fungiCirc2.forEach(function(entry) {
        var mushroom = entry[0]
        var stem = entry[1]
        var cap = entry[2]
        var needsOxygen = entry[3]

        AstroRecipeSchemaBindings.isOxygenated(
            gt.fungiculture_mushrooms(mushroom + '_large')
                .itemInputs(mushroom, '4x gtceu:wood_dust')
                .perTick(true)
                .chancedFluidInput('minecraft:water 1', 1000, 0)
                .perTick(false)
                .itemOutputs('16x ' + stem, '24x ' + cap)
                .circuit(2)
                .duration(800)
                .EUt(15),
            needsOxygen
        )
    })

    const dyeColors = [
        'white', 'red', 'orange', 'yellow', 'green', 'purple', 'light_gray', 'gray',
        'lime', 'cyan', 'magenta', 'pink', 'brown', 'light_blue', 'black', 'blue'
    ]

    dyeColors.forEach(function(color) {
        AstroRecipeSchemaBindings.isOxygenated(
            gt.fungiculture_mushrooms('botania:' + color + '_mushroom')
                .itemInputs('botania:' + color + '_mushroom', '2x gtceu:wood_dust')
                .perTick(true)
                .chancedFluidInput('minecraft:water 1', 1000, 0)
                .perTick(false)
                .itemOutputs('16x botania:' + color + '_mushroom')
                .circuit(3)
                .duration(600)
                .EUt(15),
            true
        )
    })
    //#endregion

    //#region controllers
    event.recipes.gtceu.shaped('gtceu:shroomroom', [
        'FBE',
        'DAD',
        'GBC'
    ], {
        A: 'gtceu:lv_machine_hull',
        B: '#gtceu:circuits/lv',
        C: 'gtceu:lv_electric_pump',
        D: 'gtceu:lv_robot_arm',
        E: 'gtceu:steel_axe',
        F: 'gtceu:steel_scythe',
        G: 'gtceu:lv_conveyor_module'
    })
    .addMaterialInfo()

    event.recipes.gtceu.shaped('gtceu:fungarium', [
        'FBE',
        'DAD',
        'GBC'
    ], {
        A: 'gtceu:iv_machine_hull',
        B: '#gtceu:circuits/iv',
        C: 'gtceu:iv_electric_pump',
        D: 'gtceu:iv_robot_arm',
        E: 'gtceu:tungsten_steel_axe',
        F: 'gtceu:tungsten_steel_scythe',
        G: 'gtceu:iv_conveyor_module'
    })
    .addMaterialInfo()
    //#endregion

})