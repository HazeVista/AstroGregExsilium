ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    //#region filter cartridge
    gt.canner('fill_astrotek_cartridge')
        .itemInputs('astrogreg:empty_filter_cartridge', '4x astrogreg:resin_beads')
        .itemOutputs('astrogreg:filter_cartridge')
        .duration(320)
        .EUt(7)

    gt.assembler('assemble_empty_cartridge')
        .itemInputs('gtceu:tungsten_steel_fluid_cell', '6x gtceu:polyvinyl_butyral_plate', 'gtceu:fluid_filter')
        .itemOutputs('astrogreg:empty_filter_cartridge')
        .duration(300)
        .EUt(1920)
    //#endregion

    //#region multiblock
    // gt.assembly_line('filtration_plant')
    //     .itemInputs('gtceu:distillation_tower')
    //     .itemInputs('2x #gtceu:circuits/luv')
    //     .itemInputs('4x gtceu:iv_electric_pump')
    //     .itemInputs('4x gtceu:polybenzimidazole_large_fluid_pipe')
    //     .itemInputs('16x gtceu:fluid_filter')
    //     .itemInputs('4x gtceu:tungsten_cable')
    //     .inputFluids('gtceu:soldering_alloy 576')
    //     .itemOutputs('astrogreg:filtration_plant')
    //     .duration(400)
    //     .EUt(6000)
    //     ["scannerResearch(java.util.function.UnaryOperator)"]
    //     (b => b
    //         .researchStack("gtceu:distillation_tower")
    //         .duration(900)
    //         .EUt(1920)
    //     )
    //#endregion

})