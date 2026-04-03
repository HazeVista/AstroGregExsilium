ServerEvents.recipes(event => {

    const gt =  event.recipes.gtceu

    event.shapeless('exposure:album', 'minecraft:writable_book')

    gt.shaped('exposure:camera', [
        'ABA',
        'CDC',
        'EBE'
    ], {
        A: 'gtceu:steel_screw',
        B: 'gtceu:steel_plate',
        C: 'gtceu:fine_red_alloy_wire',
        D: 'gtceu:glass_lens',
        E: 'gtceu:small_steel_gear'
    })
    .addMaterialInfo()
    
    gt.shaped('exposure:black_and_white_film', [
        'AB ',
        'BCD',
        ' DA'
    ],{
        A: 'gtceu:wrought_iron_ring',
        B: 'gtceu:wrought_iron_foil',
        C: '#forge:dyes/white',
        D: 'gtceu:wrought_iron_foil'
    })

    gt.shaped('exposure:color_film', [
        'AB ',
        'BCD',
        ' DA'
    ],{
        A: 'gtceu:wrought_iron_ring',
        B: 'gtceu:gold_foil',
        C: '#forge:dyes/blue',
        D: 'gtceu:wrought_iron_foil'
    })

})