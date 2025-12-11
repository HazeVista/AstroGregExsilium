ServerEvents.recipes(event => {

    const ageCasings = [
    ['astrogreg:futura_alloy_frame', 'astrogreg:futura_alloy_plate', '2x gtceu:futura_casing', 'futura_casing'],
    ['gtceu:livingbricks', 'gtceu:manasteel_plate', '2x astrogreg:manasteel_brick_machine_casing', 'manasteel_brick_casing'],
    ['gtceu:terrasteel_frame', 'gtceu:terrasteel_plate', '2x astrogreg:solid_terrasteel_machine_casing', 'solid_terrasteel_casing'],
    ['gtceu:elementium_frame', 'gtceu:elementium_plate', '2x astrogreg:solid_alfsteel_machine_casing', 'alfsteel_turbine_casing']]

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

    event.shaped('2x astrogreg:manasteel_firebox_casing', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'gtceu:manasteel_plate',
        B: 'gtceu:manasteel_rod',
        C: 'gtceu:manasteel_frame'
    })

    event.recipes.gtceu.assembler('manasteel_firebox_casing')
        .itemInputs('4x gtceu:manasteel_plate', '4x gtceu:manasteel_rod', 'gtceu:manasteel_frame')
        .itemOutputs('2x astrogreg:manasteel_firebox_casing')
        .circuit(6)
        .duration(50)
        .EUt(16)

    event.shaped('2x astrogreg:manasteel_pipe_casing', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'gtceu:manasteel_plate',
        B: 'gtceu:manasteel_normal_fluid_pipe',
        C: 'gtceu:manasteel_frame'
    })

    event.recipes.gtceu.assembler('manasteel_pipe_casing')
        .itemInputs('4x gtceu:manasteel_plate', '4x gtceu:manasteel_normal_fluid_pipe', 'gtceu:manasteel_frame')
        .itemOutputs('2x astrogreg:manasteel_pipe_casing')
        .circuit(6)
        .duration(50)
        .EUt(16)
        
    event.shaped('2x astrogreg:terrasteel_firebox_casing', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'gtceu:terrasteel_plate',
        B: 'gtceu:terrasteel_rod',
        C: 'gtceu:terrasteel_frame'
    })

    event.recipes.gtceu.assembler('terrasteel_firebox_casing')
        .itemInputs('4x gtceu:terrasteel_plate', '4x gtceu:terrasteel_rod', 'gtceu:terrasteel_frame')
        .itemOutputs('2x astrogreg:terrasteel_firebox_casing')
        .circuit(6)
        .duration(50)
        .EUt(16)
               
    event.shaped('2x astrogreg:terrasteel_pipe_casing', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'gtceu:terrasteel_plate',
        B: 'gtceu:terrasteel_normal_fluid_pipe',
        C: 'gtceu:terrasteel_frame'
    })

    event.recipes.gtceu.assembler('terrasteel_pipe_casing')
        .itemInputs('4x gtceu:terrasteel_plate', '4x gtceu:terrasteel_normal_fluid_pipe', 'gtceu:terrasteel_frame')
        .itemOutputs('2x astrogreg:terrasteel_pipe_casing')
        .circuit(6)
        .duration(50)
        .EUt(16)
        
    event.shaped('2x astrogreg:alfsteel_firebox_casing', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'gtceu:elementium_plate',
        B: 'gtceu:elementium_rod',
        C: 'gtceu:elementium_frame'
    })

    event.recipes.gtceu.assembler('alfsteel_firebox_casing')
        .itemInputs('4x gtceu:elementium_plate', '4x gtceu:elementium_rod', 'gtceu:elementium_frame')
        .itemOutputs('2x astrogreg:alfsteel_firebox_casing')
        .circuit(6)
        .duration(50)
        .EUt(16)

    event.shaped('2x astrogreg:alfsteel_pipe_casing', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'gtceu:elementium_plate',
        B: 'gtceu:elementium_normal_fluid_pipe',
        C: 'gtceu:elementium_frame'
    })

    event.recipes.gtceu.assembler('alfsteel_pipe_casing')
        .itemInputs('4x gtceu:elementium_plate', '4x gtceu:elementium_normal_fluid_pipe', 'gtceu:elementium_frame')
        .itemOutputs('2x astrogreg:alfsteel_pipe_casing')
        .circuit(6)
        .duration(50)
        .EUt(16)
        
    event.shaped('2x astrogreg:alfsteel_gearbox_casing', [
        'ADA',
        'BCB',
        'AEA'
    ], {
        A: 'gtceu:elementium_plate',
        B: 'gtceu:elementium_gear',
        C: 'gtceu:elementium_frame',
        D: '#forge:tools/hammers',
        E: '#forge:tools/wrenches',
    })

    event.recipes.gtceu.assembler('alfsteel_gearbox_casing')
        .itemInputs('4x gtceu:elementium_plate', '2x gtceu:elementium_gear', 'gtceu:elementium_frame')
        .itemOutputs('2x astrogreg:alfsteel_gearbox_casing')
        .circuit(4)
        .duration(50)
        .EUt(16)
})