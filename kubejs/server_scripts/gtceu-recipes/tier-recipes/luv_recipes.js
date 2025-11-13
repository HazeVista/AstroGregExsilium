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
})