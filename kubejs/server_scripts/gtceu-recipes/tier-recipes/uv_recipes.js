ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

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
})