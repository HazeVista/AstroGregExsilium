 ServerEvents.recipes(event => {
 
    const gt = event.recipes.gtceu
    const dust = 'fluxnetworks:flux_dust'
    const core = 'fluxnetworks:flux_core'
    const forms = [ ['ingot', '1x', '1x', 20], ['block', '9x', '1x', 180], ['rod', '1x', '2x', 20], ['plate', '1x', '1x', 20] ]
    const fluxThings = ['flux_controller', 'basic_flux_storage', 'herculean_flux_storage', 'gargantuan_flux_storage', 'flux_point', 'flux_plug']

    fluxThings.forEach((thing) => {

        gt.shaped(`fluxnetworks:${thing}`, [
            'A'
        ], {
            A: `fluxnetworks:${thing}`
        })

    })

    forms.forEach(([form, dustAmount, outputAmount, duration]) => {

        gt.forming_press(`form_flux_dust_to_${form}`)
            .notConsumable(`gtceu:${form}_extruder_mold`)
            .itemInputs(`${dustAmount} ${dust}`)
            .itemOutputs(`${outputAmount} astrogreg:flux_${form}`)
            .duration(duration * 20)
            .EUt(15)

    })

    gt.forming_press('form_flux_dust_to_nuggets')
        .notConsumable('gtceu:nugget_casting_mold')
        .itemInputs(dust)
        .itemOutputs('9x astrogreg:flux_nugget')
        .duration(400)
        .EUt(15)

    gt.shaped('fluxnetworks:flux_configurator', [
        ' B',
        'A '
    ], {
        A: 'astrogreg:flux_rod',
        B: core
    })
    .addMaterialInfo()

    gt.mixer('mix_flux_dust')
        .itemInputs('4x powah:dielectric_paste', '3x gtceu:obsidian_dust', '3x gtceu:silicon_dust')
        .itemOutputs(`10x ${dust}`)
        .duration(200)
        .EUt(480)
    
    gt.laser_engraver('engrave_flux_core')
        .notConsumable('#forge:lenses/green')
        .itemInputs('astrogreg:flux_plate')
        .itemOutputs(core)
        .duration(200)
        .EUt(480)
        .addMaterialInfo(true)

    gt.assembler('assemble_flux_plug')
        .itemInputs('gtceu:hv_sensor', `4x ${core}`)
        .inputFluids('gtceu:soldering_alloy 36')
        .itemOutputs('fluxnetworks:flux_plug')
        .duration(80)
        .EUt(1920)
        .circuit(20)
        .addMaterialInfo(true)

    gt.assembler('assemble_flux_point')
        .itemInputs('gtceu:hv_emitter', `4x ${core}`)
        .inputFluids('gtceu:soldering_alloy 36')
        .itemOutputs('fluxnetworks:flux_point')
        .duration(80)
        .EUt(1920)
        .circuit(20)
        .addMaterialInfo(true)

    gt.assembler('assemble_flux_controller')
        .itemInputs('astrogreg:flux_frame', 'gtceu:ev_sensor', 'gtceu:ev_emitter', `4x ${core}`)
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('fluxnetworks:flux_controller')
        .duration(600)
        .EUt(1920)
        .circuit(20)
        .addMaterialInfo(true)

    gt.assembler('assemble_flux_storage_basic')
        .itemInputs('astrogreg:flux_frame', 'gtceu:tempered_glass', '#gtceu:circuits/ev', `4x ${core}`)
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('fluxnetworks:basic_flux_storage')
        .duration(200)
        .EUt(1920)
        .circuit(20)
        .addMaterialInfo(true)

    gt.assembler('assemble_flux_storage_herc')
        .itemInputs('4x fluxnetworks:basic_flux_storage', 'gtceu:laminated_glass', '#gtceu:circuits/iv')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('fluxnetworks:herculean_flux_storage')
        .duration(200)
        .EUt(7680)
        .circuit(20)
        .addMaterialInfo(true)

    gt.assembler('assemble_flux_storage_garg')
        .itemInputs('4x fluxnetworks:herculean_flux_storage', 'gtceu:fusion_glass', '#gtceu:circuits/luv')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('fluxnetworks:gargantuan_flux_storage')
        .duration(200)
        .EUt(30720)
        .circuit(20)
        .addMaterialInfo(true)

})