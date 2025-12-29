ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    //#region data disk
    gt.circuit_assembler('assemble_data_disk_tin')
        .itemInputs('gtceu:plastic_printed_circuit_board', 'gtceu:cpu_chip', '2x gtceu:ram_chip',
            '2x gtceu:tin_bolt', '8x gtceu:fine_red_alloy_wire', '2x gtceu:polyethylene_plate')
        .inputFluids('gtceu:tin 144')
        .itemOutputs('astrogreg:data_disk')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(300)
        .EUt(90)

    gt.circuit_assembler('assemble_data_disk_soldering_alloy')
        .itemInputs('gtceu:plastic_printed_circuit_board', 'gtceu:cpu_chip', '2x gtceu:ram_chip',
            '2x gtceu:tin_bolt', '8x gtceu:fine_red_alloy_wire', '2x gtceu:polyethylene_plate')
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('astrogreg:data_disk')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(300)
        .EUt(90)

    gt.assembler('basic_data_access_hatch')
        .itemInputs('gtceu:hv_input_bus', '4x astrogreg:data_disk', '4x #gtceu:circuits/mv')
        .inputFluids('gtceu:polyethylene 288')
        .itemOutputs('gtceu:basic_data_access_hatch')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(200)
        .EUt(120)
    //#endregion

    //#region 

    

    //#endregion 
})