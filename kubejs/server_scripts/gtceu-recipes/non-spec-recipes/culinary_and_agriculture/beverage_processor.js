ServerEvents.recipes(event => {
const processor = event.recipes.gtceu.beverage_processor

//#region beverage recipes
    //output, input, duration in ticks, EUt

//#endregion

//#region machine recipes


    const tieredParts = [
        ['lv', 'cobalt_brass', 'tin', '#forge:glass'],
        ['mv', 'vanadium_steel', 'copper', '#forge:glass'],
        ['hv', 'red_steel', 'gold', 'gtceu:tempered_glass'],
        ['ev', 'ultimet', 'aluminium', 'gtceu:tempered_glass'],
        ['iv', 'tungsten_carbide', 'platinum', 'gtceu:laminated_glass'],
        ['luv', 'hsse', 'niobium_titanium', 'gtceu:laminated_glass'],
        ['zpm', 'naquadah_alloy', 'vanadium_gallium', 'gtceu:fusion_glass'],
        ['uv', 'duranium', 'yttrium_barium_cuprate', 'gtceu:fusion_glass']
    ]

    tieredParts.forEach(([tier, buzzsaw, cable, glass]) => {
        event.shaped(`gtceu:${tier}_beverage_processor`, [
            'FCF',
            'BDB',
            'EAG'
        ], {
            A: `#gtceu:circuits/${tier}`,
            B: `gtceu:${cable}_single_cable`,
            C: `gtceu:${buzzsaw}_buzzsaw_blade`,    
            D: `gtceu:${tier}_machine_hull`,
            E: `gtceu:${tier}_electric_pump`,
            F: glass,
            G: `gtceu:${tier}_conveyor_module`
        })
    })
//#endregion
})