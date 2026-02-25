ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    //#region ME throughputs
    event.remove({ id: 'gtceu:research_station/1x_gtceu_me_pattern_buffer' })
    event.remove({ id: 'gtceu:scanner/1_x_gtceu_luv_dual_input_hatch' })
    event.remove({ id: 'gtceu:research_station/1x_gtceu_zpm_dual_input_hatch' })
    event.remove({ id: 'gtceu:assembly_line/expanded_me_pattern_buffer' })
    event.remove({ id: 'gtceu:research_station/1x_gtceu_me_pattern_buffer_proxy' })
    event.remove({ id: 'gtceu:assembly_line/expanded_me_buffer_proxy' })
    event.remove({ id: 'gtceu:assembly_line/me_pattern_buffer' })
    event.remove({ id: 'gtceu:assembly_line/me_pattern_buffer_proxy' })

    gt.assembly_line('me_pattern_buffer_proxy')
        .itemInputs('gtceu:me_pattern_buffer')
        .itemInputs('astrogreg:futura_alloy_frame')
        .itemInputs('gtceu:luv_sensor')
        .itemInputs('gtceu:luv_emitter')
        .itemInputs('#gtceu:circuits/luv')
        .itemInputs('expatternprovider:ex_pattern_provider')
        .itemInputs('expatternprovider:wireless_connect')
        .itemInputs('48x gtceu:fine_indium_tin_barium_titanium_cuprate_wire')
        .inputFluids('gtceu:soldering_alloy 576')
        .itemOutputs('gtceu:me_pattern_buffer_proxy')
        .duration(300)
        .EUt(30720)
        .addMaterialInfo(true)
        ['scannerResearch(java.util.function.UnaryOperator)']
            (b => b
                .researchStack('gtceu:me_pattern_buffer')
                .duration(1200)
                .EUt(7680)
            )

    gt.assembly_line('expanded_me_pattern_buffer_proxy')
        .itemInputs('astrogreg:expanded_me_pattern_buffer')
        .itemInputs('astrogreg:futura_alloy_frame')
        .itemInputs('gtceu:zpm_sensor')
        .itemInputs('gtceu:zpm_emitter')
        .itemInputs('#gtceu:circuits/zpm')
        .itemInputs('expandedae:exp_pattern_provider')
        .itemInputs('4x ae2:capacity_card')
        .itemInputs('4x expatternprovider:wireless_connect')
        .itemInputs('64x gtceu:fine_uranium_rhodium_dinaquadide_wire')
        .itemInputs('32x gtceu:fine_uranium_rhodium_dinaquadide_wire')
        .inputFluids('gtceu:soldering_alloy 576')
        .itemOutputs('astrogreg:expanded_me_pattern_buffer_proxy')
        .duration(300)
        .EUt(122880)
        .addMaterialInfo(true)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of(`astrogreg:expanded_me_pattern_buffer`))
                .dataStack('gtceu:data_orb')
                .CWUt(48, 128000)
                .EUt(30720)
        )

    gt.assembly_line('me_pattern_buffer')
        .itemInputs('gtceu:luv_machine_hull')
        .itemInputs('astrogreg:futura_alloy_frame')
        .itemInputs('2x gtceu:luv_conveyor_module')
        .itemInputs('2x #gtceu:circuits/luv')
        .itemInputs('expatternprovider:ex_pattern_provider')
        .itemInputs('4x ae2:speed_card')
        .itemInputs('2x gtceu:niobium_titanium_single_cable')
        .inputFluids('gtceu:soldering_alloy 576')
        .itemOutputs('gtceu:me_pattern_buffer')
        .duration(300)
        .EUt(30720)
        .addMaterialInfo(true)
        ['scannerResearch(java.util.function.UnaryOperator)']
            (b => b
                .researchStack('expatternprovider:ex_pattern_provider')
                .duration(1200)
                .EUt(7680)
            )

    gt.assembly_line('expanded_me_pattern_buffer')
        .itemInputs('gtceu:zpm_machine_hull')
        .itemInputs('astrogreg:futura_alloy_frame')
        .itemInputs('2x gtceu:zpm_conveyor_module')
        .itemInputs('2x #gtceu:circuits/zpm')
        .itemInputs('expandedae:exp_pattern_provider')
        .itemInputs('4x ae2:speed_card')
        .itemInputs('4x ae2:capacity_card')
        .itemInputs('2x gtceu:vanadium_gallium_single_cable')
        .inputFluids('gtceu:soldering_alloy 576')
        .itemOutputs('astrogreg:expanded_me_pattern_buffer')
        .duration(300)
        .EUt(122880)
        .addMaterialInfo(true)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('expandedae:exp_pattern_provider'))
                .dataStack('gtceu:data_orb')
                .CWUt(32, 132000)
                .EUt(30720)
        )

    gt.assembler('me_tag_input_bus')
        .itemInputs('gtceu:iv_input_bus', 'expatternprovider:tag_storage_bus', 'gtceu:luv_conveyor_module', 'gtceu:iv_sensor', '4x ae2:speed_card')
        .itemOutputs('astrogreg:me_tag_input_bus')
        .duration(300)
        .EUt(7680)
        .addMaterialInfo(true)
        
    gt.assembler('me_tag_input_hatch')
        .itemInputs('gtceu:iv_input_hatch', 'expatternprovider:tag_storage_bus', 'gtceu:luv_electric_pump', 'gtceu:iv_sensor', '4x ae2:speed_card')
        .itemOutputs('astrogreg:me_tag_input_hatch')
        .duration(300)
        .EUt(7680)
        .addMaterialInfo(true)
    //#endregion



    //#region misc hatches
    gt.shaped('astrogreg:water_input_hatch', [
        'ABA',
        'ACA',
        'ABA'
    ], {
        A: 'gtceu:bronze_plate',
        B: 'gtceu:tin_alloy_normal_fluid_pipe',
        C: 'gtceu:bronze_drum'
    })
    .addMaterialInfo()

    gt.shaped('astrogreg:kinetic_output_hatch', [
        'ACA',
        'ABA',
        'ADA'
    ], {
        A: 'gtceu:bronze_plate',
        B: '#create:gearboxes',
        C: '#forge:tools/wrenches',
        D: 'gtceu:bronze_gear'
    })

    gt.assembler('kinetic_output_hatch')
        .itemInputs('6x gtceu:bronze_plate', '#create:gearboxes', 'gtceu:bronze_gear')
        .itemOutputs('astrogreg:kinetic_output_hatch')
        .duration(200)
        .circuit(2)
        .EUt(7)
        .addMaterialInfo(true)

    gt.shaped('astrogreg:kinetic_input_hatch', [
        'ADA',
        'ABA',
        'ACA'
    ], {
        A: 'gtceu:bronze_plate',
        B: '#create:gearboxes',
        C: '#forge:tools/wrenches',
        D: 'gtceu:bronze_gear'
    })

    gt.assembler('kinetic_input_hatch')
        .itemInputs('6x gtceu:bronze_plate', '#create:gearboxes', 'gtceu:bronze_gear')
        .itemOutputs('astrogreg:kinetic_input_hatch')
        .duration(200)
        .circuit(1)
        .EUt(7)
        .addMaterialInfo(true)
    //#endregion



    //#region mana hatches
    const tiers = ['lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv', 'uhv']
    const directions = ['input', 'output']

    tiers.forEach((tier) => {
        directions.forEach((direction) => {
            gt.shaped(`astrogreg:${tier}_mana_${direction}_hatch`, [
                'A',
                'B'
            ], {
                A: `astrogreg:${tier}_stabilizer`,
                B: `gtceu:${tier}_${direction}_hatch`,
            })
            .addMaterialInfo()
        })

        gt.shaped(`astrogreg:${tier}_mana_output_hatch`, [
            'A',
            'B'
        ], {
            A: '#forge:tools/screwdrivers',
            B: `astrogreg:${tier}_mana_input_hatch`
        })
        .addMaterialInfo()

        gt.shaped(`astrogreg:${tier}_mana_input_hatch`, [
            'A',
            'B'
        ], {
            A: '#forge:tools/screwdrivers',
            B: `astrogreg:${tier}_mana_output_hatch`
        })
        .addMaterialInfo()
    })
    //#endregion
})