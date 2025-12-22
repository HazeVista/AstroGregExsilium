ServerEvents.recipes(event => {
    const toRemove = ['gtceu:research_station/1x_gtceu_active_transformer', 'gtceu:assembly_line/pterb']
    toRemove.forEach(e => {event.remove(e)})
    event.recipes.gtceu.assembly_line('assembly_line_pterb')
        .itemInputs('gtceu:active_transformer', '32x gtceu:darmstadtium_plate',
                    '8x gtceu:zpm_sensor', '8x gtceu:zpm_emitter',
                    '4x gtceu:zpm_field_generator', '2x #gtceu:circuits/zpm',
                    '4x gtceu:darmstadtium_large_fluid_pipe', 
                    '8x gtceu:yttrium_barium_cuprate_quadruple_cable', 
                    '8x gtceu:normal_laser_pipe')
        .inputFluids('gtceu:soldering_alloy 4608')
        .itemOutputs('gtmutils:pterb_machine')
        .duration(1200)
        .EUt(99614)
        .stationResearch(b => b.researchStack(Item.of('gtceu:active_transformer')).EUt(30800).CWUt(16))
        
})  