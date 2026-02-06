ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    //#region filter cartridge
    gt.canner('fill_astrotek_cartridge')
        .itemInputs('astrogreg:empty_filter_cartridge', '4x astrogreg:resin_beads')
        .itemOutputs('astrogreg:filter_cartridge')
        .duration(320)
        .EUt(7)
        .addMaterialInfo(true)

    gt.assembler('assemble_empty_cartridge')
        .itemInputs('gtceu:tungsten_steel_fluid_cell', '6x gtceu:polyvinyl_butyral_plate', 'gtceu:ev_electric_pump')
        .itemOutputs('astrogreg:empty_filter_cartridge')
        .duration(300)
        .EUt(1920)
        .addMaterialInfo(true)
    //#endregion



    //#region multiblock
    // gt.assembly_line('filtration_plant')
    //     .itemInputs('gtceu:distillation_tower')
    //     .itemInputs('2x #gtceu:circuits/luv')
    //     .itemInputs('4x gtceu:iv_electric_pump')
    //     .itemInputs('4x gtceu:polybenzimidazole_large_fluid_pipe')
    //     .itemInputs('16x gtceu:fluid_filter')
    //     .itemInputs('4x gtceu:tungsten_cable')
    //     .inputFluids('gtceu:soldering_alloy 576')
    //     .itemOutputs('astrogreg:filtration_plant')
    //     .duration(400)
    //     .EUt(6000)
    //     ["scannerResearch(java.util.function.UnaryOperator)"]
    //     (b => b
    //         .researchStack("gtceu:distillation_tower")
    //         .duration(900)
    //         .EUt(1920)
    //     )
    
    gt.deionization('deionized_water')
        .itemInputs('astrogreg:filter_cartridge')
        .itemInputs('64x gtceu:salt_dust')
        .perTick(true)
        .inputFluids('minecraft:water 2')
        .outputFluids('astrogreg:deionized_water 1')
        .perTick(false)
        .itemOutputs('astrogreg:empty_filter_cartridge')
        .duration(5000)
        .EUt(6000)
    //#endregion



    //#region S-DVB bead line
    gt.chemical_reactor('diethylbenzene')
        .inputFluids('gtceu:ethylbenzene')
        .inputFluids('gtceu:ethanol')
        .outputFluids('astrogreg:diethylbenzene')
        .outputFluids('minecraft:water')
        .circuit(1)
        .duration(200)
        .EUt(480)

    gt.chemical_reactor('divinylbenzene')
        .notConsumable('gtceu:cerium_dust')
        .inputFluids('astrogreg:diethylbenzene')
        .outputFluids('gtceu:hydrogen 4000')
        .itemOutputs('astrogreg:divinylbenzene_dust')
        .duration(200)
        .EUt(1920)

    gt.mixer('resin_beads')
        .itemInputs('4x astrogreg:divinylbenzene_dust')
        .inputFluids('minecraft:water')
        .inputFluids('gtceu:styrene 250')
        .itemOutputs('astrogreg:resin_beads')
        .duration(100)
        .EUt(480)
        .addMaterialInfo(true)
    //#endregion



    //#region water integration
    gt.electrolyzer('deionized_water')
        .inputFluids('astrogreg:deionized_water')
        .outputFluids('gtceu:hydrogen 2000')
        .outputFluids('gtceu:oxygen')
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .duration(1500)
        .EUt(30)

    gt.brewery('bacteria_from_deionized')
        .inputFluids('astrogreg:deionized_water')
        .itemInputs('4x gtceu:bio_chaff')
        .outputFluids('gtceu:bacteria')
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .duration(300)
        .EUt(480)

    gt.autoclave('agar_from_deionized')
        .inputFluids('astrogreg:deionized_water')
        .itemInputs('gtceu:gelatin_dust')
        .itemOutputs('gtceu:agar_dust')
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
        .duration(600)
        .EUt(480)

    gt.electrolyzer('decomp_deionized')
        .inputFluids('astrogreg:deionized_water')
        .outputFluids('gtceu:hydrogen 2000')
        .outputFluids('gtceu:oxygen')
        .duration(750)
        .EUt(30)

    gt.autoclave('silicon_dioxide_deionized_quartzite_gem')
        .itemInputs('gtceu:silicon_dioxide_dust')
        .inputFluids('astrogreg:deionized_water 250')
        .chancedOutput('gtceu:quartzite_gem', 7500, 0)
        .duration(600)
        .EUt(24)

    gt.autoclave('clay_deionized_water')
        .itemInputs('gtceu:clay_dust')
        .inputFluids('astrogreg:deionized_water 250')
        .itemOutputs('minecraft:clay_ball')
        .duration(600)
        .EUt(24)

    gt.autoclave('energium_dust_to_gem_deionized')
        .itemInputs('9x gtceu:energium_dust')
        .inputFluids('astrogreg:deionized_water')
        .itemOutputs('gtceu:energy_crystal')
        .duration(600)
        .EUt(256)

    gt.autoclave('lapotron_dust_to_gem_deionized')
        .itemInputs('15x gtceu:lapotron_dust')
        .inputFluids('astrogreg:deionized_water')
        .itemOutputs('gtceu:lapotron_gem')
        .duration(600)
        .EUt(320)

    gt.fluid_heater('deionized_steam')
        .inputFluids('astrogreg:deionized_water 6')
        .outputFluids('gtceu:steam 960')
        .circuit(1)
        .duration(30)
        .EUt(30)

    gt.mixer('deionized_drilling_fluid')
        .itemInputs('gtceu:stone_dust')
        .inputFluids('gtceu:lubricant 20')
        .inputFluids('astrogreg:deionized_water 4980')
        .outputFluids('gtceu:drilling_fluid 5000')
        .duration(24)
        .EUt(16)
        
    gt.mixer('deionized_pcb_coolant')
        .inputFluids('gtceu:polychlorinated_biphenyl 750')
        .inputFluids('astrogreg:deionized_water 250')
        .outputFluids('gtceu:pcb_coolant')
        .duration(100)
        .EUt(480)
    //#endregion
})