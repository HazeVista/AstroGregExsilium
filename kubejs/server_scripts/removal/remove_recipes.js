ServerEvents.recipes(event => {
    //#region remove input
    const toRemoveInput = new Set(['ad_astra:moon_desh_ore', 'ad_astra:deepslate_desh_ore', 'ad_astra:ostrum_plate', 'ad_astra:calorite_plate', 'ad_astra:desh_plate',
        'minecraft:netherite_upgrade_smithing_template', 'ad_astra:fan', 'ad_astra:steel_ingot', 'ad_astra:ice_shard', 'gtceu:gaiasteel_ingot', 'create:creative_blaze_cake',
        'create:blaze_cake_base', 'createaddition:cake_base_baked', 'create:blaze_cake', 'create:dough', 'astrogreg:small_sky_stone_dust', 'astrogreg:tiny_sky_stone_dust', 
        'expandedae:dual_cell_housing', 'expandedae:mega_dual_cell_housing', '#create:pulpifiable','astrogreg:flawless_fluix_pearl_gem', 'astrogreg:exquisite_fluix_pearl_gem',

    ])
    //#endregion



    //#region remove output
    const toRemoveOutput = new Set(['ae2:charger', 'ae2:drive', 'ae2:chest', 'createdieselgenerators:pumpjack_hole', 'expatternprovider:ex_inscriber', 'ad:astra_oxygen', 'waystones:warp_dust',
        'expatternprovider:ex_charger', 'expatternprovider:crystal_fixer', 'expatternprovider:caner', 'exmachinis:item_buffer', 'ae2:crystal_resonance_generator', 'laserio:laser_node',
        'ae2:vibration_chamber', 'expatternprovider:circuit_cutter', 'minecraft:mycelium', 'create:brass_block', 'create:zinc_block', 'createaddition:straw', 'ad_astra:hydrogen',
        'gtceu:me_pattern_buffer_proxy', 'gtceu:me_pattern_buffer', 'create:andesite_alloy', 'ad_astra:desh_plate', 'create:controller_rail', 'create:dough', 'ad_astra:rocket_fin',
        'functionalstorage:collector_upgrade', 'functionalstorage:pusher_upgrade', 'functionalstorage:puller_upgrade', 'create:shaft', 'create:blaze_cake_base', 'create:wheat_flour',
        'createaddition:alternator', 'createaddition:gold_rod', 'effortlessbuilding:golden_randomizer_bag', 'ad_astra:wheel', 'ad_astra:steel_engine', 'ad_astra:launch_pad',
        'createaddition:brass_rod', 'createaddition:copper_rod', 'createaddition:electrum_rod', 'createaddition:electric_motor', 'createaddition:capacitor', 'createaddition:tesla_coil',
        'createaddition:portable_energy_interface', 'createaddition:connector', 'createaddition:large_connector', 'createaddition:festive_spool', 'createaddition:diamond_grit_sandpaper',
        'effortlessbuilding:randomizer_bag', 'create:empty_blaze_burner', 'effortlessbuilding:diamond_randomizer_bag', 'laserio:laser_connector', 'laserio:filter_counting', 'delightful:_bottle',
        'buildinggadgets2:gadget_building', 'buildinggadgets2:gadget_destruction', 'buildinggadgets2:gadget_cut_paste', 'buildinggadgets2:gadget_copy_paste', 'buildinggadgets2:gadget_exchanging',
        'farmersdelight:pie_crust', 'create:water_wheel', 'create:large_water_wheel', 'create:brass_funnel', 'create:andesite_funnel', 'create:brass_tunnel', 'expatternprovider:assembler_matrix_frame',
        'create:andesite_tunnel', 'botania:glass_pickaxe', 'create:brass_nugget', 'minecraft:compass', 'createaddition:biomass', 'expatternprovider:assembler_matrix_wall', 'ad_extendra:b_sand',
        'create:cogwheel', 'create:large_cogwheel', 'fluxnetworks:flux_dust', 'createaddition:biomass_pellet', 'create:zinc_nugget', 'ad_astra:photovoltaic_etrium_cell', 'ad_astra:engine_frame',
        'ad_astra:photovoltaic_vesnium_cell', 'ad_astra:etrionic_capacitor', 'createaddition:electrum_ingot', 'ad_astra:iron_rod', 'ad_astra:steel_rod', 'ae2:sky_stone_tank',
        'farmersdelight:netherite_knife', 'create:netherite_backtank', 'create:netherite_diving_helmet', 'create:netherite_diving_boots', 'minecraft:netherite_upgrade_smithing_template',
        'ad_astra:fan', 'gtceu:cleaning_maintenance_hatch', 'ad_astra:steel_ingot', 'ad_astra:ice_shard', 'ad_astra:reinforced_door', 'ad_astra:ice_charge', 'gtceu:gravitation_engine_unit',
        'gtceu:solar_panel', 'create:red_sand_paper', 'botania:mana_powder', 'botania:monocle', 'botania:mana_glass_pane', 'botania:bifrost_pane', 'botania:red_string', 'botania:turntable',
        'botania:elf_glass_pane', 'botania:auto_crafting_halo', 'botania:thunder_sword', 'botania:gaia_ingot', 'botania:bifrost_perm', 'botania:manasteel_ingot', 'botania:terrasteel_ingot',
        'botania:elementium_ingot', 'botania:elementium_nugget', 'botania:manasteel_nugget', 'botania:terrasteel_nugget', 'botania:starfield', 'dustrial_decor:cardboard_boots',
        'botania:elementium_block', 'botania:manasteel_block', 'botania:terrasteel_block', 'botania:elementium_shears', 'dustrial_decor:cardboard_leggings', 'botania:terrasteel_helmet',
        'botania:open_bucket', 'botania:elementium_pickaxe', 'botania:elementium_shovel', 'botania:elementium_hoe', 'botania:elementium_axe', 'botania:gaia_spreader', 'ad_astra:steel_tank',
        'botania:elementium_sword', 'botania:ender_dagger', 'botania:manasteel_pick', 'botania:manasteel_shovel', 'botania:manasteel_hoe', 'botania:manasteel_axe', 'botania:manasteel_sword',
        'botania:crafting_halo', 'botania:laputa_shard', 'gtceu:ulv_solar_panel', 'dustrial_decor:cardboard_helmet', 'dustrial_decor:cardboard_chestplate', 'botania:terrasteel_chestplate',
        'botania:terrasteel_leggings', 'botania:terrasteel_boots', 'botania:terra_sword', 'botania:terra_axe', 'botania:terra_pick', 'botania:third_eye', 'botania:orechid_ignem',
        'botania:floating/heisei_dream', 'botania:vinculotus', 'botania:floating_vinculotus', 'create:tree_fertilizer', 'botania:agricarnation', 'botania:agricarnation_chibi',
        'botania:floating_agricarnation', 'botania:floating_agricarnation_chibi', 'botania:hyacidus', 'botania:floating_hyacidus', 'botania:labellia', 'botania:floating_labellia',
        'botania:loonium', 'botania:floating_loonium', 'botania:spectranthemum', 'botania:floating_spectranthemum', 'botania:daffomill', 'botania:floating_daffomill', 'botania:narslimmus',
        'botania:floating_narslimmus', 'botania:medumone', 'botania:floating_medumone', 'botania:shulk_me_not', 'botania:floating_shulk_me_not', 'botania:rafflowsia', 'botania:floating_rafflowsia',
        'botania:manastar', 'botania:floating_manastar', 'botania:tigerseye', 'botania:floating_tigerseye', 'botania:rannuncarpus', 'botania:floating_rannuncarpus', 'botania:rannuncarpus_chibi', 
        'botania:floating_rannuncarpus_chibi', 'botania:tangleberrie', 'botania:floating_tangleberrie', 'botania:vine_ball', 'botania:orechid', 'botania:endoflame', 'botania:hydroangeas',
        'create:builders_tea', 'create:chocolate_glazed_berries', 'create:bar_of_chocolate', 'ae2:not_so_mysterious_cube', 'ae2:quantum_link', 'ae2:quantum_ring', 'minecraft:recovery_compass',
        'botania:cell_block', 'expandedae:dual_cell_housing', 'expandedae:mega_dual_cell_housing', 'create:copper_diving_helmet', 'create:copper_diving_boots', 'gtceu:tungsten_grinding_head', 
        'gtceu:diamond_grinding_head', 'ad_astra:oxygen_gear', 'ad_astra:large_gas_tank', 'ad_astra:gas_tank', 'ad_astra:vent', 'ad_astra:wrench', 'expatternprovider:assembler_matrix_glass',
        'megacells:sky_steel_ingot', 'ae2:charged_staff', 'megacells:cell_dock', 'ae2:entropy_manipulator', 'functionalstorage:iron_downgrade', 'ae2wtlib:magnet_card', 'ae2:radio',
        'ae2netanalyser:network_analyser', 'ae2:basic_card', 'ae2:advanced_card', 'functionalstorage:void_upgrade', 'ad_astra:ti_69', 'ad_astra:cheese_block', 'gtceu:dough', 'minecraft:cookie',
        'ad_astra:cheese', 'delightful:nut_butter_bottle', 'farmersdelight:hot_cocoa', 'astrogreg:small_sky_stone_dust', 'astrogreg:tiny_sky_stone_dust', 'astrogreg:flawless_fluix_pearl_gem',
        'astrogreg:exquisite_fluix_pearl_gem', 'ae2:fluix_pickaxe', 'ae2:fluix_hoe', 'ae2:fluix_shovel', 'ae2:fluix_axe', 'ae2:fluix_sword', 'ae2:fluix_upgrade_smithing_template', 
        'ae2:certus_quartz_pickaxe', 'ae2:certus_quartz_hoe', 'ae2:certus_quartz_shovel', 'ae2:certus_quartz_axe', 'ae2:certus_quartz_sword', 
    ])
    //#endregion



    //#region remove recipe id
    const toRemoveId = (['create:haunting/crimson_fungus', 'create:haunting/warped_fungus', 'create:milling/compat/ae2/sky_stone_block', 'create:milling/compat/ae2/fluix_crystal', 'minecraft:coarse_dirt',
        'create:milling/compat/ae2/ender_pearl', 'create:milling/compat/ae2/certus_quartz', 'create:crushing/raw_platinum_ore', 'create:crushing/raw_platinum_block', 'farmersdelight:stove',
        'create:crushing/raw_uranium_ore', 'create:crushing/raw_uranium_block', 'create:crafting/appliances/slime_ball', 'minecraft:fire_charge', 'gtceu:shapeless/dust_bronze', 'farmersdelight:skillet',
        'gtceu:shapeless/dust_brass', 'create:mixing/brass_ingot',  'createaddition:crafting/rolling_mill', 'ae2:transform/certus_quartz_crystals', 'ae2:network/blocks/cell_workbench',
        'ae2:transform/damaged_budding_quartz', 'ae2:transform/chipped_budding_quartz', 'ae2:network/blocks/spatial_io_port', 'ae2:network/blocks/io_port', 'laserio:filter_basic', 'farmersdelight:cooking_pot',
        'ae2:transform/flawed_budding_quartz', 'ae2:transform/fluix_crystals', 'ae2:transform/fluix_crystal', 'ae2:network/blocks/interfaces_interface', 'ae2:network/blocks/io_condenser',
        'ae2:network/crafting/molecular_assembler', 'ae2:network/blocks/pattern_providers_interface', 'ae2:network/crafting/cpu_crafting_unit', 'ae2:network/blocks/energy_energy_acceptor',
        'laserio:filter_mod', 'laserio:filter_count', 'laserio:filter_tag', 'laserio:filter_mod', 'ad_astra:rocket_nose_cone', 'farmersdelight:apple_pie', 'delightful:cutting/salmonberry_pie',
        'botania:mana_infusion/netherrack_dupe', 'createaddition:mixing/netherrack', 'botania:mana_infusion/soul_sand_dupe', 'botania:mana_infusion/glowstone_dupe', 'botania:mana_infusion/redstone_dupe',
        'botania:mana_infusion/quartz_dupe', 'botania:mana_infusion/coal_dupe', 'botania:mana_infusion/gravel_dupe', 'minecraft:netherite_drill_smithing', 'create:crafting/kinetics/fluid_tank',
        'create:crafting/kinetics/white_sail', 'create:crafting/kinetics/fluid_valve', 'farmersdelight:rope', 'gtceu:autoclave/silicon_dioxide_to_quartzite_gem', 'gtceu:assembler/end_crystal',
        'gtceu:arc_furnace/arc_netherite_dust', 'gtceu:alloy_smelter/alloy_smelt_netherite_dust_to_block', 'gtceu:smelting/smelt_dust_netherite_to_ingot', 'laserio:logic_chip_raw', 'create:crafting/kinetics/spout',
        'laserio:card_fluid', 'laserio:card_item', 'laserio:card_redstone', 'laserio:card_energy', 'laserio:laser_wrench', 'travelanchors:travel_staff', 'travelanchors:travel_anchor', 'waystones:warp_stone',
        'create:crafting/curiosities/cake', 'farmersdelight:wheat_dough_from_water',  'functionalstorage:netherite_upgrade', 'functionalstorage:diamond_upgrade', 'functionalstorage:gold_upgrade', 
        'functionalstorage:void_upgrade', 'functionalstorage:fluid_1', 'functionalstorage:fluid_2', 'functionalstorage:fluid_4', 'functionalstorage:linking_tool', 'laserio:laser_connector_advanced',
        'functionalstorage:configuration_tool', 'functionalstorage:armory_cabinet', 'functionalstorage:framed_simple_compacting_drawer', 'functionalstorage:compacting_framed_drawer', 'create:crafting/kinetics/speedometer',
        'functionalstorage:framed_storage_controller', 'functionalstorage:simple_compacting_drawer', 'functionalstorage:compacting_drawer', 'megacells:cells/cell_component_64m', 'megacells:cells/cell_component_256m',
        'functionalstorage:framed_controller_extension', 'functionalstorage:copper_upgrade', 'functionalstorage:controller_extension', 'functionalstorage:storage_controller', 'merequester:requester', 
        'ae2:smelting/silicon_from_certus_quartz_dust', 'ae2:blasting/silicon_from_certus_quartz_dust', 'ae2:decorative/quartz_glass', 'ae2:network/parts/export_bus', 'ae2:network/blocks/interfaces_interface', 
        'ae2:decorative/quartz_vibrant_glass', 'ae2:network/crafting/patterns_blank', 'ae2:network/cables/glass_fluix', 'ae2:network/parts/quartz_fiber_part', 'ae2:misc/fluixpearl', 'ae2:network/parts/import_bus',
        'ae2:network/blocks/energy_vibration_chamber', 'ae2:network/crystal_resonance_generator', 'ae2:network/blocks/crystal_processing_growth_accelerator', 'ae2:network/blocks/inscribers', 
        'ae2:network/blocks/crystal_processing_charger', 'ae2:network/blocks/spatial_anchor', 'ae2:materials/cardcapacity', 'ae2:materials/annihilationcore', 'ae2:network/blocks/storage_drive',  
        'ae2:network/blocks/pattern_providers_interface', 'ae2:network/wireless_part', 'ae2:network/crafting/molecular_assembler', 'ae2:network/blocks/cell_workbench', 'ae2:network/blocks/controller',
        'ae2:network/blocks/energy_energy_acceptor', 'ae2:network/blocks/io_port', 'ae2:network/blocks/storage_chest', 'ae2:network/parts/tunnels_me', 'ae2:network/blocks/spatial_io_port', 
        'ae2:network/crafting/cpu_crafting_unit', 'ae2:network/cells/item_storage_components_cell_1k_part', 'ae2:network/cells/item_storage_components_cell_4k_part', 'create:crafting/kinetics/mechanical_saw',
        'ae2:network/cells/item_storage_components_cell_16k_part', 'ae2:network/cells/item_storage_components_cell_64k_part', 'ae2:network/cells/item_storage_components_cell_256k_part', 
        'ae2:network/blocks/io_condenser', 'ae2:misc/tiny_tnt', 'ae2:tools/misctools/entropy_manipulator', 'ae2:network/parts/annihilation_plane_alt', 'ae2:network/parts/annihilation_plane_alt2', 
        'ae2:network/parts/formation_plane_alt', 'ae2:network/parts/formation_plane', 'ae2:network/blocks/crank',  'expatternprovider:caner', 'expatternprovider:crystal_fixer', 'create:crafting/kinetics/mechanical_plough',
        'expatternprovider:ingredient_buffer', 'expatternprovider:tape', 'expatternprovider:ex_charger', 'expatternprovider:ex_inscriber', 'expatternprovider:oversize_interface', 'create:crafting/kinetics/whisk',
        'expatternprovider:wireless_tool', 'megacells:crafting/compression_card', 'megacells:crafting/decompression_module', 'megacells:crafting/mega_crafting_unit', 'create:crafting/kinetics/wrench',
        'megacells:cells/standard/fluid_storage_cell_64m', 'megacells:cells/standard/fluid_storage_cell_4m', 'megacells:cells/standard/fluid_storage_cell_16m', 'megacells:cells/standard/fluid_storage_cell_256m', 
        'megacells:cells/standard/fluid_storage_cell_1m', 'megacells:cells/standard/item_storage_cell_64m', 'megacells:cells/standard/item_storage_cell_4m', 'megacells:cells/standard/item_storage_cell_16m', 
        'megacells:cells/standard/item_storage_cell_256m', 'megacells:cells/standard/item_storage_cell_1m', 'megacells:cells/mega_fluid_cell_housing', 'megacells:cells/mega_item_cell_housing', 
        'megacells:cells/cell_component_1m', 'megacells:cells/cell_component_4m', 'megacells:cells/cell_component_16m', 'minecraft:shears', 'minecraft:ender_eye', 'minecraft:end_crystal', 
        'minecraft:netherite_ingot', 'minecraft:netherite_scrap', 'minecraft:netherite_scrap_from_blasting', 'create:crafting/kinetics/flywheel', 'create:crafting/kinetics/mechanical_harvester',
        'create:crafting/kinetics/mechanical_mixer', 'create:crafting/kinetics/deployer', 'create:crafting/kinetics/millstone', 'create:crafting/kinetics/mechanical_mixer', 'create:crafting/kinetics/mechanical_drill',
        'create:crafting/kinetics/steam_engine', 'create:crafting/kinetics/mechanical_press', 'create:crafting/kinetics/piston_extension_pole', 'create:crafting/kinetics/mechanical_crafter', 
        'create:crafting/kinetics/brass_hand', 'create:crafting/kinetics/hose_pulley', 'create:crafting/kinetics/rope_pulley', 'create:crafting/kinetics/elevator_pulley', 'create:crafting/appliances/chain_from_zinc',
        'farmersdelight:paper_from_tree_bark', 'create:mixing/chocolate', 'create:mixing/tea', 'create:mixing/lava_from_cobble', 'create:mixing/honey', 'create:splashing/crushed_raw_gold',
        'createaddition:mixing/electrum', 'create:milling/charcoal', 'create:milling/coal', 'create:splashing/crushed_raw_zinc', 'create:splashing/crushed_raw_copper', 'gtceu:macerator/macerate_steak',
        'create:splashing/crushed_raw_iron', 'createaddition:crafting/electrum_block', 'ad_astra:steel_block', 'ad_astra:raw_desh', 'farmersdelight:cutting/gravel', 'gtceu:forge_hammer/gravel_to_sand',
        'create:milling/gravel', 'gtceu:forge_hammer/cobblestone_to_gravel', 'gtceu:macerator/gravel_to_flint', 'create:splashing/sand', 'create:splashing/red_sand', 'minecraft:pumpkin_pie',
        'minecraft:bread', 'dustrial_decor:gold_chain', 'botania:cocoon', 'botania:fel_pumpkin', 'botania:terra_plate', 'botania:alfheim_portal', 'simplylight:illuminant_block_on',
        'botania:virus_necrodermal', 'botania:virus_nullodermal', 'create:mixing/compat/ae2/fluix_crystal', 'minecraft:clock','botania:fabulous_pool', 'botania:mana_infusion/mana_bottle', 'botania:prism',
        'botania:avatar', 'botania:star_sword', 'botania:mana_infusion/managlass', 'botania:redstone_spreader', 'farmersdelight:honey_cookie', 'farmersdelight:sweet_berry_cookie', 'gtceu:macerator/macerate_pork_chop',
        'minecraft:cake', 'farmersdelight:cake_from_milk_bottle', 'botania:manasteel_shears', 'botania:lens_normal', 'simplylight:illuminant_slab', 'simplylight:walllamp', 'simplylight:rodlamp',
        'simplylight:bulb', 'simplylight:edge_light', 'simplylight:', 'simplylight:lamp_post', 'simplylight:illuminant_block', 'gtceu:shaped/nugget_assembling_gaiasteel', 'gtceu:shaped/block_compress_gaiasteel', 
        'gtceu:shapeless/nugget_disassembling_gaiasteel', 'gtceu:shapeless/block_decompress_gaiasteel', 'botania:thorn_chakram', 'gtceu:centrifuge/ender_air_separation', 'botania:lens_magnet',
        'botania:mana_spreader', 'botania:elven_spreader', 'botania:bauble_box', 'botania:fabulous_pool_upgrade', 'botania:shimmerrock', 'botania:forest_eye', 'botania:hourglass', 'botania:spawner_mover',
        'botania:slime_bottle', 'botania:world_seed', 'botania:spawner_claw', 'botania:sextant', 'botania:astrolabe', 'botania:black_hole_talisman', 'botania:spark_changer', 'botania:mana_distributor', 
        'botania:pump', 'botania:knockback_belt', 'botania:travel_belt', 'botania:super_travel_belt', 'botania:speed_up_belt', 'botania:flighttiara_0', 'botania:super_cloud_pendant', 'botania:super_lava_pendant',
        'botania:conjuration_catalyst', 'botania:alchemy_catalyst', 'botania:conjuration_catalyst', 'botania:redstone_root', 'botania:petal_apothecary/clayconia', 'pccard:item/card_programmed_circuit',
        'botania:mana_infusion/clayconia_chibi', 'botania:floating_clayconia', 'botania:floating_clayconia_chibi', 'minecraft:blaze_powder', 'gtceu:shapeless/pumpkin_pie_from_dough', 'farmersdelight:chicken_sandwich',
        'gtceu:shapeless/block_decompress_mana_diamond_gem', 'botania:mana_mirror', 'gtceu:shapeless/manadiamond_block_deconstruct', 'gtceu:shaped/block_compress_mana_diamond', 'createlowheated:mixing/chocolate',
        'gtceu:shapeless/dragonstone_block_deconstruct', 'gtceu:shaped/block_compress_mana_diamond', 'botania:spark', 'botania:petal_apothecary/vazkii_head', 'botania:runic_altar/head',
        'botania:heisei_dream', 'gtceu:extruder/nan_certificate', 'gtceu:forming_press/pumpkin_pie', 'createaddition:mixing/bioethanol', 'createaddition:compacting/cake_base', 'botania:shimmerwood_planks',
        'botania:mana_infusion/flint_to_gunpowder', 'botania:mana_infusion/gunpowder_to_flint', 'gtceu:shapeless/block_decompress_mana_diamond', 'botania:pure_daisy/livingrock', 'minecraft:paper',
        'botania:pure_daisy/end_stone_to_cobbled_deepslate', 'gtceu:alloy_smelter/form_brick', 'createlowheated:mixing/builders_tea', 'ae2:network/cells/item_cell_housing', 'ae2:network/cells/fluid_cell_housing',
        'createaddition:compat/ae2/charged_certus_quartz', 'ae2:decorative/quartz_block', 'minecraft:iron_chestplate', 'minecraft:iron_helmet', 'minecraft:iron_boots', 'minecraft:iron_leggings',
        'minecraft:diamond_helmet', 'minecraft:diamond_chestplate', 'minecraft:diamond_leggings', 'minecraft:diamond_boots', 'minecraft:golden_boots', 'minecraft:golden_leggings', 'minecraft:golden_helmet', 
        'minecraft:golden_chestplate', 'botania:manasteel_boots', 'botania:manasteel_leggings', 'botania:manasteel_chestplate', 'botania:manasteel_helmet', 'botania:elementium_boots', 'botania:elementium_leggings',
        'botania:elementium_chestplate', 'botania:elementium_helmet', 'ae2:network/cells/view_cell', 'ae2:tools/network_memory_card', 'ae2:decorative/quartz_fixture', 'ae2:network/wireless_booster', 
        'ae2:network/parts/panels_semi_dark_monitor', 'buildinggadgets2:template_manager', 'gtceu:macerator/macerate_hay_block', 'gtceu:macerator/macerate_sugar_cane', 'farmersdelight:roasted_mutton_chops', 
        'delightful:melon_slice', 'delightful:cutting/pumpkin_pie', 'farmersdelight:cutting/apple_pie', 'farmersdelight:cutting/chocolate_pie', 'farmersdelight:cutting/sweet_berry_cheesecake', 'delightful:cutting/baklava',
        'gtceu:macerator/macerate_chicken', 'gtceu:macerator/macerate_rabbit', 'gtceu:macerator/macerate_mutton', 'gtceu:macerator/macerate_steak', 'gtceu:macerator/macerate_pork_chop',, 'ad_extendra:saturlyte_nugget', 
        'ad_extendra:juperium_nugget', 'delightful:food_oven', 'delightful:food/sweet_berry_cheesecake_from_cheese', 'delightful:food/glow_jam_cookie', 'delightful:food/baklava_no_citrus', 'gtceu:compressor/sandstone',
        'delightful:food/nut_dough', 'delightful:food/salmonberry_pie', 'create:milling/cocoa_beans', 'gtceu:shaped/cake_from_dough', 'farmersdelight:sweet_berry_cheesecake', 'farmersdelight:cutting/cake',  
        'farmersdelight:sweet_berry_cheesecake_from_slices', 'farmersdelight:cake_from_slices', 'gtceu:shaped/small_dust_assembling_skystone', 'gtceu:shaped/tiny_dust_assembling_skystone', 'minecraft:sandstone',
    
    ])
    //#endregion



    //#region remove type
    const toRemoveType = (['expatternprovider:cutter', 'ae2:inscriber', 'ae2:charger', 'create:crushing', 'ad_astra:alloying', 'createaddition:liquid_burning', 'create:pressing',
        'botania:orechid_ignem', 'botania:orechid', 'create:potion_mixing', 'ad_astra:compressing', 'ad_astra:cryo_freezing', 'ad_astra:nasa_workbench', 'create:deploying',
        'create:automatic_brewing', 'powah:heat_sources', 'functionalstorage:dissolution', 'create:mystery_conversion', 'botania:mana_infusion'
    ])
    //#endregion



    //#region remove whole mod
    const toRemoveMod = (['createoreexcavation', 'scannable', 'storagenetwork', 'powah', 'grapplemod', 'fluxnetworks', 'trashcans', 'toolbelt', 'constructionwand'])
    //#endregion



    //#region helpers
    event.remove({ input: Array.from(toRemoveInput) })
    event.remove({ output: Array.from(toRemoveOutput) })
    toRemoveType.forEach(string => {event.remove({ type: string})})
    toRemoveId.forEach(string => {event.remove({ id: string})})
    toRemoveMod.forEach(string => {event.remove({ mod: string})})
    //#endregion



    //#region oddball
    event.remove({input: 'botania:terra_sword'})
    event.remove({type: 'gtceu:gas_collector'})
    event.remove({output: 'farmersdelight:wheat_dough'})
    event.remove({input: 'farmersdelight:wheat_dough'})
    event.remove({input: 'minecraft:fire_charge'})
    event.remove({input: 'minecraft:netherite_scrap'})
    event.remove({output: 'minecraft:netherite_scrap'})
    event.remove({input: 'minecraft:ancient_debris'})
    event.remove({output: 'minecraft:netherite_ingot'})
    event.remove({output: 'createaddition:iron_rod'})
    event.remove({output: '#forge:wires'})
    event.remove({input: '#forge:wires'})

    event.remove({id: /.*expatternprovider.*cutter.*/});
    event.remove({ output: /gtceu:.*_charger_4x/ });
    event.remove({ output: /gtceu:.*_energy_converter/ });
    event.remove({ output: /gtmutils:.*_energy_converter/ });
    event.remove({ output: /gtmutils:.*_auto_charger_4x/ });
    event.remove({ output: /ad_astra:.*_sliding_door/ });
    event.remove({ output: /ad_extendra:.*_sliding_door/ });
    event.remove({ output: /create:.*_(sheet|ingot|plate|dust)/ });
    event.remove({ output: /farmersdelight:.*_knife/ });
    event.remove({ output: /botania:.*(rod|pylon|cloak)/ });
    event.remove({ id: /botania:glimmering_.*/ });
    event.remove({ id: /botania:.*_ring(_greater)?/ });
    event.remove({ id: /botania:spark_upgrade_.*/ });
    event.remove({ output: /botania:rune_.*/ });
    event.remove({ output: /botania:quartz_.*/ });
    event.remove({ id: /gtceu:(cutter|shaped)\/.*_slab/ });
    event.remove({ id: /ae2:network\/cells\/.*_storage_cell_.*/ });
    event.remove({ id: /ad_astra:radium_.*/ });
    event.remove({ output: /ad_extendra:.*_tank/ });
    event.remove({ output: /gtceu:.*_air_scrubber/ });
    event.remove({ output: /minecraft:.*_armor_trim_smithing_template/})
    event.remove({ id: /farmersdelight:.*_pie_from_slixes/})
    event.remove({ id: /delightful:food\/.*_pie_from_slices/})
    //#endregion
})