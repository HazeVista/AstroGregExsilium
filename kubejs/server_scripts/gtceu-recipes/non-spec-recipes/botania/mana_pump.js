ServerEvents.recipes(event => {

    // #region MANA SIMULATION
    const fabricator = (id) => event.recipes.gtceu.manafield_simulation(id);
    const mana = 1;

    [
        ['minecraft:water 1000', 'botania:hydroangeas', 500],
        ['minecraft:lava 1000', 'botania:thermalily', 10000]
    ].forEach(([i, f, c]) => {
        let flowerName = f.split(':')[1];
        fabricator(`${flowerName}_simulation`)
            .inputFluids(i)
            .chancedInput(f, c, 0)
            .outputFluids(`manafluid:mana ${mana}`)
            .duration(mana * 200)
            .EUt(28);
    });

    [
        ['#forge:fuels', 'botania:endoflame'],
        ['64x #minecraft:leaves', 'botania:munchdew'],
        ['#forge:tnt', 'botania:entropinnyum'],
        ['minecraft:cake', 'botania:kekimurus'],
        ['#c:foods', 'botania:gourmaryllis']
    ].forEach(([i, f]) => {
        let flowerName = f.split(':')[1];
        fabricator(`${flowerName}_simulation`)
            .itemInputs(i, f)
            .outputFluids(`manafluid:mana ${mana}`)
            .duration(mana * 200)
            .EUt(28);
    });
    // #endregion

    // #region shaped singleblocks
    const tieredParts = [
        ['lv', 'tin', 'botania:managlass'],
        ['mv', 'copper', 'botania:managlass'],
        ['hv', 'gold', 'botania:managlass'],
        ['ev', 'aluminium', 'botania:alfglass'],
        ['iv', 'platinum', 'botania:alfglass'],
        ['luv', 'niobium_titanium', 'botania:alfglass'],
        ['zpm', 'vanadium_gallium', 'botania:bifrost_perm'],
        ['uv', 'yttrium_barium_cuprate', 'botania:bifrost_perm']
    ]

    tieredParts.forEach(singleblocks)

    function singleblocks(part) {
        const tier = part[0]
        const cable = part[1]
        const glass = part[2]

        event.shaped(`gtceu:${tier}_manafield_simulator`, [
            'DAD',
            'FEF',
            'BCB'
        ], {
            A: `gtceu:${tier}_emitter`,
            B: `gtceu:${tier}_electric_pump`,
            C: `gtceu:${cable}_single_cable`,
            D: glass,
            E: `gtceu:${tier}_machine_hull`,
            F: `#gtceu:circuits/${tier}`
        })
    }
    // #endregion
})