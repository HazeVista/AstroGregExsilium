ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    //#region hatch & computers
    gt.assembler('cwu_input_hatch')
        .itemInputs('gtceu:hv_input_bus', '#gtceu:circuits/hv', 'gtceu:mv_sensor', '2x astrogreg:data_disk')
        .inputFluids('gtceu:polyethylene 144')
        .itemOutputs('astrogreg:hv_cwu_input_hatch')
        .circuit(1)
        .duration(300)
        .EUt(120)
        .addMaterialInfo(true)

    const computers = [
        ['mv', 'astrogreg:data_disk', 'copper'],
        ['hv', 'gtceu:data_stick', 'gold'],
        ['ev', 'gtceu:data_orb', 'aluminium']
    ]

    computers.forEach(([ tier, data, cable ]) => {

        gt.shaped(`astrogreg:${tier}_cwu_generator`, [
            'ABA',
            'DCD',
            'AEA'
        ], {
            A: `#gtceu:circuits/${tier}`,
            B: data,
            C: `gtceu:${tier}_machine_hull`,
            D: `gtceu:${cable}_single_cable`,
            E: `gtceu:${tier}_emitter`
        })
        .addMaterialInfo()

    })
    //#endregion

    

})