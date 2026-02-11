ClientEvents.lang('en_us', event => {

    //#region rename guide
    /*
    *
    *   how to use:
    *   renameItems('mod_namespace', [          Namespace will get applied to all items below, no need to add it
    *   ['item_id', 'New Name'],                before the item id's below. 
    *   ['next_item_id', 'New Name'],
    *   ['third_item_id', 'New Name']           These are infinitely expandable.
    *   ])
    * 
    *   Reference this spreadsheet for information on formatting text color and style in Minecraft:
    *   https://docs.google.com/spreadsheets/d/1Wb28oe5-VFauhTez_u2o7bBstofGxM35DeMtv6cvrQY/edit?usp=sharing
    *      
    *   Adding a space between your code and text will create a space on the tooltip. Use that knowledge accordingly.
    * 
    *   after you've typed it out, go to assets/astrogreg/lang/en_us.json (and other translation files if you're translating)
    *   then add your translation key and lang
    *
    */

        //item renamer function
    const renameItems = (mod, items) => {
        items.forEach(([item, translationKey]) => {
            event.add(`item.${mod}.${item}`, translationKey)
        })
    }
    //#endregion



    //#region botania
    renameItems('botania', [
        // Alfsteel (Elementium)
        ['elementium_boots', 'astrogreg.elementium_boots.name'],
        ['elementium_leggings', 'astrogreg.elementium_leggings.name'],
        ['elementium_chestplate', 'astrogreg.elementium_chestplate.name'],
        ['elementium_helmet', 'astrogreg.elementium_helmet.name'],
        ['elementium_shears', 'astrogreg.elementium_shears.name'],
        ['elementium_nugget', 'astrogreg.elementium_nugget.name'],
        ['elementium_ingot', 'astrogreg.elementium_ingot.name'],
        ['elementium_block', 'astrogreg.elementium_block.name'],
        
        // Manasteel items
        ['manasteel_boots', 'astrogreg.manasteel_boots.name'],
        ['manasteel_leggings', 'astrogreg.manasteel_leggings.name'],
        ['manasteel_chestplate', 'astrogreg.manasteel_chestplate.name'],
        ['manasteel_helmet', 'astrogreg.manasteel_helmet.name'],
        ['manasteel_shears', 'astrogreg.manasteel_shears.name'],
        ['manasteel_nugget', 'astrogreg.manasteel_nugget.name'],
        ['manasteel_ingot', 'astrogreg.manasteel_ingot.name'],
        ['manasteel_block', 'astrogreg.manasteel_block.name'],
        
        // Terrasteel items
        ['terrasteel_boots', 'astrogreg.terrasteel_boots.name'],
        ['terrasteel_leggings', 'astrogreg.terrasteel_leggings.name'],
        ['terrasteel_chestplate', 'astrogreg.terrasteel_chestplate.name'],
        ['terrasteel_helmet', 'astrogreg.terrasteel_helmet.name'],
        ['terrasteel_nugget', 'astrogreg.terrasteel_nugget.name'],
        ['terrasteel_ingot', 'astrogreg.terrasteel_ingot.name'],
        ['terrasteel_block', 'astrogreg.terrasteel_block.name'],
        
        // Pylons
        ['gaia_pylon', 'astrogreg.gaia_pylon.name'],
        ['mana_pylon', 'astrogreg.mana_pylon.name'],
        ['natura_pylon', 'astrogreg.natura_pylon.name']
    ])
    //#endregion


    
    //#region gregtech
    renameItems('gtmutils', [
        ['luv_power_unit', 'astrogreg.luv_power_unit.name'],
        ['zpm_power_unit', 'astrogreg.zpm_power_unit.name']
    ])

    renameItems('gtceu', [
        ['lv_power_unit', 'astrogreg.lv_power_unit.name'],
        ['mv_power_unit', 'astrogreg.mv_power_unit.name'],
        ['hv_power_unit', 'astrogreg.hv_power_unit.name'],
        ['ev_power_unit', 'astrogreg.ev_power_unit.name'],
        ['iv_power_unit', 'astrogreg.iv_power_unit.name'],
        ['iv_parallel_hatch', 'astrogreg.iv_parallel_hatch.name'],
        ['luv_parallel_hatch', 'astrogreg.luv_parallel_hatch.name'],
        ['zpm_parallel_hatch', 'astrogreg.zpm_parallel_hatch.name'],
        ['uv_parallel_hatch', 'astrogreg.uv_parallel_hatch.name'],
        ['crushing_wheels', 'astrogreg.crushing_wheels.name'],
        ['fusion_casing', 'astrogreg.fusion_casing.name']
    ])

    renameItems('gtceuterminal', [
        ['multi_structure_manager', 'astrogreg.multi_structure_manager.name'],
        ['schematic_interface', 'astrogreg.schematic_interface.name'],
        ['dismantler', 'astrogreg.dismantler.name']
    ])

    const tiers = [
        ['lv', 'lv'], ['mv', 'mv'], ['hv', 'hv'], 
        ['ev', 'ev'], ['iv', 'iv'], ['luv', 'luv'], 
        ['zpm', 'zpm'], ['uv', 'uv'], ['uhv', 'uhv']
    ]

    tiers.forEach(([tier, key]) => {
        renameItems('gtceu', [
            [`${tier}_electric_motor`, `astrogreg.${key}_electric_motor.name`],
            [`${tier}_electric_piston`, `astrogreg.${key}_electric_piston.name`],
            [`${tier}_electric_pump`, `astrogreg.${key}_electric_pump.name`],
            [`${tier}_conveyor_module`, `astrogreg.${key}_conveyor_module.name`],
            [`${tier}_fluid_regulator`, `astrogreg.${key}_fluid_regulator.name`],
            [`${tier}_robot_arm`, `astrogreg.${key}_robot_arm.name`],
            [`${tier}_field_generator`, `astrogreg.${key}_field_generator.name`],
            [`${tier}_emitter`, `astrogreg.${key}_emitter.name`],
            [`${tier}_sensor`, `astrogreg.${key}_sensor.name`]
        ])
    })

    const hermeticTiers = [
        ['lv', 'lv'], ['mv', 'mv'],
        ['hv', 'hv'], ['ev', 'ev'],
        ['iv', 'iv'], ['luv', 'luv'],
        ['zpm', 'zpm'], ['uv', 'uv'],
        ['uhv', 'uhv']
    ]

    hermeticTiers.forEach(([tier, key]) => {
        renameItems('gtceu', [
            [`${tier}_hermetic_casing`, `astrogreg.${key}_hermetic_casing.name`]
        ])
    })
    //#endregion



    //#region ad astra
    renameItems('ad_astra', [
        ['wheel', 'astrogreg.wheel.name'],
        ['launch_pad', 'astrogreg.launch_pad.name'],
        ['tier_1_rocket', 'astrogreg.tier_1_rocket.name'],
        ['tier_2_rocket', 'astrogreg.tier_2_rocket.name'],
        ['tier_3_rocket', 'astrogreg.tier_3_rocket.name'],
        ['tier_4_rocket', 'astrogreg.tier_4_rocket.name'],
        ['tier_1_rover', 'astrogreg.tier_1_rover.name']
    ])

    renameItems('ad_extendra', [
        ['tier_5_rocket', 'astrogreg.tier_5_rocket.name'],
        ['tier_6_rocket', 'astrogreg.tier_6_rocket.name'],
        ['tier_7_rocket', 'astrogreg.tier_7_rocket.name'],
        ['tier_8_rocket', 'astrogreg.tier_8_rocket.name']
    ])
    //#endregion



    //#region simply light
    renameItems('simplylight', [
        ['illuminant_block_on', 'astrogreg.illuminant_block_on.name'],
        ['illuminant_light_gray_block_on', 'astrogreg.illuminant_light_gray_block_on.name'],
        ['illuminant_gray_block_on', 'astrogreg.illuminant_gray_block_on.name'],
        ['illuminant_black_block_on', 'astrogreg.illuminant_black_block_on.name'],
        ['illuminant_brown_block_on', 'astrogreg.illuminant_brown_block_on.name'],
        ['illuminant_red_block_on', 'astrogreg.illuminant_red_block_on.name'],
        ['illuminant_yellow_block_on', 'astrogreg.illuminant_yellow_block_on.name'],
        ['illuminant_lime_block_on', 'astrogreg.illuminant_lime_block_on.name'],
        ['illuminant_green_block_on', 'astrogreg.illuminant_green_block_on.name'],
        ['illuminant_cyan_block_on', 'astrogreg.illuminant_cyan_block_on.name'],
        ['illuminant_light_blue_block_on', 'astrogreg.illuminant_light_blue_block_on.name'],
        ['illuminant_blue_block_on', 'astrogreg.illuminant_blue_block_on.name'],
        ['illuminant_purple_block_on', 'astrogreg.illuminant_purple_block_on.name'],
        ['illuminant_magenta_block_on', 'astrogreg.illuminant_magenta_block_on.name'],
        ['illuminant_pink_block_on', 'astrogreg.illuminant_pink_block_on.name'],
        ['lamp_post', 'astrogreg.lamp_post.name']
    ])
    //#endregion



    //#region farmer's delight
    renameItems('delightful', [
        ['deluxe_cheeseburger', 'astrogreg.deluxe_cheeseburger.name'],
        ['animal_fat', 'astrogreg.animal_fat.name']
    ])

    renameItems('farmersdelight', [
        ['chicken_sandwich', 'astrogreg.chicken_sandwich.name'],
        ['rice_roll_medley_block', 'astrogreg.rice_roll_medley_block.name'],
        ['bacon_sandwich', 'astrogreg.bacon_sandwich_item.name'],
        ['honey_cookie', 'astrogreg.honey_cookie.name'],
        ['pie_crust', 'astrogreg.pie_crust.name']
    ])
    //#endregion


    
    //#region misc
    renameItems('powah', [
        ['steel_energized', 'astrogreg.steel_energized.name']
    ])

    renameItems('minecraft', [
        ['cookie', 'astrogreg.cookie.name'],
        ['netherite_scrap', 'astrogreg.netherite_scrap_item.name']
    ])
    //#endregion
    
})