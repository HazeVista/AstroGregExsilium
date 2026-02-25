ServerEvents.recipes(event => {

    const gt = event.recipes.gtceu

    //#region multiblock controllers
    gt.shaped('astrogreg:steam_blast_furnace', [
        'DBD',
        'BCB',
        'ABA'
    ], {
        A: '#gtceu:circuits/lv',
        B: 'gtceu:bronze_plate',
        C: 'gtceu:primitive_blast_furnace',
        D: 'gtceu:bronze_screw'
    })
    .addMaterialInfo()

    gt.shaped('astrogreg:large_steam_compressor', [
        'CDC',
        'BAB',
        'CDC'
    ], {
        A: 'gtceu:lp_steam_compressor',
        B: 'gtceu:bronze_normal_fluid_pipe',
        C: 'gtceu:steam_machine_casing',
        D: 'gtceu:wrought_iron_gear'
    })
    .addMaterialInfo()

    gt.shaped('astrogreg:large_steam_compressor', [
        'CDC',
        'BAB',
        'CDC'
    ], {
        A: 'gtceu:hp_steam_compressor',
        B: 'gtceu:bronze_normal_fluid_pipe',
        C: 'gtceu:steam_machine_casing',
        D: 'gtceu:wrought_iron_gear'
    })

    gt.shaped('astrogreg:large_steam_centrifuge', [
        'BAB',
        'ACA',
        'BAB'
    ], {
        A: 'gtceu:wrought_iron_gear',
        B: 'gtceu:industrial_steam_casing',
        C: 'astrogreg:lp_steam_centrifuge'
    })
    .addMaterialInfo()

    gt.shaped('astrogreg:large_steam_centrifuge', [
        'BAB',
        'ACA',
        'BAB'
    ], {
        A: 'gtceu:wrought_iron_gear',
        B: 'gtceu:industrial_steam_casing',
        C: 'astrogreg:hp_steam_centrifuge'
    })
    
    gt.shaped('astrogreg:large_steam_ore_washer', [
        'CDC',
        'ABA',
        'CDC'
    ], {
        A: 'gtceu:bronze_pipe_casing',
        B: 'gtceu:industrial_steam_casing',
        C: 'gtceu:bronze_rotor',
        D: 'gtceu:tempered_glass'
    })
    .addMaterialInfo()

    gt.shaped('astrogreg:large_steam_macerator', [
        'ABA',
        'ACA',
        'ABA'
    ], {
        A: 'gtceu:bronze_machine_casing',
        B: 'gtceu:potin_gear',
        C: 'gtceu:lp_steam_macerator'
    })
    .addMaterialInfo()

    gt.shaped('astrogreg:large_steam_macerator', [
        'ABA',
        'ACA',
        'ABA'
    ], {
        A: 'gtceu:bronze_machine_casing',
        B: 'gtceu:potin_gear',
        C: 'gtceu:hp_steam_macerator'
    })

    gt.shaped('astrogreg:kinetic_steam_engine', [
        'BCB',
        'DAD',
        'BCB'
    ], {
        A: 'gtceu:bronze_machine_casing',
        B: 'gtceu:bronze_normal_fluid_pipe',
        C: 'gtceu:bronze_rotor',
        D: 'gtceu:bronze_gear'
    })
    .addMaterialInfo()
    //#endregion



    //#region singleblocks
    gt.shaped('astrogreg:lp_steam_centrifuge', [
        'DCD',
        'CAC',
        'BCB'
    ], {
        A: 'gtceu:bronze_machine_casing',
        B: '#forge:pistons',    
        C: 'gtceu:bronze_small_fluid_pipe',
        D: 'gtceu:wrought_iron_gear'
    })
    .addMaterialInfo()

    gt.shaped('astrogreg:hp_steam_centrifuge', [
        'DCD',
        'CAC',
        'BCB'
    ], {
        A: 'astrogreg:lp_steam_centrifuge',
        B: 'gtceu:steel_plate',
        C: 'gtceu:tin_alloy_small_fluid_pipe',
        D: 'gtceu:wrought_iron_gear'
    })
    .addMaterialInfo()

    gt.shaped('astrogreg:lp_steam_mixer', [
        'ABA',
        'ACA',
        'CDC'
    ], {
        A: '#c:glass_blocks',
        B: 'gtceu:bronze_rotor',
        C: 'gtceu:bronze_small_fluid_pipe',
        D: 'gtceu:bronze_machine_casing'
    })
    .addMaterialInfo()

    gt.shaped('astrogreg:hp_steam_mixer', [
        'ABA',
        'ACA',
        'CDC'
    ], {
        A: 'gtceu:tempered_glass',
        B: 'gtceu:steel_rotor',
        C: 'gtceu:tin_alloy_small_fluid_pipe',
        D: 'astrogreg:lp_steam_mixer'
    })
    .addMaterialInfo()
    //#endregion

    //#region functional casings
    gt.shaped('2x astrogreg:bronze_crushing_wheels', [
        'ADA',
        'BCB',
        'AEA'
    ], {
        A: 'gtceu:small_iron_gear',
        B: 'gtceu:wrought_iron_gear',
        C: 'gtceu:industrial_steam_casing',
        D: '#forge:tools/hammers',
        E: '#forge:tools/wrenches'
    })

    gt.assembler('bronze_crushing_wheels')
        .itemInputs('4x gtceu:small_iron_gear', '2x gtceu:wrought_iron_gear', 'gtceu:industrial_steam_casing')
        .itemOutputs('2x astrogreg:bronze_crushing_wheels')
        .duration(16)
        .EUt(50)
        .circuit(4)
        .addMaterialInfo(true)
    //#endregion
})