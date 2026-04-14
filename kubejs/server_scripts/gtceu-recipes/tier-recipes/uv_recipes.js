ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    //#region retier
    event.remove({ id: 'gtceu:research_station/1x_gtceu_wetware_processor_assembly' })
    event.remove({ id: 'gtceu:assembly_line/wetware_super_computer_uv' })
    event.remove({ id: 'gtceu:research_station/1x_gtceu_wetware_processor_mainframe' })
    event.remove({ id: 'gtceu:assembly_line/wetware_mainframe_uhv' })

    gt.assembly_line('uv_wetware_super_computer')
        .itemInputs('gtceu:wetware_printed_circuit_board')
        .itemInputs('2x gtceu:wetware_processor_assembly')
        .itemInputs('8x gtceu:advanced_smd_diode')
        .itemInputs('16x gtceu:nor_memory_chip')
        .itemInputs('32x gtceu:ram_chip')
        .itemInputs('24x gtceu:fine_yttrium_barium_cuprate_wire')
        .itemInputs('32x gtceu:polybenzimidazole_foil')
        .itemInputs('4x gtceu:europium_plate')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('gtceu:wetware_processor_computer')
        .duration(400)
        .EUt(38400)
        .cleanroom(CleanroomType.CLEANROOM)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of(`gtceu:wetware_processor_assembly`))
                .dataStack('gtceu:data_orb')
                .CWUt(16, 64000)
                .EUt(30720)
        )
        
    gt.assembly_line('uhv_wetware_mainframe')
        .itemInputs('gtceu:tritanium_frame')
        .itemInputs('gtceu:wetware_processor_computer')
        .itemInputs('32x gtceu:advanced_smd_diode')
        .itemInputs('32x gtceu:advanced_smd_capacitor')
        .itemInputs('32x gtceu:advanced_smd_transistor')
        .itemInputs('32x gtceu:advanced_smd_resistor')
        .itemInputs('32x gtceu:advanced_smd_inductor')
        .itemInputs('64x astrogreg:polyamide_imide_foil')
        .itemInputs('32x gtceu:ram_chip')
        .itemInputs('16x gtceu:enriched_naquadah_trinium_europium_duranide_double_wire')
        .itemInputs('8x gtceu:europium_plate')
        .inputFluids('gtceu:soldering_alloy 2880')
        .inputFluids('astrogreg:polyamide_imide 576')
        .itemOutputs('gtceu:wetware_processor_mainframe')
        .duration(2000)
        .EUt(300000)
        .cleanroom(CleanroomType.CLEANROOM)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of(`gtceu:wetware_processor_computer`))
                .dataStack('gtceu:data_module')
                .CWUt(96, 384000)
                .EUt(491520)
        )
    //#endregion

    //#region drilling rigs
    gt.assembly_line('fluid_drilling_rig_iv')
        .itemInputs('gtceu:uv_machine_hull')
        .itemInputs('4x gtceu:naquadah_alloy_frame')
        .itemInputs('4x #gtceu:circuits/uv')
        .itemInputs('4x gtceu:uv_electric_motor')
        .itemInputs('4x gtceu:uv_electric_pump')
        .itemInputs('4x gtceu:tritanium_gear')
        .itemOutputs('astrogreg:fluid_drilling_rig_iv')
        .duration(400)
        .EUt(400000)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of(`gtceu:ev_fluid_drilling_rig`))
                .dataStack('gtceu:data_orb')
                .CWUt(96, 200000)
                .EUt(488000)
        )
        .addMaterialInfo(true)
        
    gt.assembly_line('large_miner_zpm')
        .itemInputs('gtceu:uv_machine_hull')
        .itemInputs('4x gtceu:naquadah_alloy_frame')
        .itemInputs('4x #gtceu:circuits/uv')
        .itemInputs('4x gtceu:uv_electric_motor')
        .itemInputs('4x gtceu:uv_electric_pump')
        .itemInputs('4x gtceu:uv_conveyor_module')
        .itemInputs('4x gtceu:duranium_gear')
        .itemOutputs('astrogreg:large_miner_zpm')
        .duration(400)
        .EUt(400000)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of(`gtceu:luv_large_miner`))
                .dataStack('gtceu:data_orb')
                .CWUt(96, 200000)
                .EUt(488000)
        )
        .addMaterialInfo(true)
    //#endregion



    //#region overdrive generators
    gt.assembly_line('overdrive_combustion_engine')
        .itemInputs('gtceu:zpm_machine_hull')
        .itemInputs('4x gtceu:naquadah_alloy_plate')
        .itemInputs('4x gtceu:zpm_electric_piston')
        .itemInputs('4x gtceu:zpm_electric_motor')
        .itemInputs('4x gtceu:naquadah_alloy_gear')
        .itemInputs('2x #gtceu:circuits/uv')
        .itemInputs('2x gtceu:europium_single_cable')
        .inputFluids('gtceu:lubricant')
        .itemOutputs('astrogreg:overdrive_combustion_engine')
        .duration(400)
        .EUt(400000)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of(`gtceu:extreme_combustion_engine`))
                .dataStack('gtceu:data_orb')
                .CWUt(80, 224000)
                .EUt(488000)
        )
        .addMaterialInfo(true)
        
    gt.assembly_line('overdrive_steam_turbine')
        .itemInputs('gtceu:luv_machine_hull')
        .itemInputs('4x gtceu:rhodium_plated_palladium_plate')
        .itemInputs('4x gtceu:zpm_electric_motor')
        .itemInputs('4x gtceu:rhodium_plated_palladium_gear')
        .itemInputs('4x gtceu:rhodium_plated_palladium_huge_fluid_pipe')
        .itemInputs('2x #gtceu:circuits/uv')
        .itemInputs('2x gtceu:europium_single_cable')
        .inputFluids('gtceu:lubricant')
        .itemOutputs('astrogreg:overdrive_steam_turbine')
        .duration(400)
        .EUt(400000)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of(`gtceu:steam_large_turbine`))
                .dataStack('gtceu:data_orb')
                .CWUt(80, 224000)
                .EUt(488000)
        )
        .addMaterialInfo(true)
        
    gt.assembly_line('overdrive_gas_turbine')
        .itemInputs('gtceu:zpm_machine_hull')
        .itemInputs('4x gtceu:naquadah_alloy_plate')
        .itemInputs('4x gtceu:zpm_electric_motor')
        .itemInputs('4x gtceu:naquadah_alloy_gear')
        .itemInputs('4x gtceu:naquadah_alloy_huge_fluid_pipe')
        .itemInputs('2x #gtceu:circuits/uv')
        .itemInputs('2x gtceu:europium_single_cable')
        .inputFluids('gtceu:lubricant')
        .itemOutputs('astrogreg:overdrive_gas_turbine')
        .duration(400)
        .EUt(400000)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of(`gtceu:steam_large_turbine`))
                .dataStack('gtceu:data_orb')
                .CWUt(80, 224000)
                .EUt(488000)
        )
        .addMaterialInfo(true)
    //#endregion



    //#region misc
    gt.assembly_line('advanced_configurable_maintenance_hatch')
        .itemInputs('gtceu:uv_machine_hull')
        .itemInputs('gtceu:configurable_maintenance_hatch')
        .itemInputs('2x gtceu:uv_robot_arm')
        .itemInputs('gtceu:uv_field_generator')
        .itemInputs('2x #gtceu:circuits/uhv')
        .itemInputs('4x gtceu:europium_single_cable')
        .inputFluids('gtceu:soldering_alloy 576')
        .inputFluids('gtceu:lubricant')
        .itemOutputs('astrogreg:advanced_configurable_maintenance_hatch')
        .duration(160)
        .EUt(400000)
        .stationResearch(
            researchRecipeBuilder => researchRecipeBuilder
                .researchStack(Item.of('gtceu:configurable_maintenance_hatch'))
                .dataStack('gtceu:data_orb')
                .CWUt(32, 100000)
                .EUt(122000)
        )
        .addMaterialInfo(true)
    //#endregion
})