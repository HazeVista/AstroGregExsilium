ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    const wafers = [
        ['silicon', 'lens_normal', 'manafluid:mana 10', 'astrogreg:mana_simple_soc_wafer', 720, 120],
        ['phosphorus', 'lens_normal', 'manafluid:mana 10', '4x astrogreg:mana_simple_soc_wafer', 400, 480],
        ['naquadah', 'lens_normal', 'manafluid:mana 10', '8x astrogreg:mana_simple_soc_wafer', 160, 1920],
        ['neutronium', 'lens_normal', 'manafluid:mana 10', '16x astrogreg:mana_simple_soc_wafer', 40, 7680],
        ['phosphorus', 'terra_lens', 'manafluid:mana 100', 'astrogreg:mana_soc_wafer', 720, 480],
        ['naquadah', 'terra_lens', 'manafluid:mana 100', '4x astrogreg:mana_soc_wafer', 400, 1920],
        ['neutronium', 'terra_lens', 'manafluid:mana 100', '8x astrogreg:mana_soc_wafer', 160, 7680],
        ['naquadah', 'pixie_lens', 'gtbotania:aether 100', 'astrogreg:aetherized_advanced_soc_wafer', 720, 1920],
        ['neutronium', 'pixie_lens', 'gtbotania:aether 100', '4x astrogreg:aetherized_advanced_soc_wafer', 400, 7680],
        ['neutronium', 'gaia_lens', 'gtbotania:aether 500', 'astrogreg:aetherized_highly_advanced_soc_wafer', 720, 7680],
    ]

    wafers.forEach(([ input, lens, fluid, output, duration, EU ]) => {

        gt.rune_inscription(`${input}_${lens}_soc`)
            .notConsumable(`botania:${lens}`)
            .itemInputs(`gtceu:${input}_wafer`)
            .inputFluids(fluid)
            .itemOutputs(output)
            .duration(duration)
            .EUt(EU)

    })

    const chips = [
        ['mana_simple', 'simple_soc', 120],
        ['mana', 'soc', 480],
        ['aetherized_advanced', 'advanced_soc', 1920],
        ['aetherized_highly_advanced', 'highly_advanced_soc', 7680]
    ]

    chips.forEach(([ wafer, chip, EU ]) => {

        gt.cutter(`${wafer}_soc`)
            .itemInputs(`astrogreg:${wafer}_soc_wafer`)
            .itemOutputs(`gtceu:${chip}`)
            .duration(1800)
            .EUt(EU)

    })

})