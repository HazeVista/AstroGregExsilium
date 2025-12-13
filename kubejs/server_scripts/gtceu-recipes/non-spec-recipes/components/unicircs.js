const tiers = ['ulv', 'lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv', 'uhv']

ServerEvents.recipes(event => { 
      tiers.forEach(circuit)
	function circuit(tier) {
		event.recipes.gtceu.assembler((`astrogreg:${tier}_modular_circuit`))
            .itemInputs(`#gtceu:circuits/${tier}`)
            .itemOutputs(`astrogreg:${tier}_modular_circuit`)
            .circuit(5)
            .duration(1)
            .EUt(7)
	}
})