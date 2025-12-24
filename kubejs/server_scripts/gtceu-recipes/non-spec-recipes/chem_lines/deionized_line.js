ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    //#region filter cartridge
    gt.canner('fill_astrotek_cartridge')
        .itemInputs('astrogreg:empty_filter_cartridge', '4x astrogreg:resin_beads')
        .itemOutputs('astrogreg:filter_cartridge')
        .duration(320)
        .EUt(7)

    gt.assembler('assemble_empty_cartridge')
        .itemInputs('gtceu:tungsten_steel_fluid_cell', '6x gtceu:polyvinyl_butyral_plate', 'gtceu:fluid_filter')
        .itemOutputs('astrogreg:empty_filter_cartridge')
        .duration(300)
        .EUt(1920)
    //#endregion

})