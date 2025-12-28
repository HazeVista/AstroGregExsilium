ServerEvents.recipes(event => {

    //#region retiered
    event.shaped('gtceu:cleaning_maintenance_hatch', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: '#gtceu:circuits/uv',
        B: 'gtceu:auto_maintenance_hatch',
        C: 'gtceu:zpm_robot_arm',
        D: 'gtceu:luv_machine_hull'
    })

    event.remove({id: 'gtceu:assembly_line/pterb'})
    event.remove({id: 'gtceu:research_station/1x_gtceu_active_transformer'})

    event.recipes.gtceu.assembly_line('pterb_machine')
        .itemInputs('gtceu:active_transformer')
        .itemInputs('4x gtceu:luv_sensor')
        .itemInputs('4x gtceu:luv_emitter')
        .itemInputs('2x gtceu:luv_field_generator')
        .itemInputs('32x gtceu:palladium_plate')
        .itemInputs('gtceu:ruridit_frame')
        .itemInputs('gtceu:osmiridium_large_item_pipe')
        .itemInputs('8x gtceu:indium_tin_barium_titanium_cuprate_quadruple_wire')
        .itemInputs('2x #gtceu:circuits/zpm')
        .itemInputs('gtceu:normal_laser_pipe')
        .inputFluids('gtceu:soldering_alloy 4608')
        .itemOutputs('gtmutils:pterb_machine')
        .duration(1200)
        .EUt(24000)
        .addMaterialInfo(true)
        ["scannerResearch(java.util.function.UnaryOperator)"]
        (b => b
            .researchStack("gtceu:active_transformer")
            .duration(1800)
            .EUt(1920)
        )
    //#endregion    
})