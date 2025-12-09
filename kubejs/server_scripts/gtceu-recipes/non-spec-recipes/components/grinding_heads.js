ServerEvents.recipes(event => {
const grindingParts = [['gtceu:damascus_steel_plate', 'gtceu:double_steel_plate', 'gtceu:small_iron_gear', 'gtceu:grinding_head_damascus_steel'],
                       ['gtceu:diamond_dust', 'gtceu:double_steel_plate', 'gtceu:small_steel_gear', 'gtceu:grinding_head_diamond'],
                       ['gtceu:tungsten_plate', 'gtceu:double_tungsten_steel_plate', 'gtceu:small_tungsten_steel_gear', 'gtceu:grinding_head_tungsten'],
                       ['gtceu:duranium_plate', 'gtceu:double_naquadah_alloy_plate', 'gtceu:small_naquadah_alloy_gear', 'gtceu:grinding_head_duranium']]

grindingParts.forEach(grindingHeads)

function grindingHeads(heads) {
        const plate = heads[0]
        const double = heads[1]
        const gear = heads[2]
        const head = heads[3]

    event.shaped(head, [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: plate,
        B: double,
        C: gear
    })
}
})  