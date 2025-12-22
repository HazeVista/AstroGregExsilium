ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    //#region data disk
    gt.circuit_assembler('assemble_data_disk')
        .itemInputs('gtceu:plastic_printed_circuit_board', 'gtceu:cpu_chip', '2x gtceu:ram_chip',
            '2x gtceu:tin_bolt', '8x gtceu:fine_red_alloy_wire', '2x gtceu:polyethylene_plate')
        .inputFluids('gtceu:tin 144')
        .itemOutputs('astrogreg:data_disk')
        .duration(300)
        .EUt(45)

    gt.circuit_assembler('assemble_data_disk_soldering_alloy')
        .itemInputs('gtceu:plastic_printed_circuit_board', 'gtceu:cpu_chip', '2x gtceu:ram_chip',
            '2x gtceu:tin_bolt', '8x gtceu:fine_red_alloy_wire', '2x gtceu:polyethylene_plate')
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('astrogreg:data_disk')
        .duration(300)
        .EUt(45)

    //#endregion

    //#region 

    

    //#endregion 
})