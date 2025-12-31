ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    //#region processors
    for (const [processor, plate, lens] of [
        ['ae2:logic_processor', 'gtceu:gold_plate', 'gtceu:yellow_glass_lens'],
        ['ae2:calculation_processor', 'gtceu:certus_quartz_plate', 'gtceu:cyan_glass_lens'],
        ['ae2:engineering_processor', 'gtceu:diamond_plate', '#forge:lenses/light_blue']
    ]) {
        gt.inscription(`${processor.split(':')[1]}_inscribing`)
            .notConsumable(lens)
            .itemInputs(plate)
            .inputFluids('gtceu:silicon 144')
            .itemOutputs(`2x ${processor}`)
            .duration(300)
            .EUt(100)
    }

    gt.inscription('inscribe_accumulation_processor')
        .notConsumable('gtceu:black_glass_lens')
        .itemInputs('ae2:logic_processor', 'ae2:calculation_processor', 'ae2:engineering_processor')
        .inputFluids('gtceu:silicon 144', 'gtceu:neon 100')
        .itemOutputs('2x megacells:accumulation_processor')
        .duration(300)
        .EUt(3200)
    // #endregion



    //#region dust mixing
    for (const [input, output, d, eut] of [
        [['gtceu:ender_pearl_dust', 'minecraft:blaze_powder'], '2x gtceu:ender_eye_dust', 160, 9],
        [['#forge:dusts/certus_quartz', '3x #forge:stone_dust'], '4x ae2:sky_dust', 160, 120],
        [['4x gtceu:stainless_steel_dust', 'ae2:sky_dust'], '5x astrogreg:futura_alloy_dust', 200, 450],
        [['8x ae2:fluix_dust', 'gtceu:ender_eye_dust'], 'astrogreg:fluix_pearl_dust', 240, 480],
        [['#forge:dusts/certus_quartz', 'gtceu:obsidian_dust', 'minecraft:redstone'], '3x ae2:fluix_dust', 200, 520]
    ]) {
        gt.mixer(`${output.split(' ').pop().split(':')[1]}_mixing`)
            .itemInputs(input)
            .itemOutputs(output)
            .duration(d)
            .EUt(eut)
    }

    // #endregion
    
    
    
    //#region alloying
    for (const [input, output, d, eut] of [
        [['#forge:dusts/certus_quartz', '#forge:glass'], 'ae2:quartz_glass', 160, 7],
        [['2x minecraft:glowstone_dust', 'ae2:quartz_glass'], 'ae2:quartz_vibrant_glass', 160, 7],
    ]) {
        gt.alloy_smelter(`${output.split(':')[1]}_alloying`)
            .itemInputs(input)
            .itemOutputs(output)
            .duration(d)
            .EUt(eut)
    }
    //#endregion
    
    
    
    //#region inscription matrix & cells
    event.recipes.gtceu.shaped('gtceu:inscription_matrix', [
        'ADA', 
        'CBC', 
        'AEA'
    ], {
        A: 'astrogreg:futura_alloy_plate',
        B: 'gtceu:hv_laser_engraver',
        C: 'gtceu:hv_emitter',
        D: 'gtceu:hv_conveyor_module',
        E: '#gtceu:circuits/ev'
    })
    .addMaterialInfo()

    const DUSTS = ['minecraft:redstone', 'minecraft:glowstone_dust', 'ae2:sky_dust', 'gtceu:ender_pearl_dust', 'gtceu:ender_eye_dust']
    const tiers = ['ulv', 'lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv', 'uhv']

    for (let i = 0, size = 1; i <= 4; i++, size = Math.pow(4, i)) {
        let kDust = DUSTS[Math.min(Math.floor(i / 2), 2)]
        let mDust = DUSTS[Math.min(Math.floor(i / 2) + 2, 4)]

        gt.inscription(`inscribe_${size}k`)
            .itemInputs(i > 0 ? `3x ae2:cell_component_${size / 4}k` : '4x ae2:certus_quartz_crystal', `4x ${kDust}`, 'ae2:calculation_processor', `#gtceu:circuits/${tiers[i]}`)
            .itemOutputs(`ae2:cell_component_${size}k`).duration(300).EUt(size * 7)

        gt.inscription(`inscribe_${size}m`)
            .itemInputs(i > 0 ? `3x megacells:cell_component_${size / 4}m` : '3x ae2:cell_component_256k', `4x ${mDust}`, 'megacells:accumulation_processor', `#gtceu:circuits/${tiers[i + 5]}`)
            .itemOutputs(`megacells:cell_component_${size}m`).duration(300).EUt(size * 7 * 1024)
    }

    for (const size of ['2', '16', '128']) {
        event.shapeless(`ae2:spatial_storage_cell_${size}`, [`ae2:spatial_cell_component_${size}`, 'ae2:item_cell_housing'])
    }

    // #endregion
    

    
    //#region cell housing
    for (const type of ['item', 'fluid']) {
        event.shaped(`ae2:${type}_cell_housing`, ['ABA', 'B B', 'CCC'], {
            A: 'ae2:quartz_glass',
            B: type == 'item' ? 'gtceu:iron_plate' : 'gtceu:copper_plate',
            C: 'astrogreg:futura_alloy_plate'
        })
        event.shaped(`megacells:mega_${type}_cell_housing`, ['CBC', 'B B', 'AAA'], {
            A: 'astrogreg:double_futura_alloy_plate',
            B: type == 'item' ? 'gtceu:certus_quartz_plate' : 'gtceu:gold_plate',
            C: 'ae2:quartz_vibrant_glass'
        })
    }
    // #endregion
    
    
    
    //#region buses
    for (const type of ['import', 'export']) {
        event.shaped(`ae2:${type}_bus`, type == "import" ? [' B ', 'CAC'] : ['ACA', ' B '], {
            A: 'astrogreg:futura_alloy_plate',
            B: type == 'import' ? 'minecraft:sticky_piston' : 'minecraft:piston',
            C: type == 'import' ? 'ae2:annihilation_core' : 'ae2:formation_core'
        })
    }
    // #endregion



    //#region assembler matrix
    for (const type of ['wall', 'frame', 'glass']) {
        event.shaped(`2x expatternprovider:assembler_matrix_${type}`, ['BCB', 'CAC', 'BCB'], {
            A: 'astrogreg:futura_alloy_frame',
            B: type == 'wall' ? 'gtceu:certus_quartz_plate' : type == 'frame' ? 'astrogreg:futura_alloy_plate' : 'gtceu:glass_plate',
            C: '#ae2:smart_cable'
        })
    }
    // #endregion
    
    
    
    //#region upgrade cards
    for (const type of ['basic', 'advanced']) {
        event.shaped(`2x ae2:${type}_card`, ['AAC', 'BAC', 'AA '], {
            A: 'gtceu:iron_plate',
            B: 'ae2:calculation_processor',
            C: type == 'basic' ? 'gtceu:gold_bolt' : 'gtceu:diamond_bolt'
        })
    }

    for (const [output, component] of [
        ['ae2wtlib:magnet_card', 'gtceu:lv_item_magnet'],
        ['ae2:wireless_booster', 'gtceu:hv_emitter'],
        ['ae2:capacity_card', 'ae2:charged_certus_quartz_crystal']
    ]) {
        event.shapeless(output, ['ae2:advanced_card', component])
    }

    event.shapeless('pccard:card_programmed_circuit', ['ae2:crafting_card', 'gtceu:programmed_circuit', '#gtceu:circuits/ev'])
    // #endregion



    //#region gem recipes
    gt.polarizer('polarize_certus').itemInputs('ae2:certus_quartz_crystal').itemOutputs('ae2:charged_certus_quartz_crystal').duration(150).EUt(400)
    gt.macerator('macerate_fluix').itemInputs('ae2:fluix_crystal').itemOutputs('ae2:fluix_dust').duration(200)
    gt.centrifuge('centrifuge_fluix_pearl_dust').itemInputs('astrogreg:fluix_pearl_dust').itemOutputs('8x ae2:fluix_dust', 'gtceu:ender_eye_dust').duration(240).EUt(120)
    event.shaped('ae2:quartz_block', ['AA', 'AA'], { A: 'ae2:certus_quartz_crystal' })

        
    //fluix integration 
    gt.compressor('compress_fluix_block')
        .itemInputs('4x ae2:fluix_crystal')
        .itemOutputs('ae2:fluix_block')
        .duration(300)
        .EUt(2)

    gt.assembler('assemble_fluix_stairs')
        .itemInputs('3x ae2:fluix_block')
        .itemOutputs('4x ae2:fluix_stairs')
        .duration(80)
        .circuit(7)
        .EUt(8)

    gt.assembler('assemble_fluix_wall')
        .itemInputs('ae2:fluix_block')
        .itemOutputs('ae2:fluix_wall')
        .duration(100)
        .circuit(13)
        .EUt(8)

    gt.macerator('recycle_fluix_block')
        .itemInputs('ae2:fluix_block')
        .itemOutputs('4x ae2:fluix_dust')
        .duration(20)
        .EUt(4)
        
    gt.macerator('recycle_fluix_wall')
        .itemInputs('ae2:fluix_wall')
        .itemOutputs('4x ae2:fluix_dust')
        .duration(20)
        .EUt(4)
   
    gt.macerator('recycle_fluix_slab')
        .itemInputs('ae2:fluix_slab')
        .itemOutputs('2x ae2:fluix_dust')
        .duration(10)
        .EUt(4)
        
    gt.macerator('recycle_fluix_stairs')
        .itemInputs('ae2:fluix_stairs')
        .itemOutputs('3x ae2:fluix_dust')
        .duration(15)
        .EUt(4)

    gt.macerator('recycle_certus_charged')
        .itemInputs('ae2:charged_certus_quartz_crystal')
        .itemOutputs('ae2:fluix_dust')
        .duration(20)
        .EUt(4)

    gt.macerator('recycle_certus_block')
        .itemInputs('ae2:quartz_block')
        .itemOutputs('4x gtceu:certus_quartz_dust')
        .duration(5)
        .EUt(4)
    // #endregion



    //#region basic components
    event.shaped('ae2:annihilation_core', ['ABC'], { A: 'gtceu:silicon_dioxide_dust', B: 'ae2:fluix_dust', C: 'ae2:logic_processor' })
    event.shaped('ae2:controller', ['ABA', 'BCB', 'ABA'], { A: 'astrogreg:futura_alloy_plate', B: 'ae2:fluix_crystal', C: 'astrogreg:futura_alloy_frame' })
    event.shaped('ae2:energy_acceptor', ['ABA', 'BCB', 'ABA'], { A: 'astrogreg:futura_alloy_plate', B: 'ae2:quartz_glass', C: 'astrogreg:futura_alloy_frame' })
    // #endregion



    //#region glass & cables
    gt.wiremill('mill_quartz_fiber').itemInputs('ae2:quartz_glass').itemOutputs('2x ae2:quartz_fiber').duration(80).EUt(28)
    gt.wiremill('mill_fluix').itemInputs('ae2:fluix_crystal').itemOutputs('4x ae2:fluix_glass_cable').duration(160).EUt(28)
    gt.chemical_bath('wash_glass_cables').itemInputs('#ae2:glass_cable').inputFluids('minecraft:water 144').itemOutputs('ae2:fluix_glass_cable').duration(40).EUt(20)
    // #endregion



    //#region cpu assembly
    gt.assembler('assemble_cpu')
        .itemInputs('astrogreg:futura_alloy_frame', '2x ae2:fluix_glass_cable', '2x ae2:calculation_processor', 'ae2:logic_processor')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('ae2:crafting_unit')
        .circuit(1)
        .duration(80)
        .EUt(384)

    gt.assembler('assemble_mega_cpu')
        .itemInputs('astrogreg:futura_alloy_frame', '2x ae2:crafting_unit', '2x ae2:logic_processor', 'megacells:accumulation_processor')
        .inputFluids('gtceu:soldering_alloy 288')
        .itemOutputs('megacells:mega_crafting_unit')
        .circuit(1)
        .duration(80)
        .EUt(7680)
    // #endregion 



    //#region devices & networking
    event.shaped('ae2:drive', ['ABA', 'C C', 'ABA'], { A: 'astrogreg:futura_alloy_plate', B: 'ae2:engineering_processor', C: 'ae2:fluix_glass_cable' })
    event.shaped('ae2:chest', ['EBE', 'DCD', 'AAA'], { A: 'astrogreg:futura_alloy_plate', B: 'ae2:terminal', C: '#forge:chests/wooden', D: 'ae2:fluix_glass_cable', E: 'ae2:quartz_glass' })
    event.shaped('ae2:io_port', ['EEE', 'DCD', 'ABA'], { A: 'astrogreg:futura_alloy_plate', B: 'ae2:logic_processor', C: 'astrogreg:futura_alloy_frame', D: 'ae2:drive', E: 'ae2:quartz_glass' })
    event.shaped('megacells:cell_dock', ['CBC', ' A '], { A: 'ae2:fluix_glass_cable', B: 'gtceu:copper_plate', C: 'astrogreg:futura_alloy_plate' })
    event.shaped('ae2:spatial_io_port', ['EEE', 'DCD', 'ABA'], { A: 'astrogreg:futura_alloy_plate', B: 'ae2:engineering_processor', C: 'ae2:io_port', D: 'ae2:fluix_glass_cable', E: 'ae2:quartz_glass' })
    event.shaped('ae2:spatial_anchor', ['CAC', 'ADA', 'CBC'], { A: 'ae2:spatial_pylon', B: 'ae2:spatial_cell_component_128', C: 'ae2:fluix_glass_cable', D: 'astrogreg:futura_alloy_frame' })
    // #endregion



    //#region crafting & automation
        for (const type of ['interface', 'pattern_provider']) {
        event.shaped(`ae2:${type}`, ['ABA', 'D C', 'ABA'], {
            A: 'astrogreg:futura_alloy_plate',
            B: type == 'interface' ? '#forge:glass' : 'minecraft:crafting_table',
            C: 'ae2:formation_core',
            D: 'ae2:annihilation_core'
        })
    }

    gt.canner('pattern_canning')
        .itemInputs('#forge:dusts/certus_quartz', '4x gtceu:fluid_cell')
        .inputFluids('gtceu:glowstone 576')
        .itemOutputs('4x ae2:blank_pattern')
        .duration(300)
        .EUt(384)

    event.shapeless('expatternprovider:oversize_interface', ['expatternprovider:ex_interface', 'ae2:logic_processor', 'ae2:logic_processor'])
    
    event.shaped('ae2:molecular_assembler', [
        'ADA', 
        'BEC', 
        'ADA'
    ], { 
        A: 'astrogreg:futura_alloy_plate', 
        B: 'ae2:annihilation_core', 
        C: 'ae2:formation_core', 
        D: 'minecraft:crafting_table', 
        E: 'ae2:quartz_glass' 
    })

    gt.assembler('me_requester')
        .itemInputs('2x #gtceu:circuits/ev', 'ae2:crafting_accelerator', 'astrogreg:futura_alloy_frame', 
            '6x astrogreg:futura_alloy_plate', 'ae2:engineering_processor', '4x #ae2:glass_cable')
        .inputFluids('gtceu:soldering_alloy 576')
        .itemOutputs('merequester:requester')
        .duration(400)
        .EUt(480)
    // #endregion



    //#region utilities
    event.shaped('ae2:cell_workbench', ['DBD', 'ACA', 'AAA'], { A: 'astrogreg:futura_alloy_plate', B: 'ae2:calculation_processor', C: 'astrogreg:futura_alloy_frame', D: 'ae2:quartz_glass' })
    event.shaped('ae2:condenser', ['ABA', 'BCB', 'ABA'], { A: 'astrogreg:dense_futura_alloy_plate', B: 'ae2:quartz_glass', C: 'ae2:fluix_dust' })
    event.shaped('ae2:semi_dark_monitor', ['AAA', 'ABA', 'AAA'], { A: 'ae2:quartz_vibrant_glass', B: '#simplylight:any_lamp_on' })

    event.shaped('ae2:me_p2p_tunnel', [' A ', 'ACA', 'BBB'], { A: 'astrogreg:futura_alloy_plate', B: 'ae2:fluix_crystal', C: 'ae2:engineering_processor' })
    event.shaped('2x ae2:wireless_receiver', ['A C', 'AB ', 'BAA'], { A: 'astrogreg:futura_alloy_plate', B: 'ae2:quartz_fiber', C: 'ae2:fluix_pearl' })
    event.shaped('ae2:charged_staff', ['  A', ' B ', 'B  '], { A: 'ae2:charged_certus_quartz_crystal', B: 'astrogreg:futura_alloy_rod' })
    event.shaped('ae2:entropy_manipulator', [' CD', ' AB', 'A  '], { A: 'astrogreg:futura_alloy_rod', B: 'ae2:engineering_processor', C: 'ae2:energy_cell', D: 'ae2:fluix_crystal' })
    event.shaped('expatternprovider:wireless_tool', [' A ', 'BCB', ' B '], { A: 'ae2:wireless_receiver', B: 'astrogreg:futura_alloy_plate', C: 'ae2:calculation_processor' })
    event.shaped('ae2:memory_card', ['ABB', 'CCC'], { A: '#gtceu:circuits/ulv', B: 'astrogreg:futura_alloy_plate', C: 'gtceu:gold_bolt' })
    event.shaped('ae2netanalyser:network_analyser', ['AEA', 'BCB', 'DBD'], { A: 'gtceu:fine_copper_wire', B: 'astrogreg:futura_alloy_plate', C: '#gtceu:circuits/ulv', D: 'gtceu:iron_screw', E: '#forge:tools/screwdrivers' })
    //#endregion
})