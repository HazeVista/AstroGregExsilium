ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    //#region retiered
    gt.shaped('gtceu:cleaning_maintenance_hatch', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: '#gtceu:circuits/uv',
        B: 'gtceu:auto_maintenance_hatch',
        C: 'gtceu:zpm_robot_arm',
        D: 'gtceu:luv_machine_hull'
    })
    .addMaterialInfo()

    event.remove({id: 'gtceu:assembly_line/pterb'})
    event.remove({id: 'gtceu:research_station/1x_gtceu_active_transformer'})

    gt.assembly_line('pterb_machine')
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



    //#region alloys
    gt.alloy_blast_smelter('gaiasteel_argon')
        .itemInputs('8x gtbotania:elementium_dust', '6x astrogreg:vesnium_dust', '3x gtceu:duranium_dust', '2x gtceu:titanium_tungsten_carbide_dust')
        .inputFluids('gtceu:argon 950')
        .inputFluids('gtbotania:aether 4000')
        .outputFluids('gtbotania:gaiasteel 2736')
        .circuit(14)
        .blastFurnaceTemp(6000)
        .duration(10720)
        .EUt(30720)
        
    gt.alloy_blast_smelter('gaiasteel')
        .itemInputs('8x gtbotania:elementium_dust', '6x astrogreg:vesnium_dust', '3x gtceu:duranium_dust', '2x gtceu:titanium_tungsten_carbide_dust')
        .inputFluids('gtbotania:aether 4000')
        .outputFluids('gtbotania:gaiasteel 2736')
        .circuit(4)
        .blastFurnaceTemp(6000)
        .duration(16000)
        .EUt(30720)

    gt.centrifuge('gaiasteel_decomp')
        .itemInputs('19x gtbotania:gaiasteel_dust')
        .itemOutputs('8x gtbotania:elementium_dust', '6x astrogreg:vesnium_dust', '3x gtceu:duranium_dust', '2x gtceu:titanium_tungsten_carbide_dust')
        .duration(1200)
        .EUt(20)
    //#endregion
})