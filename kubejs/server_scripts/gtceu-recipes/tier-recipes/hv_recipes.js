ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    //#region misc
    gt.assembler('infinite_water_cover')
        .itemInputs('gtceu:hv_electric_pump', 'botania:water_rune', '#gtceu:circuits/hv')
        .inputFluids('gtceu:soldering_alloy 72')
        .itemOutputs('gtceu:infinite_water_cover')
        .duration(100)
        .EUt(480)
    //#endregion 



    //#region cleanroom
    gt.circuit_assembler('data_stick_tin')
        .itemInputs('gtceu:plastic_printed_circuit_board', '2x gtceu:cpu_chip', '32x gtceu:nand_memory_chip', 
            '4x gtceu:ram_chip', '16x gtceu:fine_electrum_wire', '4x gtceu:polyethylene_plate')
        .inputFluids('gtceu:tin 288')
        .itemOutputs('gtceu:data_stick')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(400)
        .EUt(360)

    gt.circuit_assembler('data_stick_soldering_alloy')
        .itemInputs('gtceu:plastic_printed_circuit_board', '2x gtceu:cpu_chip', '32x gtceu:nand_memory_chip', 
            '4x gtceu:ram_chip', '16x gtceu:fine_electrum_wire', '4x gtceu:polyethylene_plate')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('gtceu:data_stick')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(400)
        .EUt(360)
    //#endregion

    //#region industrial multiblocks
    // id (gets added to astrogreg:industrial_), base material, machine part 1, machine part 2
    const industrialMultis = [
        ['autoclave', 'styrene_butadiene_rubber', 'electric_pump', 'electric_pump'],
        ['bender', 'ultimet', 'electric_piston', 'electric_piston'],
        ['centrifuge', 'red_steel', 'electric_motor', 'electric_motor'],
        ['chemical_bath', 'polyvinyl_chloride', 'electric_pump', 'electric_pump'],
        ['extruder', 'black_steel', 'electric_piston', 'electric_piston'],
        ['fluid_solidifier', 'silicone_rubber', 'electric_pump', 'electric_pump'],
        ['lathe', 'rose_gold', 'electric_motor', 'electric_piston'],
        ['mixer', 'vanadium_steel', 'electric_pump', 'electric_motor'],
        ['sifter', 'bismuth_bronze', 'electric_piston', 'electric_piston'],
        ['wiremill', 'cobalt_brass', 'electric_motor', 'electric_motor'],
    ]

    industrialMultis.forEach(([id, material, part_1, part_2]) => {
        gt.shaped(`astrogreg:industrial_${id}`, [
            'EAE',
            'CBD',
            'EAE'
        ], {
            A: '#gtceu:circuits/ev',
            B: `gtceu:${material}_frame`,
            C: `gtceu:hv_${part_1}`,
            D: `gtceu:hv_${part_2}`,
            E: `gtceu:${material}_plate`
        }).addMaterialInfo()
    })

    gt.shaped('astrogreg:industrial_macerator', [
        'EAE',
        'CBD',
        'EAE'        
    ], {
        A: '#gtceu:circuits/ev',
        B: 'gtceu:stainless_steel_frame',
        C: 'gtceu:hv_electric_motor',
        D: 'gtceu:hv_electric_piston',
        E: 'gtceu:carbon_fiber_plate'
    })
    .addMaterialInfo()

    gt.shaped('astrogreg:industrial_electrolyzer', [
        'EAE',
        'CBD',
        'EAE'         
    ], {
        A: '#gtceu:circuits/ev',
        B: 'gtceu:blue_steel_frame',
        C: 'gtceu:kanthal_single_cable',
        D: 'gtceu:kanthal_single_cable',
        E: 'gtceu:blue_steel_plate'
    })
    .addMaterialInfo()
    //#endregion

})