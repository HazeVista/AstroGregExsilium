ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    //#region misc
    gt.assembler('monitor_casing_tin')
        .itemInputs('gtceu:mv_machine_hull', 'gtceu:computer_monitor_cover', 
            '4x gtceu:glass_plate', 'gtceu:fine_red_alloy_wire')
        .inputFluids('gtceu:tin 288')
        .itemOutputs('2x gtceu:monitor')
        .circuit(1)
        .duration(1000)
        .EUt(120)

    gt.assembler('monitor_casing_soldering_alloy')
        .itemInputs('gtceu:mv_machine_hull', 'gtceu:computer_monitor_cover', 
            '4x gtceu:glass_plate', 'gtceu:fine_red_alloy_wire')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('2x gtceu:monitor')
        .circuit(1)
        .duration(1000)
        .EUt(120)
    //#endregion



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