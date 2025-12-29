ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    //#region cleanroom
    gt.circuit_assembler('data_stick_tin')
        .itemInputs('gtceu:plastic_printed_circuit_board', '2x gtceu:cpu_chip', '32x gtceu:nand_memory_chip', 
            '4x gtceu:ram_chip', '16x gtceu:fine_red_alloy_wire', '4x gtceu:polyethylene_plate')
        .inputFluids('gtceu:tin 288')
        .itemOutputs('gtceu:data_stick')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(400)
        .EUt(360)

    gt.circuit_assembler('data_stick_soldering_alloy')
        .itemInputs('gtceu:plastic_printed_circuit_board', 'gtceu:cpu_chip', 'gtceu:nand_memory_chip', 
            'gtceu:ram_chip', 'gtceu:fine_red_alloy_chip', 'gtceu:polyethylene_plate')
        .inputFluids('gtceu:tin 144')
        .itemOutputs('gtceu:data_stick')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(400)
        .EUt(360)
    //#endregion

})