ServerEvents.recipes(event => {

    const tiered_machines = [
        ['lv', 'tin', 'tin'],
        ['mv', 'copper', 'copper'],
        ['hv', 'gold', 'gold'],
        ['ev', 'aluminium', 'aluminium'],
        ['iv', 'platinum', 'tungsten'],
        ['luv', 'niobium_titanium', 'niobium_titanium'],
        ['zpm', 'vanadium_gallium', 'vanadium_gallium'],
        ['uv', 'yttrium_barium_cuprate', 'yttrium_barium_cuprate'],
        ['uhv', 'europium', 'europium']
    ]

    tiered_machines.forEach(([tier, cable, wire]) => {
        event.recipes.gtceu.shaped(`gtmutils:${tier}_auto_charger_4x`, [
            'ABA',
            'CDC',
            'AEA'
        ], {
            A: `gtceu:${wire}_quadruple_wire`,
            B: `gtceu:${tier}_conveyor_module`,
            C: `gtceu:${cable}_single_cable`,
            D: `gtceu:${tier}_machine_hull`,
            E: `#gtceu:circuits/${tier}`
        })
        .addMaterialInfo()
    })
})