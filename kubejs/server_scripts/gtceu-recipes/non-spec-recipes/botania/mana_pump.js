ServerEvents.recipes(event => {
const fabricator = event.recipes.gtceu.manafield_simulator

// #region mana production



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
        D:  glass,
        E: `gtceu:${tier}_machine_hull`,
        F: `#gtceu:circuits/${tier}`
    })
}
// #endregion
})