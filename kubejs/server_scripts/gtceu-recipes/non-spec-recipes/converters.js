ServerEvents.recipes(event => {

    const LV_HVconverterMaterials = { 
        lv: 'energized_steel', 
        mv: 'blazing_ostrum',
        hv: 'niotic_calorite'
        }

    const EV_UHVconverterMaterials = { 
        ev: 'spirited_uranium',
        iv: 'nitromangaphosphide',
        luv: 'juperiosaturlytide',
        zpm: 'gaiaforged_naquadah',
        uv: 'neptunium_molybdenum_selenide',
        // uhv: ''
        }

    function converterRecipe(amps, thick){
        for (const [tier, superconductor] of Object.entries(LV_HVconverterMaterials)) {
            event.shaped(Item.of(`gtceu:${tier}_${amps}_energy_converter`), [
                '   ',
                'ACA',
                'ABA'
            ], {
                A: `gtceu:${superconductor}_${thick}_wire`,
                B: `gtceu:${tier}_machine_hull`,
                C: `#gtceu:circuits/${tier}`
            })
            .id(`gtceu:shaped/${tier}_${amps}_energy_converter`)};      
        
        for (const [tier, superconductor] of Object.entries(EV_UHVconverterMaterials)) {
            event.shaped(Item.of(`gtceu:${tier}_${amps}_energy_converter`), [
                '   ',
                'ACA',
                'ABA'
            ], {
                A: `gtceu:${superconductor}_${thick}_wire`,
                B: `gtceu:${tier}_machine_hull`,
                C: `#gtceu:circuits/${tier}`
            })
            .id(`gtceu:shaped/${tier}_${amps}_energy_converter`)};
        };
    
    for (const [tier, superconductor] of Object.entries(EV_UHVconverterMaterials)) {
        event.recipes.gtceu.assembler(`${tier}_64a_energy_converter`)
            .itemInputs(`#gtceu:circuits/${tier}`, `16x gtceu:${superconductor}_hex_wire`, `gtceu:${tier}_machine_hull`)
            .itemOutputs(Item.of(`gtmutils:${tier}_64a_energy_converter`))
            .duration(600)
            .EUt(1600)
    };

    converterRecipe('1a','single');
    converterRecipe('4a','quadruple');
    converterRecipe('8a','octal');
    converterRecipe('16a','hex');

});

    BlockEvents.placed(event => {
	    let block = event.getBlock();
	    if (/^(?:gtceu|gtmutils):.*energy_converter$/.test(block.getId())) {
            block.mergeEntityData({ energyContainer: { feToEu: true } });
	};
});