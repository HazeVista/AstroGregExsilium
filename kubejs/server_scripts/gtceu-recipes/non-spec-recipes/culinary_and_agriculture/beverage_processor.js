ServerEvents.recipes(event => {
const processor = event.recipes.gtceu.beverage_processor

//#region beverage recipes
    //output, input, duration in ticks, EUt

//#endregion

//#region machine recipes


    const tiered_machines = [
        ['lv', 'tin', '#forge:glass'],
        ['mv', 'copper', '#forge:glass'],
        ['hv', 'gold', 'gtceu:tempered_glass'],
        ['ev', 'aluminium', 'gtceu:tempered_glass'],
        ['iv', 'platinum', 'gtceu:laminated_glass'],
        ['luv', 'niobium_titanium', 'gtceu:laminated_glass'],
        ['zpm', 'vanadium_gallium', 'gtceu:fusion_glass'],
        ['uv', 'yttrium_barium_cuprate', 'gtceu:fusion_glass']
    ]

    tiered_machines.forEach(([tier, cable, glass]) => {
        event.shaped(`gtceu:${tier}_beverage_processor`, [
            'FCF',
            'BDB',
            'EAG'
        ], {
            A: glass,
            B: `gtceu:${cable}_single_cable`,
            C: `#gtceu:circuits/${tier}`,
            D: `gtceu:${tier}_machine_hull`,
            E: `gtceu:${tier}_electric_pump`,
            F: `minecraft:glass_bottle`,
            G: `gtceu:${tier}_conveyor_module`
        })
    })
//#endregion
})