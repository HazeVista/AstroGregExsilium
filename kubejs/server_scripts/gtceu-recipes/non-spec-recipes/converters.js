ServerEvents.recipes(event => {
    event.remove({ output: /gt.*_energy_converter/ })

    const superconductors = {
        lv: 'astrogreg:energized_steel',
        mv: 'astrogreg:blazing_etrium',
        hv: 'astrogreg:niotic_calorite',
        ev: 'astrogreg:spirited_uranium',
        iv: 'astrogreg:nitro_flux',
        luv: 'astrogreg:juperiosaturlytide',
        zpm: 'astrogreg:gaiaforged_naquadah',
        uv: 'astrogreg:neptunium_molybdenum_selenide'
    }

    const amps = { single: '1a', quadruple: '4a', octal: '8a', hex: '16a' }

    // Create all shaped recipes
    Object.entries(amps).forEach(([wiresize, amp]) => {
        Object.entries(superconductors).forEach(([tier, material]) => {
            event.shaped(Item.of(`gtceu:${tier}_${amp}_energy_converter`), [
                ' AA',
                'DBC',
                ' AA'
            ], {
                A: `${material}_${wiresize}_wire`,
                B: `gtceu:${tier}_machine_hull`,
                C: `#gtceu:circuits/${tier}`,
                D: `${material}_single_wire`
            })
        })
    })

    // Create 64a assembler recipes (EV and above only)
    Object.entries(superconductors).slice(3).forEach(([tier, material]) => {
        event.recipes.gtceu.assembler(`${tier}_64a_converter`)
            .itemInputs(`#gtceu:circuits/${tier}`, `16x ${material}_hex_wire`, `gtceu:${tier}_machine_hull`)
            .itemOutputs(Item.of(`gtmutils:${tier}_64a_energy_converter`))
            .duration(400)
            .EUt(1600)
    })
})

BlockEvents.placed(event => {
    let block = event.getBlock()
    if (/^(?:gtceu|gtmutils):.*energy_converter$/.test(block.getId())) {
        let blockEntity = block.getEntity()
        if (blockEntity) {
            let metaMachine = blockEntity.getMetaMachine()
            if (metaMachine && metaMachine.setFeToEu) {
                metaMachine.setFeToEu(true)
            }
        }
    }
})