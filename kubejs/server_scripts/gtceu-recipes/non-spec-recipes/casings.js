ServerEvents.recipes(event => {

    const ageCasings = [
    ['gtceu:futura_alloy_frame', 'gtceu:futura_alloy_plate', '2x gtceu:futura_casing', 'futura_casing'],
    ['gtceu:livingbricks', 'gtceu:manasteel_plate', '2x gtceu:manasteel_machine_casing', 'manasteel_brick_casing']]

    ageCasings.forEach((ageCasing) => {
        const frame = ageCasing[0]
        const plate = ageCasing[1]
        const block = ageCasing[2]
        const name = ageCasing[3]

        event.shaped(block, [
            'ABA',
            'ACA',
            'ADA'
        ], {
            A: plate,
            B: '#forge:tools/hammers',
            C: frame,
            D: '#forge:tools/wrenches'
        })

        event.recipes.gtceu.assembler(name)
            .itemInputs(`6x ${plate}`, frame)
            .itemOutputs(block)
            .circuit(6)
            .duration(50)
            .EUt(16)
    })
})