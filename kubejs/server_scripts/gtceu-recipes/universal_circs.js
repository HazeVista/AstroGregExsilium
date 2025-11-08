const tiers = ['ulv', 'lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv', 'uhv'];
	
ServerEvents.recipes(event => { 
	
	tiers.forEach(tier => {
		event.recipes.gtceu.assembler((`astrogreg:${tier}_universal_circuit`))
            .circuit(5)
            .itemInputs(`#gtceu:circuits/${tier}`)
            .itemOutputs(`astrogreg:${tier}_universal_circuit`)
            .EUt(7)
            .duration(1);
	});
});

ServerEvents.tags('item', event => {
      tiers.forEach(tier => {
		event.add(`gtceu:circuits/${tier}`, `astrogreg:${tier}_universal_circuit`)});

});