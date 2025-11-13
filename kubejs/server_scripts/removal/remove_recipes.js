ServerEvents.recipes(event => {
    const toRemoveOut = ['ae2:charger', 'ae2:drive', 'ae2:chest', 'createdieselgenerators:pumpjack_hole', 'expatternprovider:ex_inscriber', 'ad:astra_oxygen', 'waystones:warp_dust',
        'expatternprovider:ex_charger', 'expatternprovider:crystal_fixer', 'expatternprovider:caner', 'exmachinis:item_buffer', 'ae2:crystal_resonance_generator', 'laserio:laser_node',
        'ae2:vibration_chamber', 'expatternprovider:circuit_cutter', 'minecraft:mycelium', 'create:brass_block', 'create:zinc_block', 'createaddition:straw', 'ad_astra:hydrogen',
        'gtceu:me_pattern_buffer_proxy', 'gtceu:me_pattern_buffer', 'create:andesite_alloy', 'ad_astra:desh_plate', 'botanicadds:elven_fluxfield', 'create:controller_rail', 'create:dough',
        'functionalstorage:collector_upgrade', 'functionalstorage:pusher_upgrade', 'functionalstorage:puller_upgrade', 'create:shaft', 'create:blaze_cake_base', 'create:wheat_flour',
        'createaddition:alternator', 'createaddition:gold_rod', 'effortlessbuilding:golden_randomizer_bag', 'gtceu:desh_ingot', 'gtceu:desh_block', 'gtceu:raw_desh_block', 'gtceu:desh_nugget',
        'createaddition:brass_rod', 'createaddition:copper_rod', 'createaddition:electrum_rod', 'createaddition:electric_motor', 'createaddition:capacitor', 'createaddition:tesla_coil',
        'createaddition:portable_energy_interface', 'createaddition:connector', 'createaddition:large_connector', 'createaddition:festive_spool', 'createaddition:diamond_grit_sandpaper',
        'effortlessbuilding:randomizer_bag', 'create:empty_blaze_burner', 'effortlessbuilding:diamond_randomizer_bag', 'laserio:laser_connector', 'laserio:filter_counting',
        'buildinggadgets2:gadget_building', 'buildinggadgets2:gadget_destruction', 'buildinggadgets2:gadget_cut_paste', 'buildinggadgets2:gadget_copy_paste', 'buildinggadgets2:gadget_exchanging',
        'farmersdelight:pie_crust', 'create:water_wheel', 'create:large_water_wheel', 'create:brass_funnel', 'create:andesite_funnel', 'create:brass_tunnel', 'expatternprovider:assembler_matrix_frame',
        'create:andesite_tunnel', 'botania:glass_pickaxe', 'create:brass_nugget', 'minecraft:compass', 'createaddition:biomass', 'expatternprovider:assembler_matrix_wall', 'ad_extendra:b_sand',
        'create:cogwheel', 'create:large_cogwheel', 'fluxnetworks:flux_dust', 'createaddition:biomass_pellet', 'create:zinc_nugget', 'ad_astra:photovoltaic_etrium_cell',
        'ad_astra:photovoltaic_vesnium_cell', 'ad_astra:etrionic_capacitor', 'createaddition:electrum_ingot', 'ad_astra:iron_rod', 'ad_astra:steel_rod', 'ae2:sky_stone_tank',
        'farmersdelight:netherite_knife', 'create:netherite_backtank', 'create:netherite_diving_helmet', 'create:netherite_diving_boots', 'minecraft:netherite_upgrade_smithing_template',
        'ad_astra:fan', 'gtceu:cleaning_maintenance_hatch', 'ad_astra:steel_ingot', 'ad_astra:ice_shard', 'ad_astra:reinforced_door', 'ad_astra:ice_charge', 'gtceu:gravitation_engine_unit',
        'gtceu:solar_panel', 
    ]

    const toRemoveId = ['create:haunting/crimson_fungus', 'create:haunting/warped_fungus', 'create:milling/compat/ae2/sky_stone_block', 'create:milling/compat/ae2/fluix_crystal',
        'create:milling/compat/ae2/ender_pearl', 'create:milling/compat/ae2/certus_quartz', 'create:crushing/raw_platinum_ore', 'create:crushing/raw_platinum_block', 'farmersdelight:stove',
        'create:crushing/raw_uranium_ore', 'create:crushing/raw_uranium_block', 'create:crafting/appliances/slime_ball', 'minecraft:fire_charge', 'gtceu:shapeless/dust_bronze', 'farmersdelight:skillet',
        'gtceu:shapeless/dust_brass', 'create:mixing/brass_ingot',  'createaddition:crafting/rolling_mill', 'ae2:transform/certus_quartz_crystals', 'ae2:network/blocks/cell_workbench',
        'ae2:transform/damaged_budding_quartz', 'ae2:transform/chipped_budding_quartz', 'ae2:network/blocks/spatial_io_port', 'ae2:network/blocks/io_port', 'laserio:filter_basic', 'farmersdelight:cooking_pot',
        'ae2:transform/flawed_budding_quartz', 'ae2:transform/fluix_crystals', 'ae2:transform/fluix_crystal', 'ae2:network/blocks/interfaces_interface', 'ae2:network/blocks/io_condenser',
        'ae2:network/crafting/molecular_assembler', 'ae2:network/blocks/pattern_providers_interface', 'ae2:network/crafting/cpu_crafting_unit', 'ae2:network/blocks/energy_energy_acceptor',
        'laserio:filter_mod', 'laserio:filter_count', 'laserio:filter_tag', 'laserio:filter_mod', 'ad_astra:desh_ingot', 'ad_astra:desh_block', 'ad_astra:raw_desh_block', 'ad_astra:desh_nugget',
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
        'megacells:cells/cell_component_1m', 'megacells:cells/cell_component_4m', 'megacells:cells/cell_component_16m', 'fluxnetworks:fluxcore', 'fluxnetworks:fluxconfigurator', 'fluxnetworks:fluxblock', 
        'fluxnetworks:fluxcontroller', 'fluxnetworks:basicfluxstorage', 'fluxnetworks:herculeanfluxstorage', 'fluxnetworks:gargantuanfluxstorage', 'minecraft:shears', 'minecraft:ender_eye', 'minecraft:end_crystal', 
        'minecraft:netherite_ingot', 'minecraft:netherite_scrap', 'minecraft:netherite_scrap_from_blasting', 'create:crafting/kinetics/flywheel', 'create:crafting/kinetics/mechanical_harvester',
        'create:crafting/kinetics/mechanical_mixer', 'create:crafting/kinetics/deployer', 'create:crafting/kinetics/millstone', 'create:crafting/kinetics/mechanical_mixer', 'create:crafting/kinetics/mechanical_drill',
        'create:crafting/kinetics/steam_engine', 'create:crafting/kinetics/mechanical_press', 'create:crafting/kinetics/piston_extension_pole', 'create:crafting/kinetics/mechanical_crafter', 
        'create:crafting/kinetics/brass_hand', 'create:crafting/kinetics/hose_pulley', 'create:crafting/kinetics/rope_pulley', 'create:crafting/kinetics/elevator_pulley', 'create:crafting/appliances/chain_from_zinc',
        'farmerdelight:paper_from_tree_bark', 'create:mixing/chocolate', 'create:mixing/chocolate_melting', 'create:mixing/tea', 'create:mixing/lava_from_cobble', 'create:mixing/honey', 
        'createaddition:mixing/electrum', 'create:milling/charcoal', 'create:milling/coal', 'create:splashing/crushed_raw_zinc', 'create:splashing/crushed_raw_copper', 'create:splashing/crushed_raw_gold',
        'create:splashing/crushed_raw_iron', 'createaddition:crafting/electrum_block', 'ad_astra:steel_block', 'ad_astra:raw_desh', 'farmersdelight:cutting/gravel', 'gtceu:forge_hammer/gravel_to_sand',
        'create:milling/gravel',
    ];

    const toRemoveType = ['expatternprovider:cutter', 'ae2:inscriber', 'ae2:charger', 'create:crushing', 'ad_astra:alloying', 'createaddition:liquid_burning', 'create:pressing',
        'botania:orechid_ignem', 'botania:orechid', 'create:potion_mixing', 'ad_astra:compressing', 'ad_astra:cryo_freezing', 'ad_astra:nasa_workbench', 'create:deploying',
        'create:automatic_brewing', 'powah:heat_sources', 'functionalstorage:dissolution', 'fluxnetworks:creating_flux', 'create:mystery_conversion'
    ];

    const toRemoveIn = ['ad_astra:moon_desh_ore', 'ad_astra:deepslate_desh_ore', 'ad_astra:ostrum_plate', 'ad_astra:calorite_plate', 'ad_astra:desh_plate',
        'minecraft:netherite_upgrade_smithing_template', 'ad_astra:fan', 'ad_astra:steel_ingot', 'ad_astra:ice_shard'
    ];

    const toRemoveMod = ['createoreexcavation', 'scannable', 'storagenetwork', 'powah',
    ];

    // event.remove({mod: 'ad_astra'})

    toRemoveOut.forEach(element => {
        event.remove({ output: element});
    });

    toRemoveId.forEach(element => {
        event.remove({ id: element});
    });

    toRemoveType.forEach(element => {
        event.remove({ type: element});
    });

    toRemoveIn.forEach(element => {
        event.remove({ input: element})
    })

    toRemoveMod.forEach(element => {
        event.remove({ mod: element})
    });

    //oddball
    event.remove({output: 'farmersdelight:wheat_dough'});
    event.remove({input: 'farmersdelight:wheat_dough'});
    event.remove({input: 'minecraft:fire_charge'});
    event.remove({input: 'minecraft:netherite_scrap'});
    event.remove({output: 'minecraft:netherite_scrap'});
    event.remove({input: 'minecraft:ancient_debris'});
    event.remove({output: 'minecraft:netherite_ingot'});
    event.remove({id: /.*expatternprovider.*cutter.*/});
    event.remove({output: /gtceu:.*_energy_converter/ });
    event.remove({output: /gtmutils:.*_energy_converter/ });
    event.remove({output: /ad_astra:.*_sliding_door/});
    event.remove({output: /ad_extendra:.*_sliding_door/});
    
    //create
    event.remove({output: '#forge:wires'});
    event.remove({input: '#forge:wires'});
    event.remove({output: 'createaddition:iron_rod'});
    event.remove({output: /create:.*_sheet/});
    event.remove({output: /create:.*_ingot/});
    event.remove({output: /create:.*_plate/});
    event.remove({output: /create:.*_dust/});
});

