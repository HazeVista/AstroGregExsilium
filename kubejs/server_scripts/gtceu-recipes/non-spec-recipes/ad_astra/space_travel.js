ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    //#region hatches & computers
    gt.assembler('cwu_input_hatch')
        .itemInputs('gtceu:hv_input_bus', '#gtceu:circuits/hv', 'gtceu:mv_sensor', '2x astrogreg:data_disk')
        .inputFluids('gtceu:polyethylene 144')
        .itemOutputs('astrogreg:hv_cwu_input_hatch')
        .circuit(1)
        .duration(300)
        .EUt(120)
        .addMaterialInfo(true)

    gt.assembler('observatory_object_holder')
        .itemInputs('gtceu:hv_input_bus', 'gtceu:mv_scanner', '2x gtceu:mv_robot_arm', '#gtceu:circuits/hv', '')
        .inputFluids('gtceu:polyethylene 144')
        .itemOutputs('astrogreg:observatory_object_holder')
        .circuit(1)
        .duration(200)
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

    

    //#region controllers
    gt.assembler('industrial_astroport_tin')
        .itemInputs('gtceu:mv_assembler', '4x gtceu:double_steel_plate', '4x gtceu:mv_robot_arm', 'gtceu:mv_electric_pump',
             'gtceu:mv_conveyor_module', 'gtceu:computer_monitor_cover', '4x gtceu:copper_single_cable')
        .inputFluids('gtceu:tin 1152')
        .itemOutputs('astrogreg:industrial_astroport')
        .circuit(1)
        .duration(1200)
        .EUt(120)
    
    gt.assembler('industrial_astroport_soldering_alloy')
        .itemInputs('gtceu:mv_assembler', '4x gtceu:double_steel_plate', '4x gtceu:mv_robot_arm', 'gtceu:mv_electric_pump',
             'gtceu:mv_conveyor_module', 'gtceu:computer_monitor_cover', '4x gtceu:copper_single_cable')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('astrogreg:industrial_astroport')
        .circuit(1)
        .duration(900)
        .EUt(120)
        .addMaterialInfo(true)
        
    gt.assembler('industrial_observatory_tin')
        .itemInputs('gtceu:mv_scanner', '4x gtceu:double_steel_plate', '2x gtceu:mv_sensor', '4x astrogreg:data_disk', 
            'gtceu:computer_monitor_cover', '4x gtceu:copper_single_cable')
        .inputFluids('gtceu:tin 1152')
        .itemOutputs('astrogreg:industrial_observatory')
        .circuit(1)
        .duration(1200)
        .EUt(120)

    gt.assembler('industrial_observatory_soldering_alloy')
        .itemInputs('gtceu:mv_scanner', '4x gtceu:double_steel_plate', '2x gtceu:mv_sensor', '4x astrogreg:data_disk', 
            'gtceu:computer_monitor_cover', '4x gtceu:copper_single_cable')
        .inputFluids('gtceu:soldering_alloy 576')
        .itemOutputs('astrogreg:industrial_observatory')
        .circuit(1)
        .duration(900)
        .EUt(120)
        .addMaterialInfo(true)
    //#endregion
})