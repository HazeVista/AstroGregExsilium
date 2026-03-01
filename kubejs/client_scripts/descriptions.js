ItemEvents.tooltip(event => {
    
    //#region tooltip design guide
    /*
    *   
    *   Reference this spreadsheet for information on formatting text color and style in Minecraft:
    *   https://docs.google.com/spreadsheets/d/1Wb28oe5-VFauhTez_u2o7bBstofGxM35DeMtv6cvrQY/edit?usp=sharing
    *      
    *   Adding a space between your code and text will create a space on the tooltip. Use that knowledge accordingly.
    *   §o§7 is the default light gray code I personally use for most tooltips.
    * 
    */
    //#endregion

    
    
    //#region multiblocks
    /*
    *   Multiblock Tooltip Builder
    *   how to use:
    *    
    *       multiTooltip(event, 'multiblock_id', [
    *           {text: 'translation.key.1'},            You can add one or multiple lines like this, defaults to line 1
    *           {text: 'translation.key.2'}            A new line under a machine will go to the next line, as many as you want
    *       ])
    * 
    *       multiTooltip(event, 'multiblock_id', [
    *           {line: 4, text: 'translation.key'}    This will add your tooltip to a specific line. In this example, line 4
    *       ])                                        You can continue this with more lines as well
    *   
    *       after you've typed it out, go to assets/astrogreg/lang/en_us.json (and other translation files if you're translating)
    *       then add your translation key and lang
    *
    */

    //multiblock tooltip builder
    function multiTooltip(event, machineId, tooltips) {
        event.addAdvanced(machineId, (item, advanced, text) => {
            tooltips.forEach(tooltip => {
                if (tooltip.line !== undefined) {
                    text.add(tooltip.line, Text.translate(tooltip.text))
                } else {
                    text.add(Text.translate(tooltip.text))
                }
            })
        })
    }
    
    //add tooltips below
    multiTooltip(event, 'gtceu:greenhouse', [
        { text: 'astrogreg.greenhouse.tooltip' },
    ])

    multiTooltip(event, 'gtceu:conservatory', [
        { text: 'astrogreg.conservatory.tooltip.1' },
        { text: 'astrogreg.conservatory.tooltip.2' },
        { text: 'astrogreg.conservatory.tooltip.3' }
    ])

    multiTooltip(event, 'astrogreg:aether_turbine', [
        { line: 3, text: 'astrogreg.aether_turbine.tooltip' }
    ])

    multiTooltip(event, 'astrogreg:steam_blast_furnace', [
        { line: 1, text: 'astrogreg.steam_blast_furnace.tooltip' },
    ])

    multiTooltip(event, 'astrogreg:large_steam_centrifuge', [
        { text: 'astrogreg.large_steam_centrifuge.tooltip' },
    ])

    multiTooltip(event, 'astrogreg:large_steam_compressor', [
        { text: 'astrogreg.large_steam_compressor.tooltip' },
    ])

    multiTooltip(event, 'astrogreg:large_steam_ore_washer', [
        { text: 'astrogreg.large_steam_ore_washer.tooltip' }
    ])

    multiTooltip(event, 'astrogreg:large_steam_macerator', [
        { text: 'astrogreg.large_steam_macerator.tooltip' }   
    ])
    //#endregion


    
    //#region singleblocks
    /*
    *   Singleblock Tooltip Builder
    *   how to use:
    *       
    *   'machine_id': {
    *       'lv,mv,hv,ev': 'translation.key.tier1',
    *       'iv,luv,zpm': 'translation.key.tier2',
    *       'uv': 'translation.key.tier3'
    *   }
    *   
    *   after you've typed it out, go to assets/astrogreg/lang/en_us.json (and other translation files if you're translating)
    *   then add your translation key and lang
    *
    */
    const singleTooltip = {
        'mana_infuser': {
            'lv,mv,hv,ev': 'astrogreg.mana_infuser.tooltip.tier1',
            'iv,luv,zpm': 'astrogreg.mana_infuser.tooltip.tier2',
            'uv': 'astrogreg.mana_infuser.tooltip.tier3'
        },
        'manafield_simulator': {
            'lv,mv,hv,ev': 'astrogreg.manafield_simulator.tooltip.tier1',
            'iv,luv,zpm': 'astrogreg.manafield_simulator.tooltip.tier2',
            'uv': 'astrogreg.manafield_simulator.tooltip.tier3'
        },
        'culinary_fabricator': {
            'lv,mv,hv,ev': 'astrogreg.culinary_fabricator.tooltip.tier1',
            'iv,luv,zpm': 'astrogreg.culinary_fabricator.tooltip.tier2',
            'uv': 'astrogreg.culinary_fabricator.tooltip.tier3'
        },
        'beverage_processor': {
            'lv,mv,hv,ev': 'astrogreg.beverage_processor.tooltip.tier1',
            'iv,luv,zpm': 'astrogreg.beverage_processor.tooltip.tier2',
            'uv': 'astrogreg.beverage_processor.tooltip.tier3'
        }
    }

    //tooltip builder
    Object.entries(singleTooltip).forEach(([machine, tierGroups]) => {
        Object.entries(tierGroups).forEach(([tiers, tooltip]) => {
            tiers.split(',').forEach(tier => {
                event.addAdvanced(`gtceu:${tier}_${machine}`, (item, advanced, text) => {
                    text.add(1, Text.translate(tooltip));
                })
            })
        })
    })

    //unique
    event.addAdvanced('gtceu:ulv_water_source', (item, advanced, text) => {
        text.add(1, Text.translate('astrogreg.water_source.tooltip.1'))
        text.add(2, Text.translate('astrogreg.water_source.tooltip.2'))
    })
    //#endregion



    //#region items with lore
    /*
    *   Lore Item Tooltip Builder
    *   how to use:
    *   
    *       
    *       loreTooltip(event, 'item_id', [
    *           {text: 'translation.key.1'},       You can add one or multiple lines like this, defaults to line 1
    *           {text: 'translation.key.2'}        A new line under a machine will go to the next line, as many as you want
    *       ])
    * 
    *       loreTooltip(event, 'item_id', [
    *           {line: 4, text: 'translation.key'}    This will add your tooltip to a specific line. In this example, line 4
    *       ])                                        You can continue this with more lines as well
    *   
    *       after you've typed it out, go to assets/astrogreg/lang/en_us.json (and other translation files if you're translating)
    *       then add your translation key and lang
    *
    */

    //lore tooltip builder
    function loreTooltip(event, machineId, tooltips) {
        event.addAdvanced(machineId, (item, advanced, text) => {
            tooltips.forEach(tooltip => {
                if (tooltip.line !== undefined) {
                    text.add(tooltip.line, Text.translate(tooltip.text))
                } else {
                    text.add(Text.translate(tooltip.text))
                }
            })
        })
    }

    //add tooltips below
    loreTooltip(event, 'farmersdelight:bacon_sandwich', [
        { text: 'astrogreg.bacon_sandwich.tooltip' }
    ])

    loreTooltip(event, 'minecraft:netherite_scrap', [
        { text: 'astrogreg.netherite_scrap.tooltip' }
    ])

    loreTooltip(event, 'astrogreg:paradox_circuit_board', [
        { line: 1, text: 'astrogreg.paradox_circuit_board.tooltip' }
    ])
    
    loreTooltip(event, 'astrogreg:paradox_printed_circuit_board', [
        { line: 1, text: 'astrogreg.paradox_printed_circuit_board.tooltip' }
    ])

    loreTooltip(event, 'astrogreg:paradox_processor_chip', [
        { line: 1, text: 'astrogreg.paradox_processor_chip.tooltip' },
        { line: 2, text: 'astrogreg.circuit.luv' }
    ])
    loreTooltip(event, 'astrogreg:paradox_processor', [
        { line: 1, text: 'astrogreg.paradox_processor.tooltip' },
        { line: 2, text: 'astrogreg.circuit.zpm' }
    ])
    loreTooltip(event, 'astrogreg:paradox_processor_assembly', [
        { line: 1, text: 'astrogreg.paradox_processor_assembly.tooltip' },
        { line: 2, text: 'astrogreg.circuit.uv' }
    ])
    loreTooltip(event, 'astrogreg:paradox_processor_computer', [
        { line: 1, text: 'astrogreg.paradox_processor_computer.tooltip' },
        { line: 2, text: 'astrogreg.circuit.uhv' }
    ])
    loreTooltip(event, 'astrogreg:paradox_processor_mainframe', [
        { line: 1, text: 'astrogreg.paradox_processor_mainframe.tooltip' },
        { line: 2, text: 'astrogreg.circuit.uev' }
    ])

    loreTooltip(event, 'astrogreg:data_disk', [
        { line: 1, text: 'astrogreg.data_disk.tooltip' }
    ])
    //#endregion    



    //#region items with tips
    /*
    *   Item Tips Tooltip Builder
    *   how to use:
    *   
    *       
    *       tipTooltip(event, 'item_id', [
    *           {text: 'translation.key.1'},           You can add one or multiple lines like this, defaults to line 1
    *           {text: 'translation.key.2'}            A new line under a machine will go to the next line, as many as you want
    *       ])
    * 
    *       tipTooltip(event, 'item_id', [
    *           {line: 4, text: 'translation.key'}    This will add your tooltip to a specific line. In this example, line 4
    *       ])                                        You can continue this with more lines as well
    *   
    *       after you've typed it out, go to assets/astrogreg/lang/en_us.json (and other translation files if you're translating)
    *       then add your translation key and lang
    *
    */
 
    //tips tooltip builder
    function tipTooltip(event, machineId, tooltips) {
        event.addAdvanced(machineId, (item, advanced, text) => {
            tooltips.forEach(tooltip => {
                // Check if text is already a Text object or a string translation key
                const textContent = typeof tooltip.text === 'string' ? Text.translate(tooltip.text) : tooltip.text
                
                if (tooltip.line !== undefined) {
                    text.add(tooltip.line, textContent)
                } else {
                    text.add(textContent)
                }
            })
        })
    }

    //add tooltips below
    tipTooltip(event, 'gtmutils:pterb_machine', [
        { line: 4, text: 'astrogreg.pterb_machine.tooltip.1' },
        { line: 5, text: 'astrogreg.pterb_machine.tooltip.2' }
    ])

    tipTooltip(event, 'gtceu:pill_casting_mold', [
        { text: 'astrogreg.pill_casting_mold.tooltip.1' },
        { text: 'astrogreg.pill_casting_mold.tooltip.2' }
    ])

    tipTooltip(event, 'createlowheated:basic_burner', [
        { line: 1, text: 'astrogreg.basic_burner.tooltip' }
    ])

    tipTooltip(event, 'astrogreg:lp_steam_mixer', [
        { line: 1, text: 'astrogreg.steam_mixer.tooltip' }
    ])

    tipTooltip(event, 'astrogreg:hp_steam_mixer', [
        { line: 1, text: 'astrogreg.steam_mixer.tooltip' }
    ])

    tipTooltip(event, 'astrogreg:lp_steam_centrifuge', [
        { line: 1, text: 'astrogreg.steam_centrifuge.tooltip' }
    ])

    tipTooltip(event, 'astrogreg:hp_steam_centrifuge', [
        { line: 1, text: 'astrogreg.steam_centrifuge.tooltip' }
    ])

    tipTooltip(event, 'astrogreg:hv_industrial_processing_core', [
        { line: 1, text: 'astrogreg.industrial_processing_core.hv' }
    ])
    
    tipTooltip(event, 'astrogreg:ev_industrial_processing_core', [
        { line: 1, text: 'astrogreg.industrial_processing_core.ev' }
    ])
    
    tipTooltip(event, 'astrogreg:iv_industrial_processing_core', [
        { line: 1, text: 'astrogreg.industrial_processing_core.iv' }
    ])

    const ageControllers = [ 
        ['aether_turbine'],  ['alfsteel_mana_large_boiler'], 
        ['terrasteel_mana_large_boiler'],  ['manasteel_mana_large_boiler'], 
        ['coke_oven'], ['steam_blast_furnace'], ['solar_boiler_array'],
        ['large_steam_centrifuge'], ['large_steam_compressor'], 
        ['large_steam_ore_washer'], ['large_steam_macerator'],
        ['fluid_drilling_rig_iv'], ['large_miner_zpm'], 
        ['overdrive_combustion_engine'], ['overdrive_steam_turbine'], 
        ['overdrive_gas_turbine'], ['industrial_centrifuge'],
        ['industrial_autoclave'], ['industrial_chemical_bath'],
        ['industrial_bender'], ['industrial_electrolyzer'],
        ['industrial_lathe'], ['industrial_extruder'],
        ['industrial_mixer'], ['industrial_sifter'],
        ['industrial_wiremill'], ['industrial_macerator'],
        ['industrial_fluid_solidifier'], ['kinetic_steam_engine'],
        ['faraday_electromagnetic_generator']
    ]

    ageControllers.forEach(([name, tooltip]) => { 
        const tooltips = [{ text: 'astrogreg.multiblock_controller.tooltip' }]
        
        if (tooltip) {
            tooltips.splice(1, 0, { text: tooltip, line: 1 })
        }
        
        tipTooltip(event, `astrogreg:${name}`, tooltips)
    })

    const controllers = [
        ['greenhouse'], ['conservatory'], ['mega_vacuum_freezer'], ['mega_blast_furnace'],
        ['large_wiremill'], ['large_solidifier'], ['large_extruder'], ['large_extractor'],
        ['large_distillery'], ['large_cutter'], ['large_brewer'], ['large_material_press'],
        ['large_autoclave'], ['large_sifting_funnel'], ['large_engraving_laser'], 
        ['large_arc_smelter'], ['large_circuit_assembler'], ['large_assembler'], ['large_packer'],
        ['large_electromagnet'], ['large_electrolyzer'], ['large_mixer'], ['large_centrifuge'],
        ['large_chemical_bath'], ['large_maceration_tower'], ['bronze_large_boiler'], 
        ['steel_large_boiler'], ['titanium_large_boiler'], ['tungstensteel_large_boiler'], 
        ['steam_large_turbine'], ['steam_oven'], ['steam_grinder'], ['ev_large_miner'], 
        ['iv_large_miner'], ['luv_large_miner'], ['large_chemical_reactor'], ['luv_fusion_reactor'], 
        ['zpm_fusion_reactor'], ['charcoal_pile_igniter'], ['distillation_tower'], ['runic_engraver'],
        ['uv_fusion_reactor'], ['large_combustion_engine'], ['gas_large_turbine'],
        ['plasma_large_turbine'], ['extreme_combustion_engine'], ['primitive_pump'], 
        ['mv_fluid_drilling_rig'], ['ev_fluid_drilling_rig'], ['hv_fluid_drilling_rig'], 
        ['network_switch'], ['high_performance_computation_array'], ['active_transformer'], 
        ['central_monitor'], ['cleanroom'], ['research_station'], ['assembly_line'], 
        ['pyrolyse_oven'], ['cracker'], ['data_bank'], ['multi_smelter'], ['alloy_blast_smelter'], 
        ['electric_blast_furnace'], ['primitive_blast_furnace'], ['bronze_multiblock_tank'], 
        ['steel_multiblock_tank'], ['wooden_multiblock_tank'], ['vacuum_freezer'],
        ['power_substation'], ['inscription_matrix'], ['implosion_compressor']
    ]

    controllers.forEach(([name, tooltip]) => {
        const tooltips = [{ text: 'astrogreg.multiblock_controller.tooltip' }]

        if (tooltip) {
            tooltips.splice(1, 0, { text: tooltip, line: 1 })
        }

        tipTooltip(event, `gtceu:${name}`, tooltips)
    })

    const moldTips = [
        ['small_gear', 'Small Gears'],
        ['tiny_pipe', 'Tiny Pipes'],
        ['small_pipe', 'Small Pipes'],
        ['normal_pipe', 'Normal Pipes'],
        ['large_pipe', 'Large Pipes'],
        ['huge_pipe', 'Huge Pipes']
    ]

    moldTips.forEach(([mold, name]) => {
        event.addAdvanced(`gtceu:${mold}_extruder_mold`, (item, advanced, text) => {
            text.add(Text.translate('astrogreg.extruder_mold.tooltip', name))
        })

        event.addAdvanced(`gtceu:${mold}_casting_mold`, (item, advanced, text) => {
            text.add(Text.translate('astrogreg.casting_mold.tooltip', name))
        })
    })

    const superconductors = [
        ['powah:steel_energized', 'LV'],
        ['astrogreg:blazing_etrium_ingot', 'MV'],
        ['astrogreg:niotic_calorite_ingot', 'HV'],
        ['astrogreg:spirited_uranium_ingot', 'EV'],
        ['astrogreg:nitro_flux_ingot', 'IV'],
        ['astrogreg:radiant_zephyron_ingot', 'LuV'],
        ['gtbotania:gaiaforged_naquadah_ingot', 'ZPM'],
        ['astrogreg:neptunium_molybdenum_selenide_ingot', 'UV'],
        ['astrogreg:electrolyte_ingot', 'UHV']
    ]

    superconductors.forEach(([id, tier]) => {
        event.addAdvanced(id, (item, advanced, text) => {
            text.add(Text.translate('astrogreg.superconductor.tooltip', tier))
        })
    })

    const solarCells = [
        ['solar_cell_silver', '§d1.00'],
        ['solar_cell_etrium', '§d2.25'],
        ['solar_cell_vesnium', '§d5.00'],
        ['solar_cell_enriched_naquadah', '§d15.00']
    ]

    solarCells.forEach(([id, boost]) => {
        event.addAdvanced(`astrogreg:${id}`, (item, advanced, text) => {
            text.add(1, Text.translate('astrogreg.solar_cell.tooltip', boost))
        })
    })

    // generator magnet block tooltips
    const magnetBlocks = [
        ['iv', '4096 EU/t (§a2A§r §5EV§r)'], 
        ['luv', '16384 EU/t (§a2A§r §9IV§r)'], 
        ['zpm', '65536 EU/t (§a2A§r §dLuV§r)']
    ]

    magnetBlocks.forEach(([id, info]) => {
        event.addAdvanced(`astrogreg:${id}_faraday_magnet`, (item, advanced, text) => {
            text.add(1, Text.translate('astrogreg.magnet_block.tooltip', info))
        })
    })
    
    //#endregion

})