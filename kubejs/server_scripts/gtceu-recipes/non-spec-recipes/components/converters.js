ServerEvents.recipes(event => {

    const LV_HVMaterials = { 
        lv: 'astrogreg:energized_steel', 
        mv: 'gtceu:blazing_ostrum',
        hv: 'gtceu:niotic_calorite'
        }

    const EV_UHVMaterials = { 
        ev: 'gtceu:spirited_uranium',
        iv: 'gtceu:nitromangaphosphide',
        luv: 'gtceu:juperiosaturlytide',
        zpm: 'gtceu:gaiaforged_naquadah',
        uv: 'gtceu:neptunium_molybdenum_selenide',
        // uhv: ''
        }

    function converter(a, wiresize){

        for (const [tier, supercon] of Object.entries(LV_HVMaterials)) {
            event.shaped(Item.of(`gtceu:${tier}_${a}_energy_converter`), [
                ' AA',
                'DBC',
                ' AA'
            ], {
                A: `${supercon}_${wiresize}_wire`,
                B: `gtceu:${tier}_machine_hull`,
                C: `#gtceu:circuits/${tier}`,
                D: `${supercon}_single_wire`
            })
        }

        for (const [tier, supercon] of Object.entries(EV_UHVMaterials)) {
            event.shaped(Item.of(`gtceu:${tier}_${a}_energy_converter`), [
                ' AA',
                'DBC',
                ' AA'
            ], {
                A: `${supercon}_${wiresize}_wire`,
                B: `gtceu:${tier}_machine_hull`,
                C: `#gtceu:circuits/${tier}`,
                D: `${supercon}_single_wire`
            })}
        }
    
    for (const [tier, supercon] of Object.entries(EV_UHVMaterials)) {
        event.recipes.gtceu.assembler(`${tier}_64a_converter`)
            .itemInputs(`#gtceu:circuits/${tier}`, `16x ${supercon}_hex_wire`, `gtceu:${tier}_machine_hull`)
            .itemOutputs(Item.of(`gtmutils:${tier}_64a_energy_converter`))
            .duration(400)
            .EUt(1600)
    }

    converter('1a','single')
    converter('4a','quadruple')
    converter('8a','octal')
    converter('16a','hex')

})
    
    BlockEvents.placed(event => {
	    let block = event.getBlock();
	    if (/^(?:gtceu|gtmutils):.*energy_converter$/.test(block.getId())) {
            block.mergeEntityData({ energyContainer: { feToEu: true } })}
})