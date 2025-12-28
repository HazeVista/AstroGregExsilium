ServerEvents.recipes(event => {
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

    // event.remove({id: 'gtceu:assembly_line/pterb'})
    // event.remove({id: 'gtceu:research_station/1x_gtceu_active_transformer'})
})