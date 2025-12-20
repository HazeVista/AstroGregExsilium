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
    */

    //item renamer function
    const renameItems = (mod, items) => {
        items.forEach(([item, name]) => {
            event.renameItem(`${mod}:${item}`, name)
        })
    }
    //#endregion



    //#region botania
    renameItems('botania', [
        // Alfsteel (Elementium)
        ['elementium_boots', '§dAlfsteel§r Boots'],
        ['elementium_leggings', '§dAlfsteel§r Leggings'],
        ['elementium_chestplate', '§dAlfsteel§r Chestplate'],
        ['elementium_helmet', '§dAlfsteel§r Helmet'],
        ['elementium_shears', '§dAlfsteel§r Shears'],
        ['elementium_nugget', '§dAlfsteel§r Nugget'],
        ['elementium_ingot', '§dAlfsteel§r Ingot'],
        ['elementium_block', '§dAlfsteel§r Block'],
        
        // Manasteel items
        ['manasteel_boots', '§9Manasteel§r Boots'],
        ['manasteel_leggings', '§9Manasteel§r Leggings'],
        ['manasteel_chestplate', '§9Manasteel§r Chestplate'],
        ['manasteel_helmet', '§9Manasteel§r Helmet'],
        ['manasteel_shears', '§9Manasteel§r Shears'],
        ['manasteel_nugget', '§9Manasteel§r Nugget'],
        ['manasteel_ingot', '§9Manasteel§r Ingot'],
        ['manasteel_block', '§9Manasteel§r Block'],
        
        // Terrasteel items
        ['terrasteel_boots', '§2Terrasteel§f Boots'],
        ['terrasteel_leggings', '§2Terrasteel§f Leggings'],
        ['terrasteel_chestplate', '§2Terrasteel§f Chestplate'],
        ['terrasteel_helmet', '§2Terrasteel§f Helmet'],
        ['terrasteel_nugget', '§2Terrasteel§f Nugget'],
        ['terrasteel_ingot', '§2Terrasteel§f Ingot'],
        ['terrasteel_block', '§2Terrasteel§f Block'],
        
        // Pylons
        ['gaia_pylon', '§dElven Pylon§r'],
        ['mana_pylon', '§bMana Pylon§r'],
        ['natura_pylon', '§2Natura Pylon§r']
    ])
    //#endregion


    
    //#region gregtech
    renameItems('gtmutils', [
        ['neutronium_credit', '§cAstroCredit'],
        ['luv_power_unit', '§dLudicrous Power Unit'],
        ['zpm_power_unit', '§cZero Point Power Unit']
    ])

    renameItems('gtceu', [
        ['lv_power_unit', '§7Low Power Unit'],
        ['mv_power_unit', '§bMedium Power Unit'],
        ['hv_power_unit', '§6High Power Unit'],
        ['ev_power_unit', '§5Extreme Power Unit'],
        ['iv_power_unit', '§9Insane Power Unit'],
        ['iv_parallel_hatch', '§9Basic Parallel Control Hatch'],
        ['luv_parallel_hatch', '§dAdvanced Parallel Control Hatch'],
        ['zpm_parallel_hatch', '§cElite Parallel Control Hatch'],
        ['uv_parallel_hatch', '§3Ultimate Parallel Control Hatch']
    ])
    //#endregion



    //#region ad astra
    renameItems('ad_astra', [
        ['wheel', 'Rubber Tire'],
        ['launch_pad', 'Rocket Launch Platform'],
        ['tier_1_rocket', '§bASTRO-Falcon'],
        ['tier_2_rocket', '§6ASTRO-Falcon II'],
        ['tier_3_rocket', '§5ASTRO-Pegasus'],
        ['tier_4_rocket', '§9ASTRO-Pegasus II'],
        ['tier_1_rover', '§bASTRO-Scarab']
    ])

    renameItems('ad_extendra', [
        ['tier_5_rocket', '§dASTRO-Thunderbird'],
        ['tier_6_rocket', '§cASTRO-Thunderbird II'],
        ['tier_7_rocket', '§3ASTRO-Thunderbird III'],
        ['tier_8_rocket', '§4ASTRO-Atlas']
    ])
    //#endregion



    //#region simply light
    renameItems('simplylight', [
        ['illuminant_block_on', 'Illuminant Block (On)'],
        ['illuminant_light_gray_block_on', 'Illuminant Light Gray Block (On)'],
        ['illuminant_gray_block_on', 'Illuminant Gray Block (On)'],
        ['illuminant_black_block_on', 'Illuminant Black Block (On)'],
        ['illuminant_brown_block_on', 'Illuminant Brown Block (On)'],
        ['illuminant_red_block_on', 'Illuminant Red Block (On)'],
        ['illuminant_yellow_block_on', 'Illuminant Yellow Block (On)'],
        ['illuminant_lime_block_on', 'Illuminant Lime Block (On)'],
        ['illuminant_green_block_on', 'Illuminant Green Block (On)'],
        ['illuminant_cyan_block_on', 'Illuminant Cyan Block (On)'],
        ['illuminant_light_blue_block_on', 'Illuminant Light Blue Block (On)'],
        ['illuminant_blue_block_on', 'Illuminant Blue Block (On)'],
        ['illuminant_purple_block_on', 'Illuminant Purple Block (On)'],
        ['illuminant_magenta_block_on', 'Illuminant Magenta Block (On)'],
        ['illuminant_pink_block_on', 'Illuminant Pink Block (On)'],
        ['lamp_post', 'Illuminant Lamp Post']
    ])
    //#endregion



    //#region farmer's delight
    renameItems('delightful', [
        ['deluxe_cheeseburger', 'Deluxe Double Bacon Cheeseburger'],
        ['animal_fat', 'Tallow']
    ])

    renameItems('farmersdelight', [
        ['chicken_sandwich', 'Chicken Sub'],
        ['rice_roll_medley_block', 'Sushi Platter'],
        ['bacon_sandwich', 'BLT Sandwich'],
        ['honey_cookie', 'Sugar Cookie'],
        ['pie_crust', 'Baked Pie Crust']
    ])
    //#endregion


    
    //#region misc
    renameItems('powah', [
        ['steel_energized', 'Energized Steel Ingot']
    ])

    renameItems('minecraft', [
        ['cookie', 'Chocolate Chip Cookie']
    ])
    //#endregion

})