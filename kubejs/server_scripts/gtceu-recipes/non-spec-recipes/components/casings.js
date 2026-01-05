ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu  

    const ageCasings = [
    ['astrogreg:futura_alloy_frame', 'astrogreg:futura_alloy_plate', '2x astrogreg:futura_alloy_casing', 'futura_casing'],
    ['astrogreg:livingbricks', 'astrogreg:manasteel_plate', '2x astrogreg:manasteel_brick_machine_casing', 'manasteel_brick_casing'],
    ['astrogreg:terrasteel_frame', 'astrogreg:terrasteel_plate', '2x astrogreg:solid_terrasteel_machine_casing', 'solid_terrasteel_casing'],
    ['astrogreg:elementium_frame', 'astrogreg:elementium_plate', '2x astrogreg:solid_alfsteel_machine_casing', 'alfsteel_turbine_casing']]

    ageCasings.forEach((ageCasing) => {
        const frame = ageCasing[0]
        const plate = ageCasing[1]
        const block = ageCasing[2]
        const name = ageCasing[3]

        gt.shaped(block, [
            'ABA',
            'ACA',
            'ADA'
        ], {
            A: plate,
            B: '#forge:tools/hammers',
            C: frame,
            D: '#forge:tools/wrenches'
        })

        gt.assembler(name)
            .itemInputs(`6x ${plate}`, frame)
            .itemOutputs(block)
            .circuit(6)
            .duration(50)
            .EUt(16)
            .addMaterialInfo(true)
    })

    gt.shaped('2x astrogreg:manasteel_firebox_casing', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'astrogreg:manasteel_plate',
        B: 'astrogreg:manasteel_rod',
        C: 'astrogreg:manasteel_frame'
    })

    gt.assembler('manasteel_firebox_casing')
        .itemInputs('4x astrogreg:manasteel_plate', '4x astrogreg:manasteel_rod', 'astrogreg:manasteel_frame')
        .itemOutputs('2x astrogreg:manasteel_firebox_casing')
        .circuit(6)
        .duration(50)
        .EUt(16)
        .addMaterialInfo(true)

    gt.shaped('2x astrogreg:manasteel_pipe_casing', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'astrogreg:manasteel_plate',
        B: 'astrogreg:manasteel_normal_fluid_pipe',
        C: 'astrogreg:manasteel_frame'
    })

    gt.assembler('manasteel_pipe_casing')
        .itemInputs('4x astrogreg:manasteel_plate', '4x astrogreg:manasteel_normal_fluid_pipe', 'astrogreg:manasteel_frame')
        .itemOutputs('2x astrogreg:manasteel_pipe_casing')
        .circuit(6)
        .duration(50)
        .EUt(16)
        .addMaterialInfo(true)
        
    gt.shaped('2x astrogreg:terrasteel_firebox_casing', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'astrogreg:terrasteel_plate',
        B: 'astrogreg:terrasteel_rod',
        C: 'astrogreg:terrasteel_frame'
    })

    gt.assembler('terrasteel_firebox_casing')
        .itemInputs('4x astrogreg:terrasteel_plate', '4x astrogreg:terrasteel_rod', 'astrogreg:terrasteel_frame')
        .itemOutputs('2x astrogreg:terrasteel_firebox_casing')
        .circuit(6)
        .duration(50)
        .EUt(16)
        .addMaterialInfo(true)
               
    gt.shaped('2x astrogreg:terrasteel_pipe_casing', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'astrogreg:terrasteel_plate',
        B: 'astrogreg:terrasteel_normal_fluid_pipe',
        C: 'astrogreg:terrasteel_frame'
    })

    gt.assembler('terrasteel_pipe_casing')
        .itemInputs('4x astrogreg:terrasteel_plate', '4x astrogreg:terrasteel_normal_fluid_pipe', 'astrogreg:terrasteel_frame')
        .itemOutputs('2x astrogreg:terrasteel_pipe_casing')
        .circuit(6)
        .duration(50)
        .EUt(16)
        .addMaterialInfo(true)
        
    gt.shaped('2x astrogreg:alfsteel_firebox_casing', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'astrogreg:elementium_plate',
        B: 'astrogreg:elementium_rod',
        C: 'astrogreg:elementium_frame'
    })

    gt.assembler('alfsteel_firebox_casing')
        .itemInputs('4x astrogreg:elementium_plate', '4x astrogreg:elementium_rod', 'astrogreg:elementium_frame')
        .itemOutputs('2x astrogreg:alfsteel_firebox_casing')
        .circuit(6)
        .duration(50)
        .EUt(16)
        .addMaterialInfo(true)

    gt.shaped('2x astrogreg:alfsteel_pipe_casing', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'astrogreg:elementium_plate',
        B: 'astrogreg:elementium_normal_fluid_pipe',
        C: 'astrogreg:elementium_frame'
    })

    gt.assembler('alfsteel_pipe_casing')
        .itemInputs('4x astrogreg:elementium_plate', '4x astrogreg:elementium_normal_fluid_pipe', 'astrogreg:elementium_frame')
        .itemOutputs('2x astrogreg:alfsteel_pipe_casing')
        .circuit(6)
        .duration(50)
        .EUt(16)
        .addMaterialInfo(true)
        
    gt.shaped('2x astrogreg:alfsteel_gearbox_casing', [
        'ADA',
        'BCB',
        'AEA'
    ], {
        A: 'astrogreg:elementium_plate',
        B: 'astrogreg:elementium_gear',
        C: 'astrogreg:elementium_frame',
        D: '#forge:tools/hammers',
        E: '#forge:tools/wrenches',
    })

    gt.assembler('alfsteel_gearbox_casing')
        .itemInputs('4x astrogreg:elementium_plate', '2x astrogreg:elementium_gear', 'astrogreg:elementium_frame')
        .itemOutputs('2x astrogreg:alfsteel_gearbox_casing')
        .circuit(4)
        .duration(50)
        .EUt(16)
        .addMaterialInfo(true)
})