ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    //#region multi component recipes
    // gt.assembly_line('faraday_electromagnetic_generator')
    //     .itemInputs('gtceu:iv_polarizer')
    //     .itemInputs('4x gtceu:iv_electric_motor')
    //     .itemInputs('4x gtceu:tungsten_carbide_gear')
    //     .itemInputs('8x gtceu:small_tungsten_steel_gear')
    //     .itemInputs('2x #gtceu:circuits/luv')
    //     .itemInputs('4x gtceu:platinum_single_cable')
    //     .inputFluids('gtceu:soldering_alloy 576')
    //     .itemOutputs('astrogreg:faraday_electromagnetic_generator')
    //     .duration(600)
    //     .EUt(6000)
    //     ["scannerResearch(java.util.function.UnaryOperator)"]
    //     (b => b
    //         .researchStack("astrogreg:faraday_generator_coil")
    //         .duration(800)
    //         .EUt(1920)
    //     )
    //     .addMaterialInfo(true)

    // gt.assembler('faraday_generator_coil')
    //     .itemInputs('gtceu:long_tungsten_steel_rod', '32x astrogreg:fine_vesnium_wire', '16x gtceu:platinum_foil', '16x gtceu:tungsten_carbide_round', 'gtceu:iv_electric_motor')
    //     .inputFluids('gtceu:soldering_alloy 144')
    //     .itemOutputs('astrogreg:faraday_generator_coil')
    //     .duration(200)
    //     .EUt(1920)
    //     .addMaterialInfo(true)

    // gt.assembler('faraday_magnet_iv')
    //     .itemInputs('gtceu:tungsten_steel_frame', '6x gtceu:magnetic_neodymium_plate', 'gtceu:iv_voltage_coil', '2x gtceu:platinum_single_cable')
    //     .inputFluids('gtceu:vanadium_gallium 72')
    //     .itemOutputs('2x astrogreg:iv_faraday_magnet')
    //     .duration(200)
    //     .EUt(1920)
    //     .circuit(1)
    //     .addMaterialInfo(true)

    // gt.assembly_line('faraday_magnet_luv')
    //     .itemInputs('gtceu:rhodium_plated_palladium_frame')
    //     .itemInputs('6x gtceu:magnetic_samarium_plate')
    //     .itemInputs('gtceu:luv_voltage_coil')
    //     .itemInputs('2x gtceu:niobium_titanium_single_cable')
    //     .inputFluids('gtceu:vanadium_gallium 144')
    //     .inputFluids('gtceu:lubricant')
    //     .itemOutputs('2x astrogreg:luv_faraday_magnet')
    //     .duration(200)
    //     .EUt(6000)
    //     ["scannerResearch(java.util.function.UnaryOperator)"]
    //     (b => b
    //         .researchStack("astrogreg:iv_faraday_magnet")
    //         .duration(1200)
    //         .EUt(1920)
    //     )
    //     .addMaterialInfo(true)
    
    // gt.assembly_line('faraday_magnet_zpm')
    //     .itemInputs('gtceu:naquadah_alloy_frame')
    //     .itemInputs('6x astrogreg:magnetic_neutronium_plate')
    //     .itemInputs('gtceu:zpm_voltage_coil')
    //     .itemInputs('2x gtceu:vanadium_gallium_single_cable')
    //     .inputFluids('gtceu:vanadium_gallium 144')
    //     .inputFluids('gtceu:naquadria 144')
    //     .inputFluids('gtceu:lubricant')
    //     .itemOutputs('2x astrogreg:zpm_faraday_magnet')
    //     .duration(200)
    //     .EUt(24000)
    //     .stationResearch(
    //         researchRecipeBuilder => researchRecipeBuilder
    //             .researchStack(Item.of(`astrogreg:luv_faraday_magnet`))
    //             .dataStack('gtceu:data_module')
    //             .CWUt(32, 128000)
    //             .EUt(122880)
    //     )
    //     .addMaterialInfo(true)
    //#endregion

    //#region coolant recipes
    
    //#endregion
})