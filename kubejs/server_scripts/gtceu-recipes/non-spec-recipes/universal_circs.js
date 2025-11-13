const tiers = ['ulv', 'lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv', 'uhv'];

ServerEvents.recipes(event => { 

	tiers.forEach(tier => {
		event.recipes.gtceu.assembler((`kubejs:${tier}_modular_circuit`))
            .circuit(5)
            .itemInputs(`#gtceu:circuits/${tier}`)
            .itemOutputs(`kubejs:${tier}_modular_circuit`)
            .EUt(7)
            .duration(1);
	});
});

      ServerEvents.tags('item', event => {
            tiers.forEach(tier => {
		      event.add(`gtceu:circuits/${tier}`, `kubejs:${tier}_modular_circuit`)});

});